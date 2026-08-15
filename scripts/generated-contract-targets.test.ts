import { expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dir, "..");

const targets = [
  ["meta-business-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["tiktok-business-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["snapchat-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["reddit-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["pinterest-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["bluesky-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["linkedin-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["x-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["youtube-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["google-business-profile-sdk", "./valibot", "src/generated/valibot/index.ts"],
  ["google-ads-sdk", "./v25/valibot", "src/generated/v25/valibot/index.ts"],
  [
    "amazon-ads-sdk",
    "./sponsored-products/valibot",
    "src/generated/sponsored-products/valibot/index.ts",
  ],
  [
    "amazon-ads-sdk",
    "./sponsored-brands/valibot",
    "src/generated/sponsored-brands/valibot/index.ts",
  ],
  [
    "amazon-ads-sdk",
    "./sponsored-display/valibot",
    "src/generated/sponsored-display/valibot/index.ts",
  ],
  ["amazon-ads-sdk", "./api/valibot", "src/generated/api/valibot/index.ts"],
] as const;

test("all supported platform packages expose generated TypeScript and Valibot contracts", async () => {
  for (const [packageDir, exportPath, sourcePath] of targets) {
    const packageRoot = join(root, "packages", packageDir);
    const manifest = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8")) as {
      exports: Record<string, { bun?: string }>;
    };
    expect(manifest.exports[exportPath]?.bun).toBe(`./${sourcePath}`);
    expect(existsSync(join(packageRoot, sourcePath))).toBe(true);

    const module = await import(pathToFileURL(join(packageRoot, sourcePath)).href);
    expect(Object.keys(module).some((name) => name.endsWith("Schema"))).toBe(true);

    const typesPath = sourcePath.replace("/valibot/", "/types/");
    expect(existsSync(join(packageRoot, typesPath))).toBe(true);
  }
});
