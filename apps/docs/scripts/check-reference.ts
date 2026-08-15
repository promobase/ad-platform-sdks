import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface Counts {
  readonly endpoints: number;
  readonly models: number;
  readonly capabilities: number;
}

interface EffectManifest {
  readonly platform: string;
  readonly version: string;
  readonly counts: Counts;
}

interface ReferenceManifest {
  readonly schemaVersion: 1;
  readonly platform: string;
  readonly version: string;
  readonly endpointCount: number;
  readonly modelCount: number;
  readonly capabilityCount: number;
  readonly endpointPages: readonly string[];
  readonly modelPages: readonly string[];
}

const root = resolve(fileURLToPath(new URL(".", import.meta.url)), "../../..");
const referenceRoot = join(root, "apps/docs/src/content/docs/reference");
const effectManifests: Record<string, string> = {
  facebook: "packages/meta-business-sdk/src/generated/effect/manifest.json",
  tiktok: "packages/tiktok-business-sdk/src/generated/effect/manifest.json",
  snapchat: "packages/snapchat-sdk/src/generated/effect/manifest.json",
  reddit: "packages/reddit-sdk/src/generated/effect/manifest.json",
  pinterest: "packages/pinterest-sdk/src/generated/effect/manifest.json",
  bluesky: "packages/bluesky-sdk/src/generated/effect/manifest.json",
  "google-ads": "packages/google-ads-sdk/src/generated/v25/effect/manifest.json",
  "google-business-profile":
    "packages/google-business-profile-sdk/src/generated/effect/manifest.json",
  linkedin: "packages/linkedin-sdk/src/generated/effect/manifest.json",
  x: "packages/x-sdk/src/generated/effect/manifest.json",
  youtube: "packages/youtube-sdk/src/generated/effect/manifest.json",
  "amazon-ads-sp": "packages/amazon-ads-sdk/src/generated/sponsored-products/effect/manifest.json",
  "amazon-ads-sb": "packages/amazon-ads-sdk/src/generated/sponsored-brands/effect/manifest.json",
  "amazon-ads-sd": "packages/amazon-ads-sdk/src/generated/sponsored-display/effect/manifest.json",
  "amazon-ads-api": "packages/amazon-ads-sdk/src/generated/api/effect/manifest.json",
};

const platformDirs = (await readdir(referenceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const expectedPlatforms = Object.keys(effectManifests).sort();
assertEqual(platformDirs, expectedPlatforms, "generated platform directories");

let endpointTotal = 0;
let modelTotal = 0;
let capabilityTotal = 0;

for (const platform of expectedPlatforms) {
  const effect = await readJson<EffectManifest>(join(root, effectManifests[platform]!));
  const reference = await readJson<ReferenceManifest>(
    join(referenceRoot, platform, "reference-manifest.json"),
  );

  if (
    reference.schemaVersion !== 1 ||
    effect.platform !== platform ||
    reference.platform !== platform
  ) {
    throw new Error(`${platform}: manifest identity mismatch`);
  }
  if (reference.version !== effect.version) {
    throw new Error(
      `${platform}: docs version ${reference.version} does not match Effect ${effect.version}`,
    );
  }

  const referenceCounts: Counts = {
    endpoints: reference.endpointCount,
    models: reference.modelCount,
    capabilities: reference.capabilityCount,
  };
  if (
    referenceCounts.endpoints !== effect.counts.endpoints ||
    referenceCounts.models !== effect.counts.models ||
    referenceCounts.capabilities !== effect.counts.capabilities
  ) {
    throw new Error(
      `${platform} coverage mismatch:\nactual: ${JSON.stringify(referenceCounts)}\nexpected: ${JSON.stringify(effect.counts)}`,
    );
  }

  const endpointHeadings = await countHeadings(platform, reference.endpointPages);
  const modelHeadings = await countHeadings(platform, reference.modelPages);
  if (endpointHeadings !== reference.endpointCount) {
    throw new Error(
      `${platform}: found ${endpointHeadings} documented endpoints, expected ${reference.endpointCount}`,
    );
  }
  if (modelHeadings !== reference.modelCount) {
    throw new Error(
      `${platform}: found ${modelHeadings} documented models, expected ${reference.modelCount}`,
    );
  }

  endpointTotal += reference.endpointCount;
  modelTotal += reference.modelCount;
  capabilityTotal += reference.capabilityCount;
}

console.log(
  `Reference coverage verified: ${expectedPlatforms.length} platforms, ${endpointTotal} endpoints, ${modelTotal} models, ${capabilityTotal} capabilities.`,
);

async function countHeadings(platform: string, pages: readonly string[]): Promise<number> {
  let count = 0;
  for (const page of pages) {
    const source = await readFile(join(referenceRoot, platform, page, "index.mdx"), "utf8");
    count += source.match(/^## /gm)?.length ?? 0;
  }
  return count;
}

async function readJson<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(path, "utf8")) as T;
}

function assertEqual(actual: unknown, expected: unknown, label: string): void {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `${label} mismatch:\nactual: ${JSON.stringify(actual)}\nexpected: ${JSON.stringify(expected)}`,
    );
  }
}
