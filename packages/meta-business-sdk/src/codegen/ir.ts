import type { SdkIr, TypeRefIr } from "@openpromo/sdk-codegen";

import type { EnumMap } from "./enum-extractor.ts";
import type { Spec } from "./parser.ts";
import { enumTypeToTsName, parseGenericType } from "./type-resolver.ts";

export function metaCanonicalIr(
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
          type: metaType(field.type, objectNames, enumNames, unresolvedSchemas),
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
      const capabilityId = `${lowerCamel(specName)}.${effect === "read" ? "read" : "manage"}`;
      if (!capabilityMap.has(capabilityId)) {
        capabilityMap.set(capabilityId, {
          id: capabilityId,
          summary: `${effect === "read" ? "Read" : "Manage"} Meta ${specName}`,
          requiredScopes: [],
        });
      }
      const baseId = `Meta${pascal(specName)}${pascal(action)}`;
      const count = (endpointNames.get(baseId) ?? 0) + 1;
      endpointNames.set(baseId, count);
      const id = count === 1 ? baseId : `${baseId}${count}`;
      endpoints.push({
        id,
        operationId: `meta.${lowerCamel(specName)}.${lowerCamel(action)}${count === 1 ? "" : count}`,
        platform: "meta",
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
            type: metaType(parameter.type, objectNames, enumNames, unresolvedSchemas),
            required: parameter.required,
            nullable: false,
          })),
        ],
        output: metaType(api.return, objectNames, enumNames, unresolvedSchemas),
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
        requiredScopes: [],
        capabilities: [capabilityId],
        rateLimitBucket: "meta-graph-api",
        authSchemes: ["AccessToken"],
        protocols: api.params.some((parameter) => parameter.type === "file")
          ? ["json", "multipart"]
          : ["json"],
        summary: `${api.method} ${specName}${api.endpoint ? ` ${api.endpoint}` : ""}`,
      });
    }
  }

  return {
    platform: "meta",
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

function metaType(
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
      items: metaType(generic.inner[0]!, objectNames, enumNames, unresolvedSchemas),
    };
  }
  if (generic?.outer === "map") {
    return {
      kind: "record",
      values: metaType(generic.inner[1] ?? "unknown", objectNames, enumNames, unresolvedSchemas),
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
