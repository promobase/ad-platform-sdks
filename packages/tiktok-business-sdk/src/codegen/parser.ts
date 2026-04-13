import type { DocContent } from "./scraper.ts";

export interface ParamSpec {
  name: string;
  type: string;
  required: boolean;
  location?: "body" | "query" | "header";
  description: string;
  enumValues?: string[];
  nestLevel: number;
  children: ParamSpec[];
}

export interface EndpointSpec {
  docId: string;
  title: string;
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  auth: "access_token" | "app_credentials";
  category: string;
  requestParams: ParamSpec[];
  responseFields: ParamSpec[];
}

/** Parse a TikTok doc page into an EndpointSpec. Returns null if not a valid API endpoint page. */
export function parseDoc(doc: DocContent): EndpointSpec | null {
  const { content, title, category, docId } = doc;
  if (!content) return null;

  // Extract endpoint URL
  const urlMatch = content.match(/\*\*Endpoint\*\*\s+(https?:\/\/\S+)/);
  if (!urlMatch?.[1]) return null;
  const url = urlMatch[1].trim();

  // Extract HTTP method
  const methodMatch = content.match(/\*\*Method\*\*\s+(GET|POST|DELETE|PUT)/);
  if (!methodMatch?.[1]) return null;
  const method = methodMatch[1] as EndpointSpec["method"];

  // Extract all xtable blocks
  const xtableBlocks = extractXtableBlocks(content);

  // Classify blocks by their surrounding section headers
  const sections = classifyXtableBlocks(content, xtableBlocks);

  // Determine auth pattern
  const auth = detectAuthPattern(sections.headerBlock, sections.paramBlock);

  // Parse request parameters
  const requestParams = sections.paramBlock ? parseXtable(sections.paramBlock) : [];

  // Parse response fields
  const responseFields = sections.responseBlock ? parseXtable(sections.responseBlock) : [];

  // Build nested tree from flat list
  const requestTree = buildNestTree(requestParams);
  const responseTree = buildNestTree(responseFields);

  return {
    docId,
    title,
    url,
    method,
    auth,
    category,
    requestParams: requestTree,
    responseFields: responseTree,
  };
}

/** Extract all ```xtable ... ``` blocks from markdown content. */
function extractXtableBlocks(content: string): { start: number; end: number; text: string }[] {
  const blocks: { start: number; end: number; text: string }[] = [];
  const regex = /```xtable\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    blocks.push({ start: match.index, end: match.index + match[0].length, text: match[1]! });
  }
  return blocks;
}

/** Classify xtable blocks into header, param, and response sections. */
function classifyXtableBlocks(
  content: string,
  blocks: { start: number; end: number; text: string }[],
): { headerBlock?: string; paramBlock?: string; responseBlock?: string } {
  let headerBlock: string | undefined;
  let paramBlock: string | undefined;
  let responseBlock: string | undefined;

  for (const block of blocks) {
    // Look at surrounding context (200 chars before the block)
    const before = content.slice(Math.max(0, block.start - 300), block.start).toLowerCase();

    if (before.includes("**header**") && !headerBlock) {
      headerBlock = block.text;
    } else if (before.includes("**parameter") && !paramBlock) {
      paramBlock = block.text;
    } else if (
      (before.includes("## response") ||
        before.includes("**body**") ||
        before.includes("**response")) &&
      !responseBlock
    ) {
      responseBlock = block.text;
    } else if (!paramBlock && !before.includes("comparing") && !before.includes("changes")) {
      // First non-classified block after parameters section
      // Check if it's between Request and Response sections
      const requestIdx = content.toLowerCase().indexOf("## request");
      const responseIdx = content.toLowerCase().indexOf("## response");
      if (
        requestIdx >= 0 &&
        block.start > requestIdx &&
        (responseIdx < 0 || block.start < responseIdx)
      ) {
        if (!headerBlock || block.text !== headerBlock) {
          paramBlock = block.text;
        }
      } else if (responseIdx >= 0 && block.start > responseIdx) {
        responseBlock = block.text;
      }
    }
  }

  return { headerBlock, paramBlock, responseBlock };
}

/** Parse an xtable block into flat ParamSpec entries. */
function parseXtable(tableText: string): ParamSpec[] {
  const lines = tableText.split("\n").filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];

  // Parse header to determine column layout
  const headerLine = lines[0]!;
  const headers = parseTableRow(headerLine).map((h) =>
    h
      .toLowerCase()
      .replace(/\{.*?\}/g, "")
      .trim(),
  );

  // Determine column indices
  const fieldIdx = headers.findIndex(
    (h) => h === "field" || h === "field name" || h === "parameter",
  );
  const typeIdx = headers.findIndex((h) => h.includes("type") || h.includes("data type"));
  const descIdx = headers.findIndex((h) => h.includes("description"));
  const locationIdx = headers.findIndex(
    (h) => h.includes("location") || h.includes("param location"),
  );

  if (fieldIdx < 0 || typeIdx < 0) return [];

  const params: ParamSpec[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]!;
    // Skip separator rows like |---|---|---| or variations
    if (/^\|?\s*-+\s*\|/.test(line) || /^#*\|?\s*-+\s*\|/.test(line)) continue;

    // Detect nest level from # prefix (any depth)
    const nestMatch = line.match(/^(#{1,10})\|/);
    const nestLevel = nestMatch?.[1] ? nestMatch[1].length : 0;
    const cleanLine = line.replace(/^#{1,10}\|/, "|");

    const cells: string[] = parseTableRow(cleanLine);
    if (cells.length <= Math.max(fieldIdx, typeIdx)) continue;

    const rawField = cells[fieldIdx]?.trim() ?? "";
    if (!rawField || rawField === "---") continue;

    // Parse field name and required flag
    const { name, required } = parseFieldName(rawField);
    if (
      !name ||
      name === "-" ||
      name === "---" ||
      /^[-#]+$/.test(name) ||
      name.includes("{") ||
      name.includes("}") ||
      name.startsWith("#")
    )
      continue;

    const type = normalizeType(cells[typeIdx]?.trim() ?? "string");
    const rawDescription = (descIdx >= 0 ? cells[descIdx]?.trim() : "") ?? "";
    const location = locationIdx >= 0 ? parseLocation(cells[locationIdx]?.trim() ?? "") : undefined;
    const enumValues = extractEnumValues(rawDescription);

    params.push({
      name,
      type,
      required,
      location,
      description: stripHtml(rawDescription),
      ...(enumValues.length > 0 ? { enumValues } : {}),
      nestLevel,
      children: [],
    });
  }

  return params;
}

/** Parse a pipe-delimited table row into cells. */
function parseTableRow(line: string): string[] {
  // Remove leading/trailing pipes and split
  const trimmed = line.replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((c) => c.trim());
}

/** Parse a field name, extracting the name and required flag. */
function parseFieldName(raw: string): { name: string; required: boolean } {
  let required = false;
  let name = raw;

  // Strip HTML tags
  name = name.replace(/<[^>]*>/g, "");

  // Check for {Required} or {+Conditional}
  if (/\{required\}/i.test(name)) {
    required = true;
    name = name.replace(/\s*\{required\}/gi, "");
  }
  if (/\{\+conditional\}/i.test(name)) {
    required = false; // conditional = not strictly required
    name = name.replace(/\s*\{\+conditional\}/gi, "");
  }

  // Strip other braces like {30%}
  name = name.replace(/\{[^}]*\}/g, "").trim();

  // Strip markdown bold/italic
  name = name.replace(/\*+/g, "").trim();

  return { name, required };
}

/** Map TikTok doc types to TypeScript types. */
function normalizeType(raw: string): string {
  const lower = raw
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .trim();

  if (
    lower === "string" ||
    lower === "enum" ||
    lower === "url" ||
    lower === "datetime" ||
    lower === "date" ||
    lower === "json" ||
    lower === "json string" ||
    lower === "timestamp"
  )
    return "string";
  if (
    lower === "number" ||
    lower === "int" ||
    lower === "integer" ||
    lower === "int64" ||
    lower === "float" ||
    lower === "double" ||
    lower === "decimal" ||
    lower === "bigint"
  )
    return "number";
  if (lower === "boolean" || lower === "bool") return "boolean";
  if (lower === "object" || lower === "map" || lower === "dict" || lower === "struct")
    return "Record<string, unknown>";
  if (lower === "string[]" || lower === "list" || lower === "array" || lower === "list of strings")
    return "string[]";
  if (lower === "object[]" || lower === "list of objects") return "Record<string, unknown>[]";
  if (
    lower === "number[]" ||
    lower === "int[]" ||
    lower === "integer[]" ||
    lower === "list of numbers"
  )
    return "number[]";
  if (lower === "file" || lower === "binary") return "File | Blob";

  // Handle "list of X" patterns
  if (lower.startsWith("list of")) return "unknown[]";

  // Handle "X/Y" union types like "string/string[]"
  if (raw.includes("/")) {
    const parts = raw.split("/").map((p) => normalizeType(p.trim()));
    return parts.join(" | ");
  }

  // Fallback: anything unrecognized becomes string (safe default)
  return "string";
}

function parseLocation(raw: string): "body" | "query" | "header" | undefined {
  const lower = raw.toLowerCase();
  if (lower.includes("body")) return "body";
  if (lower.includes("query")) return "query";
  if (lower.includes("header")) return "header";
  return undefined;
}

/**
 * Extract enum values from a description string.
 * Patterns detected:
 * - `VALUE_1`, `VALUE_2` (backtick-quoted UPPER_CASE values, minimum 2)
 * - Enum values: `VALUE`: description
 * - Supported values: `VALUE1`, `VALUE2`
 * - Allowed values: `VALUE1`, `VALUE2`
 * - `true`, `false` for boolean-like enums
 */
function extractEnumValues(description: string): string[] {
  // Strip HTML for easier matching but keep backticks
  const clean = description.replace(/<br\s*\/?>/gi, " ").replace(/<\/?[^>]+(>|$)/g, " ");

  // Find all backtick-quoted values that look like enum constants
  // Match UPPER_CASE_VALUES, lowercase_values, camelCase, numbers, and true/false
  const allBacktickValues = [...clean.matchAll(/`([A-Z][A-Z0-9_]*(?:\s*[A-Z][A-Z0-9_]*)*)`/g)].map(
    (m) => m[1]!,
  );

  // Also catch lowercase enum-like values: `true`, `false`, specific known patterns
  const lowerBacktickValues = [...clean.matchAll(/`(true|false)`/g)].map((m) => m[1]!);

  const combined = [...new Set([...allBacktickValues, ...lowerBacktickValues])];

  // Only return as enum if we have at least 2 distinct values
  if (combined.length >= 2) {
    return combined;
  }

  return [];
}

/** Strip HTML tags from a string. */
function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#91;/g, "[")
    .replace(/&#93;/g, "]")
    .replace(/\s+/g, " ")
    .trim();
}

/** Build a nested tree from a flat list of ParamSpecs using nestLevel. */
function buildNestTree(flatParams: ParamSpec[]): ParamSpec[] {
  const root: ParamSpec[] = [];
  const stack: { level: number; children: ParamSpec[] }[] = [{ level: -1, children: root }];

  for (const param of flatParams) {
    // Pop stack until we find the parent level
    while (stack.length > 1 && stack[stack.length - 1]!.level >= param.nestLevel) {
      stack.pop();
    }

    const parent = stack[stack.length - 1]!;
    parent.children.push(param);

    // If this could be a parent (object-like type), push onto stack
    if (param.type === "Record<string, unknown>" || param.type === "Record<string, unknown>[]") {
      stack.push({ level: param.nestLevel, children: param.children });
    }
  }

  return root;
}

/** Detect whether this endpoint uses Access-Token header or app_id/secret credentials. */
function detectAuthPattern(
  headerBlock?: string,
  paramBlock?: string,
): "access_token" | "app_credentials" {
  const combined = `${headerBlock ?? ""} ${paramBlock ?? ""}`.toLowerCase();
  if (combined.includes("access-token") || combined.includes("access_token")) return "access_token";
  if (combined.includes("app_id") && combined.includes("secret")) return "app_credentials";
  return "access_token"; // default
}

/** Parse all docs into endpoint specs, filtering out non-endpoint pages. */
export function parseAllDocs(docs: DocContent[]): EndpointSpec[] {
  const specs: EndpointSpec[] = [];
  let skipped = 0;

  for (const doc of docs) {
    const spec = parseDoc(doc);
    if (spec) {
      specs.push(spec);
    } else {
      skipped++;
    }
  }

  console.log(`[parser] Parsed ${specs.length} endpoints, skipped ${skipped} non-endpoint pages`);
  return specs;
}
