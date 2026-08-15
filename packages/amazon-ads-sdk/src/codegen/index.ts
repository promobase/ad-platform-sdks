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
import { amazonAdsCanonicalIr } from "./ir.ts";
import { loadOpenApiSpec } from "./openapi.ts";

const VENDOR_DIR = join(import.meta.dir, "../../vendor");
const OUTPUT_DIR = join(import.meta.dir, "..", "generated");

const SPECS = [
  {
    name: "Sponsored Products",
    file: "SponsoredProducts_prod_3p.json",
    outputDir: "sponsored-products",
    platform: "amazon-ads-sp",
  },
  {
    name: "Sponsored Brands",
    file: "SponsoredBrands_prod_3p.json",
    outputDir: "sponsored-brands",
    platform: "amazon-ads-sb",
  },
  {
    name: "Sponsored Display",
    file: "SponsoredDisplay_prod_3p.json",
    outputDir: "sponsored-display",
    platform: "amazon-ads-sd",
  },
  {
    name: "Amazon Ads API",
    file: "AmazonAdsAPI_prod_3p.json",
    outputDir: "api",
    platform: "amazon-ads-api",
  },
];

async function main() {
  let totalEndpoints = 0;
  const allTags: Awaited<ReturnType<typeof emitTagClient>>[] = [];

  for (const specConfig of SPECS) {
    console.log(`[codegen] Loading ${specConfig.name} (${specConfig.file})...`);
    const spec = await loadOpenApiSpec(VENDOR_DIR, specConfig.file);
    console.log(
      `[codegen]   ${spec.endpoints.length} endpoints across ${new Set(spec.endpoints.map((e) => e.tag)).size} tags, ${spec.schemas.length} schemas`,
    );
    totalEndpoints += spec.endpoints.length;

    const byTag = new Map<string, typeof spec.endpoints>();
    for (const endpoint of spec.endpoints) {
      const existing = byTag.get(endpoint.tag) ?? [];
      existing.push(endpoint);
      byTag.set(endpoint.tag, existing);
    }

    const apiDir = join(OUTPUT_DIR, specConfig.outputDir);
    const endpointsDir = join(apiDir, "endpoints");
    await rm(endpointsDir, { recursive: true, force: true });
    await mkdir(endpointsDir, { recursive: true });

    await writeFile(
      join(apiDir, "types.ts"),
      emitSchemaInterfaces(spec.schemas) + emitResponseTypes(byTag, spec.schemas),
      "utf-8",
    );
    await writeFile(join(apiDir, "params.ts"), emitTagParamsTypes(byTag, spec.schemas), "utf-8");

    const tags: Awaited<ReturnType<typeof emitTagClient>>[] = [];
    for (const [tag, endpoints] of byTag) {
      const output = emitTagClient(endpoints, spec.schemas);
      tags.push(output);
      await writeFile(join(endpointsDir, `${output.fileName}.ts`), output.clientContent, "utf-8");
    }
    await writeFile(join(apiDir, "index.ts"), emitBarrel(tags), "utf-8");
    allTags.push(...tags);

    const specContent = await readFile(join(VENDOR_DIR, specConfig.file), "utf8");
    const sourceRevision = createHash("sha256").update(specContent).digest("hex");

    await writeFile(
      join(apiDir, "manifest.json"),
      `${JSON.stringify(
        {
          source: `https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest/${specConfig.file}`,
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

    console.log("[codegen]   Emitting Effect artifacts...");
    await writeEffectArtifacts({
      outputDir: join(apiDir, "effect"),
      contractOutputDir: apiDir,
      docsOutputDir: join(import.meta.dir, "../../../../apps/docs/src/content/docs/reference"),
      ir: amazonAdsCanonicalIr(
        spec.endpoints,
        spec.schemas,
        sourceRevision,
        specConfig.platform as
          | "amazon-ads-sp"
          | "amazon-ads-sb"
          | "amazon-ads-sd"
          | "amazon-ads-api",
      ),
    });
  }

  console.log(
    `\n[codegen] Done! Generated ${totalEndpoints} endpoints across ${SPECS.length} API specs`,
  );
  void allTags;
}

main().catch((err) => {
  console.error("[codegen] Fatal error:", err);
  process.exit(1);
});
