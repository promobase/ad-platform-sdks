import { readFile } from "node:fs/promises";

const manifests = [
  "packages/linkedin-sdk/src/generated/effect/manifest.json",
  "packages/x-sdk/src/generated/effect/manifest.json",
  "packages/youtube-sdk/src/generated/effect/manifest.json",
  "packages/google-business-profile-sdk/src/generated/effect/manifest.json",
  "packages/meta-business-sdk/src/generated/effect/manifest.json",
  "packages/tiktok-business-sdk/src/generated/effect/manifest.json",
  "packages/google-ads-sdk/src/generated/v25/effect/manifest.json",
  "packages/snapchat-sdk/src/generated/effect/manifest.json",
  "packages/reddit-sdk/src/generated/effect/manifest.json",
  "packages/pinterest-sdk/src/generated/effect/manifest.json",
  "packages/amazon-ads-sdk/src/generated/sponsored-products/effect/manifest.json",
  "packages/amazon-ads-sdk/src/generated/sponsored-brands/effect/manifest.json",
  "packages/amazon-ads-sdk/src/generated/sponsored-display/effect/manifest.json",
  "packages/amazon-ads-sdk/src/generated/api/effect/manifest.json",
];

for (const path of manifests) {
  const manifest = JSON.parse(await readFile(path, "utf8"));
  const { counts, coverage, source, platform } = manifest;
  if (!coverage) throw new Error(`${path}: missing coverage ledger`);
  if (!source?.revision && !source?.checksum) {
    throw new Error(`${path}: source has neither a revision nor a checksum`);
  }
  const accounted = coverage.emittedOperations + coverage.excludedOperations.length;
  if (coverage.discoveredOperations !== accounted) {
    throw new Error(
      `${path}: discovered ${coverage.discoveredOperations}, but emitted plus excluded is ${accounted}`,
    );
  }
  if (counts.endpoints !== coverage.emittedOperations) {
    throw new Error(
      `${path}: manifest endpoint count ${counts.endpoints} does not match emitted ${coverage.emittedOperations}`,
    );
  }
  const exclusionIds = coverage.excludedOperations.map((operation) => operation.operationId);
  if (new Set(exclusionIds).size !== exclusionIds.length) {
    throw new Error(`${path}: duplicate excluded operation IDs`);
  }
  console.log(
    `${platform}: ${coverage.discoveredOperations} discovered, ${coverage.emittedOperations} emitted, ${coverage.excludedOperations.length} excluded, ${coverage.unresolvedSchemas.length} unresolved schemas`,
  );
}
