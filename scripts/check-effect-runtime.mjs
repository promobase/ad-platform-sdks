const entries = [
  ["runtime", "packages/sdk-runtime/src/effect.ts", undefined, 500_000, 500],
  [
    "meta",
    "packages/meta-business-sdk/src/generated/effect/index.ts",
    "packages/meta-business-sdk/src/generated/effect/manifest.json",
    2_600_000,
    1_000,
    1_400,
  ],
  [
    "tiktok",
    "packages/tiktok-business-sdk/src/generated/effect/index.ts",
    "packages/tiktok-business-sdk/src/generated/effect/manifest.json",
    2_000_000,
    1_000,
    500,
  ],
  [
    "google-ads",
    "packages/google-ads-sdk/src/generated/v25/effect/index.ts",
    "packages/google-ads-sdk/src/generated/v25/effect/manifest.json",
    1_250_000,
    1_000,
    150,
  ],
  [
    "youtube",
    "packages/youtube-sdk/src/generated/effect/index.ts",
    "packages/youtube-sdk/src/generated/effect/manifest.json",
    650_000,
    750,
    30,
  ],
  [
    "x",
    "packages/x-sdk/src/generated/effect/index.ts",
    "packages/x-sdk/src/generated/effect/manifest.json",
    800_000,
    750,
    14,
  ],
  [
    "linkedin",
    "packages/linkedin-sdk/src/generated/effect/index.ts",
    "packages/linkedin-sdk/src/generated/effect/manifest.json",
    700_000,
    750,
    18,
  ],
  [
    "google-business-profile",
    "packages/google-business-profile-sdk/src/generated/effect/index.ts",
    "packages/google-business-profile-sdk/src/generated/effect/manifest.json",
    750_000,
    750,
    11,
  ],
  [
    "snapchat",
    "packages/snapchat-sdk/src/generated/effect/index.ts",
    "packages/snapchat-sdk/src/generated/effect/manifest.json",
    700_000,
    750,
    100,
  ],
  [
    "reddit",
    "packages/reddit-sdk/src/generated/effect/index.ts",
    "packages/reddit-sdk/src/generated/effect/manifest.json",
    500_000,
    750,
    30,
  ],
  [
    "pinterest",
    "packages/pinterest-sdk/src/generated/effect/index.ts",
    "packages/pinterest-sdk/src/generated/effect/manifest.json",
    2_500_000,
    750,
    200,
  ],
  [
    "amazon-ads-sp",
    "packages/amazon-ads-sdk/src/generated/sponsored-products/effect/index.ts",
    "packages/amazon-ads-sdk/src/generated/sponsored-products/effect/manifest.json",
    2_500_000,
    750,
    60,
  ],
  [
    "amazon-ads-sb",
    "packages/amazon-ads-sdk/src/generated/sponsored-brands/effect/index.ts",
    "packages/amazon-ads-sdk/src/generated/sponsored-brands/effect/manifest.json",
    1_500_000,
    750,
    40,
  ],
  [
    "amazon-ads-sd",
    "packages/amazon-ads-sdk/src/generated/sponsored-display/effect/index.ts",
    "packages/amazon-ads-sdk/src/generated/sponsored-display/effect/manifest.json",
    800_000,
    750,
    15,
  ],
  [
    "amazon-ads-api",
    "packages/amazon-ads-sdk/src/generated/api/effect/index.ts",
    "packages/amazon-ads-sdk/src/generated/api/effect/manifest.json",
    1_200_000,
    750,
    6,
  ],
  [
    "bluesky",
    "packages/bluesky-sdk/src/generated/effect/index.ts",
    "packages/bluesky-sdk/src/generated/effect/manifest.json",
    800_000,
    750,
    150,
  ],
];

let failed = false;
for (const [name, entry, irPath, byteBudget, coldStartBudgetMs, minimumEndpoints] of entries) {
  if (irPath) {
    const manifest = await Bun.file(irPath).json();
    if (manifest.counts.endpoints < minimumEndpoints) {
      console.error(`[effect:check] ${name}: endpoint coverage regression`);
      failed = true;
      continue;
    }
  }
  const build = await Bun.build({ entrypoints: [entry], target: "browser", minify: true });
  if (!build.success) {
    console.error(`[effect:check] ${name}: browser bundle failed`);
    for (const log of build.logs) console.error(log);
    failed = true;
    continue;
  }
  const bytes = build.outputs.reduce((total, output) => total + output.size, 0);
  const moduleUrl = new URL(`../${entry}`, import.meta.url).href;
  const source = `const start=performance.now();await import(${JSON.stringify(moduleUrl)});console.log(performance.now()-start)`;
  const child = Bun.spawn([process.execPath, "--eval", source], { stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, exitCode] = await Promise.all([
    child.stdout.text(),
    child.stderr.text(),
    child.exited,
  ]);
  const coldStartMs = Number(stdout.trim());
  const bundleOk = bytes <= byteBudget;
  const coldStartOk =
    exitCode === 0 && Number.isFinite(coldStartMs) && coldStartMs <= coldStartBudgetMs;
  console.log(
    `[effect:check] ${name}: ${bytes} bytes / ${byteBudget}; ${coldStartMs.toFixed(1)}ms / ${coldStartBudgetMs}ms`,
  );
  if (!bundleOk || !coldStartOk) {
    if (stderr) console.error(stderr.trim());
    failed = true;
  }
}

if (failed) process.exit(1);
