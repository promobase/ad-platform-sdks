import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { writeEffectArtifacts } from "../packages/sdk-codegen/src/index.ts";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const sourcePath = join(root, "fern/openapi/x-openapi.json");
const outputDir = join(root, "packages/x-sdk/src/generated/effect");
const source = await readFile(sourcePath, "utf8");
const document = JSON.parse(source);
const sourceChecksum = createHash("sha256").update(source).digest("hex");

await writeEffectArtifacts({
  outputDir,
  docsOutputDir: join(root, "apps/docs/src/content/docs/reference"),
  ir: buildIr(document),
});

function buildIr(openapi) {
  const models = Object.entries(openapi.components?.schemas ?? {})
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, schema]) => openApiModel(name, schema));
  const endpoints = [];
  const capabilities = new Map();
  const usedIds = new Map();
  const protocols = new Set(["json"]);
  for (const [path, pathItem] of Object.entries(openapi.paths ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    for (const method of ["get", "post", "put", "patch", "delete"]) {
      const operation = pathItem[method];
      if (!operation) continue;
      const operationName = operation.operationId || `${method}-${path}`;
      const baseId = pascal(operationName);
      const count = (usedIds.get(baseId) ?? 0) + 1;
      usedIds.set(baseId, count);
      const resource = slug(operation.tags?.[0] ?? inferResource(path));
      const effect = method === "get" ? "read" : method === "delete" ? "delete" : "write";
      const capabilityId = `${resource}.${effect === "read" ? "read" : "manage"}`;
      const requiredScopes = operationScopes(operation, openapi);
      const authSchemes = operationAuthSchemes(operation, openapi);
      const operationProtocols = detectProtocols(operation);
      for (const protocol of operationProtocols) protocols.add(protocol);
      if (!capabilities.has(capabilityId)) {
        capabilities.set(capabilityId, {
          id: capabilityId,
          summary: `${effect === "read" ? "Read" : "Manage"} X ${resource}`,
          requiredScopes,
        });
      } else {
        const capability = capabilities.get(capabilityId);
        capability.requiredScopes = [
          ...new Set([...capability.requiredScopes, ...requiredScopes]),
        ].sort();
      }
      const seenParameters = new Set();
      const parameters = [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])]
        .map(resolveParameter)
        .filter((parameter) => {
          if (!parameter?.name || !["path", "query", "header"].includes(parameter.in)) return false;
          const key = `${parameter.in}:${parameter.name}`;
          if (seenParameters.has(key)) return false;
          seenParameters.add(key);
          return true;
        })
        .map((parameter) => ({
          name: parameter.name,
          location: parameter.in,
          type: openApiType(parameter.schema ?? {}),
          required: Boolean(parameter.required),
          nullable: Boolean(parameter.schema?.nullable),
          ...(parameter.description ? { documentation: parameter.description } : {}),
        }));
      const requestBody = resolveRequestBody(operation.requestBody, openapi);
      const bodySchema = mediaSchema(requestBody?.content);
      if (bodySchema) {
        parameters.push({
          name: "body",
          location: "body",
          type: openApiType(bodySchema),
          required: Boolean(requestBody?.required),
          nullable: Boolean(bodySchema.nullable),
        });
      }
      endpoints.push({
        id: `X${baseId}${count === 1 ? "" : count}`,
        operationId: `x.${resource}.${lowerCamel(operationName)}${count === 1 ? "" : count}`,
        platform: "x",
        method: method.toUpperCase(),
        path,
        parameters,
        output: successType(operation.responses),
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
        idempotency: method === "get" ? "safe" : "unsafe",
        requiredScopes,
        capabilities: [capabilityId],
        rateLimitBucket: `x-${resource}`,
        authSchemes,
        protocols: operationProtocols,
        summary: operation.summary || operationName,
        ...(operation.description ? { description: operation.description } : {}),
      });
    }
  }
  return {
    platform: "x",
    source: {
      kind: "openapi",
      location: "fern/openapi/x-openapi.json",
      revision: String(openapi.info?.version ?? "unknown"),
      checksum: sourceChecksum,
    },
    version: String(openapi.info?.version ?? "2"),
    models,
    endpoints,
    capabilities: [...capabilities.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: endpoints.length,
      excludedOperations: [],
      unresolvedSchemas: [],
      protocols: [...protocols].sort(),
    },
  };
}

function operationSecurity(operation, openapi) {
  return operation.security ?? openapi.security ?? [];
}

function operationScopes(operation, openapi) {
  return [
    ...new Set(
      operationSecurity(operation, openapi).flatMap((entry) => Object.values(entry).flat()),
    ),
  ].sort();
}

function operationAuthSchemes(operation, openapi) {
  return [
    ...new Set(operationSecurity(operation, openapi).flatMap((entry) => Object.keys(entry))),
  ].sort();
}

function resolveRequestBody(requestBody, openapi) {
  if (!requestBody?.$ref) return requestBody;
  return openapi.components?.requestBodies?.[requestBody.$ref.split("/").at(-1)];
}

function detectProtocols(operation) {
  const mediaTypes = [
    ...Object.keys(operation.requestBody?.content ?? {}),
    ...Object.values(operation.responses ?? {}).flatMap((response) =>
      Object.keys(response?.content ?? {}),
    ),
  ];
  const detected = new Set();
  if (mediaTypes.some((type) => type.includes("multipart"))) detected.add("multipart");
  if (mediaTypes.some((type) => type.includes("form-urlencoded"))) detected.add("form");
  if (mediaTypes.some((type) => type.includes("event-stream") || type.includes("ndjson")))
    detected.add("stream");
  if (detected.size === 0) detected.add("json");
  return [...detected].sort();
}

function inferResource(path) {
  return (
    path
      .split("/")
      .filter(Boolean)
      .find((segment) => segment !== "2" && !segment.startsWith("{")) ?? "general"
  );
}

function slug(value) {
  return (
    String(value)
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replaceAll(/^-|-$/g, "") || "general"
  );
}

function resolveParameter(parameter) {
  if (!parameter?.$ref) return parameter;
  const name = parameter.$ref.split("/").at(-1);
  return document.components?.parameters?.[name];
}

function openApiModel(name, schema) {
  if (schema.enum?.length) {
    return { kind: "enum", id: name, name, wire: "json", values: schema.enum };
  }
  if (schema.type === "object" || schema.properties || schema.additionalProperties) {
    return {
      kind: "object",
      id: name,
      name,
      wire: "json",
      fields: Object.entries(schema.properties ?? {})
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([fieldName, field]) => ({
          name: fieldName,
          type: openApiType(field),
          required: schema.required?.includes(fieldName) ?? false,
          nullable: Boolean(field.nullable),
          ...(field.description ? { documentation: field.description } : {}),
        })),
      ...(schema.description ? { documentation: schema.description } : {}),
    };
  }
  return { kind: "scalar", id: name, name, wire: "json", value: openApiType(schema) };
}

function openApiType(schema) {
  if (!schema) return { kind: "primitive", name: "unknown" };
  if (schema.$ref) return { kind: "reference", target: schema.$ref.split("/").at(-1) };
  if (schema.allOf?.length) {
    return { kind: "intersection", members: schema.allOf.map(openApiType) };
  }
  if (schema.oneOf?.length || schema.anyOf?.length) {
    return { kind: "union", variants: (schema.oneOf ?? schema.anyOf).map(openApiType) };
  }
  if (schema.enum?.length) {
    return {
      kind: "union",
      variants: schema.enum.map((value) => ({ kind: "literal", value })),
    };
  }
  switch (schema.type) {
    case "string":
      return {
        kind: "primitive",
        name: "string",
        ...(schema.format === "date-time" ? { format: "date-time" } : {}),
      };
    case "integer":
      return { kind: "primitive", name: "integer" };
    case "number":
      return { kind: "primitive", name: "number" };
    case "boolean":
      return { kind: "primitive", name: "boolean" };
    case "array":
      return { kind: "array", items: openApiType(schema.items) };
    case "object":
      return schema.additionalProperties
        ? { kind: "record", values: openApiType(schema.additionalProperties) }
        : { kind: "primitive", name: "json" };
    default:
      return { kind: "primitive", name: "unknown" };
  }
}

function successType(responses = {}) {
  for (const status of ["200", "201", "202", "204", "default"]) {
    const response = responses[status];
    if (!response) continue;
    const schema = mediaSchema(response.content);
    if (schema) return openApiType(schema);
    if (status === "204") return { kind: "primitive", name: "unknown" };
  }
  return { kind: "primitive", name: "unknown" };
}

function mediaSchema(content) {
  if (!content) return undefined;
  return (
    content["application/json"]?.schema ??
    content["multipart/form-data"]?.schema ??
    content["application/x-www-form-urlencoded"]?.schema ??
    content["application/octet-stream"]?.schema ??
    content["text/event-stream"]?.schema
  );
}

function pascal(value) {
  const result = value
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return /^[A-Za-z_$]/.test(result) ? result : `N${result}`;
}

function lowerCamel(value) {
  const result = pascal(value);
  return result.charAt(0).toLowerCase() + result.slice(1);
}
