export interface SourceManifest {
  readonly schemaVersion: 1;
  readonly workspace: string;
  readonly apiVersion: string;
  readonly collections: readonly {
    readonly name: string;
    readonly uid: string;
    readonly access: "community" | "marketing" | "partner" | "restricted";
    readonly excludedRequests?: readonly { readonly name: string; readonly reason: string }[];
  }[];
  readonly excluded: readonly { readonly name: string; readonly reason: string }[];
}

interface PostmanItem {
  readonly name?: string;
  readonly id?: string;
  readonly item?: readonly PostmanItem[];
  readonly request?: {
    readonly method?: string;
    readonly header?: readonly {
      readonly key?: string;
      readonly value?: string;
      readonly disabled?: boolean;
    }[];
    readonly body?: { readonly mode?: string };
    readonly url?: string | { readonly raw?: string };
    readonly description?: string;
  };
}

interface PostmanCollection {
  readonly info?: { readonly name?: string; readonly schema?: string };
  readonly item?: readonly PostmanItem[];
}

export interface LinkedInOperationSnapshot {
  readonly id: string;
  readonly name: string;
  readonly collection: string;
  readonly access: SourceManifest["collections"][number]["access"];
  readonly folder: readonly string[];
  readonly method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  readonly url: string;
  readonly variables: readonly string[];
  readonly hasBody: boolean;
  readonly restliMethod?: string;
  readonly restli: {
    readonly kind: "action" | "batch" | "finder" | "resource";
    readonly name?: string;
    readonly complexKey: boolean;
    readonly schemaConfidence: "example-only" | "unknown";
    readonly requiredScopes: readonly string[];
    readonly scopeConfidence: "unknown";
  };
  readonly description?: string;
  readonly postmanId?: string;
}

export interface LinkedInPostmanSnapshot {
  readonly schemaVersion: 1;
  readonly apiVersion: string;
  readonly workspace: string;
  readonly generatedAt: string;
  readonly sources: readonly {
    readonly name: string;
    readonly uid: string;
    readonly sha256: string;
    readonly requestCount: number;
    readonly excludedRequestCount: number;
  }[];
  readonly excludedOperations: readonly {
    readonly collection: string;
    readonly name: string;
    readonly reason: string;
  }[];
  readonly operations: readonly LinkedInOperationSnapshot[];
}

const supportedMethods = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const providerVariables = new Set(["baseUrl", "insert_token", "insert_version", "access_token"]);

export function normalizeCollection(
  source: SourceManifest["collections"][number],
  collection: PostmanCollection,
): LinkedInOperationSnapshot[] {
  const operations: LinkedInOperationSnapshot[] = [];
  walk(collection.item ?? [], [], (item, folder) => {
    const request = item.request;
    const method = request?.method?.toUpperCase();
    const rawUrl = typeof request?.url === "string" ? request.url : request?.url?.raw;
    if (!request) return;
    if (!rawUrl) {
      const exclusion = source.excludedRequests?.find((candidate) => candidate.name === item.name);
      if (exclusion) return;
      throw new Error(`Request in ${source.name} has no URL: ${item.name ?? "unnamed"}`);
    }
    if (!method || !supportedMethods.has(method)) {
      throw new Error(`Unsupported method in ${source.name}: ${method ?? "missing"}`);
    }
    if (request.body && request.body.mode !== "raw") {
      throw new Error(
        `Unsupported body mode in ${source.name}/${item.name ?? "unnamed"}: ${request.body.mode ?? "missing"}`,
      );
    }
    const name = cleanText(item.name) || `${method} request`;
    const headers = new Map(
      (request.header ?? [])
        .filter((header) => !header.disabled && header.key)
        .map((header) => [header.key!.toLowerCase(), header.value ?? ""]),
    );
    const url = normalizeUrl(rawUrl);
    const restli = classifyRestli(url, method, headers.get("x-restli-method"), request.body);
    const variables = [...url.matchAll(/\{([A-Za-z0-9_]+)\}/g)]
      .map((match) => match[1]!)
      .filter((variable) => !providerVariables.has(variable));
    const identity = [source.name, ...folder, name, method, url].join(" ");
    operations.push({
      id: uniqueId(identity, operations),
      name,
      collection: source.name,
      access: source.access,
      folder,
      method: method as LinkedInOperationSnapshot["method"],
      url,
      variables: [...new Set(variables)].sort(),
      hasBody: request.body !== undefined && request.body.mode !== "disabled",
      ...(headers.get("x-restli-method")
        ? { restliMethod: headers.get("x-restli-method")!.toUpperCase() }
        : {}),
      restli,
      ...(cleanText(request.description) ? { description: cleanText(request.description) } : {}),
      ...(item.id ? { postmanId: item.id } : {}),
    });
  });
  assertUniqueIds(operations, source.name);
  return operations;
}

function classifyRestli(
  url: string,
  method: string,
  restliMethod: string | undefined,
  body: { readonly mode?: string } | undefined,
): LinkedInOperationSnapshot["restli"] {
  const query = new URLSearchParams(url.split("?")[1] ?? "");
  const action = query.get("action") ?? undefined;
  const finder = query.get("q") ?? undefined;
  const kind = restliMethod?.toUpperCase().startsWith("BATCH_")
    ? "batch"
    : action
      ? "action"
      : finder
        ? "finder"
        : "resource";
  return {
    kind,
    ...(action || finder ? { name: action ?? finder } : {}),
    complexKey: /\/\([^/?]+\)(?:[/?]|$)/.test(url),
    schemaConfidence: body && method !== "GET" ? "example-only" : "unknown",
    requiredScopes: [],
    scopeConfidence: "unknown",
  };
}

function assertUniqueIds(operations: readonly LinkedInOperationSnapshot[], source: string): void {
  const seen = new Set<string>();
  for (const operation of operations) {
    if (seen.has(operation.id))
      throw new Error(`Duplicate operation id in ${source}: ${operation.id}`);
    seen.add(operation.id);
  }
}

function walk(
  items: readonly PostmanItem[],
  folder: readonly string[],
  visit: (item: PostmanItem, folder: readonly string[]) => void,
): void {
  for (const item of items) {
    if (item.request) visit(item, folder);
    if (item.item) walk(item.item, [...folder, cleanText(item.name) || "Unnamed"], visit);
  }
}

function normalizeUrl(rawUrl: string): string {
  return rawUrl
    .replace(/^\{\{baseUrl\}\}/i, "")
    .replaceAll(/\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g, "{$1}")
    .replaceAll(/https:\/\/api\.linkedin\.com\/(?:rest|v2)/gi, "")
    .replace(/^([^/])/, "/$1")
    .replaceAll(" ", "%20");
}

function cleanText(value: unknown): string {
  return typeof value === "string"
    ? value
        .replaceAll(/(^|\s)#{1,6}\s+/g, "$1")
        .replaceAll(/\s+/g, " ")
        .trim()
    : "";
}

function uniqueId(identity: string, existing: readonly LinkedInOperationSnapshot[]): string {
  const base = toCamelCase(identity).slice(0, 120) || "linkedinOperation";
  if (!existing.some((operation) => operation.id === base)) return base;
  let suffix = 2;
  while (existing.some((operation) => operation.id === `${base}${suffix}`)) suffix += 1;
  return `${base}${suffix}`;
}

export function toCamelCase(value: string): string {
  const words = value.replaceAll(/([a-z0-9])([A-Z])/g, "$1 $2").match(/[A-Za-z0-9]+/g) ?? [];
  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 ? lower : `${lower[0]?.toUpperCase() ?? ""}${lower.slice(1)}`;
    })
    .join("")
    .replace(/^[0-9]/, "operation$&");
}
