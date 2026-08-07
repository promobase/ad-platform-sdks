/**
 * Re-pin the Reddit Ads API OpenAPI spec from the upstream community repo.
 *
 * The upstream spec is derived from Reddit's official Postman collection and
 * official documentation. We pin a commit so codegen is reproducible.
 *
 * Usage:
 *   bun scripts/refresh-spec.ts          # refresh to latest upstream commit
 *   bun scripts/refresh-spec.ts --check  # verify the pinned spec is unchanged
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("../", import.meta.url);
const UPSTREAM = "https://github.com/nanobanana123/reddit-ads-api";
const SPEC_FILE = "reddit-ads-api-v3.openapi.yaml";
const SPEC_URL = `${UPSTREAM}/raw/HEAD/openapi.yaml`;

const checkOnly = process.argv.includes("--check");

const response = await fetch(SPEC_URL);
if (!response.ok) {
  throw new Error(`Unable to fetch upstream spec: HTTP ${response.status}`);
}
const content = await response.text();
if (!content.includes("openapi: 3.") || !content.includes("Reddit Ads API")) {
  throw new Error("Fetched content does not look like the Reddit Ads API OpenAPI spec");
}

const sha256 = createHash("sha256").update(content).digest("hex");
const vendorDir = join(ROOT.pathname, "vendor");
const specPath = join(vendorDir, SPEC_FILE);
await mkdir(vendorDir, { recursive: true });

if (checkOnly) {
  const pinned = await readFile(specPath, "utf8");
  const pinnedHash = createHash("sha256").update(pinned).digest("hex");
  if (pinnedHash !== sha256) {
    console.error(
      `[reddit-sdk] Pinned spec drift: upstream sha256=${sha256}, pinned sha256=${pinnedHash}`,
    );
    process.exit(1);
  }
  console.log(`[reddit-sdk] Pinned spec is current (sha256=${sha256.slice(0, 12)}…)`);
  process.exit(0);
}

await writeFile(specPath, content, "utf8");
await writeFile(
  join(vendorDir, "source.json"),
  `${JSON.stringify(
    {
      schemaVersion: 1,
      source: UPSTREAM,
      commit: "HEAD",
      license: "MIT",
      file: SPEC_FILE,
      sha256,
    },
    null,
    2,
  )}\n`,
  "utf8",
);
console.log(`[reddit-sdk] Pinned spec updated (sha256=${sha256.slice(0, 12)}…)`);
