import { spawnSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Fixed-version release: every publishable package shares ONE version,
 * bumped together on every release as `0.<n>.0`.
 *
 * Runs `changeset version` first so changelogs are generated and changeset
 * files are consumed by the normal PR flow, then overrides every package
 * version to the next unified `0.<n>.0` (current max 0.x minor + 1). Patch
 * releases are always `.0`.
 */

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const packageDirs = readdirSync(join(root, "packages"))
  .map((name) => join(root, "packages", name))
  .filter((path) => existsSync(join(path, "package.json")));

function readVersion(pkgDir) {
  const packageJson = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));
  return { name: packageJson.name, version: packageJson.version, private: !!packageJson.private };
}

function nextUnifiedVersion(versions) {
  const minors = versions
    .filter((v) => v.version && v.version.startsWith("0."))
    .map((v) => {
      const minor = Number(v.version.split(".")[1]);
      return Number.isFinite(minor) ? minor : 0;
    });
  const maxMinor = minors.length > 0 ? Math.max(...minors) : 0;
  return `0.${maxMinor + 1}.0`;
}

// 1. Let changesets do its thing: version bumps, changelogs, changeset
//    consumption. Its per-package numbers are discarded below.
const changeset = resolve(root, "node_modules", ".bin", "changeset");
const result = spawnSync(changeset, ["version"], { cwd: root, stdio: "inherit" });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// 2. Unify every publishable package on the next 0.x.0.
const packages = packageDirs.map(readVersion).filter((pkg) => !pkg.private);
const unified = nextUnifiedVersion(packages);

for (const pkgDir of packageDirs) {
  const path = join(pkgDir, "package.json");
  const packageJson = JSON.parse(readFileSync(path, "utf8"));
  if (packageJson.private) continue;
  packageJson.version = unified;
  writeFileSync(path, `${JSON.stringify(packageJson, null, 2)}\n`);
}

console.log(`[fixed-version] unified ${packages.length} packages at ${unified}`);
