import { inferParams, type EndpointSpec, type ParamSpec } from "./parser.ts";

// ─── Naming helpers ──────────────────────────────────────────────────

/** "Ads-API-campaigns" → "campaigns" */
export function pageToFileName(docId: string): string {
  const base = docId.split("/").pop() ?? docId;
  return base
    .replace(/^[A-Za-z]+-API-/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
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

function singularizeSegment(segment: string): string {
  if (segment === "media" || segment === "stats") return segment;
  if (segment.endsWith("ies")) return `${segment.slice(0, -3)}y`;
  if (segment.endsWith("es")) return segment.slice(0, -2);
  if (segment.endsWith("s")) return segment.slice(0, -1);
  return segment;
}

function pathParamToCamel(name: string): string {
  const normalized = name.replace(/[{}]/g, "").replace(/-/g, "_");
  if (normalized.toUpperCase() === normalized && normalized.length <= 4)
    return normalized.toLowerCase();
  return camel(normalized);
}

/** Build a template-literal string for a path with `{param}` placeholders. */
function pathTemplate(spec: EndpointSpec): string {
  return spec.path
    .replace(/^\/v1/, "")
    .replace(/\{([^}]+)\}/g, (_, name: string) => `\${${pathParamToCamel(name)}}`);
}

/** Method name for an endpoint, e.g. `listCampaigns`, `createCampaign`, `getCampaignStats`. */
export function deriveMethodName(spec: EndpointSpec): string {
  const segments = spec.path.split("/").filter(Boolean).slice(1);
  const last = segments[segments.length - 1] ?? "";
  const isPathParam = (segment: string) => /\{[^}]+\}/.test(segment);
  // The resource is the last non-param, non-action segment.
  const ACTIONS = new Set([
    "upload",
    "stats",
    "preview",
    "thumbnail",
    "lens_preview",
    "creative_preview",
    "snapcode",
    "spend_guidance",
    "leads_report",
    "stats_report",
  ]);
  const resource =
    [...segments].reverse().find((segment) => !isPathParam(segment) && !ACTIONS.has(segment)) ??
    last;

  if (last === "stats") return `get${pascal(singularizeSegment(resource))}Stats`;
  if (last === "upload") return `upload${pascal(singularizeSegment(resource))}`;
  if (last.startsWith("get_") && last.endsWith("_by_ids")) {
    const target = last.slice(4, -7); // "get_campaigns_by_ids" → "campaigns"
    return `get${pascal(singularizeSegment(target))}ByIds`;
  }
  if (last === "media_copy") return `copyMedia`;
  if (/^(preview|thumbnail|lens_preview|creative_preview|snapcode|spend_guidance)$/.test(last)) {
    return `get${pascal(singularizeSegment(resource))}${pascal(last)}`;
  }
  if (spec.path.startsWith("/v1/me/")) return `list${pascal(last)}`;

  if (isPathParam(last)) {
    switch (spec.method) {
      case "DELETE":
        return `delete${pascal(singularizeSegment(resource))}`;
      case "POST":
      case "PUT":
        return `update${pascal(singularizeSegment(resource))}`;
      default:
        return `get${pascal(singularizeSegment(resource))}`;
    }
  }

  switch (spec.method) {
    case "GET":
      return `list${pascal(last)}`;
    case "POST":
      return `create${pascal(singularizeSegment(last))}`;
    case "PUT":
      return `update${pascal(singularizeSegment(last))}`;
    case "DELETE":
      return `delete${pascal(singularizeSegment(last))}`;
  }
}

// ─── Type emission ───────────────────────────────────────────────────

function paramToTsType(param: ParamSpec, indent = 0): string {
  if (param.type === "enum" && param.enumValues && param.enumValues.length > 0) {
    return param.enumValues.map((v) => `"${v}"`).join(" | ");
  }
  if (param.children && param.children.length > 0) {
    const pad = "  ".repeat(indent + 1);
    const inner = param.children
      .map((child) => {
        const optional = child.required ? "" : "?";
        return `${pad}${safeProp(child.name)}${optional}: ${paramToTsType(child, indent + 1)};`;
      })
      .join("\n");
    const obj = `{\n${inner}\n${"  ".repeat(indent)}}`;
    return param.type.endsWith("[]") ? `${obj}[]` : obj;
  }
  switch (param.type) {
    case "number":
    case "boolean":
      return param.type;
    case "object":
      return "Record<string, unknown>";
    case "array":
      return "unknown[]";
    case "unknown":
      return "unknown";
    default:
      return "string";
  }
}

function safeProp(name: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `"${name}"`;
}

function emitInterface(name: string, params: ParamSpec[]): string {
  if (params.length === 0) return `export interface ${name} {}\n`;
  const seen = new Set<string>();
  const lines = params
    .filter((p) => {
      if (seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    })
    .map((p) => {
      const optional = p.required ? "" : "?";
      return `  ${safeProp(p.name)}${optional}: ${paramToTsType(p)};`;
    });
  return `export interface ${name} {\n${lines.join("\n")}\n}\n`;
}

// ─── Body params ─────────────────────────────────────────────────────

/**
 * The request body wrapper from the docs' curl examples, e.g.
 * `{"campaigns": [{...}]}` → a body param named `campaigns` whose children
 * are the single element's fields (path params excluded at build time).
 */
function bodyParamOf(spec: EndpointSpec): ParamSpec | undefined {
  if (!spec.requestBodyExample || typeof spec.requestBodyExample !== "object") return undefined;
  const record = spec.requestBodyExample as Record<string, unknown>;
  for (const [key, value] of Object.entries(record)) {
    if (
      Array.isArray(value) &&
      value.length === 1 &&
      typeof value[0] === "object" &&
      value[0] !== null
    ) {
      return { name: key, type: "object", required: true, children: inferParams(value[0]) };
    }
    if (Array.isArray(value) && value.length === 0) {
      return { name: key, type: "object[]", required: true, children: [] };
    }
  }
  return { name: "body", type: "object", required: true, children: inferParams(record) };
}

/** Params interface for an endpoint method (path + query + body fields). */
function buildParamsInterface(spec: EndpointSpec, methodName: string): string {
  const paramsType = `${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params`;
  const pathParams = spec.requestParams.filter((p) => p.location === "path");
  const pathParamNames = new Set(pathParams.map((p) => p.name));
  const fields: ParamSpec[] = [...pathParams];
  const known = new Set(fields.map((f) => f.name));

  if (spec.method === "GET") {
    for (const param of spec.requestParams.filter((p) => p.location !== "path")) {
      if (!known.has(param.name)) {
        fields.push(param);
        known.add(param.name);
      }
    }
  } else if (spec.responseKind === "result") {
    fields.push({ name: "file", type: "FileInput", required: true, location: "body" });
    fields.push({ name: "filename", type: "string", required: false, location: "body" });
  } else if (spec.method === "POST" || spec.method === "PUT") {
    const bodyFields =
      bodyParamOf(spec)?.children?.filter(
        (p) => !pathParamNames.has(p.name) && !pathParamNames.has(pathParamToCamel(p.name)),
      ) ?? [];
    for (const field of bodyFields) {
      if (!known.has(field.name) && !known.has(pathParamToCamel(field.name))) {
        fields.push(field);
        known.add(field.name);
      }
    }
  }

  const lines = fields.map((p) => {
    const optional = p.required ? "" : "?";
    const type = p.name === "file" ? "FileInput" : paramToTsType(p);
    return `  ${safeProp(p.name)}${optional}: ${type};`;
  });
  return `export interface ${paramsType} {\n${lines.join("\n")}\n}\n`;
}

// ─── Client method emission ──────────────────────────────────────────

function emitMethod(spec: EndpointSpec, methodName: string): string {
  const pathParams = spec.requestParams.filter((p) => p.location === "path");
  const hasPathParams = pathParams.length > 0;
  const pathArgs = pathParams.map((p) => pathParamToCamel(p.name)).join(", ");
  const urlExpr = pathTemplate(spec);
  const entityType = spec.entityName;
  const docComment = spec.section.replace(/`/g, "'");

  const spreadQuery = hasPathParams
    ? `const { ${pathArgs}, ...query } = params;`
    : `const query = params;`;

  if (spec.responseKind === "list") {
    return `    /** ${docComment} */
    ${methodName}(params: ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params): SnapchatCursor<${entityType}> {
      ${spreadQuery}
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? \`${urlExpr}\`, link ? undefined : query).then((envelope) => ({
          items: unpack<${entityType}>(envelope, "${spec.entityKey}", "${spec.entitySingular}"),
          nextLink: nextLink(envelope),
        })),
      );
    }`;
  }

  if (spec.responseKind === "result") {
    return `    /** ${docComment} */
    async ${methodName}(params: ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params): Promise<${entityType}> {
      const { ${pathArgs}${hasPathParams ? ", " : ""}file } = params;
      const envelope = await api.upload<SnapchatEnvelope & { result: ${entityType} }>(\`${urlExpr}\`, file, { filename: params.filename });
      return envelope.result;
    }`;
  }

  if (spec.responseKind === "stats") {
    return `    /** ${docComment} */
    async ${methodName}(params: ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params): Promise<${entityType}[]> {
      ${spreadQuery}
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(\`${urlExpr}\`, query);
      return unpack<${entityType}>(envelope, "${spec.entityKey}", "${spec.entitySingular}");
    }`;
  }

  if (spec.method === "POST" || spec.method === "PUT") {
    const bodyParam = bodyParamOf(spec);
    const bodyKey = bodyParam?.name ?? spec.entityKey;
    // Wrapped body: `{"campaigns": [{...}]}` → spread `rest` into the entity array.
    const wrapped = Boolean(bodyParam?.children) && bodyParam?.name !== "body";
    const bodyExpr = wrapped ? `{ ${bodyKey}: [{ ...rest }] }` : "rest";
    return `    /** ${docComment} */
    async ${methodName}(params: ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params): Promise<${entityType}> {
      ${hasPathParams ? `const { ${pathArgs}, ...rest } = params;` : "const rest = params;"}
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(\`${urlExpr}\`, ${bodyExpr});
      return ensureOne<${entityType}>(unpack<${entityType}>(envelope, "${spec.entityKey}", "${spec.entitySingular}"), "${entityType}");
    }`;
  }

  if (spec.method === "DELETE") {
    return `    /** ${docComment} */
    async ${methodName}(params: ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params): Promise<void> {
      ${spreadQuery}
      await api.delete<SnapchatEnvelope>(\`${urlExpr}\`);
    }`;
  }

  // GET single
  return `    /** ${docComment} */
    async ${methodName}(params: ${methodName.charAt(0).toUpperCase() + methodName.slice(1)}Params): Promise<${entityType}> {
      ${spreadQuery}
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(\`${urlExpr}\`, query);
      return ensureOne<${entityType}>(unpack<${entityType}>(envelope, "${spec.entityKey}", "${spec.entitySingular}"), "${entityType}");
    }`;
}

// ─── Page emission ───────────────────────────────────────────────────

export interface PageOutput {
  fileName: string;
  typesContent: string;
  clientContent: string;
}

/** Emit types + client for a docs page's endpoints (deduplicated by method+path). */
export function emitPage(specs: EndpointSpec[]): PageOutput {
  const fileName = pageToFileName(specs[0]!.docId);
  // Dedupe by method+path, preferring the richer variant (more params or a
  // response example) — duplicated docs sections often repeat endpoints with
  // and without example payloads.
  const used = new Map<string, EndpointSpec>();
  for (const spec of specs) {
    const key = `${spec.method} ${spec.path}`;
    const existing = used.get(key);
    const richer =
      spec.requestParams.length + (spec.responseExample ? 1 : 0) >
      (existing?.requestParams.length ?? -1) + (existing?.responseExample ? 1 : 0);
    if (!existing || richer) {
      used.set(key, spec);
    }
  }
  const uniqueSpecs = [...used.values()];

  // Entity types (deduped by name, keep the richest field list)
  const entities = new Map<string, ParamSpec[]>();
  for (const spec of uniqueSpecs) {
    if (spec.responseKind === "raw" || spec.entityName === "result") continue;
    const existing = entities.get(spec.entityName);
    if (!existing) {
      entities.set(spec.entityName, spec.responseParams);
    } else if (spec.responseParams.length > existing.length) {
      entities.set(spec.entityName, spec.responseParams);
    }
  }

  const typesLines: string[] = [
    `// Auto-generated types for ${specs[0]!.pageTitle} — do not edit`,
    "",
  ];
  const needsFileInput = uniqueSpecs.some((spec) => spec.responseKind === "result");
  if (needsFileInput) {
    typesLines.push('import type { FileInput } from "../../api-client.ts";');
    typesLines.push("");
  }
  for (const [name, fields] of entities) {
    typesLines.push(emitInterface(name, fields));
    typesLines.push("");
  }

  const methodNames: string[] = [];
  const methodLines: string[] = [];
  for (const spec of uniqueSpecs) {
    let methodName = deriveMethodName(spec);
    let suffix = 2;
    const base = methodName;
    while (methodNames.includes(methodName)) {
      methodName = `${base}${suffix}`;
      suffix++;
    }
    methodNames.push(methodName);
    typesLines.push(buildParamsInterface(spec, methodName));
    typesLines.push("");
    methodLines.push(emitMethod(spec, methodName));
  }

  const typesContent = `${typesLines.join("\n").trimEnd()}\n`;

  const entityImports = [...entities.keys()];
  const paramsImports = methodNames.map((m) => `${m.charAt(0).toUpperCase() + m.slice(1)}Params`);
  const clientContent = `// Auto-generated client for ${specs[0]!.pageTitle} — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { ${[...entityImports, ...paramsImports].join(", ")} } from "../types/${fileName}.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: \`Snapchat \${label} not found\`, status: 404 });
  return item;
}

/** ${specs[0]!.category} — ${specs[0]!.pageTitle} */
export function create${pascal(fileName)}Client(api: SnapchatApiClient) {
  return {
${methodLines.join(",\n\n")},
  };
}
`;
  return { fileName, typesContent, clientContent };
}

// ─── Barrel ──────────────────────────────────────────────────────────

export function emitBarrel(pages: PageOutput[]): string {
  const lines = ["// Auto-generated barrel — do not edit", ""];
  for (const page of pages) {
    lines.push(
      `export { create${pascal(page.fileName)}Client } from "./endpoints/${page.fileName}.ts";`,
    );
  }
  lines.push("");
  return lines.join("\n");
}
