import type { EndpointSpec, ParamSpec, TypeRef } from "./lexicon.ts";

// ─── Naming helpers ──────────────────────────────────────────────────

/** "app.bsky.feed" → "feed" (client section + file name) */
export function namespaceToSection(namespace: string): string {
  const parts = namespace.split(".");
  const section = parts[parts.length - 1] ?? namespace;
  return section
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

/** `app.bsky.feed.createPost` → `createPost` */
export function deriveMethodName(op: EndpointSpec): string {
  const parts = op.id.split(".");
  const last = parts[parts.length - 1] ?? "";
  return camel(last);
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

// ─── Type emission ───────────────────────────────────────────────────

const BSKY_NS = ["app.bsky", "com.atproto"];

/** Schema id → TS type name: `app.bsky.feed.post#main` → `AppBskyFeedPostMain`. */
export function schemaToTsName(schemaId: string): string {
  const [lexicon = "", def = "main"] = schemaId.split("#");
  const parts = lexicon.split(".");
  const base = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
  const defPart = def
    .split(".")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return `${base}${defPart === "Main" ? "" : defPart}`;
}

/** Render a TypeRef as TypeScript. */
export function typeToTs(type: TypeRef, indent = 0): string {
  switch (type.kind) {
    case "ref": {
      const name = type.name ?? "unknown";
      if (name.includes("#")) return schemaToTsName(name);
      // bare defs reference (same lexicon) — resolve to the lexicon-scoped name
      return schemaToTsName(name);
    }
    case "array":
      return `${typeToTs(type.items ?? { kind: "unknown" }, indent)}[]`;
    case "union":
      return (
        (type.variants ?? []).map((variant) => typeToTs(variant, indent)).join(" | ") || "unknown"
      );
    case "blob":
      return "{ ref: { $link: string }; mimeType?: string; size?: number }";
    case "primitive":
      if (type.name === "number" || type.name === "integer") return "number";
      if (type.name === "boolean") return "boolean";
      if (
        type.knownValues &&
        type.knownValues.length > 0 &&
        type.knownValues.every((v) => typeof v === "string")
      ) {
        return type.knownValues.map((v) => `"${v}"`).join(" | ");
      }
      return "string";
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
    case "unknown":
      return "unknown";
  }
}

function safeProp(name: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `"${name}"`;
}

/** Collect schema ids referenced by a type. */
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

export function emitSchemaInterfaces(schemas: Record<string, TypeRef>): string {
  const lines: string[] = ["// Auto-generated types for AT Protocol lexicons — do not edit", ""];
  for (const [schemaId, type] of Object.entries(schemas).sort()) {
    const name = schemaToTsName(schemaId);
    if (type.kind === "object" && (type.fields?.length ?? 0) > 0) {
      lines.push(`export interface ${name} {`);
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
      lines.push(`export type ${name} = Record<string, unknown>;`);
      lines.push("");
    } else if (type.kind === "union") {
      lines.push(`export type ${name} = ${typeToTs(type)};`);
      lines.push("");
    } else if (type.kind === "array") {
      lines.push(`export type ${name} = ${typeToTs(type)};`);
      lines.push("");
    } else if (type.kind === "primitive" && type.name !== "unknown") {
      lines.push(`export type ${name} = ${typeToTs(type)};`);
      lines.push("");
    }
  }
  return lines.join("\n").trimEnd() + "\n";
}

// ─── Endpoint client emission ────────────────────────────────────────

export interface SectionOutput {
  fileName: string;
  section: string;
  clientContent: string;
}

function paramsInterfaceName(methodName: string): string {
  return `${pascal(methodName)}Params`;
}

function responseTypeName(methodName: string): string {
  return `${pascal(methodName)}Response`;
}

/** Plan unique method names for a section's endpoints (suffix on collision). */
export function planMethodNames(ops: EndpointSpec[]): string[] {
  const used = new Set<string>();
  return ops.map((op) => {
    const base = deriveMethodName(op);
    let name = base;
    let suffix = 2;
    while (used.has(name)) {
      name = `${base}${suffix}`;
      suffix++;
    }
    used.add(name);
    return name;
  });
}

function emitParamsInterface(
  op: EndpointSpec,
  schemas: Record<string, TypeRef>,
  methodName: string,
): string {
  const name = paramsInterfaceName(methodName);
  const fields: ParamSpec[] = [...op.queryParams];
  const bodyType = op.bodyParams[0]?.type;
  const resolvedBody =
    bodyType?.kind === "ref" ? (schemas[bodyType.name ?? ""] ?? bodyType) : bodyType;
  if (resolvedBody?.kind === "object") {
    for (const field of resolvedBody.fields ?? []) {
      if (!fields.some((f) => f.name === field.name)) {
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

function emitMethod(
  op: EndpointSpec,
  schemas: Record<string, TypeRef>,
  methodName: string,
): string {
  const paramsName = paramsInterfaceName(methodName);
  const bodyType = op.bodyParams[0]?.type;
  const resolvedBody =
    bodyType?.kind === "ref" ? (schemas[bodyType.name ?? ""] ?? bodyType) : bodyType;
  const hasTopLevelBody = op.bodyParams.length > 0 && resolvedBody?.kind !== "object";
  const returnType = op.responseData ? responseTypeName(methodName) : "unknown";
  const doc = op.summary.replaceAll("`", "'").replaceAll("\n", " ");

  if (op.type === "query") {
    return `    /** ${doc} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      const envelope = await api.get<${returnType}>("/xrpc/${op.id}", params);
      return envelope;
    }`;
  }
  // procedure
  if (hasTopLevelBody) {
    return `    /** ${doc} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      const { body, ...query } = params;
      const envelope = await api.post<${returnType}>("/xrpc/${op.id}", ${op.queryParams.length > 0 ? "body" : "body"}, query);
      return envelope;
    }`;
  }
  if (resolvedBody?.kind === "object") {
    if (op.queryParams.length === 0) {
      return `    /** ${doc} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      const envelope = await api.post<${returnType}>("/xrpc/${op.id}", params, undefined);
      return envelope;
    }`;
    }
    return `    /** ${doc} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      const queryKeys = ${JSON.stringify(op.queryParams.map((p) => p.wireName))};
      const query = Object.fromEntries(Object.entries(params).filter(([key]) => queryKeys.includes(key)));
      const body = Object.fromEntries(Object.entries(params).filter(([key]) => !queryKeys.includes(key)));
      const envelope = await api.post<${returnType}>("/xrpc/${op.id}", body, query);
      return envelope;
    }`;
  }
  return `    /** ${doc} */
    async ${methodName}(params: ${paramsName}): Promise<${returnType}> {
      const envelope = await api.post<${returnType}>("/xrpc/${op.id}", params, undefined);
      return envelope;
    }`;
}

export function emitSectionClient(
  ops: EndpointSpec[],
  schemas: Record<string, TypeRef>,
  nameFor: (op: EndpointSpec) => string,
): SectionOutput {
  const section = namespaceToSection(ops[0]!.namespace);
  // Method names are planned globally (types/params are shared across sections).
  const methods: string[] = [];

  for (const [index, endpoint] of ops.entries()) {
    methods.push(emitMethod(endpoint, schemas, nameFor(endpoint)));
  }

  const referenced = new Set<string>();
  for (const endpoint of ops) {
    if (endpoint.responseData)
      for (const name of referencedSchemas(endpoint.responseData)) referenced.add(name);
    for (const param of [...endpoint.queryParams, ...endpoint.bodyParams]) {
      for (const name of referencedSchemas(param.type)) referenced.add(name);
    }
  }
  const imports = [...referenced]
    .filter((name) => name in schemas)
    .map((name) => schemaToTsName(name));
  const paramsImports = ops.map((endpoint) => paramsInterfaceName(nameFor(endpoint)));
  const responseImports = ops
    .filter((endpoint) => endpoint.responseData)
    .map((endpoint) => responseTypeName(nameFor(endpoint)));

  const clientContent = `// Auto-generated client for ${ops[0]!.namespace} — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ${[...new Set([...imports, ...responseImports])].join(", ")} } from "../types.ts";
import type { ${[...new Set(paramsImports)].join(", ")} } from "../params.ts";

/** ${ops[0]!.namespace} — ${ops.length} endpoints */
export function create${pascal(section)}Client(api: BlueskyApiClient) {
  return {
${methods.join(",\n\n")},
  };
}
`;
  return { fileName: section, section, clientContent };
}

/** Build the global method-name plan shared by all emitters. */
export function planGlobalNames(
  endpointsBySection: Map<string, EndpointSpec[]>,
): Map<EndpointSpec, string> {
  const allOps = [...endpointsBySection.values()].flat();
  const globalNames = planMethodNames(allOps);
  return new Map(allOps.map((op, index) => [op, globalNames[index]!]));
}

export function emitTagParamsTypes(
  endpointsBySection: Map<string, EndpointSpec[]>,
  schemas: Record<string, TypeRef>,
  nameByOp: Map<EndpointSpec, string>,
): string {
  const lines = ["// Auto-generated endpoint params for AT Protocol lexicons — do not edit", ""];
  const referenced = new Set<string>();
  for (const endpoints of endpointsBySection.values()) {
    for (const endpoint of endpoints) {
      for (const param of [...endpoint.queryParams, ...endpoint.bodyParams]) {
        for (const name of referencedSchemas(param.type)) referenced.add(name);
      }
    }
  }
  const imports = [...referenced]
    .filter((name) => name in schemas)
    .map((name) => schemaToTsName(name));
  if (imports.length > 0) {
    lines.push(`import type { ${imports.join(", ")} } from "./types.ts";`);
    lines.push("");
  }
  for (const endpoints of endpointsBySection.values()) {
    for (const endpoint of endpoints) {
      lines.push(emitParamsInterface(endpoint, schemas, nameByOp.get(endpoint)!));
      lines.push("");
    }
  }
  return lines.join("\n").trimEnd() + "\n";
}

export function emitResponseTypes(
  endpointsBySection: Map<string, EndpointSpec[]>,
  nameByOp: Map<EndpointSpec, string>,
): string {
  const lines = ["// Auto-generated endpoint response types — do not edit", ""];
  for (const endpoints of endpointsBySection.values()) {
    for (const endpoint of endpoints) {
      if (!endpoint.responseData) continue;
      lines.push(
        `export type ${responseTypeName(nameByOp.get(endpoint)!)} = ${typeToTs(endpoint.responseData)};`,
      );
      lines.push("");
    }
  }
  return lines.join("\n").trimEnd() + "\n";
}

export function emitBarrel(sections: SectionOutput[]): string {
  const lines = ["// Auto-generated barrel — do not edit", ""];
  for (const section of sections) {
    lines.push(
      `export { create${pascal(section.fileName)}Client } from "./endpoints/${section.fileName}.ts";`,
    );
  }
  lines.push("");
  return lines.join("\n");
}
