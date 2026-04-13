import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { emitBarrel, emitCategory, groupByCategory } from "./emitter.ts";
import { parseAllDocs } from "./parser.ts";
import { scrapeAllDocs } from "./scraper.ts";

const CACHE_DIR = join(import.meta.dir, "docs-cache");
const OUTPUT_DIR = join(import.meta.dir, "..", "generated");

async function main() {
  const forceRefresh = process.argv.includes("--refresh");

  // 1. Scrape docs (cached)
  console.log("[codegen] Step 1: Scraping TikTok Business API docs...");
  const docs = await scrapeAllDocs(CACHE_DIR, { forceRefresh });

  // 2. Parse into endpoint specs
  console.log("[codegen] Step 2: Parsing xtable markdown...");
  const endpoints = parseAllDocs(docs);

  // 3. Group by category
  const grouped = groupByCategory(endpoints);
  console.log(`[codegen] Step 3: Grouped into ${grouped.size} categories:`);
  for (const [cat, specs] of grouped) {
    console.log(`  - ${cat}: ${specs.length} endpoints`);
  }

  // 4. Create output directories
  const typesDir = join(OUTPUT_DIR, "types");
  const endpointsDir = join(OUTPUT_DIR, "endpoints");
  await mkdir(typesDir, { recursive: true });
  await mkdir(endpointsDir, { recursive: true });

  // 5. Emit per-category files
  console.log("[codegen] Step 4: Emitting TypeScript...");
  const categories: { fileName: string; typesContent: string; clientContent: string }[] = [];

  for (const [category, specs] of grouped) {
    const output = emitCategory(category, specs);
    categories.push(output);

    await writeFile(join(typesDir, `${output.fileName}.ts`), output.typesContent, "utf-8");
    await writeFile(join(endpointsDir, `${output.fileName}.ts`), output.clientContent, "utf-8");
    console.log(
      `  [emit] ${category} → types/${output.fileName}.ts + endpoints/${output.fileName}.ts (${specs.length} endpoints)`,
    );
  }

  // 6. Emit barrel index
  const barrelContent = emitBarrel(categories);
  await writeFile(join(OUTPUT_DIR, "index.ts"), barrelContent, "utf-8");

  // Summary
  const totalEndpoints = [...grouped.values()].reduce((sum, specs) => sum + specs.length, 0);
  console.log(
    `\n[codegen] Done! Generated ${totalEndpoints} endpoints across ${grouped.size} categories`,
  );
  console.log(`[codegen] Output: ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error("[codegen] Fatal error:", err);
  process.exit(1);
});
