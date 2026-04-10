import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { parseSpecs, applyPatches } from "./parser.ts";
import type { Spec } from "./parser.ts";
import { resolveType, type TypeResolverContext } from "./type-resolver.ts";
import { extractAllEnums, type EnumMap } from "./enum-extractor.ts";
import { buildDepGraph, findCycles } from "./dep-graph.ts";
import { emitObjectFile, emitEnumType, specNameToFileName, type EmitContext } from "./emitter.ts";

function uncapitalize(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export interface CodegenOptions {
  specsDir: string;
  sdkCodegenPath: string;
  outputDir: string;
  enumSourceDir?: string; // Optional path to Node SDK's src/objects/ for enum scraping
}

export async function runCodegen(opts: CodegenOptions): Promise<void> {
  const { specsDir, sdkCodegenPath, outputDir, enumSourceDir } = opts;

  // 1. Parse specs
  console.log("[codegen] Parsing specs...");
  let specs = await parseSpecs(specsDir);
  console.log(`[codegen] Parsed ${specs.size} specs`);

  // 2. Apply patches
  console.log("[codegen] Applying patches...");
  specs = await applyPatches(specs, sdkCodegenPath);

  // 3. Optionally extract enums from Node SDK
  let extractedEnums: EnumMap = new Map();
  if (enumSourceDir) {
    console.log("[codegen] Extracting enums from Node SDK...");
    extractedEnums = await extractAllEnums(enumSourceDir);
    console.log(`[codegen] Extracted ${extractedEnums.size} enums`);
  }

  // 4. Build known sets
  const knownObjects = new Set(specs.keys());
  const knownEnums = new Set(extractedEnums.keys());

  // Only enums with actual values (from Node SDK scraping) are "known".
  // Without values, enum-like type names resolve to `string` via the fallback.

  console.log(`[codegen] Known objects: ${knownObjects.size}, known enums: ${knownEnums.size}`);

  // 5. Build dep graph + find cycles
  console.log("[codegen] Building dependency graph...");
  const depGraph = buildDepGraph(specs);
  const cycleNodes = findCycles(depGraph);
  console.log(`[codegen] Found ${cycleNodes.size} nodes in cycles`);

  // 6. Create output directories
  const objectsDir = join(outputDir, "objects");
  const enumsDir = join(outputDir, "enums");
  await mkdir(objectsDir, { recursive: true });
  await mkdir(enumsDir, { recursive: true });

  // 7. Build type resolver context
  const typeCtx: TypeResolverContext = { knownObjects, knownEnums };

  // 8. Emit object files
  console.log("[codegen] Emitting object files...");
  let objectCount = 0;
  for (const [name, spec] of specs) {
    const emitCtx: EmitContext = {
      spec,
      typeCtx,
      cycleNodes,
      allSpecs: specs,
    };
    const content = emitObjectFile(emitCtx);
    const fileName = specNameToFileName(name);
    const filePath = join(objectsDir, `${fileName}.ts`);
    await writeFile(filePath, content, "utf-8");
    objectCount++;
  }
  console.log(`[codegen] Emitted ${objectCount} object files`);

  // 9. Emit enum files
  console.log("[codegen] Emitting enum files...");
  let enumCount = 0;
  for (const [enumName, values] of extractedEnums) {
    const content = emitEnumType(enumName, values);
    const fileName = specNameToFileName(enumName);
    const filePath = join(enumsDir, `${fileName}.ts`);
    await writeFile(filePath, content, "utf-8");
    enumCount++;
  }
  console.log(`[codegen] Emitted ${enumCount} enum files`);

  // 10. Emit client-factory.ts
  console.log("[codegen] Emitting client-factory.ts...");
  const specsWithApis: { specName: string; fileName: string; fnName: string; methodName: string }[] = [];
  for (const [name, spec] of specs) {
    // Mirror the emitter's hasApis logic: only include specs where the emitter
    // actually generates a node factory function (nodeOps or edgeGroups exist)
    const nodeOps = spec.apis.filter((a) => a.name && a.name.startsWith("#"));
    const edgeApis = spec.apis.filter((a) => !a.name?.startsWith("#") && a.endpoint);
    const edgeEndpoints = new Set(edgeApis.map((a) => a.endpoint));
    if (nodeOps.length > 0 || edgeEndpoints.size > 0) {
      const fileName = specNameToFileName(name);
      const fnName = `${uncapitalize(name)}Node`;
      const methodName = uncapitalize(name);
      specsWithApis.push({ specName: name, fileName, fnName, methodName });
    }
  }

  const factoryLines: string[] = [];
  factoryLines.push("// Auto-generated client factory — do not edit");
  factoryLines.push("");
  factoryLines.push(`import { ApiClient } from "@promobase/sdk-runtime";`);
  factoryLines.push(`import type { ApiClientOptions as BaseOptions } from "@promobase/sdk-runtime";`);
  factoryLines.push(`import { FacebookApiError } from "../errors.ts";`);
  factoryLines.push(`import { BatchBuilder, executeBatch, type BatchHandle, type ResolveBatchHandles } from "../batch.ts";`);

  for (const { fnName, fileName } of specsWithApis) {
    factoryLines.push(`import { ${fnName} } from "./objects/${fileName}.ts";`);
  }

  factoryLines.push("");
  factoryLines.push("export interface MetaClientOptions extends Omit<BaseOptions, 'baseUrl' | 'onError'> {");
  factoryLines.push("  baseUrl?: string;");
  factoryLines.push("  apiVersion?: string;");
  factoryLines.push("}");
  factoryLines.push("");
  factoryLines.push("export function createTypedClient(opts: MetaClientOptions) {");
  factoryLines.push("  const client = new ApiClient({");
  factoryLines.push("    ...opts,");
  factoryLines.push(`    baseUrl: opts.baseUrl ?? "https://graph.facebook.com",`);
  factoryLines.push("    onError: FacebookApiError.fromResponse,");
  factoryLines.push("  });");
  factoryLines.push("  return {");

  for (const { fnName, methodName } of specsWithApis) {
    factoryLines.push(`    ${methodName}: (id: string) => ${fnName}(client, id),`);
  }

  factoryLines.push(`    batch: async <T extends Record<string, BatchHandle<unknown>>>(fn: (b: BatchBuilder) => T): Promise<ResolveBatchHandles<T>> => {`);
  factoryLines.push(`      const builder = new BatchBuilder();`);
  factoryLines.push(`      const handles = fn(builder);`);
  factoryLines.push(`      return executeBatch(client, opts.apiVersion ?? "v25.0", builder, handles);`);
  factoryLines.push(`    },`);
  factoryLines.push("    client,");
  factoryLines.push("  };");
  factoryLines.push("}");
  factoryLines.push("");

  const factoryPath = join(outputDir, "client-factory.ts");
  await writeFile(factoryPath, factoryLines.join("\n"), "utf-8");
  console.log(`[codegen] Emitted client-factory.ts with ${specsWithApis.length} node accessors`);

  // 11. Emit barrel index.ts
  console.log("[codegen] Emitting barrel index.ts...");
  const barrelLines: string[] = [];
  barrelLines.push("// Auto-generated barrel file — do not edit");
  barrelLines.push("");

  // Re-export all object types
  for (const [name] of specs) {
    const fileName = specNameToFileName(name);
    const fieldsType = `${name}Fields`;
    barrelLines.push(`export type { ${fieldsType} } from "./objects/${fileName}.ts";`);
  }

  barrelLines.push("");

  // Re-export createTypedClient as createClient
  barrelLines.push(`export { createTypedClient as createClient } from "./client-factory.ts";`);
  barrelLines.push(`export type { MetaClientOptions } from "./client-factory.ts";`);
  barrelLines.push(`export type { ApiClient, ApiClientOptions } from "@promobase/sdk-runtime";`);
  barrelLines.push(`export { Cursor } from "@promobase/sdk-runtime";`);
  barrelLines.push(`export { FacebookApiError } from "../errors.ts";`);
  barrelLines.push(`export { BatchBuilder, type BatchHandle, type ResolveBatchHandles } from "../batch.ts";`);
  barrelLines.push(`export { createInstagramClient, createInstagramOAuth } from "../clients/index.ts";`);
  barrelLines.push(`export type { InstagramClientOptions, InstagramOAuthConfig } from "../clients/index.ts";`);
  barrelLines.push(`export { createFacebookPageClient, createFacebookOAuth } from "../clients/index.ts";`);
  barrelLines.push(`export type { FacebookPageClientOptions, FacebookOAuthConfig } from "../clients/index.ts";`);
  barrelLines.push(`export { createThreadsClient, createThreadsOAuth } from "../clients/index.ts";`);
  barrelLines.push(`export type { ThreadsClientOptions, ThreadsOAuthConfig } from "../clients/index.ts";`);
  barrelLines.push(`export { verifyWebhookChallenge, verifyWebhookSignature } from "../clients/index.ts";`);
  barrelLines.push("");

  const barrelPath = join(outputDir, "index.ts");
  await writeFile(barrelPath, barrelLines.join("\n"), "utf-8");

  console.log("[codegen] Done!");
}

// CLI entry point
if (import.meta.main) {
  await runCodegen({
    specsDir: "api_specs/api_specs/specs",
    sdkCodegenPath: "api_specs/api_specs/SDKCodegen.json",
    outputDir: "src/generated",
  });
}
