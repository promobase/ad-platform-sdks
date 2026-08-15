import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { writeEffectArtifacts } from "@openpromo/sdk-codegen";

import {
  emitBarrel,
  emitResponseTypes,
  emitSchemaInterfaces,
  emitTagClient,
  emitTagParamsTypes,
} from "./emitter.ts";
import { pinterestCanonicalIr } from "./ir.ts";
import { loadOpenApiSpec } from "./openapi.ts";

const VENDOR_DIR = join(import.meta.dir, "../../vendor");
const OUTPUT_DIR = join(import.meta.dir, "..", "generated");

async function main() {
  console.log("[codegen] Step 1: Loading pinned OpenAPI spec...");
  const spec = await loadOpenApiSpec(VENDOR_DIR);
  console.log(
    `[codegen] Loaded ${spec.endpoints.length} endpoints across ${new Set(spec.endpoints.map((e) => e.tag)).size} tags, ${spec.schemas.length} schemas`,
  );

  const byTag = new Map<string, typeof spec.endpoints>();
  for (const endpoint of spec.endpoints) {
    const existing = byTag.get(endpoint.tag) ?? [];
    existing.push(endpoint);
    byTag.set(endpoint.tag, existing);
  }

  const endpointsDir = join(OUTPUT_DIR, "endpoints");
  await rm(endpointsDir, { recursive: true, force: true });
  await mkdir(endpointsDir, { recursive: true });

  console.log("[codegen] Step 2: Emitting types...");
  await writeFile(
    join(OUTPUT_DIR, "types.ts"),
    emitSchemaInterfaces(spec.schemas) + emitResponseTypes(byTag, spec.schemas),
    "utf-8",
  );
  await writeFile(join(OUTPUT_DIR, "params.ts"), emitTagParamsTypes(byTag, spec.schemas), "utf-8");

  console.log("[codegen] Step 3: Emitting endpoint clients...");
  const tags: Awaited<ReturnType<typeof emitTagClient>>[] = [];
  for (const [tag, endpoints] of byTag) {
    const output = emitTagClient(endpoints, spec.schemas);
    tags.push(output);
    await writeFile(join(endpointsDir, `${output.fileName}.ts`), output.clientContent, "utf-8");
    console.log(`  [emit] ${tag} → ${output.fileName}.ts (${endpoints.length} endpoints)`);
  }
  await writeFile(join(OUTPUT_DIR, "index.ts"), emitBarrel(tags), "utf-8");

  const specContent = await readFile(join(VENDOR_DIR, "pinterest-api-v5.openapi.yaml"), "utf8");
  const sourceRevision = createHash("sha256").update(specContent).digest("hex");

  await writeFile(
    join(OUTPUT_DIR, "manifest.json"),
    `${JSON.stringify(
      {
        source: "https://github.com/pinterest/api-description",
        specSha256: sourceRevision,
        endpoints: spec.endpoints.length,
        tags: [...byTag].map(([name, endpoints]) => ({ name, endpoints: endpoints.length })),
        schemas: spec.schemas.length,
      },
      null,
      2,
    )}\n`,
    "utf-8",
  );

  console.log("[codegen] Step 4: Emitting Effect artifacts...");
  await writeEffectArtifacts({
    outputDir: join(OUTPUT_DIR, "effect"),
    contractOutputDir: OUTPUT_DIR,
    docsOutputDir: join(import.meta.dir, "../../../../apps/docs/src/content/docs/reference"),
    ir: pinterestCanonicalIr(spec.endpoints, spec.schemas, sourceRevision),
  });

  console.log(
    `\n[codegen] Done! Generated ${spec.endpoints.length} endpoints across ${tags.length} tags`,
  );
}

main().catch((err) => {
  console.error("[codegen] Fatal error:", err);
  process.exit(1);
});
