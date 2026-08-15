import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = join(repoRoot, "apps", "docs", "src", "content", "docs", "reference");

const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const docsExtensions = new Set([".md", ".mdx"]);
const jsonExtension = ".json";
const headerPattern =
  /^\/\/ @generated\n\/\/ fingerprint: sha256:[0-9a-f]+\n\/\/ DO NOT EDIT: generated file; changes will be overwritten\.\n\n?/;
const docsHeaderPattern =
  /^\n?<!-- @generated -->\n<!-- fingerprint: sha256:[0-9a-f]+ -->\n<!-- DO NOT EDIT: generated file; changes will be overwritten\. -->\n*/;
const jsonHeaderPattern =
  /^\{\n  "_generated": \{\n    "fingerprint": "sha256:[0-9a-f]+",\n    "doNotEdit": true\n  \},\n/;

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

// The fingerprint is a checksum of the canonical generated body, not of the upstream source
// document. This lets the check detect edits to generated output without making headers recursive.

function codeHeader(fingerprint) {
  return [
    "// @generated",
    `// fingerprint: sha256:${fingerprint}`,
    "// DO NOT EDIT: generated file; changes will be overwritten.",
    "",
  ].join("\n");
}

function docsHeader(fingerprint) {
  return [
    "<!-- @generated -->",
    `<!-- fingerprint: sha256:${fingerprint} -->`,
    "<!-- DO NOT EDIT: generated file; changes will be overwritten. -->",
    "",
  ].join("\n");
}

function removeHeader(content, extension) {
  if (docsExtensions.has(extension)) {
    if (content.startsWith("---\n")) {
      const end = content.indexOf("\n---\n", 4);
      if (end !== -1) {
        const frontmatterEnd = end + "\n---\n".length;
        let body = content.slice(frontmatterEnd);
        let hadHeader = false;
        while (docsHeaderPattern.test(body)) {
          hadHeader = true;
          body = body.replace(docsHeaderPattern, "");
        }
        return hadHeader
          ? `${content.slice(0, frontmatterEnd)}\n${body.replace(/^\n+/, "")}`
          : content;
      }
    }

    let body = content;
    while (docsHeaderPattern.test(body)) body = body.replace(docsHeaderPattern, "");
    return body;
  }
  return content.replace(headerPattern, "");
}

function addTextHeader(content, extension) {
  const body = removeHeader(content, extension);
  const header = docsExtensions.has(extension)
    ? docsHeader(sha256(body))
    : codeHeader(sha256(body));

  if (docsExtensions.has(extension) && body.startsWith("---\n")) {
    const end = body.indexOf("\n---\n", 4);
    if (end !== -1) {
      const frontmatterEnd = end + "\n---\n".length;
      return `${body.slice(0, frontmatterEnd)}\n${header}${body.slice(frontmatterEnd)}`;
    }
  }

  return `${header}${body}`;
}

function removeJsonHeader(content) {
  const match = content.match(jsonHeaderPattern);
  return match ? `{\n${content.slice(match[0].length)}` : content;
}

function addJsonHeader(content) {
  const bodyText = removeJsonHeader(content);
  const value = JSON.parse(bodyText);
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Generated JSON files must contain a top-level object");
  }

  const { _generated: _ignored, ...body } = value;
  const fingerprint = `sha256:${sha256(JSON.stringify(body))}`;
  const metadata = [
    '  "_generated": {',
    `    "fingerprint": "${fingerprint}",`,
    '    "doNotEdit": true',
    "  }",
  ].join("\n");

  if (Object.keys(body).length === 0) return `{\n${metadata}\n}\n`;

  const bodyWithoutOpening = bodyText.startsWith("{\n")
    ? bodyText.slice(2)
    : bodyText.slice(1).replace(/^\s+/, "");
  return `{\n${metadata},\n${bodyWithoutOpening}`;
}

function processContent(content, extension) {
  return extension === jsonExtension ? addJsonHeader(content) : addTextHeader(content, extension);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "dist" || entry.name === "node_modules" || entry.name === ".git") continue;
      files.push(...(await walk(path)));
    } else {
      files.push(path);
    }
  }
  return files;
}

async function generatedFiles() {
  const files = [];
  for (const packageRoot of await readdir(join(repoRoot, "packages"), { withFileTypes: true })) {
    if (!packageRoot.isDirectory()) continue;
    const generated = join(repoRoot, "packages", packageRoot.name, "src", "generated");
    try {
      files.push(...(await walk(generated)));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }

  try {
    files.push(...(await walk(docsRoot)));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  return files.filter((path) => {
    const extension = path.slice(path.lastIndexOf("."));
    return (
      sourceExtensions.has(extension) ||
      docsExtensions.has(extension) ||
      extension === jsonExtension
    );
  });
}

export async function ensureGeneratedHeaders({ check = false } = {}) {
  let changed = 0;
  for (const path of await generatedFiles()) {
    const extension = path.slice(path.lastIndexOf("."));
    const content = await readFile(path, "utf8");
    const next = processContent(content, extension);
    if (next === content) continue;
    changed++;
    if (!check) await writeFile(path, next, "utf8");
    else console.error(`stale or missing generated fingerprint: ${relative(repoRoot, path)}`);
  }

  if (check && changed > 0) {
    throw new Error(`${changed} generated files have stale or missing fingerprints`);
  }
  return changed;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes("--check");
  const changed = await ensureGeneratedHeaders({ check });
  console.log(
    check
      ? `Checked generated fingerprints (${changed} changes)`
      : `Updated ${changed} generated fingerprints`,
  );
}
