import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const mode = process.argv[2];

  if (mode !== "prepare" && mode !== "prepare-publish" && mode !== "restore") {
    console.error("Usage: node scripts/publish-manifest.mjs <prepare|prepare-publish|restore>");
    process.exit(1);
  }

  if (mode === "restore") {
    restorePackage(process.cwd());
  } else {
    preparePackage(process.cwd(), { forPublish: mode === "prepare-publish" });
  }
}

export function preparePackage(packageDir, { forPublish = false } = {}) {
  const packagePath = resolve(packageDir, "package.json");
  const backupPath = resolve(packageDir, "package.json.prepack-backup");

  if (existsSync(backupPath)) {
    throw new Error(`Refusing to overwrite existing backup: ${backupPath}`);
  }

  const root = findRepoRoot(packageDir);
  const workspaceVersions = readWorkspaceVersions(root);
  const packageJson = readJson(packagePath);
  let changed = false;

  for (const section of [
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies",
  ]) {
    const dependencies = packageJson[section];
    if (!dependencies) {
      continue;
    }

    for (const [name, specifier] of Object.entries(dependencies)) {
      if (typeof specifier !== "string" || !specifier.startsWith("workspace:")) {
        continue;
      }

      const version = workspaceVersions.get(name);
      if (!version) {
        throw new Error(`No workspace package found for ${name}`);
      }

      dependencies[name] = workspaceSpecifierToRange(specifier, version);
      changed = true;
    }
  }

  // During `npm publish`, npm restores its original manifest view after
  // `postpack` and submits workspace:* to the registry even though the tarball
  // contains the rewritten manifest. The release wrapper keeps this manifest
  // rewritten for the whole publish and restores it in a finally block.
  if (forPublish && packageJson.scripts) {
    delete packageJson.scripts.prepack;
    delete packageJson.scripts.postpack;
    changed = true;
  }

  writeFileSync(backupPath, readFileSync(packagePath));

  if (changed) {
    writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
  }
}

export function restorePackage(packageDir) {
  const packagePath = resolve(packageDir, "package.json");
  const backupPath = resolve(packageDir, "package.json.prepack-backup");

  if (existsSync(backupPath)) {
    renameSync(backupPath, packagePath);
  }
}

export function findRepoRoot(startDir) {
  let current = resolve(startDir);

  while (current !== dirname(current)) {
    if (existsSync(join(current, "package.json")) && existsSync(join(current, ".changeset"))) {
      return current;
    }
    current = dirname(current);
  }

  throw new Error(`Unable to find repository root from ${startDir}`);
}

export function readWorkspaceVersions(root) {
  const rootPackage = readJson(join(root, "package.json"));
  const versions = new Map();

  for (const pattern of rootPackage.workspaces ?? []) {
    const match = /^([^*/]+)\/\*$/.exec(pattern);
    const workspaceDir = match ? join(root, match[1]) : undefined;
    if (workspaceDir && !existsSync(workspaceDir)) {
      continue;
    }
    const workspacePackagePaths = match
      ? readdirNames(workspaceDir).map((packageName) =>
          join(workspaceDir, packageName, "package.json"),
        )
      : [join(root, pattern, "package.json")];

    for (const workspacePackagePath of workspacePackagePaths) {
      if (!existsSync(workspacePackagePath)) {
        continue;
      }

      const workspacePackage = readJson(workspacePackagePath);
      versions.set(workspacePackage.name, workspacePackage.version);
    }
  }

  return versions;
}

function readdirNames(path) {
  return readdirSync(path);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function workspaceSpecifierToRange(specifier, version) {
  const range = specifier.slice("workspace:".length);

  if (range === "*" || range === "^") {
    return `^${version}`;
  }

  if (range === "~") {
    return `~${version}`;
  }

  if (range.startsWith("^") || range.startsWith("~")) {
    return range;
  }

  if (/^\d+\.\d+\.\d+/.test(range)) {
    return range;
  }

  throw new Error(`Unsupported workspace specifier: ${specifier}`);
}
