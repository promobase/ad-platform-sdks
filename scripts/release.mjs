import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { preparePackage, restorePackage } from "./publish-manifest.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const packageDirs = readdirSync(join(root, "packages"))
  .map((name) => join(root, "packages", name))
  .filter((path) => existsSync(join(path, "package.json")));
const prepared = [];

try {
  for (const packageDir of packageDirs) {
    preparePackage(packageDir, { forPublish: true });
    prepared.push(packageDir);
  }

  assertPublishableManifests(packageDirs);

  if (checkOnly) {
    console.log(`Validated ${packageDirs.length} publishable workspace manifests`);
  } else {
    const changeset = resolve(root, "node_modules", ".bin", "changeset");
    const result = spawnSync(changeset, ["publish"], {
      cwd: root,
      env: process.env,
      stdio: "inherit",
    });

    if (result.error) {
      throw result.error;
    }
    if (result.status !== 0) {
      process.exitCode = result.status ?? 1;
    }
  }
} finally {
  for (const packageDir of prepared.reverse()) {
    restorePackage(packageDir);
  }
}

function assertPublishableManifests(dirs) {
  const invalid = [];

  for (const packageDir of dirs) {
    const packageJson = JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));
    for (const section of [
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
    ]) {
      for (const [name, specifier] of Object.entries(packageJson[section] ?? {})) {
        if (typeof specifier === "string" && specifier.startsWith("workspace:")) {
          invalid.push(`${packageJson.name}: ${section}.${name}=${specifier}`);
        }
      }
    }
  }

  if (invalid.length > 0) {
    throw new Error(`Unpublishable workspace specifiers remain:\n${invalid.join("\n")}`);
  }
}
