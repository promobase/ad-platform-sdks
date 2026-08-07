/**
 * Pin the AT Protocol lexicons from bluesky-social/atproto.
 *
 * Lexicons are the machine-readable API definitions (XRPC queries/procedures
 * plus record schemas). We vendor the `com.atproto.*` and `app.bsky.*`
 * namespaces, which are what the main PDS and bsky.app API serve.
 *
 * Usage:
 *   bun scripts/refresh-lexicons.ts          # refresh from upstream main
 *   bun scripts/refresh-lexicons.ts --check  # verify the pinned lexicons are unchanged
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";

const ROOT = new URL("../", import.meta.url);
const UPSTREAM = "https://github.com/bluesky-social/atproto";
const NAMESPACES = ["com/atproto", "app/bsky"];

const checkOnly = process.argv.includes("--check");

const tree = (await (
  await fetch("https://api.github.com/repos/bluesky-social/atproto/git/trees/main?recursive=1", {
    headers: { "User-Agent": "openpromo" },
  })
).json()) as { tree: { path: string; type: string }[]; sha: string };

const commitSha = tree.sha;
const lexiconPaths = tree.tree
  .filter(
    (entry) =>
      entry.type === "blob" &&
      entry.path.startsWith("lexicons/") &&
      entry.path.endsWith(".json") &&
      NAMESPACES.some((ns) => entry.path.startsWith(`lexicons/${ns}`)),
  )
  .map((entry) => entry.path)
  .sort();

if (lexiconPaths.length === 0) {
  throw new Error("No lexicons found in the upstream tree");
}

const vendorDir = join(ROOT.pathname, "vendor", "lexicons");
const manifest = {
  schemaVersion: 1,
  source: UPSTREAM,
  commit: commitSha,
  files: [] as { path: string; sha256: string }[],
};

let drifted = false;
for (const path of lexiconPaths) {
  const url = `https://raw.githubusercontent.com/bluesky-social/atproto/${commitSha}/${path}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unable to fetch ${path}: HTTP ${response.status}`);
  }
  const content = await response.text();
  if (!content.includes('"lexicon"')) {
    throw new Error(`Fetched content for ${path} does not look like a lexicon`);
  }
  const sha256 = createHash("sha256").update(content).digest("hex");
  manifest.files.push({ path: path.replace(/^lexicons\//, ""), sha256 });

  const dest = join(vendorDir, path.replace(/^lexicons\//, ""));
  if (checkOnly) {
    const pinned = await readFile(dest, "utf8").catch(() => null);
    if (pinned === null || createHash("sha256").update(pinned).digest("hex") !== sha256) {
      console.error(`[bluesky-sdk] Lexicon drift: ${path}`);
      drifted = true;
    }
  } else {
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, content, "utf8");
  }
}

await writeFile(
  join(vendorDir, "..", "source.json"),
  `${JSON.stringify({ ...manifest, files: undefined, fileCount: manifest.files.length }, null, 2)}\n`,
  "utf8",
);

if (checkOnly) {
  if (drifted) {
    console.error("[bluesky-sdk] Pinned lexicons have drifted from upstream");
    process.exit(1);
  }
  console.log(`[bluesky-sdk] ${manifest.files.length} pinned lexicons are current`);
} else {
  console.log(
    `[bluesky-sdk] Pinned ${manifest.files.length} lexicons at ${commitSha.slice(0, 10)}`,
  );
}
