import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { parseSpecs, applyPatches } from "./parser.ts";
import type { Spec } from "./parser.ts";
import { resolveType, type TypeResolverContext } from "./type-resolver.ts";
import { extractAllEnums, type EnumMap } from "./enum-extractor.ts";
import { buildDepGraph, findCycles } from "./dep-graph.ts";
import { emitObjectFile, emitEnumType, specNameToFileName, type EmitContext } from "./emitter.ts";

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

  // Scan all spec fields and params for enum-like type patterns
  for (const [, spec] of specs) {
    for (const field of spec.fields) {
      const t = field.type.trim();
      // Field enums: match /^[A-Z]\w+_\w+$/ and not in knownObjects
      if (/^[A-Z]\w+_\w+$/.test(t) && !knownObjects.has(t)) {
        knownEnums.add(t);
      }
    }
    for (const api of spec.apis) {
      for (const param of api.params) {
        const t = param.type.trim();
        // Param enums: match /_enum_param$/ or /^[a-z]\w+_\w+$/
        if (/_enum_param$/.test(t) || /^[a-z]\w+_\w+$/.test(t)) {
          knownEnums.add(t);
        }
      }
    }
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

  // 10. Emit barrel index.ts
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

  // Re-export runtime exports
  barrelLines.push(`export { createClient } from "../runtime/index.ts";`);
  barrelLines.push(`export type { ApiClient, ApiClientOptions } from "../runtime/client.ts";`);
  barrelLines.push(`export { Cursor } from "../runtime/cursor.ts";`);
  barrelLines.push(`export { FacebookApiError } from "../runtime/errors.ts";`);
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
