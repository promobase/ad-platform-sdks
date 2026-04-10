import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { parseSpecs, applyPatches } from "./parser.ts";
import type { Spec } from "./parser.ts";
import { resolveType, enumTypeToTsName, type TypeResolverContext } from "./type-resolver.ts";
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

  // 3. Extract enums: from live Node SDK dir, or from cached enums.json
  let extractedEnums: EnumMap = new Map();
  if (enumSourceDir) {
    console.log("[codegen] Extracting enums from Node SDK...");
    extractedEnums = await extractAllEnums(enumSourceDir);
    console.log(`[codegen] Extracted ${extractedEnums.size} enums`);
  } else {
    // Load from cached enums.json
    try {
      const cached = await Bun.file(join(import.meta.dir, "enums.json")).json();
      for (const [key, values] of Object.entries(cached)) {
        extractedEnums.set(key, values as string[]);
      }
      console.log(`[codegen] Loaded ${extractedEnums.size} enums from cache`);
    } catch {
      console.log("[codegen] No cached enums found, enum types will resolve to string");
    }
  }

  // 4. Build known sets
  const knownObjects = new Set(specs.keys());

  // The Node SDK uses PascalCase enum names (e.g. Campaign_BidStrategy) while
  // the API specs use snake_case (e.g. Campaign_bid_strategy). Both normalize
  // to the same PascalCase TS name via enumTypeToTsName. Store the normalized
  // TsNames in knownEnums so the type resolver can match either form.
  const enumTsNames = new Set<string>();
  const knownEnums = new Set<string>();
  for (const key of extractedEnums.keys()) {
    const tsName = enumTypeToTsName(key);
    enumTsNames.add(tsName);
    knownEnums.add(tsName);
  }

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
      enumTsNames,
    };
    const content = emitObjectFile(emitCtx);
    const fileName = specNameToFileName(name);
    const filePath = join(objectsDir, `${fileName}.ts`);
    await writeFile(filePath, content, "utf-8");
    objectCount++;
  }
  console.log(`[codegen] Emitted ${objectCount} object files`);

  // 9. Emit single enums.ts with all enum types
  console.log("[codegen] Emitting enums.ts...");
  let enumCount = 0;
  const enumLines: string[] = ["// Auto-generated enum types — do not edit", ""];
  for (const [enumKey, values] of extractedEnums) {
    const tsName = enumTypeToTsName(enumKey);
    enumLines.push(emitEnumType(tsName, values));
    enumCount++;
  }
  const enumsFilePath = join(outputDir, "enums.ts");
  await writeFile(enumsFilePath, enumLines.join("\n"), "utf-8");
  console.log(`[codegen] Emitted ${enumCount} enum types into enums.ts`);

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
  factoryLines.push("  rateLimiter?: import('@promobase/sdk-runtime').RateLimiter;");
  factoryLines.push("  delay?: import('@promobase/sdk-runtime').DelayFn;");
  factoryLines.push("  retry?: Partial<import('@promobase/sdk-runtime').RetryConfig>;");
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

  // Re-export all enum types
  if (extractedEnums.size > 0) {
    barrelLines.push(`export type * from "./enums.ts";`);
    barrelLines.push("");
  }

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
  barrelLines.push(`export { verifyWebhookChallenge, verifyWebhookSignature, parseInstagramWebhook, parseFacebookWebhook, parseThreadsWebhook } from "../clients/index.ts";`);
  barrelLines.push(`export type { IGWebhookPayload, IGWebhookMessagingEvent, IGWebhookChange, FBWebhookPayload, FBWebhookMessagingEvent, FBWebhookChange, ThreadsWebhookPayload } from "../clients/index.ts";`);
  barrelLines.push(`export { igWebhookPayloadSchema, igWebhookMessagingEventSchema, igWebhookChangeSchema, igWebhookCommentChangeSchema, igWebhookMessageEditChangeSchema, igWebhookMessageReactionChangeSchema, igWebhookMessageSchema, igWebhookAttachmentSchema, igWebhookReadSchema, igWebhookReactionSchema, fbWebhookPayloadSchema, fbWebhookMessagingEventSchema, fbWebhookMessageSchema, fbWebhookCommentChangeSchema, threadsWebhookPayloadSchema } from "../clients/index.ts";`);
  barrelLines.push(`export { safeParseInstagramWebhook, safeParseFacebookWebhook, safeParseThreadsWebhook, WebhookParseError } from "../clients/index.ts";`);
  barrelLines.push(`export type { WebhookParseResult } from "../clients/index.ts";`);
  barrelLines.push(`export { MetaRateLimiter } from "../rate-limiter.ts";`);
  barrelLines.push(`export type { MetaRateLimiterOptions, MetaUsage } from "../rate-limiter.ts";`);
  barrelLines.push(`export { Meta } from "../namespace.ts";`);
  barrelLines.push(`export { createMetaTools, createInstagramTools, createFacebookTools, createThreadsTools, createCampaignTools } from "../ai/index.ts";`);
  barrelLines.push(`export type { CreateMetaToolsOptions } from "../ai/index.ts";`);
  barrelLines.push(`export { withMiddleware } from "../ai/middleware.ts";`);
  barrelLines.push(`export type { ToolMiddleware, ToolCallContext } from "../ai/middleware.ts";`);
  barrelLines.push(`export { filterTools, filterToolsByName, limitTools, getToolCategories, getAvailableCategories } from "../ai/filter.ts";`);
  barrelLines.push(`export type { ToolCategory } from "../ai/filter.ts";`);
  barrelLines.push(`export { createRouter } from "../ai/router.ts";`);
  barrelLines.push(`export type { RouterOptions } from "../ai/router.ts";`);
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
