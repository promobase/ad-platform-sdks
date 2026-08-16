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
    // Publish directly per package with --force: the unified 0.x.0 version
    // line intentionally downgraded packages that previously published under
    // higher versions (e.g. @openpromo/meta 2.x -> 0.x), and npm rejects
    // lower versions without --force. Unified versions always bump upward
    // after this transition, so --force only ever overrides the once.
    //
    // Idempotent: packages whose version already matches the registry are
    // skipped, so retried runs only publish what is actually missing.
    for (const packageDir of packageDirs) {
      const packageJson = JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));
      if (packageJson.private) continue;
      const current = spawnSync(
        "npm",
        ["view", `${packageJson.name}@${packageJson.version}`, "version"],
        {
          cwd: root,
          env: process.env,
          encoding: "utf8",
        },
      );
      const alreadyPublished =
        current.status === 0 && current.stdout?.trim() === packageJson.version;
      if (alreadyPublished) {
        console.log(
          `[release] ${packageJson.name}@${packageJson.version} already published, skipping`,
        );
        continue;
      }
      const publish = spawnSync("npm", ["publish", packageDir, "--force"], {
        cwd: root,
        env: process.env,
        stdio: "inherit",
      });
      if (publish.error) throw publish.error;
      if (publish.status !== 0) process.exit(publish.status ?? 1);
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
