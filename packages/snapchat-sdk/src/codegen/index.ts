import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { writeEffectArtifacts } from "@openpromo/sdk-codegen";

import { emitBarrel, emitPage, pageToFileName } from "./emitter.ts";
import { snapchatCanonicalIr } from "./ir.ts";
import { parseDoc } from "./parser.ts";
import { scrapeAllDocs } from "./scraper.ts";

const CACHE_DIR = join(import.meta.dir, "docs-cache");
const OUTPUT_DIR = join(import.meta.dir, "..", "generated");

async function main() {
  const forceRefresh = process.argv.includes("--refresh");

  console.log("[codegen] Step 1: Scraping Snapchat Marketing API docs...");
  const docs = await scrapeAllDocs(CACHE_DIR, { forceRefresh });

  console.log("[codegen] Step 2: Parsing docs into endpoint specs...");
  const endpoints = docs.flatMap((doc) => parseDoc(doc));
  console.log(`[codegen] Parsed ${endpoints.length} endpoints from ${docs.length} pages`);

  // Group by doc page (each page documents one resource family)
  const byPage = new Map<string, typeof endpoints>();
  for (const endpoint of endpoints) {
    const existing = byPage.get(endpoint.docId) ?? [];
    existing.push(endpoint);
    byPage.set(endpoint.docId, existing);
  }

  const typesDir = join(OUTPUT_DIR, "types");
  const endpointsDir = join(OUTPUT_DIR, "endpoints");
  await rm(typesDir, { recursive: true, force: true });
  await rm(endpointsDir, { recursive: true, force: true });
  await mkdir(typesDir, { recursive: true });
  await mkdir(endpointsDir, { recursive: true });

  console.log("[codegen] Step 3: Emitting TypeScript...");
  const pages: Awaited<ReturnType<typeof emitPage>>[] = [];
  for (const [docId, specs] of byPage) {
    const output = emitPage(specs);
    pages.push(output);
    await writeFile(join(typesDir, `${output.fileName}.ts`), output.typesContent, "utf-8");
    await writeFile(join(endpointsDir, `${output.fileName}.ts`), output.clientContent, "utf-8");
    console.log(`  [emit] ${docId} → ${output.fileName}.ts (${specs.length} endpoints)`);
  }

  const barrelContent = emitBarrel(pages);
  await writeFile(join(OUTPUT_DIR, "index.ts"), barrelContent, "utf-8");

  const sourceRevision = createHash("sha256")
    .update(
      [...docs]
        .sort((a, b) => a.docId.localeCompare(b.docId))
        .map((doc) => `${doc.docId}\0${doc.content}`)
        .join("\0"),
    )
    .digest("hex");

  await writeFile(
    join(OUTPUT_DIR, "manifest.json"),
    `${JSON.stringify(
      {
        source: "https://developers.snap.com/marketing-api",
        docPages: docs.length,
        endpoints: endpoints.length,
        pages: [...byPage].map(([docId, specs]) => ({
          docId,
          fileName: pageToFileName(docId),
          endpoints: specs.length,
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
    contractOutputDir: OUTPUT_DIR,
    docsOutputDir: join(import.meta.dir, "../../../../apps/docs/src/content/docs/reference"),
    ir: snapchatCanonicalIr(endpoints, sourceRevision),
  });

  console.log(
    `\n[codegen] Done! Generated ${endpoints.length} endpoints across ${pages.length} pages`,
  );
}

main().catch((err) => {
  console.error("[codegen] Fatal error:", err);
  process.exit(1);
});
