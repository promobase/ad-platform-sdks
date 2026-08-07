import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { parse } from "yaml";

export interface TypeRef {
  kind: "primitive" | "ref" | "array" | "object";
  name?: string; // primitive name or ref target
  items?: TypeRef;
  fields?: FieldSpec[];
  required?: boolean;
}

export interface FieldSpec {
  name: string;
  type: TypeRef;
  required: boolean;
  description?: string;
}

export interface SchemaSpec {
  name: string;
  type: TypeRef;
  description?: string;
}

export interface ParamSpec {
  name: string;
  wireName: string;
  type: TypeRef;
  required: boolean;
  description?: string;
  location: "path" | "query" | "body";
}

export interface EndpointSpec {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  operationId: string;
  tag: string;
  summary: string;
  description?: string;
  pathParams: ParamSpec[];
  queryParams: ParamSpec[];
  bodyParams: ParamSpec[];
  responseData: TypeRef | null;
  isList: boolean;
}

const PRIMITIVES = new Set(["string", "number", "integer", "boolean"]);

function primName(schema: Record<string, unknown>): string {
  if (schema.format === "date-time" || schema.format === "date") return "string";
  if (schema.type === "integer") return "number";
  return typeof schema.type === "string" ? schema.type : "unknown";
}

/** Resolve a JSON pointer against the parsed OpenAPI document. */
function deref(doc: Record<string, unknown>, ref: string): Record<string, unknown> {
  const parts = ref
    .replace(/^#\//, "")
    .split("/")
    .map((part) => part.replaceAll("~1", "/").replaceAll("~0", "~"));
  let node: unknown = doc;
  for (const part of parts) {
    if (typeof node !== "object" || node === null) throw new Error(`Bad $ref: ${ref}`);
    node = (node as Record<string, unknown>)[part];
  }
  if (typeof node !== "object" || node === null) throw new Error(`Unresolved $ref: ${ref}`);
  return node as Record<string, unknown>;
}

function refTarget(ref: string): string {
  return ref.replace(/^#\/components\/schemas\//, "").replaceAll("~1", "/");
}

export interface OpenApiSpec {
  servers: string[];
  endpoints: EndpointSpec[];
  schemas: SchemaSpec[];
  operationIdToName: Map<string, string>;
}

export async function loadOpenApiSpec(vendorDir: string): Promise<OpenApiSpec> {
  const raw = await readFile(join(vendorDir, "reddit-ads-api-v3.openapi.yaml"), "utf8");
  const doc = parse(raw) as Record<string, unknown>;
  const components = (doc.components ?? {}) as Record<string, unknown>;
  const schemas = (components.schemas ?? {}) as Record<string, unknown>;

  const cache = new Map<string, TypeRef>();

  /** Convert an OpenAPI schema node into a TypeRef (resolving refs, lazily cached). */
  function toTypeRef(node: unknown, required = true): TypeRef {
    if (typeof node !== "object" || node === null) {
      return { kind: "primitive", name: "unknown", required };
    }
    const schema = node as Record<string, unknown>;
    if (typeof schema.$ref === "string") {
      const target = refTarget(schema.$ref);
      return { kind: "ref", name: target, required };
    }
    if (Array.isArray(schema.enum)) {
      return {
        kind: "primitive",
        name: (schema.enum as unknown[]).every((value) => typeof value === "number")
          ? "number"
          : "string",
        required,
      };
    }
    if (schema.type === "array" || schema.items !== undefined) {
      return { kind: "array", items: toTypeRef(schema.items ?? { type: "unknown" }), required };
    }
    if (schema.type === "object" || schema.properties !== undefined) {
      const props = (schema.properties ?? {}) as Record<string, unknown>;
      const requiredList = Array.isArray(schema.required) ? (schema.required as string[]) : [];
      return {
        kind: "object",
        required,
        fields: Object.entries(props).map(([name, propSchema]) => ({
          name,
          type: toTypeRef(propSchema, requiredList.includes(name)),
          required: requiredList.includes(name),
          description:
            typeof propSchema === "object" && propSchema !== null
              ? typeof (propSchema as Record<string, unknown>).description === "string"
                ? ((propSchema as Record<string, unknown>).description as string)
                : undefined
              : undefined,
        })),
      };
    }
    return { kind: "primitive", name: primName(schema), required };
  }

  /** Schema by name, with $ref cycles resolved lazily. */
  function schemaTypeRef(name: string): TypeRef {
    const cached = cache.get(name);
    if (cached) return cached;
    const marker: TypeRef = { kind: "object", name, fields: [] };
    cache.set(name, marker);
    const schema = schemas[name] as Record<string, unknown> | undefined;
    if (!schema) {
      const fallback: TypeRef = { kind: "primitive", name: "unknown" };
      cache.set(name, fallback);
      return fallback;
    }
    const resolved = toTypeRef(schema);
    cache.set(name, resolved);
    return resolved;
  }

  const endpoints: EndpointSpec[] = [];
  const paths = (doc.paths ?? {}) as Record<string, unknown>;
  for (const [path, methods] of Object.entries(paths)) {
    if (typeof methods !== "object" || methods === null) continue;
    for (const [method, opNode] of Object.entries(methods)) {
      const op = opNode as Record<string, unknown>;
      if (typeof op !== "object" || op === null) continue;
      const httpMethod = method.toUpperCase();
      if (!["GET", "POST", "PUT", "PATCH", "DELETE"].includes(httpMethod)) continue;

      const operationId =
        typeof op.operationId === "string"
          ? op.operationId
          : `${httpMethod.toLowerCase()}${path.replace(/[^a-zA-Z0-9]+/g, "-")}`;
      const tag = Array.isArray(op.tags) && typeof op.tags[0] === "string" ? op.tags[0] : "General";

      const pathParams: ParamSpec[] = [];
      const queryParams: ParamSpec[] = [];
      const rawParams = Array.isArray(op.parameters) ? (op.parameters as unknown[]) : [];
      for (const paramNode of rawParams) {
        const param = paramNode as Record<string, unknown>;
        if (typeof param !== "object" || param === null) continue;
        const name = typeof param.name === "string" ? param.name : "";
        const location = typeof param.in === "string" ? param.in : "";
        if (!name || (location !== "path" && location !== "query")) continue;
        const spec = {
          name: camel(name),
          wireName: name,
          type: toTypeRef(param.schema ?? { type: "string" }),
          required: param.required === true || location === "path",
          description: typeof param.description === "string" ? param.description : undefined,
          location: location as "path" | "query",
        };
        if (location === "path") pathParams.push(spec);
        else queryParams.push(spec);
      }

      // Path params: some specs omit `parameters` entries, so derive them from
      // the URL template itself and merge with any declared entries.
      const urlPathParams = new Set(
        [...path.matchAll(/\{([^}]+)\}/g)].map((match) => match[1] ?? "").filter(Boolean),
      );
      const declaredPathNames = new Set(pathParams.map((p) => p.wireName));
      for (const name of urlPathParams) {
        if (!declaredPathNames.has(name)) {
          pathParams.push({
            name: camel(name),
            wireName: name,
            type: { kind: "primitive", name: "string" },
            required: true,
            location: "path",
          });
        }
      }

      // Body schema from requestBody
      const bodyParams: ParamSpec[] = [];
      const requestBody = op.requestBody as Record<string, unknown> | undefined;
      if (requestBody && typeof requestBody === "object") {
        const content = (requestBody.content ?? {}) as Record<string, unknown>;
        const json = content["application/json"] as Record<string, unknown> | undefined;
        if (json && typeof json === "object") {
          const schema = json.schema as Record<string, unknown> | undefined;
          if (schema && typeof schema === "object") {
            bodyParams.push({
              name: "body",
              wireName: "body",
              type: toTypeRef(schema),
              required: true,
              location: "body",
            });
          }
        }
      }

      // Response data payload from ApiResponse_{X} envelope
      let responseData: TypeRef | null = null;
      let isList = false;
      const responses = (op.responses ?? {}) as Record<string, unknown>;
      for (const status of ["200", "201", "202"]) {
        const response = responses[status] as Record<string, unknown> | undefined;
        if (!response) continue;
        const content = (response.content ?? {}) as Record<string, unknown>;
        const json = content["application/json"] as Record<string, unknown> | undefined;
        if (!json) continue;
        const schema = json.schema as Record<string, unknown> | undefined;
        if (!schema) continue;
        let dataType: TypeRef;
        if (
          typeof schema.$ref === "string" &&
          schema.$ref.startsWith("#/components/schemas/ApiResponse_")
        ) {
          const envelopeSchema = deref(doc, schema.$ref);
          const props = (envelopeSchema.properties ?? {}) as Record<string, unknown>;
          const dataProp = props.data;
          if (dataProp && typeof dataProp === "object") {
            dataType = toTypeRef(dataProp);
            isList = dataType.kind === "array";
          } else {
            dataType = { kind: "primitive", name: "unknown" };
          }
        } else {
          dataType = toTypeRef(schema);
          isList = dataType.kind === "array";
        }
        responseData = dataType;
        break;
      }

      endpoints.push({
        method: httpMethod as EndpointSpec["method"],
        path,
        operationId,
        tag,
        summary: typeof op.summary === "string" ? op.summary : operationId,
        description: typeof op.description === "string" ? op.description : undefined,
        pathParams,
        queryParams,
        bodyParams,
        responseData,
        isList,
      });
    }
  }

  const schemaSpecs: SchemaSpec[] = Object.keys(schemas).map((name) => ({
    name,
    type: schemaTypeRef(name),
    description:
      typeof schemas[name] === "object" && schemas[name] !== null
        ? typeof (schemas[name] as Record<string, unknown>).description === "string"
          ? ((schemas[name] as Record<string, unknown>).description as string)
          : undefined
        : undefined,
  }));

  const servers = Array.isArray(doc.servers)
    ? (doc.servers as Record<string, unknown>[])
        .map((server) => String(server.url ?? ""))
        .filter(Boolean)
    : [];

  return {
    servers,
    endpoints: endpoints.sort((a, b) => a.path.localeCompare(b.path)),
    schemas: schemaSpecs.sort((a, b) => a.name.localeCompare(b.name)),
    operationIdToName: new Map(endpoints.map((e) => [e.operationId, e.operationId])),
  };
}

function camel(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part, index) => {
      const p = part.charAt(0).toUpperCase() + part.slice(1);
      return index === 0 ? p.charAt(0).toLowerCase() + p.slice(1) : p;
    })
    .join("");
}
