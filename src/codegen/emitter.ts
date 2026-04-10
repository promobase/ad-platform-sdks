import type { Spec, SpecApi, SpecParam } from "./parser.ts";
import { resolveType, type TypeResolverContext } from "./type-resolver.ts";

// ─── Naming Helpers ──────────────────────────────────────────────────

/**
 * PascalCase → kebab-case: "AdAccount" → "ad-account", "AdsInsights" → "ads-insights"
 */
export function specNameToFileName(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * "Campaign" → "CampaignFields"
 */
export function specNameToFieldsType(name: string): string {
  return `${name}Fields`;
}

/**
 * Singularize a word (very basic heuristic).
 */
function singularize(word: string): string {
  if (word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.endsWith("ses")) return word.slice(0, -2);
  if (word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

/**
 * snake_case → camelCase: "ad_studies" → "adStudies"
 */
function snakeToCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * snake_case → PascalCase: "ad_studies" → "AdStudies"
 */
function snakeToPascal(s: string): string {
  return s
    .split("_")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

/**
 * Derive a method name from HTTP method + endpoint.
 *   GET "campaigns" → "campaigns"
 *   POST "campaigns" → "createCampaign"
 *   DELETE "campaigns" → "deleteCampaigns"
 *   GET "ad_studies" → "adStudies"
 *   POST "ad_place_page_sets" → "createAdPlacePageSet"
 */
export function endpointToMethodName(method: string, endpoint: string): string {
  const camel = snakeToCamel(endpoint);
  if (method === "GET") return camel;
  if (method === "POST") return `create${capitalize(singularize(snakeToPascal(endpoint)))}`;
  if (method === "DELETE") return `delete${capitalize(snakeToPascal(endpoint))}`;
  return camel;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function uncapitalize(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

// ─── Emit Helpers ────────────────────────────────────────────────────

/**
 * Returns true if the identifier needs quoting (starts with digit or contains invalid chars).
 */
function needsQuoting(name: string): boolean {
  return !/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

/**
 * Emit a union type alias for an enum:
 *   export type CampaignBidStrategy = "COST_CAP" | "LOWEST_COST_WITHOUT_CAP";
 */
export function emitEnumType(name: string, values: string[]): string {
  const union = values.map((v) => `"${v}"`).join(" | ");
  return `export type ${name} = ${union};\n`;
}

/**
 * Emit a fields interface:
 *   export interface CampaignFields { id: string; name: string; ... }
 */
export function emitFieldsInterface(
  objectName: string,
  fields: { name: string; resolvedType: string }[],
): string {
  const lines: string[] = [];
  lines.push(`export interface ${objectName}Fields {`);
  for (const f of fields) {
    const key = needsQuoting(f.name) ? `"${f.name}"` : f.name;
    lines.push(`  ${key}: ${f.resolvedType};`);
  }
  lines.push("}");
  return lines.join("\n") + "\n";
}

/**
 * Emit a params interface:
 *   export interface CampaignCreateParams { name: string; status?: string; }
 */
export function emitParamsInterface(
  name: string,
  params: { name: string; resolvedType: string; required: boolean }[],
): string {
  const lines: string[] = [];
  lines.push(`export interface ${name} {`);
  for (const p of params) {
    const key = needsQuoting(p.name) ? `"${p.name}"` : p.name;
    const opt = p.required ? "" : "?";
    lines.push(`  ${key}${opt}: ${p.resolvedType};`);
  }
  lines.push("  [key: string]: unknown;");
  lines.push("}");
  return lines.join("\n") + "\n";
}

// ─── Full Object File Emitter ────────────────────────────────────────

export interface EmitContext {
  spec: Spec;
  typeCtx: TypeResolverContext;
  cycleNodes: Set<string>;
  allSpecs: Map<string, Spec>;
}

interface ResolvedField {
  name: string;
  resolvedType: string;
}

interface ResolvedParam {
  name: string;
  resolvedType: string;
  required: boolean;
}

interface EdgeGroup {
  endpoint: string;
  apis: SpecApi[];
  returnType: string; // the spec object name returned
}

export function emitObjectFile(ctx: EmitContext): string {
  const { spec, typeCtx } = ctx;
  const out: string[] = [];

  // 1. Resolve fields (skip not_visible)
  const fields: ResolvedField[] = [];
  for (const f of spec.fields) {
    if (f.not_visible) continue;
    fields.push({ name: f.name, resolvedType: resolveType(f.type, typeCtx) });
  }

  // 2. Categorize APIs into node ops and edge ops
  const nodeOps: SpecApi[] = [];
  const edgeApis: SpecApi[] = [];
  for (const api of spec.apis) {
    if (api.name && api.name.startsWith("#")) {
      nodeOps.push(api);
    } else if (api.endpoint) {
      edgeApis.push(api);
    }
  }

  // Group edge APIs by endpoint
  const edgeGroups = new Map<string, EdgeGroup>();
  for (const api of edgeApis) {
    const ep = api.endpoint!;
    if (!edgeGroups.has(ep)) {
      edgeGroups.set(ep, { endpoint: ep, apis: [], returnType: api.return });
    }
    const group = edgeGroups.get(ep)!;
    group.apis.push(api);
    // Prefer the most specific return type: GET > POST > DELETE
    // DELETE often returns "Object" which is unhelpful
    if (api.return !== "Object" && group.returnType === "Object") {
      group.returnType = api.return;
    }
  }

  const hasApis = nodeOps.length > 0 || edgeGroups.size > 0;
  const hasGetEdges = edgeApis.some((a) => a.method === "GET");

  // 3. Collect referenced object types for imports
  const referencedObjects = new Set<string>();

  // From fields
  for (const f of fields) {
    collectObjectReferences(f.resolvedType, typeCtx, referencedObjects);
  }

  // From edge return types and params
  for (const [, group] of edgeGroups) {
    for (const api of group.apis) {
      if (typeCtx.knownObjects.has(api.return)) {
        referencedObjects.add(api.return);
      }
      for (const param of api.params) {
        const resolvedParamType = resolveType(param.type, typeCtx);
        collectObjectReferences(resolvedParamType, typeCtx, referencedObjects);
      }
    }
  }

  // From node op params (e.g. #update)
  for (const op of nodeOps) {
    for (const param of op.params) {
      const resolvedParamType = resolveType(param.type, typeCtx);
      collectObjectReferences(resolvedParamType, typeCtx, referencedObjects);
    }
  }

  // Remove self-reference
  referencedObjects.delete(spec.name);

  // 4. Generate imports
  if (hasApis) {
    out.push(`import type { ApiClient } from "../../runtime/client.ts";`);
  }
  if (hasGetEdges) {
    out.push(`import { Cursor } from "../../runtime/cursor.ts";`);
  }

  for (const ref of [...referencedObjects].sort()) {
    const fileName = specNameToFileName(ref);
    out.push(`import type { ${ref}Fields } from "./${fileName}.ts";`);
  }

  if (out.length > 0) {
    out.push("");
  }

  // 5. Emit fields interface
  out.push(emitFieldsInterface(spec.name, fields));

  // 6. Emit params interfaces for edges
  const paramsInterfaces = new Map<string, string>(); // interface name → param interface name
  for (const [, group] of edgeGroups) {
    for (const api of group.apis) {
      if (api.params.length === 0) continue;
      const epPascal = snakeToPascal(api.endpoint!);
      let prefix: string;
      if (api.method === "GET") prefix = `${spec.name}List${epPascal}`;
      else if (api.method === "POST") prefix = `${spec.name}Create${epPascal}`;
      else prefix = `${spec.name}Delete${epPascal}`;
      const ifaceName = `${prefix}Params`;

      const resolvedParams = resolveParams(api.params, typeCtx);
      out.push(emitParamsInterface(ifaceName, resolvedParams));
      paramsInterfaces.set(`${api.method}:${api.endpoint}`, ifaceName);
    }
  }

  // Emit #update params
  const updateOp = nodeOps.find((a) => a.name === "#update");
  if (updateOp && updateOp.params.length > 0) {
    const ifaceName = `${spec.name}UpdateParams`;
    // All update params are optional
    const resolvedParams = resolveParams(updateOp.params, typeCtx).map((p) => ({
      ...p,
      required: false,
    }));
    out.push(emitParamsInterface(ifaceName, resolvedParams));
    paramsInterfaces.set("UPDATE", ifaceName);
  }

  // 7. Emit node factory function (only if there are APIs)
  if (hasApis) {
    const fnName = `${uncapitalize(spec.name)}Node`;
    const selfFieldsType = `${spec.name}Fields`;

    out.push(`export function ${fnName}(client: ApiClient, id: string) {`);
    out.push("  return {");

    // Self ops
    const getOp = nodeOps.find((a) => a.name === "#get");
    if (getOp) {
      out.push(
        `    get: <F extends (keyof ${selfFieldsType})[]>(opts: { fields: F; params?: Record<string, unknown> }) =>`,
      );
      out.push(`      client.get<Pick<${selfFieldsType}, F[number]>>(\`\${id}\`, opts),`);
    }

    if (updateOp) {
      const updateParamsType = paramsInterfaces.get("UPDATE");
      if (updateParamsType) {
        out.push(`    update: (params: ${updateParamsType}) =>`);
        out.push(`      client.post<${selfFieldsType}>(\`\${id}\`, params as Record<string, unknown>),`);
      } else {
        out.push(`    update: (params?: Record<string, unknown>) =>`);
        out.push(`      client.post<${selfFieldsType}>(\`\${id}\`, params ?? {}),`);
      }
    }

    const deleteOp = nodeOps.find((a) => a.name === "#delete");
    if (deleteOp) {
      out.push(`    delete: () =>`);
      out.push(`      client.delete(\`\${id}\`, {}),`);
    }

    // Edge ops
    for (const [, group] of edgeGroups) {
      const ep = group.endpoint;
      const camelName = snakeToCamel(ep);

      const getApi = group.apis.find((a) => a.method === "GET");
      const postApi = group.apis.find((a) => a.method === "POST");
      const deleteApi = group.apis.find((a) => a.method === "DELETE");

      // Resolve return type per method
      function returnType(api: SpecApi): string {
        return typeCtx.knownObjects.has(api.return)
          ? `${api.return}Fields`
          : "Record<string, unknown>";
      }

      // If there's only one API for this endpoint, emit a flat method
      if (group.apis.length === 1) {
        const api = group.apis[0]!;
        const rt = returnType(api);
        if (api.method === "GET") {
          const paramsType = paramsInterfaces.get(`GET:${ep}`);
          const optsParam = paramsType
            ? `opts: { fields: F; params?: ${paramsType} }`
            : `opts: { fields: F; params?: Record<string, unknown> }`;
          out.push(
            `    ${camelName}: <F extends (keyof ${rt})[]>(${optsParam}) =>`,
          );
          out.push(
            `      new Cursor<Pick<${rt}, F[number]>>(client, \`\${id}/${ep}\`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),`,
          );
        } else if (api.method === "POST") {
          const methodName = endpointToMethodName("POST", ep);
          const paramsType = paramsInterfaces.get(`POST:${ep}`);
          const paramArg = paramsType ? `params: ${paramsType}` : `params: Record<string, unknown>`;
          out.push(`    ${methodName}: (${paramArg}) =>`);
          out.push(`      client.post<${rt}>(\`\${id}/${ep}\`, params as Record<string, unknown>),`);
        } else if (api.method === "DELETE") {
          const methodName = endpointToMethodName("DELETE", ep);
          const paramsType = paramsInterfaces.get(`DELETE:${ep}`);
          const paramArg = paramsType ? `params: ${paramsType}` : `params?: Record<string, unknown>`;
          out.push(`    ${methodName}: (${paramArg}) =>`);
          out.push(`      client.delete(\`\${id}/${ep}\`, params as Record<string, unknown> ?? {}),`);
        }
      } else {
        // Multiple methods on the same endpoint — group them
        out.push(`    ${camelName}: {`);

        if (getApi) {
          const rt = returnType(getApi);
          const paramsType = paramsInterfaces.get(`GET:${ep}`);
          const optsParam = paramsType
            ? `opts: { fields: F; params?: ${paramsType} }`
            : `opts: { fields: F; params?: Record<string, unknown> }`;
          out.push(
            `      list: <F extends (keyof ${rt})[]>(${optsParam}) =>`,
          );
          out.push(
            `        new Cursor<Pick<${rt}, F[number]>>(client, \`\${id}/${ep}\`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),`,
          );
        }

        if (postApi) {
          const rt = returnType(postApi);
          const paramsType = paramsInterfaces.get(`POST:${ep}`);
          const paramArg = paramsType
            ? `params: ${paramsType}`
            : `params: Record<string, unknown>`;
          out.push(`      create: (${paramArg}) =>`);
          out.push(`        client.post<${rt}>(\`\${id}/${ep}\`, params as Record<string, unknown>),`);
        }

        if (deleteApi) {
          const paramsType = paramsInterfaces.get(`DELETE:${ep}`);
          const paramArg = paramsType
            ? `params: ${paramsType}`
            : `params?: Record<string, unknown>`;
          out.push(`      delete: (${paramArg}) =>`);
          out.push(`        client.delete(\`\${id}/${ep}\`, params as Record<string, unknown> ?? {}),`);
        }

        out.push("    },");
      }
    }

    out.push("  };");
    out.push("}");
    out.push("");
  }

  return out.join("\n") + "\n";
}

// ─── Internal Utilities ──────────────────────────────────────────────

function resolveParams(
  params: SpecParam[],
  typeCtx: TypeResolverContext,
): ResolvedParam[] {
  return params.map((p) => ({
    name: p.name,
    resolvedType: resolveType(p.type, typeCtx),
    required: p.required,
  }));
}

/**
 * Collect object references from a resolved type string.
 * Looks for patterns like "XFields" where X is a known object.
 */
function collectObjectReferences(
  resolvedType: string,
  typeCtx: TypeResolverContext,
  refs: Set<string>,
): void {
  for (const objName of typeCtx.knownObjects) {
    if (resolvedType.includes(`${objName}Fields`)) {
      refs.add(objName);
    }
  }
}
