import type { DocContent } from "./scraper.ts";

export interface ParamSpec {
  name: string;
  type: string;
  required: boolean;
  location?: "path" | "query" | "body";
  enumValues?: string[];
  description?: string;
  children?: ParamSpec[];
}

export interface EndpointSpec {
  docId: string;
  pageTitle: string;
  category: string;
  section: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  path: string;
  queryParams: ParamSpec[];
  /** Envelope key holding the entity list, e.g. `campaigns` or `total_stats`. */
  entityKey: string;
  /** Singular envelope key, e.g. `campaign`. */
  entitySingular: string;
  /** Pascal-case entity name, e.g. `Campaign`. */
  entityName: string;
  requestParams: ParamSpec[];
  responseParams: ParamSpec[];
  requestBodyExample?: unknown;
  responseExample?: unknown;
  responseKind: "list" | "single" | "result" | "stats" | "raw";
}

const BASE_HOSTS = ["https://adsapi.snapchat.com", "https://businessapi.snapchat.com"];

export function decodeEntities(input: string): string {
  return input
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&#39;", "'");
}

function stripTags(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

interface H3Section {
  id: string;
  heading: string;
  body: string;
}

/**
 * Split HTML into sections. Docusaurus pages nest endpoint docs under `<h2>`
 * headings whose preamble (curl + example JSON) precedes the `<h3>` blocks —
 * the preamble is captured as a synthetic section so examples are not lost.
 */
function splitSections(html: string): H3Section[] {
  const sections: H3Section[] = [];
  const h2Pattern = /<h2[^>]*>(.*?)<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/gs;
  for (const h2 of html.matchAll(h2Pattern)) {
    const h2Heading = stripTags(h2[1] ?? "");
    const content = h2[2] ?? "";
    const h3Pattern = /<h3[^>]*>(.*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/gs;
    let cursor = 0;
    let hasH3 = false;
    for (const match of content.matchAll(h3Pattern)) {
      hasH3 = true;
      const start = match.index ?? 0;
      const preamble = content.slice(cursor, start);
      if (preamble.trim()) {
        sections.push({ id: "preamble", heading: h2Heading, body: preamble });
      }
      const heading = stripTags(match[1] ?? "");
      if (heading) {
        sections.push({
          id: heading.toLowerCase().replace(/[^a-z0-9-]+/g, "-"),
          heading,
          body: match[2] ?? "",
        });
      }
      cursor = start + match[0].length;
    }
    const trailing = content.slice(cursor);
    if (trailing.trim()) {
      sections.push({ id: "preamble", heading: h2Heading, body: trailing });
    }
    if (!hasH3 && content.trim()) {
      sections.push({ id: "preamble", heading: h2Heading, body: content });
    }
  }
  return sections;
}

/** Parse an HTML `<table>` into rows of text cells. */
function parseTable(html: string): string[][] {
  const rows: string[][] = [];
  for (const rowMatch of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gs)) {
    const cells: string[] = [];
    for (const cellMatch of (rowMatch[1] ?? "").matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gs)) {
      cells.push(stripTags(cellMatch[1] ?? ""));
    }
    rows.push(cells);
  }
  return rows;
}

/** Extract JSON-parsing code blocks in a body (Docusaurus syntax-highlighted `<pre>`). */
function extractJsonBlocks(body: string): unknown[] {
  const blocks: unknown[] = [];
  const prePattern = /<pre[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>[\s\S]*?<\/pre>/gs;
  for (const pre of body.matchAll(prePattern)) {
    // Docusaurus wraps tokens in <span> tags — strip them, then decode entities.
    const text = decodeEntities((pre[1] ?? "").replace(/<[^>]+>/g, "")).trim();
    const parsed = tryParseJson(text);
    if (parsed !== undefined) blocks.push(parsed);
    const d = text.match(/-d\s+'([\s\S]*?)'\s*(?:\\|\n|$)/);
    if (d?.[1]) {
      const parsedBody = tryParseJson(d[1]);
      if (parsedBody !== undefined) blocks.push(parsedBody);
    }
  }
  return blocks;
}

function tryParseJson(text: string): unknown {
  let trimmed = text.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return undefined;
  // Docs truncate long examples with `[[[ snip ]]]` (and occasional `...`/`.` lines)
  // replacing whole array elements — removing them restores valid JSON.
  trimmed = trimmed
    .replace(/\[\[\[ snip \]\]\]/g, "")
    .split("\n")
    .filter((line) => !/^\s*(\.\.\.|\.)\s*$/.test(line))
    .join("\n");
  try {
    return JSON.parse(trimmed);
  } catch {
    return undefined;
  }
}

/** Extract a `METHOD https://host/path` pair from a raw HTML section body. */
function extractHttpRequest(body: string): { method: EndpointSpec["method"]; url: string } | null {
  // Match on raw HTML so `&lt;campaign_id&gt;` URL params survive; decode afterwards.
  const match = body.match(/\b(GET|POST|PUT|DELETE)\s+(https?:\/\/[^\s<"']+)/);
  if (!match?.[1] || !match?.[2]) return null;
  const method = match[1] as EndpointSpec["method"];
  const raw = match[2]
    .replaceAll("{{", "{")
    .replaceAll("}}", "}")
    .replace(/[>).,]+$/, "");
  const url = decodeEntities(raw).replace(/<([^>]+)>/g, "{$1}");
  return { method, url };
}

/** Infer a ParamSpec tree from a JSON value. */
export function inferParams(value: unknown, required = true): ParamSpec[] {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return [];
  return Object.entries(value as Record<string, unknown>).map(([name, child]) => {
    if (Array.isArray(child)) {
      if (child.length > 0 && typeof child[0] === "object" && child[0] !== null) {
        return {
          name,
          type: "object[]",
          required,
          children: inferParams(child[0]),
        };
      }
      return { name, type: "array", required };
    }
    if (typeof child === "object" && child !== null) {
      return { name, type: "object", required, children: inferParams(child) };
    }
    return {
      name,
      type:
        typeof child === "string"
          ? "string"
          : typeof child === "number"
            ? "number"
            : typeof child === "boolean"
              ? "boolean"
              : "unknown",
      required,
    };
  });
}

/** Singularize a snake_case plural envelope key: `ad_accounts` → `ad_account`. */
function singularize(key: string): string {
  if (key === "media" || key === "stats") return key;
  if (key.endsWith("_stats")) return `${key.slice(0, -6)}_stat`;
  if (key.endsWith("ies")) return `${key.slice(0, -3)}y`;
  if (key.endsWith("es")) return key.slice(0, -2);
  if (key.endsWith("s")) return key.slice(0, -1);
  return key;
}

function snakeToPascal(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function snakeToCamel(value: string): string {
  const normalized = value.replace(/-/g, "_");
  if (normalized.toUpperCase() === normalized && normalized.length <= 4)
    return normalized.toLowerCase();
  const pascal = snakeToPascal(normalized);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/** Extract the entity envelope key + singular from a response example. */
function detectEntity(
  example: Record<string, unknown>,
  fallbackKey: string,
): { entityKey: string; entitySingular: string } {
  for (const [key, value] of Object.entries(example)) {
    if (key === "result" && typeof value === "object" && value !== null) {
      return { entityKey: "result", entitySingular: "result" };
    }
    if (Array.isArray(value)) {
      for (const entry of value) {
        if (typeof entry !== "object" || entry === null) continue;
        const nested = Object.keys(entry as Record<string, unknown>).find(
          (nestedKey) =>
            nestedKey !== "sub_request_status" &&
            nestedKey !== "sub_request_error_reason" &&
            typeof (entry as Record<string, unknown>)[nestedKey] === "object" &&
            (entry as Record<string, unknown>)[nestedKey] !== null,
        );
        if (nested) return { entityKey: key, entitySingular: nested };
      }
    }
  }
  // stats envelopes: total_stats / timeseries_stats with nested stat objects
  for (const key of Object.keys(example)) {
    if (key.endsWith("_stat") || key === "total_stats" || key === "timeseries_stats") {
      return { entityKey: key, entitySingular: key.endsWith("s") ? key.slice(0, -1) : key };
    }
  }
  return { entityKey: fallbackKey, entitySingular: singularize(fallbackKey) };
}

/** Extract entity fields from a response example envelope. */
function extractEntityParams(
  example: Record<string, unknown>,
  entitySingular: string,
): ParamSpec[] {
  for (const value of Object.values(example)) {
    if (Array.isArray(value)) {
      for (const entry of value) {
        if (typeof entry === "object" && entry !== null) {
          const nested = (entry as Record<string, unknown>)[entitySingular];
          if (typeof nested === "object" && nested !== null && !Array.isArray(nested)) {
            return inferParams(nested);
          }
          // stats: { total_stat: { stats: {...} } }
          for (const inner of Object.values(entry as Record<string, unknown>)) {
            if (typeof inner === "object" && inner !== null && !Array.isArray(inner)) {
              const fields = inferParams(inner);
              if (fields.some((field) => field.name === "stats" || field.name === "timeseries")) {
                return fields;
              }
            }
          }
        }
      }
    }
    if (entitySingular === "result" && typeof value === "object" && value !== null) {
      return inferParams(value);
    }
  }
  return [];
}

function tableToParams(tableHtml: string): ParamSpec[] {
  const tableRows = parseTable(tableHtml);
  const header = tableRows[0]?.map((cell) => cell.toLowerCase()) ?? [];
  const requiredCol = header.indexOf("required");
  const valuesCol = header.indexOf("possible values");
  const descCol = header.indexOf("description");
  return tableRows.slice(1).map((row) => {
    const name = row[0] ?? "";
    const possible = valuesCol >= 0 && row[valuesCol] ? row[valuesCol] : "";
    const enumValues =
      possible &&
      !/\b(regex|see|table|url|uuid|iso 8601|json|string|number|array|list|enum)\b/i.test(
        possible,
      ) &&
      possible.split(/[,\s]+/).every((value) => /^[A-Z_0-9-]+$/.test(value))
        ? possible.split(/[,\s]+/).filter(Boolean)
        : undefined;
    const requiredRaw = requiredCol >= 0 ? row[requiredCol] : "";
    return {
      name,
      type: enumValues ? "enum" : "string",
      // `R*` means required only in some cases — treat as optional.
      required: requiredRaw === "R" || requiredRaw === "Y" || requiredRaw === "Yes",
      enumValues,
      description: descCol >= 0 ? row[descCol] : undefined,
    };
  });
}

/** Parse a docs page into endpoint specs (a page may document several endpoints). */
export function parseDoc(doc: DocContent): EndpointSpec[] {
  const sections = splitSections(doc.content);
  const specs: EndpointSpec[] = [];

  // Some pages document request params once, in a global "Request Parameters"
  // section before the endpoints (e.g. Measurement). Collect those tables —
  // attribute tables describe entity schemas, not query params, so skip them.
  const firstHttpRequest = sections.findIndex((s) => /http-request/.test(s.id));
  const globalParams: ParamSpec[] = [];
  for (let g = 0; g < (firstHttpRequest === -1 ? sections.length : firstHttpRequest); g++) {
    const section = sections[g]!;
    if (!/parameter/.test(section.id)) continue;
    for (const table of section.body.matchAll(/<table>[\s\S]*?<\/table>/gs)) {
      globalParams.push(...tableToParams(table[0]));
    }
  }

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]!;
    if (!/http-request/.test(section.id)) continue;

    const http = extractHttpRequest(section.body);
    if (!http) continue;

    // Gather following sections (parameters, examples) until the next HTTP Request
    const following: H3Section[] = [];
    for (let j = i + 1; j < sections.length; j++) {
      if (/http-request/.test(sections[j]!.id)) break;
      following.push(sections[j]!);
    }
    // Human-readable title: the "Example - ..." heading, else the page title
    const exampleHeading = following.find((s) => s.heading.startsWith("Example"));
    const title = exampleHeading?.heading ?? doc.title;

    // --- Params from the Parameters/Attributes table ---
    const tableHtml = following.map((s) => s.body).find((body) => body.includes("<table>"));
    let tableParams = tableHtml ? tableToParams(tableHtml) : [];

    // --- Example JSON blocks (request body via curl -d, then response) ---
    // Examples may sit in the same h3 section as the curl, in the h3 section
    // immediately before HTTP Request, or in later sections.
    const prior = i > 0 ? [sections[i - 1]!] : [];
    const jsonBlocks = [
      ...prior.flatMap((s) => extractJsonBlocks(s.body)),
      ...extractJsonBlocks(section.body),
      ...following.flatMap((s) => extractJsonBlocks(s.body)),
    ];
    let requestBodyExample: unknown;
    let responseExample: unknown;
    for (const block of jsonBlocks) {
      if (Array.isArray(block)) continue;
      const record = block as Record<string, unknown>;
      if (Object.keys(record).some((key) => key !== "paging" && /^[a-z_]+s$/.test(key))) {
        // Response envelope shape: { request_status, request_id, paging?, <plural>: [...] }
        if (
          record.request_status !== undefined ||
          Object.keys(record).some(
            (k) =>
              k.endsWith("_stats") ||
              k === "total_stats" ||
              k === "timeseries_stats" ||
              k === "result",
          )
        ) {
          responseExample ??= record;
          continue;
        }
      }
      requestBodyExample ??= block;
    }
    // curl -d bodies embedded in the HTTP Request section itself
    if (!requestBodyExample) {
      const decodedBody = decodeEntities(section.body);
      const curlMatch = decodedBody.match(/-d\s+'([\s\S]*?)'\s*\\?\s*\n/);
      if (curlMatch?.[1]) {
        requestBodyExample = tryParseJson(decodeEntities(curlMatch[1]));
      }
    }

    // --- URL pieces ---
    const host = BASE_HOSTS.find((candidate) => http.url.startsWith(candidate)) ?? "";
    const rawPath = http.url.slice(host.length);
    const [path, queryString] = rawPath.split("?");
    const pathSegments = (path ?? "").split("/").filter(Boolean);
    const last = pathSegments[pathSegments.length - 1] ?? "";

    // Query params from the URL itself (e.g. ?with_ad_accounts=true)
    const urlQueryParams: ParamSpec[] = queryString
      ? queryString.split("&").map((pair) => {
          const [name, value] = pair.split("=");
          const isBoolean = value === "true" || value === "false";
          return {
            name: name ?? "",
            type: isBoolean ? "boolean" : "string",
            required: false,
            location: "query" as const,
            ...(value && !isBoolean ? { enumValues: [value] } : {}),
          };
        })
      : [];

    // Path params from `{...}` segments
    const pathParams: ParamSpec[] = pathSegments
      .filter((segment) => /\{[^}]+\}/.test(segment))
      .map((segment) => ({
        name: snakeToCamel(segment.replace(/[{}]/g, "")),
        type: "string",
        required: true,
        location: "path" as const,
      }));

    // --- Entity detection ---
    const fallbackKey = last.startsWith("{")
      ? (pathSegments[pathSegments.length - 2] ?? last)
      : last;
    let entityKey = fallbackKey;
    let entitySingular = singularize(fallbackKey);
    if (responseExample && typeof responseExample === "object") {
      ({ entityKey, entitySingular } = detectEntity(
        responseExample as Record<string, unknown>,
        fallbackKey,
      ));
    }
    // Result responses (uploads, copies) return the resource entity directly —
    // name the type after the URL resource rather than the generic "result".
    const ACTIONS = new Set([
      "upload",
      "stats",
      "preview",
      "thumbnail",
      "lens_preview",
      "creative_preview",
      "snapcode",
      "spend_guidance",
      "leads_report",
      "stats_report",
    ]);
    let resourceName = "result";
    if (entityKey === "result") {
      for (const segment of [...pathSegments].reverse()) {
        if (segment === "media_copy") {
          resourceName = "media";
          break;
        }
        if (ACTIONS.has(segment) || /\{[^}]+\}/.test(segment)) continue;
        resourceName = segment;
        break;
      }
    }
    const resultEntityName =
      entityKey === "result"
        ? snakeToPascal(singularize(resourceName))
        : snakeToPascal(entitySingular);

    // Request params: path params + query/body params (deduped by name).
    // Pages with a global "Request Parameters" table (e.g. Measurement) merge
    // those query params into every GET endpoint (deduped).
    const mergedTableParams =
      http.method === "GET" ? [...tableParams, ...globalParams] : tableParams;
    const rawRequestParams: ParamSpec[] =
      http.method === "GET"
        ? [
            ...pathParams,
            ...urlQueryParams,
            ...mergedTableParams.filter(
              (p) => !/^[a-z_]+_id$/.test(p.name) && !/^id$/i.test(p.name),
            ),
          ]
        : [...pathParams, ...(requestBodyExample ? inferParams(requestBodyExample) : tableParams)];
    const seenParams = new Set<string>();
    const requestParams = rawRequestParams.filter((p) => {
      if (seenParams.has(p.name)) return false;
      seenParams.add(p.name);
      return true;
    });

    const responseParams =
      responseExample && typeof responseExample === "object"
        ? extractEntityParams(responseExample as Record<string, unknown>, entitySingular)
        : tableParams;

    // --- Response kind ---
    let responseKind: EndpointSpec["responseKind"] = "single";
    if (entityKey === "result") responseKind = "result";
    else if (entityKey.endsWith("_stat") || entityKey === "stats") responseKind = "stats";
    else if (
      http.method === "GET" &&
      (last === entityKey ||
        last.endsWith("?") ||
        urlQueryParams.length > 0 ||
        pathSegments.length === 2)
    ) {
      responseKind = "list";
    }

    specs.push({
      docId: doc.docId,
      pageTitle: doc.title,
      category: doc.category,
      section: title,
      method: http.method,
      url: http.url,
      path: path ?? rawPath,
      queryParams: urlQueryParams,
      entityKey,
      entitySingular,
      entityName: resultEntityName,
      requestParams,
      responseParams,
      requestBodyExample,
      responseExample,
      responseKind,
    });
  }
  return specs;
}

export { snakeToCamel, snakeToPascal, singularize };
