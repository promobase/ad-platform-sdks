import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const packagePaths = [
  "packages/meta-business-sdk",
  "packages/ad-platforms",
  "packages/tiktok-business-sdk",
];

let checked = 0;

for (const packagePath of packagePaths) {
  const packageDir = resolve(packagePath);
  const manifest = JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));

  for (const [specifier, exportTarget] of Object.entries(manifest.exports ?? {})) {
    const target = typeof exportTarget === "string" ? exportTarget : exportTarget.import;
    if (typeof target !== "string") {
      throw new Error(`${manifest.name} ${specifier} has no published import target`);
    }

    const files = resolveExportTargets(packageDir, target);
    if (files.length === 0) {
      throw new Error(`${manifest.name} ${specifier} resolves to no files: ${target}`);
    }

    for (const file of files) {
      await import(pathToFileURL(file).href);
      checked += 1;
    }
  }
}

console.log(`Checked ${checked} published platform entrypoints`);

function resolveExportTargets(packageDir, target) {
  if (!target.includes("*")) {
    const file = resolve(packageDir, target);
    if (!existsSync(file)) {
      throw new Error(`Missing published entrypoint: ${file}`);
    }
    return [file];
  }

  const [prefix, suffix] = target.split("*", 2);
  const directory = resolve(packageDir, prefix);
  if (!existsSync(directory)) {
    throw new Error(`Missing published wildcard directory: ${directory}`);
  }

  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(suffix))
    .map((entry) => join(directory, entry.name));
}
