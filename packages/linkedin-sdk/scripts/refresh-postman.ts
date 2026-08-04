import {
  normalizeCollection,
  type LinkedInPostmanSnapshot,
  type SourceManifest,
} from "./postman.ts";

const root = new URL("../", import.meta.url);
const manifest = (await Bun.file(
  new URL("spec/postman-sources.json", root),
).json()) as SourceManifest;
const checkOnly = process.argv.includes("--check");
const sources: LinkedInPostmanSnapshot["sources"][number][] = [];
const operations: LinkedInPostmanSnapshot["operations"][number][] = [];

for (const source of manifest.collections) {
  const response = await fetch(`https://www.postman.com/collections/${source.uid}`);
  if (!response.ok) throw new Error(`Unable to fetch ${source.name}: HTTP ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  const sha256 = new Bun.CryptoHasher("sha256").update(bytes).digest("hex");
  const collection = JSON.parse(new TextDecoder().decode(bytes)) as Parameters<
    typeof normalizeCollection
  >[1];
  if (collection.info?.name !== source.name) {
    throw new Error(
      `Expected ${source.name}, received ${collection.info?.name ?? "unnamed collection"}`,
    );
  }
  if (!/collection\/v2\.[01]\.0/.test(collection.info?.schema ?? "")) {
    throw new Error(`${source.name} is not a supported Postman collection v2.0/v2.1 export`);
  }
  const normalized = normalizeCollection(source, collection);
  sources.push({
    name: source.name,
    uid: source.uid,
    sha256,
    requestCount: normalized.length,
    excludedRequestCount: source.excludedRequests?.length ?? 0,
  });
  operations.push(...normalized);
}

const snapshot: LinkedInPostmanSnapshot = {
  schemaVersion: 1,
  apiVersion: manifest.apiVersion,
  workspace: manifest.workspace,
  generatedAt: new Date().toISOString(),
  sources,
  excludedOperations: manifest.collections.flatMap((source) =>
    (source.excludedRequests ?? []).map((exclusion) => ({
      collection: source.name,
      ...exclusion,
    })),
  ),
  operations,
};

const snapshotUrl = new URL("spec/linkedin-postman.snapshot.json", root);
if (checkOnly) {
  const current = (await Bun.file(snapshotUrl).json()) as LinkedInPostmanSnapshot;
  if (JSON.stringify(current.sources) !== JSON.stringify(snapshot.sources)) {
    throw new Error(
      "Official LinkedIn Postman source hashes or request counts have drifted; run bun run codegen:refresh and review the diff.",
    );
  }
  console.log(
    `Verified ${operations.length} requests from ${sources.length} official collections.`,
  );
} else {
  await Bun.write(snapshotUrl, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(
    `Captured ${operations.length} requests from ${sources.length} official collections.`,
  );
}
