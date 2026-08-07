import {
  camel,
  pascal,
  type EndpointSpec,
  type ParamSpec,
  type SchemaSpec,
  type TypeRef,
} from "./openapi.ts";

// ─── Naming helpers ──────────────────────────────────────────────────

/** "ad_accounts" → "ad-accounts" */
export function tagToFileName(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const VERBS = new Set([
  "list",
  "get",
  "create",
  "add",
  "update",
  "delete",
  "remove",
  "cancel",
  "archive",
  "unarchive",
  "upsert",
  "replace",
  "generate",
  "verify",
]);

/** `ad_accounts/list` → `listAdAccounts` */
export function deriveMethodName(op: EndpointSpec): string {
  const { method, operationId, isList } = op;
  const parts = operationId
    .split("/")
    .filter(Boolean)
    .map((part) => pascal(part));
  const first = parts[0] ?? "";
  const last = parts[parts.length - 1] ?? "";
  const firstVerb = VERBS.has(first.toLowerCase());
  const lastVerb = VERBS.has(last.toLowerCase());

  let verb: string;
  let resourceParts: string[];
  // OperationIds like `CreateSponsoredProductsCampaigns` already carry the verb
  // as their first camel word — prefer that over a method-based fallback.
  const firstWord = operationId.match(/^[a-z]+|^[A-Z][a-z]*/)?.[0] ?? "";
  if (VERBS.has(firstWord.toLowerCase())) {
    verb = firstWord.toLowerCase();
    resourceParts = [operationId.slice(firstWord.length)];
  } else if (lastVerb && parts.length > 1) {
    verb = last.toLowerCase();
    resourceParts = parts.slice(0, -1);
  } else if (firstVerb) {
    verb = first.toLowerCase();
    resourceParts = parts.slice(1);
  } else {
    verb = method === "GET" ? (isList ? "list" : "get") : method.toLowerCase();
    resourceParts = parts;
  }
  const resource = resourceParts.join("") || last;

  // Singularize the resource for create/update/delete verbs.
  const singularResource = ["list", "get"].includes(verb) ? resource : singularizePascal(resource);

  switch (verb) {
    case "list":
      return `list${resource}`;
    case "get":
      return isList ? `list${resource}` : `get${singularResource}`;
    case "create":
    case "add":
      return `create${singularResource}`;
    case "update":
    case "upsert":
      return `update${singularResource}`;
    case "delete":
    case "remove":
      return `delete${singularResource}`;
    case "cancel":
      return `cancel${singularResource}`;
    case "archive":
      return `archive${singularResource}`;
    case "unarchive":
      return `unarchive${singularResource}`;
    case "generate":
      return `generate${resource}`;
    case "verify":
      return `verify${singularResource}`;
    case "replace":
      return `replace${singularResource}`;
    default:
      return `${verb}${resource}`;
  }
}

/** "AdAccounts" → "AdAccount", "BusinessAccessAssets" → "BusinessAccessAsset". */
function singularizePascal(value: string): string {
  if (value.endsWith("ies") && value.length > 3) return `${value.slice(0, -3)}y`;
  if (value.endsWith("s") && value.length > 1 && !value.endsWith("ss")) return value.slice(0, -1);
  return value;
}

function responseTypeName(op: EndpointSpec, schemas: SchemaSpec[] = []): string {
  const name = `${pascal(op.operationId)}Response`;
  if (schemas.some((schema) => schema.name === name)) return `${name}Endpoint`;
  return name;
}

function paramsInterfaceName(op: EndpointSpec): string {
  return `${pascal(deriveMethodName(op))}Params`;
}

// ─── Type emission ───────────────────────────────────────────────────

/** Render a TypeRef as TypeScript. */
export function typeToTs(type: TypeRef, indent = 0): string {
  switch (type.kind) {
    case "ref":
      return type.name ?? "unknown";
    case "array":
      return `${typeToTs(type.items ?? { kind: "primitive", name: "unknown" }, indent)}[]`;
    case "union":
      return (
        (type.variants ?? []).map((variant) => typeToTs(variant, indent)).join(" | ") || "unknown"
      );
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
          return type.enumValues &&
            type.enumValues.length > 0 &&
            type.enumValues.every((v) => typeof v === "string")
            ? type.enumValues.map((v) => `"${v}"`).join(" | ")
            : "string";
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

/** Collect schema names referenced by a type. */
export function referencedSchemas(type: TypeRef): string[] {
  const names = new Set<string>();
  const visit = (t: TypeRef) => {
    if (t.kind === "ref" && t.name) names.add(t.name);
    if (t.kind === "array" && t.items) visit(t.items);
    if (t.kind === "union") for (const variant of t.variants ?? []) visit(variant);
    if (t.kind === "object") for (const field of t.fields ?? []) visit(field.type);
  };
  visit(type);
  return [...names];
}

// ─── Schema → interface emission ─────────────────────────────────────

export function emitSchemaInterfaces(schemas: SchemaSpec[]): string {
  const lines: string[] = ["// Auto-generated types for the Amazon Ads API v3 — do not edit", ""];
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
    } else if (type.kind === "array" || type.kind === "union") {
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

/** Resolve a ref to an object type via the schema table (for body flattening). */
function resolveRef(type: TypeRef, schemas: SchemaSpec[]): TypeRef {
  if (type.kind !== "ref" || !type.name) return type;
  return schemas.find((s) => s.name === type.name)?.type ?? type;
}

function emitParamsInterface(op: EndpointSpec, schemas: SchemaSpec[]): string {
  const name = paramsInterfaceName(op);
  const fields: ParamSpec[] = [...op.pathParams, ...op.queryParams];
  const bodyType = op.bodyParams[0] ? resolveRef(op.bodyParams[0].type, schemas) : null;
  if (op.bodyParams.length > 0 && bodyType?.kind === "object") {
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

function scopeComment(op: EndpointSpec): string {
  const scopes = op.security
    .filter((s) => s.scopes.length > 0)
    .map((s) => `${s.scheme}: ${s.scopes.join(", ")}`)
    .join("; ");
  return scopes ? `\n   * Requires ${scopes}.` : "";
}

function emitMethod(op: EndpointSpec, schemas: SchemaSpec[]): string {
  const methodName = deriveMethodName(op);
  const paramsName = paramsInterfaceName(op);
  const returnType = op.responseData ? responseTypeName(op, schemas) : "unknown";
  const path = op.path.replace(/\{([^}]+)\}/g, (_, name: string) => `\${${camel(name)}}`);
  const hasBody = op.bodyParams.length > 0;
  const hasPathParams = op.pathParams.length > 0;
  const pathArgs = op.pathParams.map((p) => p.name).join(", ");

  const doc = op.summary.replaceAll("`", "'");
  const scopes = scopeComment(op);

  if (op.method === "GET") {
    return (
      `    /** ${doc}${scopes} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      ${hasPathParams ? `const { ${pathArgs}, ...query } = params;` : "const query = params;"}
      const envelope = await api.get<${returnType}>(` +
      "`" +
      `${path}` +
      "`" +
      `, query);
      return envelope;
    }`
    );
  }
  if (op.method === "DELETE") {
    return (
      `    /** ${doc}${scopes} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      ${hasPathParams ? `const { ${pathArgs} } = params;` : ""}
      const envelope = await api.delete<${returnType}>(` +
      "`" +
      `${path}` +
      "`" +
      `);
      return envelope;
    }`
    );
  }
  const restExpr = hasPathParams
    ? `const { ${pathArgs}, ...rest } = params;`
    : "const rest = params;";
  // When the body was not flattened (kept as a `body` param), send it as-is.
  const bodyType = op.bodyParams[0] ? resolveRef(op.bodyParams[0].type, schemas) : null;
  const hasTopLevelBody = hasBody && bodyType?.kind !== "object";
  const bodyArg = hasTopLevelBody ? "body" : "rest";
  const bodyArgs = hasTopLevelBody
    ? hasPathParams
      ? `const { ${pathArgs}, body, ...query } = params;`
      : `const { body, ...query } = params;`
    : restExpr;
  const method = op.method === "PATCH" ? "patch" : op.method === "PUT" ? "put" : "post";
  return (
    `    /** ${doc}${scopes} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      ${bodyArgs}
      const envelope = await api.${method}<${returnType}>(` +
    "`" +
    `${path}` +
    "`" +
    `, ${hasBody ? bodyArg : "undefined"});
      return envelope;
    }`
  );
}

/** Emit named response types (`AdAccountsListResponse` etc.) into types.ts. */
export function emitResponseTypes(
  endpointsByTag: Map<string, EndpointSpec[]>,
  schemas: SchemaSpec[],
): string {
  const lines = ["// Auto-generated endpoint response types — do not edit", ""];
  for (const endpoints of endpointsByTag.values()) {
    for (const endpoint of endpoints) {
      const data = endpoint.responseData;
      if (!data) continue;
      lines.push(`export type ${responseTypeName(endpoint, schemas)} = ${typeToTs(data)};`);
      lines.push("");
    }
  }
  return lines.join("\n").trimEnd() + "\n";
}

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
    methods.push(emitMethod(endpoint, schemas));
  }

  const referenced = new Set<string>();
  for (const endpoint of op) {
    if (endpoint.responseData)
      for (const name of referencedSchemas(endpoint.responseData)) referenced.add(name);
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
  const existing = new Set(schemas.map((s) => s.name));
  const imports = [...referenced].filter((name) => existing.has(name));
  const paramsImports = op.map((endpoint) => paramsInterfaceName(endpoint));
  const responseImports = op
    .map((endpoint) => (endpoint.responseData ? responseTypeName(endpoint, schemas) : null))
    .filter((name): name is string => name !== null);

  const clientContent = `// Auto-generated client for ${tag} — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ${[...imports, ...responseImports].join(", ")} } from "../types.ts";
import type { ${paramsImports.join(", ")} } from "../params.ts";

/** ${tag} — ${op.length} endpoints */
export function create${pascal(fileName)}Client(api: AmazonAdsApiClient) {
  return {
${methods.join(",\n\n")},
  };
}
`;

  return { fileName, tag, clientContent };
}

export function emitTagParamsTypes(
  endpointsByTag: Map<string, EndpointSpec[]>,
  schemas: SchemaSpec[],
): string {
  const lines = ["// Auto-generated endpoint params for the Amazon Ads API v3 — do not edit", ""];
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
