import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

export interface TypeRef {
  kind: "primitive" | "ref" | "array" | "object" | "union" | "blob" | "unknown";
  name?: string;
  items?: TypeRef;
  fields?: FieldSpec[];
  variants?: TypeRef[];
  required?: boolean;
  knownValues?: (string | number)[];
}

export interface FieldSpec {
  name: string;
  type: TypeRef;
  required: boolean;
  description?: string;
}

export interface ParamSpec {
  name: string;
  wireName: string;
  type: TypeRef;
  required: boolean;
  description?: string;
  location: "query" | "body";
}

export interface EndpointSpec {
  id: string; // e.g. app.bsky.feed.createPost
  type: "query" | "procedure";
  summary: string;
  description?: string;
  queryParams: ParamSpec[];
  bodyParams: ParamSpec[];
  responseData: TypeRef | null;
  isList: boolean;
  namespace: string; // e.g. app.bsky.feed
}

export interface LexiconSpec {
  endpoints: EndpointSpec[];
  schemas: Record<string, TypeRef>;
}

interface LexiconDefs {
  [name: string]: Record<string, unknown> & {
    type?: string;
    description?: string;
  };
}

function primName(schema: Record<string, unknown>): string {
  if (schema.format === "datetime" || schema.format === "date-time") return "string";
  if (schema.type === "integer") return "number";
  return typeof schema.type === "string" ? schema.type : "unknown";
}

function refName(schema: Record<string, unknown>): string {
  const ref = typeof schema.$ref === "string" ? schema.$ref : "";
  // "#/defs/..." or "#/defs/name" within a lexicon; "lexiconName#defsName" cross-lexicon
  if (ref.startsWith("#/defs/")) return ref.slice(7);
  if (ref.includes("#")) {
    const [lexicon, def] = ref.split("#");
    return `${lexicon}#${def}`;
  }
  return ref;
}

/** Resolve a lexicon ref:
 *  - `#x` → `<lexiconId>#x`
 *  - `app.bsky.richtext.facet` → `app.bsky.richtext.facet#main` (module form)
 *  - `com.atproto.repo.strongRef` → `com.atproto.repo.defs#strongRef` (legacy defs form)
 */
function resolveRefName(raw: string, lexiconId: string, lexiconIds: ReadonlySet<string>): string {
  if (raw.startsWith("#")) return `${lexiconId}${raw}`;
  if (!raw.includes("#")) {
    if (lexiconIds.has(raw)) return `${raw}#main`;
    const lastDot = raw.lastIndexOf(".");
    if (lastDot > 0) {
      const lexicon = `${raw.slice(0, lastDot)}.defs`;
      const def = raw.slice(lastDot + 1);
      return `${lexicon}#${def}`;
    }
  }
  return raw;
}

/** Convert a lexicon schema node into a TypeRef. */
function toTypeRef(
  node: unknown,
  required = true,
  lexiconId = "",
  lexiconIds: ReadonlySet<string> = new Set(),
): TypeRef {
  if (typeof node !== "object" || node === null) {
    return { kind: "unknown", required };
  }
  const schema = node as Record<string, unknown>;
  if (typeof schema.$ref === "string") {
    return { kind: "ref", name: refName(schema), required };
  }
  if (schema.type === "ref" && typeof schema.ref === "string") {
    return {
      kind: "ref",
      name: resolveRefName(String(schema.ref), lexiconId, lexiconIds),
      required,
    };
  }
  if (schema.type === "union" && Array.isArray(schema.refs)) {
    return {
      kind: "union",
      required,
      variants: (schema.refs as unknown[]).map((r) => ({
        kind: "ref" as const,
        name: resolveRefName(String(r), lexiconId, lexiconIds),
      })),
    };
  }
  if (Array.isArray(schema.enum)) {
    const values = schema.enum as (string | number)[];
    return {
      kind: "primitive",
      name: values.every((v) => typeof v === "number") ? "number" : "string",
      required,
      knownValues: values,
    };
  }
  if (schema.type === "array") {
    return {
      kind: "array",
      items: toTypeRef(schema.items ?? { type: "unknown" }, false, lexiconId, lexiconIds),
      required,
    };
  }
  if (schema.type === "object" || schema.properties !== undefined) {
    const props = (schema.properties ?? {}) as Record<string, unknown>;
    const requiredList = Array.isArray(schema.required) ? (schema.required as string[]) : [];
    return {
      kind: "object",
      required,
      fields: Object.entries(props).map(([name, propSchema]) => {
        const prop = propSchema as Record<string, unknown> | undefined;
        return {
          name,
          type: toTypeRef(propSchema, requiredList.includes(name), lexiconId, lexiconIds),
          required: requiredList.includes(name),
          description: typeof prop?.description === "string" ? prop.description : undefined,
        };
      }),
    };
  }
  if (schema.type === "blob") {
    return { kind: "blob", required };
  }
  if (schema.type === "unknown" || schema.type === "token") {
    return { kind: "unknown", required };
  }
  return { kind: "primitive", name: primName(schema), required };
}

/** Load all vendored lexicons into endpoints + schema table. */
export async function loadLexicons(vendorDir: string): Promise<LexiconSpec> {
  const lexiconsDir = join(vendorDir, "lexicons");
  const files: string[] = [];
  const walk = async (dir: string) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".json")) files.push(full);
    }
  };
  await walk(lexiconsDir);

  const endpoints: EndpointSpec[] = [];
  const schemas: Record<string, TypeRef> = {};
  const lexiconIds = new Set<string>();
  for (const file of files) {
    try {
      const parsed = JSON.parse(await readFile(file, "utf8")) as { id?: string };
      if (typeof parsed.id === "string") lexiconIds.add(parsed.id);
    } catch {
      // skip malformed lexicon files
    }
  }

  for (const file of files) {
    const lexicon = JSON.parse(await readFile(file, "utf8")) as {
      id: string;
      defs?: LexiconDefs;
    };
    if (!lexicon.defs) continue;
    const defs = lexicon.defs;
    const parts = lexicon.id.split(".");
    const namespace = parts.slice(0, -1).join(".");
    const name = parts[parts.length - 1]!;

    // Record schemas + shared defs → schema table (scoped by lexicon id)
    for (const [defName, def] of Object.entries(defs)) {
      if (defName === "main" || !def || typeof def !== "object") continue;
      const schemaId = `${lexicon.id}#${defName}`;
      if (def.type === "record" && def.record) {
        schemas[schemaId] = toTypeRef(def.record, true, lexicon.id, lexiconIds);
      } else if (def.type === "object") {
        schemas[schemaId] = toTypeRef(def, true, lexicon.id, lexiconIds);
      } else if (def.type === "union") {
        const refList = Array.isArray(def.refs) ? (def.refs as unknown[]) : [];
        const refs = refList.map((r) => {
          const raw = String(r);
          return { kind: "ref" as const, name: raw.startsWith("#") ? `${lexicon.id}${raw}` : raw };
        });
        schemas[schemaId] = { kind: "union", variants: refs };
      } else if (def.type === "string" && Array.isArray(def.knownValues)) {
        schemas[schemaId] = {
          kind: "primitive",
          name: "string",
          knownValues: def.knownValues as (string | number)[],
        };
      } else if (def.type === "integer") {
        schemas[schemaId] = { kind: "primitive", name: "number" };
      } else if (def.type === "boolean") {
        schemas[schemaId] = { kind: "primitive", name: "boolean" };
      } else if (def.type === "array") {
        schemas[schemaId] = {
          kind: "array",
          items: toTypeRef(def.items ?? { type: "unknown" }, false, lexicon.id, lexiconIds),
        };
      } else if (def.type === "blob") {
        schemas[schemaId] = { kind: "blob" };
      }
    }

    const main = defs.main;
    if (!main || typeof main !== "object") continue;
    // Record/object-type `main` defs (e.g. app.bsky.feed.post, richtext.facet)
    // are schemas too.
    if (!schemas[`${lexicon.id}#main`]) {
      if (main.type === "record" && main.record) {
        schemas[`${lexicon.id}#main`] = toTypeRef(main.record, true, lexicon.id, lexiconIds);
      } else if (main.type === "object") {
        schemas[`${lexicon.id}#main`] = toTypeRef(main, true, lexicon.id, lexiconIds);
      }
    }
    if (main.type !== "query" && main.type !== "procedure") continue;

    const queryParams: ParamSpec[] = [];
    if (main.parameters && typeof main.parameters === "object") {
      const params = main.parameters as Record<string, unknown>;
      const requiredList = Array.isArray(params.required) ? (params.required as string[]) : [];
      const properties = (params.properties ?? {}) as Record<string, unknown>;
      for (const [paramName, paramSchema] of Object.entries(properties)) {
        queryParams.push({
          name: camel(paramName),
          wireName: paramName,
          type: toTypeRef(paramSchema, requiredList.includes(paramName), lexicon.id, lexiconIds),
          required: requiredList.includes(paramName),
          location: "query",
        });
      }
    }

    const bodyParams: ParamSpec[] = [];
    const input = main.input as { schema?: Record<string, unknown> } | undefined;
    if (input?.schema) {
      bodyParams.push({
        name: "body",
        wireName: "body",
        type: toTypeRef(input.schema, true, lexicon.id, lexiconIds),
        required: true,
        location: "body",
      });
    }

    let responseData: TypeRef | null = null;
    let isList = false;
    const output = main.output as { schema?: Record<string, unknown> } | undefined;
    if (output?.schema) {
      responseData = toTypeRef(output.schema, true, lexicon.id, lexiconIds);
      const resolved =
        responseData.kind === "ref" ? schemas[responseData.name ?? ""] : responseData;
      if (resolved?.kind === "object") {
        isList = (resolved.fields ?? []).some(
          (f) =>
            f.name === "feed" ||
            f.name === "posts" ||
            f.name === "notifications" ||
            f.name === "follows" ||
            f.name === "followers" ||
            f.name === "blocks" ||
            f.name === "likes" ||
            f.name === "repostedBy" ||
            f.name === "records" ||
            f.name === "profiles" ||
            f.name === "lists" ||
            f.name === "items" ||
            f.name === "actors" ||
            f.name === "threads" ||
            f.name === "feedGenerators" ||
            f.name === "suggestions" ||
            f.name === "bookmarks",
        );
      }
    }

    endpoints.push({
      id: lexicon.id,
      type: main.type,
      summary: main.description ?? name,
      description: main.description,
      queryParams,
      bodyParams,
      responseData,
      isList,
      namespace,
    });
  }

  // Synthesize well-known schemas referenced by lexicons but no longer defined
  // upstream (e.g. the legacy `com.atproto.repo.defs#strongRef`).
  if (!schemas["com.atproto.repo.defs#strongRef"]) {
    schemas["com.atproto.repo.defs#strongRef"] = {
      kind: "object",
      fields: [
        { name: "uri", type: { kind: "primitive", name: "string" }, required: true },
        { name: "cid", type: { kind: "primitive", name: "string" }, required: true },
      ],
    };
  }

  return {
    endpoints: endpoints.sort((a, b) => a.id.localeCompare(b.id)),
    schemas,
  };
}

function camel(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part, index) => {
      const p = part.charAt(0).toUpperCase() + part.slice(1);
      return index === 0 ? p.charAt(0).toLowerCase() + p.slice(1) : p;
    })
    .join("");
}
