import type { SdkIr, TypeRefIr } from "@openpromo/sdk-codegen";

import type { EndpointSpec, ParamSpec } from "./parser.ts";

export function tiktokCanonicalIr(
  endpoints: readonly EndpointSpec[],
  sourceRevision?: string,
): SdkIr {
  const models = new Map<string, SdkIr["models"][number]>();
  const capabilities = new Map<string, SdkIr["capabilities"][number]>();
  const irEndpoints: SdkIr["endpoints"][number][] = [];
  const ids = new Map<string, number>();

  for (const endpoint of [...endpoints].sort((a, b) => a.url.localeCompare(b.url))) {
    const baseName = urlToPascalName(endpoint.url);
    const requestModel = `${baseName}Params`;
    const responseModel = `${baseName}Response`;
    addParamModel(models, requestModel, endpoint.requestParams);
    addParamModel(models, responseModel, endpoint.responseFields);

    const effect =
      endpoint.method === "GET" ? "read" : endpoint.method === "DELETE" ? "delete" : "write";
    const category = lowerCamel(endpoint.category);
    const capabilityId = `${category}.${effect === "read" ? "read" : "manage"}`;
    if (!capabilities.has(capabilityId)) {
      capabilities.set(capabilityId, {
        id: capabilityId,
        summary: `${effect === "read" ? "Read" : "Manage"} TikTok ${endpoint.category}`,
        requiredScopes: [],
      });
    }
    const capability = capabilities.get(capabilityId)!;
    const requiredScopes = new Set(capability.requiredScopes);
    endpoint.requiredScopes.forEach((scope) => requiredScopes.add(scope));
    capabilities.set(capabilityId, {
      ...capability,
      requiredScopes: [...requiredScopes].sort(),
    });
    const count = (ids.get(baseName) ?? 0) + 1;
    ids.set(baseName, count);
    const id = `TikTok${baseName}${count === 1 ? "" : count}`;
    irEndpoints.push({
      id,
      operationId: `tiktok.${category}.${lowerCamel(baseName)}${count === 1 ? "" : count}`,
      platform: "tiktok",
      method: endpoint.method,
      path: endpoint.url.replace(/^https?:\/\/[^/]+/, ""),
      parameters: endpoint.requestParams.map((parameter) => ({
        name: parameter.name,
        location:
          parameter.location ??
          (endpoint.method === "GET" ? ("query" as const) : ("body" as const)),
        type: paramType(parameter, requestModel),
        required: parameter.required,
        nullable: false,
        ...(parameter.description ? { documentation: parameter.description } : {}),
      })),
      output: { kind: "reference", target: responseModel },
      errors: [
        { status: 400, retryable: false },
        { status: 401, retryable: false },
        { status: 403, retryable: false },
        { status: 429, retryable: true },
        { status: 500, retryable: true },
        { status: 503, retryable: true },
      ],
      effect,
      execution: effect === "read" || category === "authentication" ? "inline" : "durable",
      idempotency: endpoint.method === "GET" ? "safe" : "unsafe",
      requiredScopes: [...endpoint.requiredScopes],
      capabilities: [capabilityId],
      rateLimitBucket: "tiktok-business-api",
      authSchemes: [endpoint.auth],
      protocols: endpoint.requestParams.some((parameter) => /file|binary/i.test(parameter.type))
        ? ["json", "multipart"]
        : ["json"],
      summary: endpoint.title,
      description: `Generated from TikTok documentation ${endpoint.docId}`,
    });
  }

  return {
    platform: "tiktok",
    source: {
      kind: "documentation",
      location: "https://business-api.tiktok.com/gateway/api/doc/client",
      revision: sourceRevision,
    },
    version: "business-api",
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

function collectUnresolvedTypes(endpoints: readonly EndpointSpec[]): string[] {
  const unresolved = new Set<string>();
  const visit = (parameter: ParamSpec) => {
    if (parameter.children.length > 0) {
      parameter.children.forEach(visit);
      return;
    }
    const raw = parameter.type.replace(/\[\]$/, "");
    if (
      !parameter.enumValues?.length &&
      !/boolean|number|int|float|double|string|record|object/i.test(raw)
    ) {
      unresolved.add(raw || "<empty>");
    }
  };
  for (const endpoint of endpoints) {
    endpoint.requestParams.forEach(visit);
    endpoint.responseFields.forEach(visit);
  }
  return [...unresolved].sort();
}

function addParamModel(
  models: Map<string, SdkIr["models"][number]>,
  name: string,
  params: readonly ParamSpec[],
): void {
  if (models.has(name)) return;
  for (const parameter of params) {
    if (parameter.children.length > 0) {
      addParamModel(models, `${name}${pascal(parameter.name)}`, parameter.children);
    }
  }
  const seen = new Set<string>();
  models.set(name, {
    kind: "object",
    id: name,
    name,
    wire: "json",
    fields: params
      .filter((parameter) => !seen.has(parameter.name) && seen.add(parameter.name))
      .map((parameter) => ({
        name: parameter.name,
        type: paramType(parameter, name),
        required: parameter.required,
        nullable: false,
        ...(parameter.description ? { documentation: parameter.description } : {}),
      })),
  });
}

function paramType(parameter: ParamSpec, owner: string): TypeRefIr {
  if (parameter.children.length > 0) {
    const reference: TypeRefIr = {
      kind: "reference",
      target: `${owner}${pascal(parameter.name)}`,
    };
    return isArrayType(parameter.type) ? { kind: "array", items: reference } : reference;
  }
  if (parameter.enumValues?.length) {
    const union: TypeRefIr = {
      kind: "union",
      variants: parameter.enumValues.map((value) => ({ kind: "literal", value })),
    };
    return isArrayType(parameter.type) ? { kind: "array", items: union } : union;
  }
  const raw = parameter.type.replace(/\[\]$/, "");
  let type: TypeRefIr;
  if (/boolean/i.test(raw)) type = { kind: "primitive", name: "boolean" };
  else if (/number|int|float|double/i.test(raw)) type = { kind: "primitive", name: "number" };
  else if (/string/i.test(raw)) type = { kind: "primitive", name: "string" };
  else if (/record|object/i.test(raw)) {
    type = { kind: "record", values: { kind: "primitive", name: "unknown" } };
  } else type = { kind: "primitive", name: "unknown" };
  return isArrayType(parameter.type) ? { kind: "array", items: type } : type;
}

function isArrayType(value: string): boolean {
  return value.endsWith("[]");
}

function urlToPascalName(url: string): string {
  return url
    .replace(/^https?:\/\/[^/]+/, "")
    .replace(/^\/open_api\/v[\d.]+\//, "")
    .replace(/\/$/, "")
    .split("/")
    .map(pascal)
    .join("");
}

function pascal(value: string): string {
  const result = value
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return /^[A-Za-z_$]/.test(result) ? result : `N${result}`;
}

function lowerCamel(value: string): string {
  const result = pascal(value);
  return result.charAt(0).toLowerCase() + result.slice(1);
}
