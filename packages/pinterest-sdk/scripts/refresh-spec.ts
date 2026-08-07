/**
 * Re-pin the Pinterest REST API v5 OpenAPI spec from Pinterest's official
 * api-description repo.
 *
 * Usage:
 *   bun scripts/refresh-spec.ts          # refresh to latest upstream commit
 *   bun scripts/refresh-spec.ts --check  # verify the pinned spec is unchanged
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("../", import.meta.url);
const UPSTREAM = "https://github.com/pinterest/api-description";
const SPEC_FILE = "pinterest-api-v5.openapi.yaml";

const checkOnly = process.argv.includes("--check");

const api =
  "https://api.github.com/repos/pinterest/api-description/commits?path=v5/openapi.yaml&per_page=1";
const commits = (await (await fetch(api, { headers: { "User-Agent": "openpromo" } })).json()) as {
  sha: string;
}[];
const sha = commits[0]?.sha;
if (!sha) throw new Error("Unable to resolve upstream spec commit");
const specUrl = `https://raw.githubusercontent.com/pinterest/api-description/${sha}/v5/openapi.yaml`;

const response = await fetch(specUrl);
if (!response.ok) {
  throw new Error(`Unable to fetch upstream spec: HTTP ${response.status}`);
}
const content = await response.text();
if (!content.includes("openapi: 3.") || !content.includes("Pinterest REST API")) {
  throw new Error("Fetched content does not look like the Pinterest REST API OpenAPI spec");
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
      `[pinterest-sdk] Pinned spec drift: upstream sha256=${sha256}, pinned sha256=${pinnedHash}`,
    );
    process.exit(1);
  }
  console.log(`[pinterest-sdk] Pinned spec is current (sha256=${sha256.slice(0, 12)}…)`);
  process.exit(0);
}

await writeFile(specPath, content, "utf8");
await writeFile(
  join(vendorDir, "source.json"),
  `${JSON.stringify(
    {
      schemaVersion: 1,
      source: UPSTREAM,
      commit: sha,
      license: "MIT",
      file: SPEC_FILE,
      sha256,
    },
    null,
    2,
  )}\n`,
  "utf8",
);
console.log(
  `[pinterest-sdk] Pinned spec updated to ${sha.slice(0, 10)} (sha256=${sha256.slice(0, 12)}…)`,
);
