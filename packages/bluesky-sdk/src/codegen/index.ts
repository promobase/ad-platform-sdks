import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { writeEffectArtifacts } from "@mosaic/sdk-codegen";

import {
  emitBarrel,
  emitResponseTypes,
  emitSchemaInterfaces,
  emitSectionClient,
  emitTagParamsTypes,
  namespaceToSection,
  planGlobalNames,
} from "./emitter.ts";
import { blueskyCanonicalIr } from "./ir.ts";
import { loadLexicons } from "./lexicon.ts";

const VENDOR_DIR = join(import.meta.dir, "../../vendor");
const OUTPUT_DIR = join(import.meta.dir, "..", "generated");

async function main() {
  console.log("[codegen] Step 1: Loading pinned AT Protocol lexicons...");
  const spec = await loadLexicons(VENDOR_DIR);
  console.log(
    `[codegen] Loaded ${spec.endpoints.length} endpoints across ${new Set(spec.endpoints.map((e) => e.namespace)).size} namespaces, ${Object.keys(spec.schemas).length} schemas`,
  );

  const bySection = new Map<string, typeof spec.endpoints>();
  for (const endpoint of spec.endpoints) {
    const section = namespaceToSection(endpoint.namespace);
    const existing = bySection.get(section) ?? [];
    existing.push(endpoint);
    bySection.set(section, existing);
  }

  const endpointsDir = join(OUTPUT_DIR, "endpoints");
  await rm(endpointsDir, { recursive: true, force: true });
  await mkdir(endpointsDir, { recursive: true });
  const nameByOp = planGlobalNames(bySection);

  console.log("[codegen] Step 2: Emitting types...");
  await writeFile(
    join(OUTPUT_DIR, "types.ts"),
    emitSchemaInterfaces(spec.schemas) + emitResponseTypes(bySection, nameByOp),
    "utf-8",
  );
  await writeFile(
    join(OUTPUT_DIR, "params.ts"),
    emitTagParamsTypes(bySection, spec.schemas, nameByOp),
    "utf-8",
  );

  console.log("[codegen] Step 3: Emitting endpoint clients...");
  const sections: Awaited<ReturnType<typeof emitSectionClient>>[] = [];
  for (const [section, endpoints] of bySection) {
    const output = emitSectionClient(endpoints, spec.schemas, (op) => nameByOp.get(op)!);
    sections.push(output);
    await writeFile(join(endpointsDir, `${output.fileName}.ts`), output.clientContent, "utf-8");
    console.log(`  [emit] ${section} → ${output.fileName}.ts (${endpoints.length} endpoints)`);
  }
  await writeFile(join(OUTPUT_DIR, "index.ts"), emitBarrel(sections), "utf-8");

  const sourceManifest = JSON.parse(await readFile(join(VENDOR_DIR, "source.json"), "utf8")) as {
    commit: string;
    fileCount: number;
  };
  const sourceRevision = createHash("sha256")
    .update(`${sourceManifest.commit}\0${sourceManifest.fileCount}`)
    .digest("hex");

  await writeFile(
    join(OUTPUT_DIR, "manifest.json"),
    `${JSON.stringify(
      {
        source: "https://github.com/bluesky-social/atproto/tree/main/lexicons",
        commit: sourceManifest.commit,
        lexicons: sourceManifest.fileCount,
        endpoints: spec.endpoints.length,
        sections: [...bySection].map(([name, endpoints]) => ({
          name,
          endpoints: endpoints.length,
        })),
      },
      null,
      2,
    )}\n`,
    "utf-8",
  );

  console.log("[codegen] Step 4: Emitting Effect artifacts...");
  await writeEffectArtifacts({
    outputDir: join(OUTPUT_DIR, "effect"),
    docsOutputDir: join(import.meta.dir, "../../../../apps/docs/src/content/docs/reference"),
    ir: blueskyCanonicalIr(spec.endpoints, spec.schemas, sourceRevision),
  });

  console.log(
    `\n[codegen] Done! Generated ${spec.endpoints.length} endpoints across ${sections.length} sections`,
  );
}

main().catch((err) => {
  console.error("[codegen] Fatal error:", err);
  process.exit(1);
});
