import type { SdkIr, TypeRefIr } from "@mosaic/sdk-codegen";

import type { EndpointSpec, SchemaSpec, TypeRef } from "./openapi.ts";

/** Convert parsed OpenAPI data into the shared canonical SDK IR. */
export function redditCanonicalIr(
  endpoints: readonly EndpointSpec[],
  schemas: readonly SchemaSpec[],
  sourceRevision?: string,
): SdkIr {
  const models = new Map<string, SdkIr["models"][number]>();
  const capabilities = new Map<string, SdkIr["capabilities"][number]>();
  const irEndpoints: SdkIr["endpoints"][number][] = [];
  const ids = new Map<string, number>();

  for (const schema of schemas) {
    addModel(models, schema.name, schema.type);
  }

  for (const endpoint of [...endpoints].sort((a, b) => a.path.localeCompare(b.path))) {
    const baseName = pascal(endpoint.operationId);
    const requestModel = `${baseName}Params`;
    const responseModel = `${baseName}Response`;
    const requestFields: {
      name: string;
      type: TypeRef;
      required: boolean;
      description?: string;
    }[] = [
      ...endpoint.pathParams,
      ...endpoint.queryParams,
      ...(endpoint.bodyParams[0]?.type.kind === "object"
        ? (endpoint.bodyParams[0].type.fields ?? []).map((f) => ({
            name: f.name,
            type: f.type,
            required: f.required,
            description: f.description,
          }))
        : endpoint.bodyParams.length > 0
          ? [{ name: "body", type: endpoint.bodyParams[0]!.type, required: true }]
          : []),
    ];
    addObjectModel(models, requestModel, requestFields);
    addObjectModel(
      models,
      responseModel,
      endpoint.responseData ? [{ name: "data", type: endpoint.responseData, required: true }] : [],
    );

    const effect =
      endpoint.method === "GET" ? "read" : endpoint.method === "DELETE" ? "delete" : "write";
    const category = camel(endpoint.tag);
    const capabilityId = `reddit.${category}.${effect === "read" ? "read" : "manage"}`;
    if (!capabilities.has(capabilityId)) {
      capabilities.set(capabilityId, {
        id: capabilityId,
        summary: `${effect === "read" ? "Read" : "Manage"} ${endpoint.tag} via Reddit Ads API`,
        requiredScopes: [effect === "read" ? "adsread" : "adsedit"],
      });
    }
    const count = (ids.get(baseName) ?? 0) + 1;
    ids.set(baseName, count);
    const id = `Reddit${baseName}${count === 1 ? "" : count}`;
    irEndpoints.push({
      id,
      operationId: `reddit.${category}.${camel(baseName)}${count === 1 ? "" : count}`,
      platform: "reddit",
      method: endpoint.method,
      path: endpoint.path,
      parameters: [
        ...endpoint.pathParams.map((p) => ({
          name: p.name,
          location: "path" as const,
          type: typeRef(p.type, models),
          required: p.required,
          nullable: false,
          ...(p.description ? { documentation: p.description } : {}),
        })),
        ...endpoint.queryParams.map((p) => ({
          name: p.name,
          location: "query" as const,
          type: typeRef(p.type, models),
          required: p.required,
          nullable: false,
          ...(p.description ? { documentation: p.description } : {}),
        })),
        ...(endpoint.bodyParams[0]?.type.kind === "object"
          ? (endpoint.bodyParams[0].type.fields ?? []).map((f) => ({
              name: f.name,
              location: "body" as const,
              type: typeRef(f.type, models),
              required: f.required,
              nullable: false,
              ...(f.description ? { documentation: f.description } : {}),
            }))
          : []),
      ],
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
      requiredScopes: [effect === "read" ? "adsread" : "adsedit"],
      capabilities: [capabilityId],
      rateLimitBucket: "reddit-ads-api",
      authSchemes: ["oauth2"],
      protocols: ["json"],
      summary: endpoint.summary,
      description: `Generated from the Reddit Ads API v3 OpenAPI spec (${endpoint.operationId})`,
    });
  }

  return {
    platform: "reddit",
    source: {
      kind: "openapi",
      location: "https://github.com/nanobanana123/reddit-ads-api",
      revision: sourceRevision,
    },
    version: "v3",
    models: [...models.values()].sort((a, b) => a.name.localeCompare(b.name)),
    endpoints: irEndpoints,
    capabilities: [...capabilities.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: irEndpoints.length,
      excludedOperations: [],
      unresolvedSchemas: [],
      protocols: ["json"],
    },
  };
}

function pascal(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function camel(value: string): string {
  const p = pascal(value);
  return p.charAt(0).toLowerCase() + p.slice(1);
}

function typeRef(type: TypeRef, models: Map<string, SdkIr["models"][number]>): TypeRefIr {
  switch (type.kind) {
    case "ref": {
      if (type.name && !models.has(type.name)) {
        models.set(type.name, {
          kind: "scalar",
          id: type.name,
          name: type.name,
          wire: "json",
          value: { kind: "primitive", name: "unknown" },
        });
      }
      return { kind: "reference", target: type.name ?? "unknown" };
    }
    case "array":
      return {
        kind: "array",
        items: typeRef(type.items ?? { kind: "primitive", name: "unknown" }, models),
      };
    case "object": {
      const inlineName = `Inline${models.size}`;
      addObjectModel(
        models,
        inlineName,
        (type.fields ?? []).map((f) => ({
          name: f.name,
          type: f.type,
          required: f.required,
          description: f.description,
        })),
      );
      return { kind: "reference", target: inlineName };
    }
    case "primitive":
      switch (type.name) {
        case "number":
        case "integer":
          return { kind: "primitive", name: "number" };
        case "boolean":
          return { kind: "primitive", name: "boolean" };
        case "unknown":
          return { kind: "primitive", name: "unknown" };
        default:
          return { kind: "primitive", name: "string" };
      }
  }
}

function addObjectModel(
  models: Map<string, SdkIr["models"][number]>,
  name: string,
  fields: { name: string; type: TypeRef; required: boolean; description?: string }[],
): void {
  if (models.has(name)) return;
  models.set(name, {
    kind: "object",
    id: name,
    name,
    wire: "json",
    fields: fields.map((field) => ({
      name: field.name,
      type: typeRef(field.type, models),
      required: field.required,
      nullable: false,
      ...(field.description ? { documentation: field.description } : {}),
    })),
  });
}

function addModel(models: Map<string, SdkIr["models"][number]>, name: string, type: TypeRef): void {
  if (models.has(name)) return;
  if (type.kind === "object") {
    addObjectModel(
      models,
      name,
      (type.fields ?? []).map((f) => ({
        name: f.name,
        type: f.type,
        required: f.required,
        description: f.description,
      })),
    );
  } else if (type.kind === "array") {
    models.set(name, {
      kind: "scalar",
      id: name,
      name,
      wire: "json",
      value: {
        kind: "array",
        items: typeRef(type.items ?? { kind: "primitive", name: "unknown" }, models),
      },
    });
  } else {
    models.set(name, {
      kind: "scalar",
      id: name,
      name,
      wire: "json",
      value: typeRef(type, models),
    });
  }
}
