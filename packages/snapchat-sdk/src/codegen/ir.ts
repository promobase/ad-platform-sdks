import type { SdkIr, TypeRefIr } from "@mosaic/sdk-codegen";

import type { EndpointSpec, ParamSpec } from "./parser.ts";

/** Convert a canonical Snapchat endpoint spec into the shared SDK IR. */
export function snapchatCanonicalIr(
  endpoints: readonly EndpointSpec[],
  sourceRevision?: string,
): SdkIr {
  const models = new Map<string, SdkIr["models"][number]>();
  const capabilities = new Map<string, SdkIr["capabilities"][number]>();
  const irEndpoints: SdkIr["endpoints"][number][] = [];
  const ids = new Map<string, number>();

  for (const endpoint of [...endpoints].sort((a, b) => a.url.localeCompare(b.url))) {
    const baseName = entityModelName(endpoint);
    const requestModel = `${baseName}Params`;
    const responseModel = `${baseName}Response`;
    addParamModel(models, requestModel, endpoint.requestParams);
    addParamModel(models, responseModel, endpoint.responseParams);

    const effect =
      endpoint.method === "GET" ? "read" : endpoint.method === "DELETE" ? "delete" : "write";
    const category = camel(endpoint.category);
    const capabilityId = `${category}.${effect === "read" ? "read" : "manage"}`;
    if (!capabilities.has(capabilityId)) {
      capabilities.set(capabilityId, {
        id: capabilityId,
        summary: `${effect === "read" ? "Read" : "Manage"} ${endpoint.category} via Snapchat Marketing API`,
        requiredScopes: ["snapchat-marketing-api"],
      });
    }
    const count = (ids.get(baseName) ?? 0) + 1;
    ids.set(baseName, count);
    const id = `Snapchat${baseName}${count === 1 ? "" : count}`;
    irEndpoints.push({
      id,
      operationId: `snapchat.${category}.${camel(baseName)}${count === 1 ? "" : count}`,
      platform: "snapchat",
      method: endpoint.method,
      path: endpoint.path,
      parameters: endpoint.requestParams.map((parameter) => ({
        name: parameter.name,
        location: parameter.location ?? (endpoint.method === "GET" ? "query" : "body"),
        type: paramType(parameter, models),
        required: parameter.required,
        nullable: false,
        ...(parameter.description ? { documentation: parameter.description } : {}),
      })),
      output: { kind: "reference", target: responseModel },
      errors: [
        { status: 400, retryable: false },
        { status: 401, retryable: false },
        { status: 403, retryable: false },
        { status: 404, retryable: false },
        { status: 429, retryable: true },
        { status: 500, retryable: true },
        { status: 503, retryable: true },
      ],
      effect,
      execution: effect === "read" ? "inline" : "durable",
      idempotency: endpoint.method === "GET" ? "safe" : "unsafe",
      requiredScopes: ["snapchat-marketing-api"],
      capabilities: [capabilityId],
      ...(endpoint.responseKind === "list"
        ? {
            pagination: {
              kind: "cursor" as const,
              requestField: "cursor",
              responseField: "next_link",
              itemsField: endpoint.entityKey,
            },
          }
        : {}),
      rateLimitBucket: "snapchat-ads-api",
      authSchemes: ["bearer"],
      protocols: endpoint.path.endsWith("/upload") ? ["json", "multipart"] : ["json"],
      summary: endpoint.section,
      description: `Generated from Snapchat Marketing API documentation (${endpoint.docId})`,
    });
  }

  return {
    platform: "snapchat",
    source: {
      kind: "documentation",
      location: "https://developers.snap.com/marketing-api",
      revision: sourceRevision,
    },
    version: "v1",
    models: [...models.values()].sort((a, b) => a.name.localeCompare(b.name)),
    endpoints: irEndpoints,
    capabilities: [...capabilities.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: irEndpoints.length,
      excludedOperations: [],
      unresolvedSchemas: collectUnresolvedTypes(endpoints),
      protocols: ["json", "multipart"],
    },
  };
}

function entityModelName(endpoint: EndpointSpec): string {
  return endpoint.entityName;
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

/** Sanitize a doc field name into a valid Pascal-case model name. */
function modelName(raw: string): string {
  const pascal = raw
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return pascal.length > 0 ? pascal : "Unknown";
}

function paramType(parameter: ParamSpec, models: Map<string, SdkIr["models"][number]>): TypeRefIr {
  if (parameter.type === "enum" && parameter.enumValues && parameter.enumValues.length > 0) {
    const enumName = `${modelName(parameter.name)}Enum`;
    if (!models.has(enumName)) {
      models.set(enumName, {
        kind: "enum",
        id: enumName,
        name: enumName,
        wire: "json",
        values: parameter.enumValues,
        open: true,
      });
    }
    return { kind: "reference", target: enumName };
  }
  if (parameter.children && parameter.children.length > 0) {
    const childName = `${modelName(parameter.name)}Body`;
    addParamModel(models, childName, parameter.children);
    const base: TypeRefIr = { kind: "reference", target: childName };
    return parameter.type.endsWith("[]") ? { kind: "array", items: base } : base;
  }
  switch (parameter.type) {
    case "number":
      return { kind: "primitive", name: "number" };
    case "boolean":
      return { kind: "primitive", name: "boolean" };
    case "object":
      return { kind: "primitive", name: "json" };
    case "array":
      return { kind: "array", items: { kind: "primitive", name: "unknown" } };
    case "unknown":
      return { kind: "primitive", name: "unknown" };
    default:
      return { kind: "primitive", name: "string" };
  }
}

function addParamModel(
  models: Map<string, SdkIr["models"][number]>,
  name: string,
  params: readonly ParamSpec[],
): void {
  if (models.has(name)) return;
  models.set(name, {
    kind: "object",
    id: name,
    name,
    wire: "json",
    fields: params.map((parameter) => ({
      name: parameter.name,
      type: paramType(parameter, models),
      required: parameter.required,
      nullable: false,
      ...(parameter.description ? { documentation: parameter.description } : {}),
    })),
  });
}

function collectUnresolvedTypes(endpoints: readonly EndpointSpec[]): string[] {
  const unresolved = new Set<string>();
  const visit = (parameter: ParamSpec) => {
    if (parameter.children && parameter.children.length > 0) {
      parameter.children.forEach(visit);
      return;
    }
    if (parameter.type === "unknown") unresolved.add(parameter.name);
  };
  for (const endpoint of endpoints) {
    endpoint.requestParams.forEach(visit);
    endpoint.responseParams.forEach(visit);
  }
  return [...unresolved];
}
