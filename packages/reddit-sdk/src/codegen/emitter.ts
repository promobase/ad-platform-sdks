import type { EndpointSpec, ParamSpec, SchemaSpec, TypeRef } from "./openapi.ts";

// ─── Naming helpers ──────────────────────────────────────────────────

/** "Custom Audiences" → "custom-audiences" */
export function tagToFileName(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pascal(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function camel(value: string): string {
  const p = pascal(value);
  return p.charAt(0).toLowerCase() + p.slice(1);
}

/** Derive a method name from the operationId: `listAccounts`, `getCampaign`, `createCampaign`. */
export function deriveMethodName(op: EndpointSpec): string {
  const { method, operationId } = op;
  const segments = operationId.split(/(?=[A-Z])/).map((segment) => segment.toLowerCase());
  const first = segments[0] ?? "";
  const resource = segments.slice(1).join("");
  switch (first) {
    case "list":
    case "get":
      return method === "GET" && op.isList ? `list${pascal(resource)}` : `get${pascal(resource)}`;
    case "create":
    case "add":
      return `create${pascal(resource)}`;
    case "update":
    case "patch":
      return `update${pascal(resource)}`;
    case "delete":
    case "remove":
      return `delete${pascal(resource)}`;
    default:
      return camel(operationId);
  }
}

// ─── Type emission ───────────────────────────────────────────────────

/** Render a TypeRef as TypeScript, emitting inline object types for anonymous shapes. */
export function typeToTs(type: TypeRef, indent = 0): string {
  switch (type.kind) {
    case "ref":
      return type.name ?? "unknown";
    case "array":
      return `${typeToTs(type.items ?? { kind: "primitive", name: "unknown" }, indent)}[]`;
    case "primitive": {
      switch (type.name) {
        case "number":
        case "integer":
          return "number";
        case "boolean":
          return "boolean";
        case "null":
          return "null";
        default:
          return "string";
      }
    }
    case "object": {
      const pad = "  ".repeat(indent + 1);
      const fields = (type.fields ?? [])
        .map((field) => {
          const optional = field.required ? "" : "?";
          return `${pad}${safeProp(field.name)}${optional}: ${typeToTs(field.type, indent + 1)};`;
        })
        .join("\n");
      return `{\n${fields}\n${"  ".repeat(indent)}}`;
    }
  }
}

function safeProp(name: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `"${name}"`;
}

/** Collect all schema names referenced by a type (for import lists). */
export function referencedSchemas(type: TypeRef): string[] {
  const names = new Set<string>();
  const visit = (t: TypeRef) => {
    if (t.kind === "ref" && t.name) names.add(t.name);
    if (t.kind === "array" && t.items) visit(t.items);
    if (t.kind === "object") for (const field of t.fields ?? []) visit(field.type);
  };
  visit(type);
  return [...names];
}

// ─── Schema → interface emission ─────────────────────────────────────

export function emitSchemaInterfaces(schemas: SchemaSpec[]): string {
  const lines: string[] = ["// Auto-generated types for the Reddit Ads API v3 — do not edit", ""];
  for (const schema of schemas) {
    const type = schema.type;
    if (type.kind === "object" && (type.fields?.length ?? 0) > 0) {
      lines.push(`export interface ${schema.name} {`);
      const seen = new Set<string>();
      for (const field of type.fields ?? []) {
        if (seen.has(field.name)) continue;
        seen.add(field.name);
        const optional = field.required ? "" : "?";
        const doc = field.description
          ? `\n  /** ${field.description.replaceAll("*/", "* /")} */`
          : "";
        lines.push(`${doc}\n  ${safeProp(field.name)}${optional}: ${typeToTs(field.type, 1)};`);
      }
      lines.push("}");
      lines.push("");
    } else if (type.kind === "object") {
      lines.push(`export type ${schema.name} = Record<string, unknown>;`);
      lines.push("");
    } else if (type.kind === "primitive" && type.name !== "unknown") {
      lines.push(`export type ${schema.name} = ${typeToTs(type)};`);
      lines.push("");
    } else if (type.kind === "array") {
      lines.push(`export type ${schema.name} = ${typeToTs(type)};`);
      lines.push("");
    }
  }
  return lines.join("\n").trimEnd() + "\n";
}

// ─── Endpoint client emission ────────────────────────────────────────

export interface TagOutput {
  fileName: string;
  tag: string;
  clientContent: string;
}

function paramsInterfaceName(op: EndpointSpec): string {
  return `${pascal(deriveMethodName(op))}Params`;
}

/** Resolve a ref to an object type via the schema table (for body flattening). */
function resolveRef(type: TypeRef, schemas: SchemaSpec[]): TypeRef {
  if (type.kind !== "ref" || !type.name) return type;
  const schema = schemas.find((s) => s.name === type.name);
  return schema?.type ?? type;
}

function emitParamsInterface(op: EndpointSpec, schemas: SchemaSpec[]): string {
  const name = paramsInterfaceName(op);
  const fields: ParamSpec[] = [...op.pathParams, ...op.queryParams];
  const bodyType = op.bodyParams[0] ? resolveRef(op.bodyParams[0].type, schemas) : null;
  if (op.bodyParams.length > 0 && bodyType?.kind === "object") {
    // Flatten body fields into the params object (like Snapchat's create methods)
    for (const field of bodyType.fields ?? []) {
      if (
        !fields.some((f) => f.name === field.name) &&
        !op.pathParams.some((p) => p.name === field.name)
      ) {
        fields.push({
          name: field.name,
          wireName: field.name,
          type: field.type,
          required: field.required,
          description: field.description,
          location: "body",
        });
      }
    }
  } else if (op.bodyParams.length > 0) {
    fields.push({
      name: "body",
      wireName: "body",
      type: op.bodyParams[0]!.type,
      required: true,
      location: "body",
    });
  }

  const lines = fields.map((field) => {
    const optional = field.required ? "" : "?";
    return `  ${safeProp(field.name)}${optional}: ${typeToTs(field.type, 1)};`;
  });
  if (lines.length === 0) return `export interface ${name} {}\n`;
  return `export interface ${name} {\n${lines.join("\n")}\n}\n`;
}

function responseTypeName(op: EndpointSpec): string {
  const data = op.responseData;
  if (!data) return "unknown";
  if (data.kind === "array")
    return `${typeToTs(data.items ?? { kind: "primitive", name: "unknown" })}[]`;
  return typeToTs(data);
}

function emitMethod(op: EndpointSpec): string {
  const methodName = deriveMethodName(op);
  const paramsName = paramsInterfaceName(op);
  const returnType = responseTypeName(op);
  const path = op.path.replace(/\{([^}]+)\}/g, (_, name: string) => `\${${camel(name)}}`);
  const bodyFields =
    op.bodyParams[0]?.type.kind === "object" ? (op.bodyParams[0].type.fields ?? []) : [];
  const hasBody = op.bodyParams.length > 0;
  const hasPathParams = op.pathParams.length > 0;
  const pathArgs = op.pathParams.map((p) => p.name).join(", ");

  const buildUrl = hasPathParams ? `\`${path}\`` : `\`${path}\``;
  const queryExpr = hasBody ? undefined : hasPathParams ? "query" : "params";

  if (op.method === "GET") {
    return `    /** ${op.summary.replaceAll("`", "'")} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      ${hasPathParams ? `const { ${pathArgs}, ...query } = params;` : "const query = params;"}
      const envelope = await api.get<RedditEnvelope>(${buildUrl}, query);
      return envelope.data as ${returnType};
    }`;
  }
  if (op.method === "DELETE") {
    return `    /** ${op.summary.replaceAll("`", "'")} */
    async ${methodName}(params: ${paramsName}): Promise<void> {
      ${hasPathParams ? `const { ${pathArgs} } = params;` : ""}
      await api.delete<RedditEnvelope>(${buildUrl});
    }`;
  }
  // POST/PUT/PATCH
  const bodyKeys = bodyFields.map((f) => f.name);
  const restExpr = hasPathParams
    ? `const { ${pathArgs}, ...rest } = params;`
    : "const rest = params;";
  return `    /** ${op.summary.replaceAll("`", "'")} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      ${restExpr}
      const envelope = await api.post<RedditEnvelope>(${buildUrl}, ${hasBody ? "rest" : "undefined"});
      return envelope.data as ${returnType};
    }`;
}

/** Emit the client factory for one tag's endpoints. */
export function emitTagClient(op: EndpointSpec[], schemas: SchemaSpec[]): TagOutput {
  const tag = op[0]!.tag;
  const fileName = tagToFileName(tag);
  const usedNames = new Set<string>();
  const methods: string[] = [];

  for (const endpoint of op) {
    let methodName = deriveMethodName(endpoint);
    let suffix = 2;
    while (usedNames.has(methodName)) {
      methodName = `${methodName}${suffix}`;
      suffix++;
    }
    usedNames.add(methodName);
    methods.push(emitMethod(endpoint));
  }

  const referenced = new Set<string>();
  for (const endpoint of op) {
    if (endpoint.responseData)
      for (const name of referencedSchemas(endpoint.responseData)) referenced.add(name);
    for (const param of [...endpoint.pathParams, ...endpoint.queryParams]) {
      for (const name of referencedSchemas(param.type)) referenced.add(name);
    }
    for (const param of endpoint.bodyParams)
      for (const name of referencedSchemas(param.type)) referenced.add(name);
  }
  const existing = new Set(schemas.map((s) => s.name));
  const imports = [...referenced].filter(
    (name) => existing.has(name) && !name.startsWith("ApiResponse_"),
  );
  const paramsImports = op.map((endpoint) => paramsInterfaceName(endpoint));

  const clientContent = `// Auto-generated client for ${tag} — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { ${imports.join(", ")} } from "../types.ts";
import type { ${paramsImports.join(", ")} } from "../params.ts";

/** ${tag} — ${op.length} endpoints */
export function create${pascal(fileName)}Client(api: RedditApiClient) {
  return {
${methods.join(",\n\n")},
  };
}
`;

  // Params interfaces live in the types file to avoid duplication across tags
  return { fileName, tag, clientContent };
}

export function emitTagParamsTypes(
  endpointsByTag: Map<string, EndpointSpec[]>,
  schemas: SchemaSpec[],
): string {
  const lines = ["// Auto-generated endpoint params for the Reddit Ads API v3 — do not edit", ""];
  const referenced = new Set<string>();
  for (const endpoints of endpointsByTag.values()) {
    for (const endpoint of endpoints) {
      for (const param of [...endpoint.pathParams, ...endpoint.queryParams]) {
        for (const name of referencedSchemas(param.type)) referenced.add(name);
      }
      for (const param of endpoint.bodyParams) {
        const resolved = resolveRef(param.type, schemas);
        if (resolved.kind === "object") {
          for (const field of resolved.fields ?? []) {
            for (const name of referencedSchemas(field.type)) referenced.add(name);
          }
        } else {
          for (const name of referencedSchemas(param.type)) referenced.add(name);
        }
      }
    }
  }
  if (referenced.size > 0) {
    lines.push(`import type { ${[...referenced].join(", ")} } from "./types.ts";`);
    lines.push("");
  }
  for (const endpoints of endpointsByTag.values()) {
    for (const endpoint of endpoints) {
      lines.push(emitParamsInterface(endpoint, schemas));
      lines.push("");
    }
  }
  return lines.join("\n").trimEnd() + "\n";
}

export function emitBarrel(tags: TagOutput[]): string {
  const lines = ["// Auto-generated barrel — do not edit", ""];
  for (const tag of tags) {
    lines.push(
      `export { create${pascal(tag.fileName)}Client } from "./endpoints/${tag.fileName}.ts";`,
    );
  }
  lines.push("");
  return lines.join("\n");
}
