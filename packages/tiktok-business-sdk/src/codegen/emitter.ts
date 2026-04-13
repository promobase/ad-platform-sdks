import type { EndpointSpec, ParamSpec } from "./parser.ts";

// ─── Naming Helpers ──────────────────────────────────────────────────

/** "/open_api/v1.3/ad/get/" → "AdGet" */
function urlToPascalName(url: string): string {
  const path = url
    .replace(/^https?:\/\/[^/]+/, "")
    .replace(/^\/open_api\/v[\d.]+\//, "")
    .replace(/\/$/, "");
  return path
    .split("/")
    .map((segment) =>
      segment
        .split("_")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(""),
    )
    .join("");
}

/** "AdGet" → "ad-get" */
function pascalToKebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** "Campaign Management" → "campaign-management" */
function categoryToFileName(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Sanitize a field name for use as a TS property. */
function safeProp(name: string): string {
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) return name;
  return `"${name}"`;
}

// ─── Type Emitter ────────────────────────────────────────────────────

/** Emit a TypeScript type for a param, handling children as inline objects and enums. */
function paramToTsType(param: ParamSpec): string {
  // If enum values exist, emit a union type
  if (param.enumValues && param.enumValues.length > 0) {
    const union = param.enumValues.map((v) => `"${v}"`).join(" | ");
    // If the base type is an array, make it an array of the union
    if (param.type.endsWith("[]")) {
      return `(${union})[]`;
    }
    return union;
  }

  if (param.children.length > 0) {
    // Deduplicate children by name
    const seen = new Set<string>();
    const deduped = param.children.filter((c) => {
      if (seen.has(c.name)) return false;
      seen.add(c.name);
      return true;
    });
    const inner = deduped
      .map((c) => {
        const opt = c.required ? "" : "?";
        return `  ${safeProp(c.name)}${opt}: ${paramToTsType(c)};`;
      })
      .join("\n");
    const obj = `{\n${inner}\n}`;
    if (param.type.endsWith("[]") || param.type === "Record<string, unknown>[]") {
      return `${obj}[]`;
    }
    return obj;
  }
  return param.type;
}

/** Emit a TypeScript interface from a list of params. */
function emitInterface(name: string, params: ParamSpec[]): string {
  if (params.length === 0) return `export interface ${name} {}\n`;

  // Deduplicate properties by name (keep first occurrence)
  const seen = new Set<string>();
  const deduped = params.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  const lines = deduped.map((p) => {
    const opt = p.required ? "" : "?";
    const type = paramToTsType(p);
    return `  ${safeProp(p.name)}${opt}: ${type};`;
  });

  return `export interface ${name} {\n${lines.join("\n")}\n}\n`;
}

// ─── Client Method Emitter ───────────────────────────────────────────

function emitMethodWithName(
  spec: EndpointSpec,
  methodName: string,
  paramsType: string,
  responseType: string,
): string {
  const urlPath = spec.url.replace(/^https?:\/\/[^/]+/, "");

  if (spec.method === "GET") {
    return `    /** ${spec.title} */
    async ${methodName}(params: ${paramsType}): Promise<${responseType}> {
      return get<${responseType}>("${urlPath}", params as unknown as Record<string, unknown>);
    }`;
  }

  return `    /** ${spec.title} */
    async ${methodName}(params: ${paramsType}): Promise<${responseType}> {
      return post<${responseType}>("${urlPath}", params as unknown as Record<string, unknown>);
    }`;
}

function deriveMethodName(spec: EndpointSpec): string {
  // Extract the last meaningful segment(s) from the URL
  const path = spec.url
    .replace(/^https?:\/\/[^/]+/, "")
    .replace(/^\/open_api\/v[\d.]+\//, "")
    .replace(/\/$/, "");
  const segments = path.split("/").filter(Boolean);

  // Common pattern: resource/action → actionResource
  if (segments.length >= 2) {
    const resource = segments[segments.length - 2]!;
    const action = segments[segments.length - 1]!;
    const camelAction = action.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
    const camelResource = resource.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());

    // Special handling for common verbs
    if (["get", "list", "create", "update", "delete"].includes(action)) {
      return `${camelAction}${camelResource.charAt(0).toUpperCase() + camelResource.slice(1)}`;
    }
    return `${camelResource}${camelAction.charAt(0).toUpperCase() + camelAction.slice(1)}`;
  }

  // Fallback: just camelCase the last segment
  const last = segments[segments.length - 1] ?? "call";
  return last.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

// ─── Category File Emitter ───────────────────────────────────────────

export interface CategoryOutput {
  fileName: string;
  typesContent: string;
  clientContent: string;
}

/** Emit types + client for a category of endpoints. */
export function emitCategory(category: string, specs: EndpointSpec[]): CategoryOutput {
  const fileName = categoryToFileName(category);
  const typesLines: string[] = [`// Auto-generated types for ${category} — do not edit`, ""];
  const methodLines: string[] = [];
  const typeImports: string[] = [];

  const usedMethodNames = new Set<string>();
  for (const spec of specs) {
    const baseName = urlToPascalName(spec.url);
    const paramsName = `${baseName}Params`;
    const responseName = `${baseName}Response`;

    // Emit param interface
    typesLines.push(emitInterface(paramsName, spec.requestParams));
    typesLines.push("");

    // Emit response interface
    typesLines.push(emitInterface(responseName, spec.responseFields));
    typesLines.push("");

    typeImports.push(paramsName, responseName);

    // Deduplicate method names
    let methodName = deriveMethodName(spec);
    let suffix = 2;
    const baseMethodName = methodName;
    while (usedMethodNames.has(methodName)) {
      methodName = `${baseMethodName}${suffix}`;
      suffix++;
    }
    usedMethodNames.add(methodName);

    methodLines.push(emitMethodWithName(spec, methodName, paramsName, responseName));
  }

  const typesContent = typesLines.join("\n");

  // Determine auth pattern (most endpoints in a category share the same pattern)
  const usesAccessToken = specs.some((s) => s.auth === "access_token");
  const optsType = usesAccessToken
    ? "{ accessToken: string; advertiserId: string }"
    : "{ appId: string; appSecret: string }";

  const authHeader = usesAccessToken
    ? `"Access-Token": opts.accessToken`
    : `"Content-Type": "application/json"`;

  const clientContent = `// Auto-generated client for ${category} — do not edit
import type { ${typeImports.join(", ")} } from "../types/${fileName}.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function create${pascalCategory(category)}(opts: ${optsType}) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(\`\${TT_API_BASE}\${path}?\${searchParams.toString()}\`, {
      headers: { ${authHeader} },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(\`TikTok API error: \${body.message} (code \${body.code}, request_id \${body.request_id})\`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(\`\${TT_API_BASE}\${path}\`, {
      method: "POST",
      headers: { ${authHeader}, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(\`TikTok API error: \${responseBody.message} (code \${responseBody.code}, request_id \${responseBody.request_id})\`);
    }
    return responseBody.data;
  }

  return {
${methodLines.join(",\n\n")},
  };
}
`;

  return { fileName, typesContent, clientContent };
}

function pascalCategory(category: string): string {
  return category
    .replace(/[^a-zA-Z0-9\s-]/g, "") // Strip parens, dots, etc.
    .trim()
    .split(/[\s-]+/)
    .filter((w) => w.length > 0)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

// ─── Barrel Emitter ──────────────────────────────────────────────────

export function emitBarrel(categories: CategoryOutput[]): string {
  const lines = [
    "// Auto-generated barrel — do not edit",
    "// Re-export endpoint factory functions (types can be imported from individual files)",
    "",
  ];

  for (const cat of categories) {
    const fnName = `create${pascalCategory(
      cat.fileName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(""),
    )}`;
    // Only re-export the factory function to avoid type name collisions across categories
    lines.push(
      `export { create${pascalCategory(cat.fileName.replace(/-/g, " "))} } from "./endpoints/${cat.fileName}.ts";`,
    );
  }

  lines.push("");
  return lines.join("\n");
}

// ─── Grouping ────────────────────────────────────────────────────────

export function groupByCategory(specs: EndpointSpec[]): Map<string, EndpointSpec[]> {
  const groups = new Map<string, EndpointSpec[]>();
  for (const spec of specs) {
    const existing = groups.get(spec.category) ?? [];
    existing.push(spec);
    groups.set(spec.category, existing);
  }
  return groups;
}
