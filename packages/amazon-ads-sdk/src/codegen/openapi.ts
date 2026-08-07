import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { parse } from "yaml";

export interface TypeRef {
  kind: "primitive" | "ref" | "array" | "object" | "union";
  name?: string;
  items?: TypeRef;
  fields?: FieldSpec[];
  variants?: TypeRef[];
  required?: boolean;
  enumValues?: (string | number)[];
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
  enumValues?: (string | number)[];
}

export interface ParamSpec {
  name: string;
  wireName: string;
  type: TypeRef;
  required: boolean;
  description?: string;
  location: "path" | "query" | "body";
}

export interface SecuritySpec {
  scheme: string;
  scopes: string[];
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
  security: SecuritySpec[];
}

export interface OpenApiSpec {
  servers: string[];
  endpoints: EndpointSpec[];
  schemas: SchemaSpec[];
}

const PRIMITIVES = new Set(["string", "number", "integer", "boolean"]);

function primName(schema: Record<string, unknown>): string {
  if (schema.format === "date-time" || schema.format === "date") return "string";
  if (schema.type === "integer") return "number";
  return typeof schema.type === "string" ? schema.type : "unknown";
}

/** Sanitize a schema name into a valid TS identifier: `Pinterest.Lib.Foo` → `Pinterest_Lib_Foo`. */
function sanitizeName(name: string): string {
  const sanitized = name.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return sanitized.length > 0 ? sanitized : "Unknown";
}

function refTarget(ref: string): string {
  const target = ref.replace(/^#\/components\/schemas\//, "").replaceAll("~1", "/");
  return sanitizeName(target);
}

export async function loadOpenApiSpec(
  vendorDir: string,
  specFile = "pinterest-api-v5.openapi.yaml",
): Promise<OpenApiSpec> {
  const raw = await readFile(join(vendorDir, `${specFile}`), "utf8");
  const doc = parse(raw) as Record<string, unknown>;
  const components = (doc.components ?? {}) as Record<string, unknown>;
  const schemas = (components.schemas ?? {}) as Record<string, unknown>;
  const parameterDefs = (components.parameters ?? {}) as Record<string, unknown>;

  const cache = new Map<string, TypeRef>();
  const enumCache = new Map<string, (string | number)[]>();

  function deref(node: unknown, seen: Set<string> = new Set()): Record<string, unknown> {
    if (typeof node !== "object" || node === null) return {};
    const schema = node as Record<string, unknown>;
    if (typeof schema.$ref !== "string") return schema;
    const target = refTarget(schema.$ref);
    if (seen.has(target)) return {};
    const resolved = deref(schemas[target] as Record<string, unknown>, new Set([...seen, target]));
    return { ...resolved, ...(schema.description ? { description: schema.description } : {}) };
  }

  function toTypeRef(node: unknown, required = true): TypeRef {
    if (typeof node !== "object" || node === null) {
      return { kind: "primitive", name: "unknown", required };
    }
    const schema = deref(node);
    if (typeof schema.$ref === "string") {
      return { kind: "ref", name: refTarget(schema.$ref), required };
    }
    if (Array.isArray(schema.enum)) {
      const values = schema.enum as (string | number)[];
      const allStrings = values.every((v) => typeof v === "string");
      return {
        kind: "primitive",
        name: allStrings
          ? "string"
          : values.every((v) => typeof v === "number")
            ? "number"
            : "string",
        required,
        enumValues: values,
      };
    }
    if (Array.isArray(schema.oneOf) || Array.isArray(schema.anyOf)) {
      const variants = (schema.oneOf ?? schema.anyOf) as unknown[];
      return {
        kind: "union",
        required,
        variants: variants.map((variant) => toTypeRef(variant, false)),
      };
    }
    if (Array.isArray(schema.allOf)) {
      const merged: Record<string, unknown> = {
        ...((schema.properties ?? {}) as Record<string, unknown>),
      };
      for (const part of schema.allOf) {
        const resolved = deref(part);
        if (resolved.properties) {
          Object.assign(merged, resolved.properties);
        }
      }
      const requiredList = Array.isArray(schema.required) ? (schema.required as string[]) : [];
      return {
        kind: "object",
        required,
        fields: Object.entries(merged).map(([name, propSchema]) => {
          const resolved = deref(propSchema);
          return {
            name,
            type: toTypeRef(propSchema, requiredList.includes(name)),
            required: requiredList.includes(name),
            description:
              typeof resolved.description === "string" ? resolved.description : undefined,
          };
        }),
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
        fields: Object.entries(props).map(([name, propSchema]) => {
          const resolved = deref(propSchema);
          return {
            name,
            type: toTypeRef(propSchema, requiredList.includes(name)),
            required: requiredList.includes(name),
            description:
              typeof resolved.description === "string" ? resolved.description : undefined,
          };
        }),
      };
    }
    return { kind: "primitive", name: primName(schema), required };
  }

  function schemaTypeRef(name: string): TypeRef {
    const key = sanitizeName(name);
    const cached = cache.get(key);
    if (cached) return cached;
    const marker: TypeRef = { kind: "object", name: key, fields: [] };
    cache.set(key, marker);
    const schema = schemas[name] as Record<string, unknown> | undefined;
    if (!schema) {
      const fallback: TypeRef = { kind: "primitive", name: "unknown" };
      cache.set(key, fallback);
      return fallback;
    }
    const resolved = deref(schema);
    if (Array.isArray(resolved.enum)) {
      enumCache.set(key, resolved.enum as (string | number)[]);
    }
    const type = toTypeRef(schema);
    cache.set(key, type);
    return type;
  }

  const endpoints: EndpointSpec[] = [];
  const operationIdCounts = new Map<string, number>();
  const paths = (doc.paths ?? {}) as Record<string, unknown>;
  for (const [path, methods] of Object.entries(paths)) {
    if (typeof methods !== "object" || methods === null) continue;
    for (const [method, opNode] of Object.entries(methods)) {
      const op = opNode as Record<string, unknown>;
      if (typeof op !== "object" || op === null) continue;
      const httpMethod = method.toUpperCase();
      if (!["GET", "POST", "PUT", "PATCH", "DELETE"].includes(httpMethod)) continue;

      const rawOperationId =
        typeof op.operationId === "string"
          ? op.operationId
          : `${httpMethod.toLowerCase()}_${path.replace(/[^a-zA-Z0-9]+/g, "_")}`;
      // Dedupe operationIds globally so generated type names stay unique.
      const count = (operationIdCounts.get(rawOperationId) ?? 0) + 1;
      operationIdCounts.set(rawOperationId, count);
      const operationId = count === 1 ? rawOperationId : `${rawOperationId}_${count}`;
      const tag = Array.isArray(op.tags) && typeof op.tags[0] === "string" ? op.tags[0] : "general";

      // Security: prefer the first OAuth2 scheme with scopes
      const security: SecuritySpec[] = [];
      for (const secNode of Array.isArray(op.security) ? (op.security as unknown[]) : []) {
        const sec = secNode as Record<string, unknown>;
        if (typeof sec !== "object" || sec === null) continue;
        for (const [scheme, scopes] of Object.entries(sec)) {
          security.push({
            scheme,
            scopes: Array.isArray(scopes) ? scopes.map(String) : [],
          });
        }
      }

      const pathParams: ParamSpec[] = [];
      const queryParams: ParamSpec[] = [];
      const rawParams = Array.isArray(op.parameters) ? (op.parameters as unknown[]) : [];
      for (const paramNode of rawParams) {
        let param: Record<string, unknown>;
        if (
          typeof paramNode === "object" &&
          paramNode !== null &&
          typeof (paramNode as Record<string, unknown>).$ref === "string"
        ) {
          const ref = (paramNode as Record<string, unknown>).$ref as string;
          const key = ref.replace(/^#\/components\/parameters\//, "");
          param = (parameterDefs[key] as Record<string, unknown>) ?? {};
        } else {
          param = paramNode as Record<string, unknown>;
        }
        if (typeof param !== "object" || param === null) continue;
        const name = typeof param.name === "string" ? param.name : "";
        const location = typeof param.in === "string" ? param.in : "";
        if (!name || (location !== "path" && location !== "query")) continue;
        const spec: ParamSpec = {
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

      // Path params not declared in `parameters` (spec hygiene)
      const urlPathParams = [...path.matchAll(/\{([^}]+)\}/g)]
        .map((match) => match[1] ?? "")
        .filter(Boolean);
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

      const bodyParams: ParamSpec[] = [];
      const requestBody = op.requestBody as Record<string, unknown> | undefined;
      if (requestBody && typeof requestBody === "object") {
        const content = (requestBody.content ?? {}) as Record<string, unknown>;
        const json =
          (content["application/json"] as Record<string, unknown> | undefined) ??
          (Object.values(content).find(
            (entry) =>
              typeof entry === "object" &&
              entry !== null &&
              Object.keys(entry as Record<string, unknown>).some((k) => k.includes("schema")),
          ) as Record<string, unknown> | undefined);
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

      let responseData: TypeRef | null = null;
      let isList = false;
      const responses = (op.responses ?? {}) as Record<string, unknown>;
      for (const status of ["200", "201", "202"]) {
        const response = responses[status] as Record<string, unknown> | undefined;
        if (!response) continue;
        const content = (response.content ?? {}) as Record<string, unknown>;
        const json =
          (content["application/json"] as Record<string, unknown> | undefined) ??
          (Object.values(content).find(
            (entry) =>
              typeof entry === "object" &&
              entry !== null &&
              Object.keys(entry as Record<string, unknown>).some((k) => k.includes("schema")),
          ) as Record<string, unknown> | undefined);
        if (!json) continue;
        const schema = json.schema as Record<string, unknown> | undefined;
        if (!schema) continue;
        const dataType = toTypeRef(schema);
        responseData = dataType;
        // List responses carry `items` + optional `bookmark`
        const resolved = deref(schema);
        if (dataType.kind === "array") {
          isList = true;
        } else if (
          dataType.kind === "object" &&
          (dataType.fields ?? []).some((f) => f.name === "items")
        ) {
          isList = true;
        }
        void resolved;
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
        security,
      });
    }
  }

  const schemaSpecs: SchemaSpec[] = Object.keys(schemas).map((name) => {
    const schema = schemas[name] as Record<string, unknown> | undefined;
    const resolved = schema ? deref(schema) : {};
    return {
      name: sanitizeName(name),
      type: schemaTypeRef(name),
      description: typeof resolved.description === "string" ? resolved.description : undefined,
      enumValues: enumCache.get(name),
    };
  });

  const servers = Array.isArray(doc.servers)
    ? (doc.servers as Record<string, unknown>[])
        .map((server) => String(server.url ?? ""))
        .filter(Boolean)
    : [];

  return {
    servers,
    endpoints: endpoints.sort((a, b) => a.path.localeCompare(b.path)),
    schemas: schemaSpecs.sort((a, b) => a.name.localeCompare(b.name)),
  };
}

export function camel(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part, index) => {
      const p = part.charAt(0).toUpperCase() + part.slice(1);
      return index === 0 ? p.charAt(0).toLowerCase() + p.slice(1) : p;
    })
    .join("");
}

export function pascal(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
