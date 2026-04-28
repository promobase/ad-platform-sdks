import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const mode = process.argv[2];

if (mode !== "prepare" && mode !== "restore") {
  console.error("Usage: node scripts/publish-manifest.mjs <prepare|restore>");
  process.exit(1);
}

const packagePath = resolve(process.cwd(), "package.json");
const backupPath = resolve(process.cwd(), "package.json.prepack-backup");

if (mode === "restore") {
  if (existsSync(backupPath)) {
    renameSync(backupPath, packagePath);
  }
  process.exit(0);
}

if (existsSync(backupPath)) {
  throw new Error(`Refusing to overwrite existing backup: ${backupPath}`);
}

const root = findRepoRoot(process.cwd());
const workspaceVersions = readWorkspaceVersions(root);
const packageJson = readJson(packagePath);
let changed = false;

for (const section of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
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

writeFileSync(backupPath, readFileSync(packagePath));

if (changed) {
  writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
}

function findRepoRoot(startDir) {
  let current = resolve(startDir);

  while (current !== dirname(current)) {
    if (existsSync(join(current, "package.json")) && existsSync(join(current, ".changeset"))) {
      return current;
    }
    current = dirname(current);
  }

  throw new Error(`Unable to find repository root from ${startDir}`);
}

function readWorkspaceVersions(root) {
  const rootPackage = readJson(join(root, "package.json"));
  const versions = new Map();

  for (const pattern of rootPackage.workspaces ?? []) {
    if (pattern !== "packages/*") {
      throw new Error(`Unsupported workspace pattern: ${pattern}`);
    }

    const packagesDir = join(root, "packages");
    for (const packageName of readdirNames(packagesDir)) {
      const workspacePackagePath = join(packagesDir, packageName, "package.json");
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

function workspaceSpecifierToRange(specifier, version) {
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
