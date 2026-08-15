import type { SdkIr, TypeRefIr } from "@openpromo/sdk-codegen";

import type { EnumMap } from "./enum-extractor.ts";
import type { Spec } from "./parser.ts";
import { enumTypeToTsName, parseGenericType } from "./type-resolver.ts";

type ScopeRule = {
  readonly specName: string;
  readonly method: Spec["apis"][number]["method"];
  readonly endpoint: string;
  readonly requiredScopes: readonly string[];
};

/**
 * Curated Graph permission metadata for the operations Mosaic owns directly.
 *
 * The Graph API spec does not carry permission annotations, so this intentionally
 * covers only stable Page/Instagram operations documented by Meta's Messenger and
 * Instagram API collections. An empty list means "not declared", not "public".
 */
const CURATED_SCOPE_RULES: readonly ScopeRule[] = [
  { specName: "Page", method: "POST", endpoint: "feed", requiredScopes: ["pages_manage_posts"] },
  { specName: "Page", method: "POST", endpoint: "messages", requiredScopes: ["pages_messaging"] },
  {
    specName: "Page",
    method: "GET",
    endpoint: "insights",
    requiredScopes: ["read_insights"],
  },
  {
    specName: "Page",
    method: "GET",
    endpoint: "subscribed_apps",
    requiredScopes: ["pages_manage_metadata"],
  },
  {
    specName: "Page",
    method: "POST",
    endpoint: "subscribed_apps",
    requiredScopes: ["pages_manage_metadata"],
  },
  {
    specName: "Page",
    method: "DELETE",
    endpoint: "subscribed_apps",
    requiredScopes: ["pages_manage_metadata"],
  },
  {
    specName: "IGUser",
    method: "POST",
    endpoint: "media",
    requiredScopes: ["instagram_content_publish"],
  },
  {
    specName: "IGUser",
    method: "POST",
    endpoint: "media_publish",
    requiredScopes: ["instagram_content_publish"],
  },
  {
    specName: "IGUser",
    method: "GET",
    endpoint: "content_publishing_limit",
    requiredScopes: ["instagram_basic"],
  },
  {
    specName: "IGUser",
    method: "GET",
    endpoint: "insights",
    requiredScopes: ["instagram_manage_insights"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "POST",
    endpoint: "media",
    requiredScopes: ["instagram_content_publish"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "POST",
    endpoint: "media_publish",
    requiredScopes: ["instagram_content_publish"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "POST",
    endpoint: "messages",
    requiredScopes: ["instagram_manage_messages"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "GET",
    endpoint: "insights",
    requiredScopes: ["instagram_manage_insights"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "GET",
    endpoint: "subscribed_apps",
    requiredScopes: ["instagram_manage_messages"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "POST",
    endpoint: "subscribed_apps",
    requiredScopes: ["instagram_manage_messages"],
  },
  {
    specName: "IGUserForIGOnlyAPI",
    method: "DELETE",
    endpoint: "subscribed_apps",
    requiredScopes: ["instagram_manage_messages"],
  },
  {
    specName: "IGMedia",
    method: "GET",
    endpoint: "comments",
    requiredScopes: ["instagram_manage_comments"],
  },
  {
    specName: "IGMedia",
    method: "POST",
    endpoint: "comments",
    requiredScopes: ["instagram_manage_comments"],
  },
  {
    specName: "IGMedia",
    method: "GET",
    endpoint: "insights",
    requiredScopes: ["instagram_manage_insights"],
  },
  {
    specName: "IGComment",
    method: "POST",
    endpoint: "replies",
    requiredScopes: ["instagram_manage_comments"],
  },
];

function requiredScopesFor(specName: string, method: ScopeRule["method"], endpoint?: string) {
  return (
    CURATED_SCOPE_RULES.find(
      (rule) => rule.specName === specName && rule.method === method && rule.endpoint === endpoint,
    )?.requiredScopes ?? []
  );
}

export function facebookGraphCanonicalIr(
  specs: ReadonlyMap<string, Spec>,
  enums: EnumMap,
  source: { version: string; revision?: string },
): SdkIr {
  const objectNames = new Set(specs.keys());
  const enumNames = new Set([...enums.keys()].map(enumTypeToTsName));
  const models: SdkIr["models"][number][] = [];
  const unresolvedSchemas = new Set<string>();

  for (const [name, spec] of [...specs].sort(([a], [b]) => a.localeCompare(b))) {
    models.push({
      kind: "object",
      id: `${name}Fields`,
      name: `${name}Fields`,
      wire: "json",
      fields: spec.fields
        .filter((field) => !field.not_visible)
        .map((field) => ({
          name: field.name,
          type: graphType(field.type, objectNames, enumNames, unresolvedSchemas),
          required: false,
          nullable: false,
        })),
    });
  }
  for (const [rawName, values] of [...enums].sort(([a], [b]) => a.localeCompare(b))) {
    const name = enumTypeToTsName(rawName);
    models.push({ kind: "enum", id: name, name, wire: "json", values });
  }

  const endpoints: SdkIr["endpoints"][number][] = [];
  const capabilityMap = new Map<string, SdkIr["capabilities"][number]>();
  const endpointNames = new Map<string, number>();
  for (const [specName, spec] of [...specs].sort(([a], [b]) => a.localeCompare(b))) {
    for (const api of spec.apis) {
      const action = api.name?.replace(/^#/, "") || api.endpoint || api.method.toLowerCase();
      const effect = api.method === "GET" ? "read" : api.method === "DELETE" ? "delete" : "write";
      const requiredScopes = requiredScopesFor(specName, api.method, api.endpoint);
      const capabilityId = `${lowerCamel(specName)}.${effect === "read" ? "read" : "manage"}`;
      if (!capabilityMap.has(capabilityId)) {
        capabilityMap.set(capabilityId, {
          id: capabilityId,
          summary: `${effect === "read" ? "Read" : "Manage"} Facebook Graph ${specName}`,
          requiredScopes: [...requiredScopes],
        });
      } else {
        const capability = capabilityMap.get(capabilityId)!;
        capabilityMap.set(capabilityId, {
          ...capability,
          requiredScopes: [...new Set([...capability.requiredScopes, ...requiredScopes])].sort(),
        });
      }
      const baseId = `Facebook${pascal(specName)}${pascal(action)}`;
      const count = (endpointNames.get(baseId) ?? 0) + 1;
      endpointNames.set(baseId, count);
      const id = count === 1 ? baseId : `${baseId}${count}`;
      endpoints.push({
        id,
        operationId: `facebook.${lowerCamel(specName)}.${lowerCamel(action)}${count === 1 ? "" : count}`,
        platform: "facebook",
        method: api.method,
        path: api.endpoint ? `/{id}/${api.endpoint}` : "/{id}",
        parameters: [
          {
            name: "id",
            location: "path",
            type: { kind: "primitive", name: "string" },
            required: true,
            nullable: false,
          },
          ...api.params.map((parameter) => ({
            name: parameter.name,
            location: api.method === "POST" ? ("body" as const) : ("query" as const),
            type: graphType(parameter.type, objectNames, enumNames, unresolvedSchemas),
            required: parameter.required,
            nullable: false,
          })),
        ],
        output: graphType(api.return, objectNames, enumNames, unresolvedSchemas),
        errors: [
          { status: 400, retryable: false },
          { status: 401, retryable: false },
          { status: 403, retryable: false },
          { status: 429, retryable: true },
          { status: 500, retryable: true },
          { status: 503, retryable: true },
        ],
        effect,
        execution: effect === "read" ? "inline" : "durable",
        idempotency: api.method === "GET" ? "safe" : "unsafe",
        requiredScopes: [...requiredScopes],
        capabilities: [capabilityId],
        rateLimitBucket: "facebook-graph-api",
        authSchemes: ["AccessToken"],
        protocols: api.params.some((parameter) => parameter.type === "file")
          ? ["json", "multipart"]
          : ["json"],
        summary: `${api.method} ${specName}${api.endpoint ? ` ${api.endpoint}` : ""}`,
      });
    }
  }

  return {
    platform: "facebook",
    source: {
      kind: "vendor-json",
      location: "packages/meta-business-sdk/api_specs",
      revision: source.revision,
    },
    version: source.version,
    models,
    endpoints,
    capabilities: [...capabilityMap.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: endpoints.length,
      excludedOperations: [],
      unresolvedSchemas: [...unresolvedSchemas].sort(),
      protocols: ["json", "multipart"],
    },
  };
}

function graphType(
  raw: string,
  objectNames: ReadonlySet<string>,
  enumNames: ReadonlySet<string>,
  unresolvedSchemas?: Set<string>,
): TypeRefIr {
  const type = raw.trim();
  switch (type) {
    case "string":
      return { kind: "primitive", name: "string" };
    case "datetime":
      return { kind: "primitive", name: "string", format: "date-time" };
    case "bool":
    case "boolean":
      return { kind: "primitive", name: "boolean" };
    case "int":
    case "unsigned int":
      return { kind: "primitive", name: "integer" };
    case "float":
    case "double":
    case "numeric":
      return { kind: "primitive", name: "number" };
    case "Object":
    case "map":
      return { kind: "record", values: { kind: "primitive", name: "unknown" } };
    case "list":
      return { kind: "array", items: { kind: "primitive", name: "unknown" } };
    case "file":
      return { kind: "primitive", name: "unknown" };
  }
  const generic = parseGenericType(type);
  if (generic?.outer === "list") {
    return {
      kind: "array",
      items: graphType(generic.inner[0]!, objectNames, enumNames, unresolvedSchemas),
    };
  }
  if (generic?.outer === "map") {
    return {
      kind: "record",
      values: graphType(generic.inner[1] ?? "unknown", objectNames, enumNames, unresolvedSchemas),
    };
  }
  const enumName = enumTypeToTsName(type);
  if (enumNames.has(enumName)) return { kind: "reference", target: enumName };
  if (objectNames.has(type)) return { kind: "reference", target: `${type}Fields` };
  unresolvedSchemas?.add(type || "<empty>");
  return { kind: "primitive", name: "unknown" };
}

function pascal(value: string): string {
  const normalized = value.replace(/[^A-Za-z0-9]+(.)/g, (_match, char) => char.toUpperCase());
  const result = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  return /^[A-Za-z_$]/.test(result) ? result : `N${result}`;
}

function lowerCamel(value: string): string {
  const result = pascal(value);
  return result.charAt(0).toLowerCase() + result.slice(1);
}
