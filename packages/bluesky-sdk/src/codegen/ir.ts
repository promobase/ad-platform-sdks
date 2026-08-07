import type { SdkIr, TypeRefIr } from "@mosaic/sdk-codegen";

import { schemaToTsName } from "./emitter.ts";
import type { EndpointSpec, TypeRef } from "./lexicon.ts";

/** Convert parsed AT Protocol lexicons into the shared canonical SDK IR. */
export function blueskyCanonicalIr(
  endpoints: readonly EndpointSpec[],
  schemas: Record<string, TypeRef>,
  sourceRevision?: string,
): SdkIr {
  const models = new Map<string, SdkIr["models"][number]>();
  const capabilities = new Map<string, SdkIr["capabilities"][number]>();
  const irEndpoints: SdkIr["endpoints"][number][] = [];
  const ids = new Map<string, number>();

  for (const [schemaId, type] of Object.entries(schemas)) {
    addModel(models, schemaToTsName(schemaId), type);
  }

  for (const endpoint of [...endpoints].sort((a, b) => a.id.localeCompare(b.id))) {
    const baseName = pascal(endpoint.id.split(".").pop() ?? endpoint.id);
    const requestModel = `${baseName}Params`;
    const responseModel = `${baseName}Response`;
    const bodyType = endpoint.bodyParams[0]?.type;
    const resolvedBody =
      bodyType?.kind === "ref" ? (schemas[bodyType.name ?? ""] ?? bodyType) : bodyType;
    const bodyFields: { name: string; type: TypeRef; required: boolean; description?: string }[] =
      resolvedBody?.kind === "object"
        ? (resolvedBody.fields ?? []).map((f) => ({
            name: f.name,
            type: f.type,
            required: f.required,
            description: f.description,
          }))
        : endpoint.bodyParams.length > 0
          ? [{ name: "body", type: endpoint.bodyParams[0]!.type, required: true }]
          : [];
    addObjectModel(models, requestModel, [...endpoint.queryParams, ...bodyFields]);
    addObjectModel(
      models,
      responseModel,
      endpoint.responseData ? [{ name: "data", type: endpoint.responseData, required: true }] : [],
    );

    const effect = endpoint.type === "query" ? "read" : "write";
    const section = endpoint.namespace.split(".").pop() ?? endpoint.namespace;
    const category = camel(section);
    const capabilityId = `bluesky.${category}.${effect === "read" ? "read" : "manage"}`;
    if (!capabilities.has(capabilityId)) {
      capabilities.set(capabilityId, {
        id: capabilityId,
        summary: `${effect === "read" ? "Read" : "Manage"} ${endpoint.namespace} via AT Protocol`,
        requiredScopes: [],
      });
    }
    const count = (ids.get(baseName) ?? 0) + 1;
    ids.set(baseName, count);
    const id = `Bluesky${baseName}${count === 1 ? "" : count}`;
    irEndpoints.push({
      id,
      operationId: `bluesky.${category}.${camel(baseName)}${count === 1 ? "" : count}`,
      platform: "bluesky",
      method: endpoint.type === "query" ? "GET" : "POST",
      path: `/xrpc/${endpoint.id}`,
      parameters: [
        ...endpoint.queryParams.map((p) => ({
          name: p.name,
          location: "query" as const,
          type: typeRef(p.type, models),
          required: p.required,
          nullable: false,
          ...(p.description ? { documentation: p.description } : {}),
        })),
        ...bodyFields.map((f) => ({
          name: f.name,
          location: "body" as const,
          type: typeRef(f.type, models),
          required: f.required,
          nullable: false,
          ...(f.description ? { documentation: f.description } : {}),
        })),
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
      idempotency: endpoint.type === "query" ? "safe" : "unsafe",
      requiredScopes: [],
      capabilities: [capabilityId],
      rateLimitBucket: "atproto",
      authSchemes: ["bearer"],
      protocols: ["json"],
      summary: endpoint.summary,
      description: `Generated from the AT Protocol lexicon ${endpoint.id}`,
    });
  }

  return {
    platform: "bluesky",
    source: {
      kind: "documentation",
      location: "https://github.com/bluesky-social/atproto/tree/main/lexicons",
      revision: sourceRevision,
    },
    version: "lexicons",
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
      const name = type.name ? schemaToTsName(type.name) : "unknown";
      if (!models.has(name)) {
        models.set(name, {
          kind: "scalar",
          id: name,
          name,
          wire: "json",
          value: { kind: "primitive", name: "unknown" },
        });
      }
      return { kind: "reference", target: name };
    }
    case "array":
      return { kind: "array", items: typeRef(type.items ?? { kind: "unknown" }, models) };
    case "union": {
      const variants = (type.variants ?? []).map((variant) => typeRef(variant, models));
      return variants.length === 1 ? variants[0]! : { kind: "union", variants };
    }
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
    case "blob":
      return { kind: "primitive", name: "json" };
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
    case "unknown":
      return { kind: "primitive", name: "unknown" };
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
      value: { kind: "array", items: typeRef(type.items ?? { kind: "unknown" }, models) },
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
