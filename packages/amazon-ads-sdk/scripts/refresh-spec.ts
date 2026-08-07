/**
 * Re-pin the four Amazon Ads API v3 OpenAPI specs from Amazon's official
 * docs CloudFront distribution.
 *
 * Usage:
 *   bun scripts/refresh-spec.ts          # refresh all pinned specs
 *   bun scripts/refresh-spec.ts --check  # verify the pinned specs are unchanged
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("../", import.meta.url);
const BASE = "https://dtrnk0o2zy01c.cloudfront.net/openapi/en-us/dest";
const SPECS = ["SponsoredProducts", "SponsoredBrands", "SponsoredDisplay", "AmazonAdsAPI"];

const checkOnly = process.argv.includes("--check");

const vendorDir = join(ROOT.pathname, "vendor");
await mkdir(vendorDir, { recursive: true });
const manifest = {
  schemaVersion: 1,
  source: `${BASE}/`,
  license: "Amazon Advertising API Terms",
  specs: [] as { name: string; file: string; version: string; sha256: string }[],
};

for (const name of SPECS) {
  const file = `${name}_prod_3p.json`;
  const response = await fetch(`${BASE}/${file}`);
  if (!response.ok) {
    throw new Error(`Unable to fetch ${file}: HTTP ${response.status}`);
  }
  const content = await response.text();
  if (!content.includes("openapi") || !content.includes("components")) {
    throw new Error(`Fetched content for ${file} does not look like an OpenAPI spec`);
  }
  const sha256 = createHash("sha256").update(content).digest("hex");
  let version = "?";
  try {
    version = (JSON.parse(content).info ?? {}).version ?? "?";
  } catch {
    /* keep "?" */
  }

  if (checkOnly) {
    const pinned = await readFile(join(vendorDir, file), "utf8");
    const pinnedHash = createHash("sha256").update(pinned).digest("hex");
    if (pinnedHash !== sha256) {
      console.error(
        `[amazon-ads-sdk] Pinned spec drift: ${file} upstream sha256=${sha256}, pinned sha256=${pinnedHash}`,
      );
      process.exit(1);
    }
  } else {
    await writeFile(join(vendorDir, file), content, "utf8");
  }
  manifest.specs.push({ name, file, version, sha256 });
  console.log(`[amazon-ads-sdk] ${file} v${version} (sha256=${sha256.slice(0, 12)}…)`);
}

await writeFile(join(vendorDir, "source.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(
  `[amazon-ads-sdk] ${checkOnly ? "All pinned specs are current" : "Pinned specs updated"}`,
);
