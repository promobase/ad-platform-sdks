import { readdir } from "node:fs/promises";
import { join } from "node:path";

export interface SpecField {
  name: string;
  type: string;
  not_visible?: boolean;
  is_file_param?: boolean;
  keyvalue?: boolean;
  context?: string;
}

export interface SpecParam {
  name: string;
  type: string;
  required: boolean;
  is_file_param?: boolean;
}

export interface SpecApi {
  name?: string; // "#get", "#update", "#delete" for node ops
  method: "GET" | "POST" | "DELETE";
  endpoint?: string;
  return: string;
  params: SpecParam[];
  allow_file_upload?: boolean;
  use_graph_video_endpoint?: boolean;
  preferred_creation_endpoint?: boolean;
}

export interface Spec {
  name: string;
  fields: SpecField[];
  apis: SpecApi[];
}

/**
 * Reads all JSON spec files from specsDir and returns a Map of node name -> Spec
 */
export async function parseSpecs(specsDir: string): Promise<Map<string, Spec>> {
  const specs = new Map<string, Spec>();
  const absDir = specsDir.startsWith("/") ? specsDir : join(process.cwd(), specsDir);
  const files = await readdir(absDir);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const nodeName = file.slice(0, -5); // strip .json
    const filePath = join(absDir, file);
    const raw = await Bun.file(filePath).json();

    const fields: SpecField[] = (raw.fields ?? []).map((f: any) => ({
      name: f.name,
      type: f.type,
      ...(f.not_visible !== undefined && { not_visible: f.not_visible }),
      ...(f.is_file_param !== undefined && { is_file_param: f.is_file_param }),
      ...(f.keyvalue !== undefined && { keyvalue: f.keyvalue }),
      ...(f.context !== undefined && { context: f.context }),
    }));

    const apis: SpecApi[] = (raw.apis ?? []).map((a: any) => ({
      ...(a.name !== undefined && { name: a.name }),
      method: a.method as "GET" | "POST" | "DELETE",
      ...(a.endpoint !== undefined && { endpoint: a.endpoint }),
      return: a.return,
      params: (a.params ?? []).map((p: any) => ({
        name: p.name,
        type: p.type,
        required: p.required,
        ...(p.is_file_param !== undefined && { is_file_param: p.is_file_param }),
      })),
      ...(a.allow_file_upload !== undefined && { allow_file_upload: a.allow_file_upload }),
      ...(a.use_graph_video_endpoint !== undefined && {
        use_graph_video_endpoint: a.use_graph_video_endpoint,
      }),
      ...(a.preferred_creation_endpoint !== undefined && {
        preferred_creation_endpoint: a.preferred_creation_endpoint,
      }),
    }));

    specs.set(nodeName, { name: nodeName, fields, apis });
  }

  return specs;
}

/**
 * Parses an API filter expression like:
 *   @.method=='POST' && @.endpoint=='insights'
 * Returns { method, endpoint } or null if unparseable.
 */
function parseApiFilter(filterExpr: string): { method: string; endpoint: string } | null {
  const methodMatch = filterExpr.match(/@\.method=='([^']+)'/);
  const endpointMatch = filterExpr.match(/@\.endpoint=='([^']+)'/);
  if (!methodMatch || !endpointMatch) return null;
  return { method: methodMatch[1], endpoint: endpointMatch[1] };
}

/**
 * Parses a param filter expression like:
 *   @.name=='video_file_chunk'
 * Returns the param name or null.
 */
function parseParamFilter(filterExpr: string): string | null {
  const nameMatch = filterExpr.match(/@\.name=='([^']+)'/);
  return nameMatch ? nameMatch[1] : null;
}

/**
 * Parses a field filter expression like:
 *   @.name=='payment_account_id'
 * Returns the field name or null.
 */
function parseFieldFilter(filterExpr: string): string | null {
  const nameMatch = filterExpr.match(/@\.name=='([^']+)'/);
  return nameMatch ? nameMatch[1] : null;
}

/**
 * Apply a single JSONPath-like patch path + patch object to a spec.
 * Supported patterns:
 *   $                                       => root-level flags (skip — handled elsewhere)
 *   $.apis[?(...)]                          => patch matching SpecApi
 *   $.apis[?(...)].params[?(...)]           => patch matching SpecParam inside matching SpecApi
 *   $.apis[?(...)][\u2018params\u2019][?(...)]  => same but with bracket notation
 *   $.fields[?(...)]                        => patch matching SpecField
 */
function applyPatch(spec: Spec, path: string, patch: Record<string, any>): void {
  // Root-level flag — skip (not part of Spec shape)
  if (path === "$") return;

  // $.fields[?(@.name=='X')]
  const fieldMatch = path.match(/^\$\.fields\[\?\((.+?)\)\]$/);
  if (fieldMatch) {
    const fieldName = parseFieldFilter(fieldMatch[1]);
    if (fieldName) {
      const field = spec.fields.find((f) => f.name === fieldName);
      if (field) {
        Object.assign(field, patch);
      }
    }
    return;
  }

  // $.apis[?(@.method=='X' && @.endpoint=='Y')].params[?(@.name=='Z')]
  // also handles ['params'] bracket notation
  const apiParamMatch = path.match(
    /^\$\.apis\[\?\((.+?)\)\](?:\.|\[')params(?:'\])?\[\?\((.+?)\)\]$/
  );
  if (apiParamMatch) {
    const apiFilter = parseApiFilter(apiParamMatch[1]);
    const paramName = parseParamFilter(apiParamMatch[2]);
    if (apiFilter && paramName) {
      for (const api of spec.apis) {
        if (api.method === apiFilter.method && api.endpoint === apiFilter.endpoint) {
          const param = api.params.find((p) => p.name === paramName);
          if (param) {
            Object.assign(param, patch);
          }
        }
      }
    }
    return;
  }

  // $.apis[?(@.method=='X' && @.endpoint=='Y')]
  const apiMatch = path.match(/^\$\.apis\[\?\((.+?)\)\]$/);
  if (apiMatch) {
    const apiFilter = parseApiFilter(apiMatch[1]);
    if (apiFilter) {
      for (const api of spec.apis) {
        if (api.method === apiFilter.method && api.endpoint === apiFilter.endpoint) {
          Object.assign(api, patch);
        }
      }
    }
    return;
  }
}

/**
 * Applies SDKCodegen.json patches to a specs map.
 * Returns a new Map with the patches applied (mutates specs in-place for simplicity).
 */
export async function applyPatches(
  specs: Map<string, Spec>,
  sdkCodegenPath: string
): Promise<Map<string, Spec>> {
  const absPath = sdkCodegenPath.startsWith("/")
    ? sdkCodegenPath
    : join(process.cwd(), sdkCodegenPath);
  const codegen = await Bun.file(absPath).json();

  const specOverriding: Record<string, Record<string, any>> = codegen.spec_overriding ?? {};

  for (const [nodeName, patches] of Object.entries(specOverriding)) {
    const spec = specs.get(nodeName);
    if (!spec) continue;

    for (const [path, patch] of Object.entries(patches)) {
      applyPatch(spec, path, patch as Record<string, any>);
    }
  }

  return specs;
}

/**
 * Extracts the read_endpoints mapping from SDKCodegen.json.
 * Returns Map<nodeName, endpoint>
 */
export async function loadReadEndpoints(sdkCodegenPath: string): Promise<Map<string, string>> {
  const absPath = sdkCodegenPath.startsWith("/")
    ? sdkCodegenPath
    : join(process.cwd(), sdkCodegenPath);
  const codegen = await Bun.file(absPath).json();
  const readEndpoints: Record<string, string> = codegen.read_endpoints ?? {};
  return new Map(Object.entries(readEndpoints));
}

/**
 * Extracts enum overrides from SDKCodegen.json.
 * Returns Map<enumName, string[]> where string[] are the enum values.
 */
export async function loadEnumOverrides(sdkCodegenPath: string): Promise<Map<string, string[]>> {
  const absPath = sdkCodegenPath.startsWith("/")
    ? sdkCodegenPath
    : join(process.cwd(), sdkCodegenPath);
  const codegen = await Bun.file(absPath).json();
  const enumOverriding: Record<string, { values: string[] }> = codegen.enum_overriding ?? {};
  return new Map(Object.entries(enumOverriding).map(([k, v]) => [k, v.values]));
}
