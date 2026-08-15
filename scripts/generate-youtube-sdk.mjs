import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { writeEffectArtifacts } from "../packages/sdk-codegen/src/index.ts";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const discoveryPath = join(root, "google-discovery/youtube-v3.json");
const auxiliarySources = [
  {
    id: "analytics",
    path: join(root, "google-discovery/youtube-analytics-v2.json"),
    url: "https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2",
  },
  {
    id: "reporting",
    path: join(root, "google-discovery/youtube-reporting-v1.json"),
    url: "https://youtubereporting.googleapis.com/$discovery/rest?version=v1",
  },
];
if (process.argv.includes("--refresh")) {
  for (const source of auxiliarySources) {
    const response = await fetch(source.url);
    if (!response.ok) throw new Error(`Failed to refresh ${source.id}: HTTP ${response.status}`);
    writeFileSync(source.path, `${JSON.stringify(await response.json(), null, 2)}\n`);
  }
}
const outDir = join(root, "packages/youtube-sdk/src/generated");
const discoverySource = readFileSync(discoveryPath, "utf8");
const discovery = JSON.parse(discoverySource);
const auxiliaryDocuments = auxiliarySources.map((source) => ({
  ...source,
  source: readFileSync(source.path, "utf8"),
  document: JSON.parse(readFileSync(source.path, "utf8")),
}));
applyDocumentedOverrides(discovery);

const RESOURCE_NAMES = Object.keys(discovery.resources ?? {}).sort();

// The live Discovery document can lag the human reference for newly released
// methods. Keep narrow, source-linked overlays here until Discovery catches up.
function applyDocumentedOverrides(document) {
  const batchGetStats = document.resources?.videos?.methods?.batchGetStats;
  if (!batchGetStats) return;

  // https://developers.google.com/youtube/v3/docs/videos/batchGetStats
  batchGetStats.parameters.id.required = true;
  batchGetStats.parameters.part.required = true;

  const response = document.schemas?.BatchGetStatsResponse;
  const contentDetails = document.schemas?.VideoStatsContentDetails;
  if (!response?.properties || !contentDetails?.properties) return;

  document.schemas.BatchGetStatsSummary = {
    id: "BatchGetStatsSummary",
    type: "object",
    properties: {
      requestedVideoCount: { type: "string", format: "uint64" },
      succeededVideoCount: { type: "string", format: "uint64" },
      failedVideoCount: { type: "string", format: "uint64" },
      failedVideoIds: { type: "array", items: { type: "string" } },
    },
  };
  response.properties.summary = { $ref: "BatchGetStatsSummary" };
  contentDetails.properties.durationMillis = { type: "string", format: "uint64" };
}

mkdirSync(outDir, { recursive: true });

const generated = [
  "// This file was generated from google-discovery/youtube-v3.json.",
  "// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.",
  "",
];

generated.push(
  `export const YOUTUBE_DISCOVERY = ${JSON.stringify(
    {
      id: discovery.id,
      revision: discovery.revision,
      discoveryVersion: discovery.discoveryVersion,
      protocol: discovery.protocol,
      baseUrl: discovery.baseUrl,
      rootUrl: discovery.rootUrl,
      servicePath: discovery.servicePath,
      source: "https://youtube.googleapis.com/$discovery/rest?version=v3",
    },
    null,
    2,
  )} as const;`,
);

generated.push(
  "",
  `export const YOUTUBE_MEDIA_UPLOADS = ${JSON.stringify(mediaUploadCatalog(), null, 2)} as const;`,
);

writeFileSync(join(outDir, "discovery.ts"), `${generated.join("\n")}\n`);

writeFileSync(join(outDir, "types.ts"), `${emitTypes()}\n`);
writeFileSync(join(outDir, "resources.ts"), `${emitResources()}\n`);
writeFileSync(join(outDir, "auxiliary.ts"), `${emitAuxiliaryResources()}\n`);
await writeEffectArtifacts({
  outputDir: join(outDir, "effect"),
  contractOutputDir: outDir,
  docsOutputDir: join(root, "apps/docs/src/content/docs/reference"),
  ir: buildCanonicalIr(),
});

function buildCanonicalIr() {
  const models = Object.entries(discovery.schemas ?? {})
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, schema]) => discoveryModel(name, schema));
  const endpoints = [];
  const capabilityMap = new Map();

  for (const resourceName of RESOURCE_NAMES) {
    const resource = discovery.resources?.[resourceName];
    if (!resource) continue;
    for (const [methodName, method] of Object.entries(resource.methods ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      const effect =
        method.httpMethod === "GET" ? "read" : method.httpMethod === "DELETE" ? "delete" : "write";
      const capabilityResource = resourceName === "videos" ? "posts" : resourceName;
      const capabilityId = `${capabilityResource}.${effect === "read" ? "read" : "manage"}`;
      const requiredScopes = [...(method.scopes ?? [])].sort();
      if (!capabilityMap.has(capabilityId)) {
        capabilityMap.set(capabilityId, {
          id: capabilityId,
          summary: `${effect === "read" ? "Read" : "Manage"} YouTube ${resourceName}`,
          requiredScopes,
        });
      } else {
        const capability = capabilityMap.get(capabilityId);
        capability.requiredScopes = [
          ...new Set([...capability.requiredScopes, ...requiredScopes]),
        ].sort();
      }
      const parameters = Object.entries(method.parameters ?? {})
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, parameter]) => ({
          name,
          location: parameter.location === "path" ? "path" : "query",
          type: discoveryType(parameter),
          required: Boolean(parameter.required),
          nullable: false,
          ...(parameter.description ? { documentation: parameter.description } : {}),
        }));
      if (method.request?.$ref) {
        parameters.push({
          name: "body",
          location: "body",
          type: { kind: "reference", target: method.request.$ref },
          required: true,
          nullable: false,
        });
      }
      endpoints.push({
        id: `YouTube${pascal(resourceName)}${pascal(methodName)}`,
        operationId: `youtube.${resourceName}.${methodName}`,
        platform: "youtube",
        method: method.httpMethod,
        path: method.path,
        parameters,
        output: method.response?.$ref
          ? { kind: "reference", target: method.response.$ref }
          : { kind: "primitive", name: "unknown" },
        errors: [
          { status: 401, retryable: false },
          { status: 403, retryable: false },
          { status: 429, retryable: true },
          { status: 500, retryable: true },
          { status: 503, retryable: true },
        ],
        effect,
        execution: effect === "read" ? "inline" : "durable",
        idempotency: method.httpMethod === "GET" ? "safe" : "unsafe",
        requiredScopes,
        capabilities: [capabilityId],
        ...(method.parameters?.pageToken && method.response?.$ref
          ? {
              pagination: {
                kind: "page-token",
                requestField: "pageToken",
                responseField: "nextPageToken",
                itemsField: "items",
              },
            }
          : {}),
        rateLimitBucket: "youtube-data-api",
        authSchemes: requiredScopes.length > 0 ? ["OAuth2"] : ["ApiKey", "OAuth2"],
        protocols: method.mediaUpload ? ["json", "multipart", "resumable"] : ["json"],
        summary: method.description?.split("\n")[0] || `${resourceName}.${methodName}`,
        ...(method.description ? { description: method.description } : {}),
      });
    }
  }

  for (const auxiliary of auxiliaryDocuments) {
    const prefix = pascal(auxiliary.id);
    for (const [name, schema] of Object.entries(auxiliary.document.schemas ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      models.push(discoveryModel(`${prefix}${name}`, schema, prefix));
    }
    for (const { resourceName, methodName, method } of walkDiscoveryMethods(
      auxiliary.document.resources ?? {},
    )) {
      const effect =
        method.httpMethod === "GET" ? "read" : method.httpMethod === "DELETE" ? "delete" : "write";
      const capabilityId = `${auxiliary.id}.${resourceName}.${effect === "read" ? "read" : "manage"}`;
      const requiredScopes = [...(method.scopes ?? [])].sort();
      capabilityMap.set(capabilityId, {
        id: capabilityId,
        summary: `${effect === "read" ? "Read" : "Manage"} YouTube ${auxiliary.id} ${resourceName}`,
        requiredScopes,
      });
      const parameters = Object.entries(method.parameters ?? {}).map(([name, parameter]) => ({
        name,
        location: parameter.location === "path" ? "path" : "query",
        type: discoveryType(parameter, prefix),
        required: Boolean(parameter.required),
        nullable: false,
        ...(parameter.description ? { documentation: parameter.description } : {}),
      }));
      if (method.request?.$ref) {
        parameters.push({
          name: "body",
          location: "body",
          type: { kind: "reference", target: `${prefix}${method.request.$ref}` },
          required: true,
          nullable: false,
        });
      }
      endpoints.push({
        id: `YouTube${prefix}${pascal(resourceName)}${pascal(methodName)}`,
        operationId: `youtube.${auxiliary.id}.${resourceName}.${methodName}`,
        platform: "youtube",
        method: method.httpMethod,
        path: absoluteDiscoveryPath(auxiliary.document, method.path),
        parameters,
        output: method.response?.$ref
          ? { kind: "reference", target: `${prefix}${method.response.$ref}` }
          : { kind: "primitive", name: "unknown" },
        errors: [
          { status: 401, retryable: false },
          { status: 403, retryable: false },
          { status: 429, retryable: true },
          { status: 500, retryable: true },
          { status: 503, retryable: true },
        ],
        effect,
        execution: effect === "read" ? "inline" : "durable",
        idempotency: method.httpMethod === "GET" ? "safe" : "unsafe",
        requiredScopes,
        capabilities: [capabilityId],
        rateLimitBucket: `youtube-${auxiliary.id}-api`,
        authSchemes: ["OAuth2"],
        protocols: ["json"],
        summary: method.description?.split("\n")[0] || `${resourceName}.${methodName}`,
      });
    }
  }

  return {
    platform: "youtube",
    source: {
      kind: "discovery",
      location: "google-discovery/youtube-{v3,analytics-v2,reporting-v1}.json",
      revision: [discovery, ...auxiliaryDocuments.map((entry) => entry.document)]
        .map((entry) => String(entry.revision ?? "unknown"))
        .join(","),
      checksum: createHash("sha256")
        .update([discoverySource, ...auxiliaryDocuments.map((entry) => entry.source)].join("\0"))
        .digest("hex"),
    },
    version: "data-v3+analytics-v2+reporting-v1",
    models,
    endpoints,
    capabilities: [...capabilityMap.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: endpoints.length,
      excludedOperations: [],
      unresolvedSchemas: [],
      protocols: mediaUploadCatalog().length > 0 ? ["json", "multipart", "resumable"] : ["json"],
    },
  };
}

function mediaUploadCatalog() {
  const uploads = [];
  for (const resourceName of RESOURCE_NAMES) {
    for (const [methodName, method] of Object.entries(
      discovery.resources?.[resourceName]?.methods ?? {},
    )) {
      if (!method.mediaUpload) continue;
      uploads.push({
        operationId: `youtube.${resourceName}.${methodName}`,
        accept: method.mediaUpload.accept ?? [],
        maxSize: method.mediaUpload.maxSize,
        protocols: method.mediaUpload.protocols,
      });
    }
  }
  return uploads.sort((a, b) => a.operationId.localeCompare(b.operationId));
}

function discoveryModel(name, schema, referencePrefix = "") {
  if (schema.enum?.length) {
    return {
      kind: "enum",
      id: name,
      name,
      wire: "json",
      values: schema.enum,
      ...(schema.description ? { documentation: schema.description } : {}),
    };
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
          type: discoveryType(field, referencePrefix),
          required: schema.required?.includes(fieldName) ?? false,
          nullable: false,
          ...(field.description ? { documentation: field.description } : {}),
        })),
      ...(schema.description ? { documentation: schema.description } : {}),
    };
  }
  return {
    kind: "scalar",
    id: name,
    name,
    wire: "json",
    value: discoveryType(schema, referencePrefix),
    ...(schema.description ? { documentation: schema.description } : {}),
  };
}

function discoveryType(schema, referencePrefix = "") {
  if (!schema) return { kind: "primitive", name: "unknown" };
  if (schema.$ref) return { kind: "reference", target: `${referencePrefix}${schema.$ref}` };
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
      return { kind: "array", items: discoveryType(schema.items, referencePrefix) };
    case "object":
      return schema.additionalProperties
        ? { kind: "record", values: discoveryType(schema.additionalProperties, referencePrefix) }
        : { kind: "primitive", name: "json" };
    default:
      return { kind: "primitive", name: "unknown" };
  }
}

function emitTypes() {
  const lines = [
    "// This file was generated from google-discovery/youtube-v3.json.",
    "// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.",
    "",
  ];

  for (const [name, schema] of Object.entries(discovery.schemas ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    lines.push(...emitSchema(name, schema), "");
  }

  for (const resourceName of RESOURCE_NAMES) {
    const resource = discovery.resources?.[resourceName];
    if (!resource) continue;
    for (const [methodName, method] of Object.entries(resource.methods ?? {})) {
      const typeName = paramsTypeName(resourceName, methodName);
      lines.push(`export interface ${typeName} {`);
      for (const [paramName, param] of Object.entries(method.parameters ?? {}).sort(([a], [b]) =>
        a.localeCompare(b),
      )) {
        const optional = param.required ? "" : "?";
        lines.push(`  ${safeKey(paramName)}${optional}: ${paramType(param)};`);
      }
      lines.push("}", "");
    }
  }

  for (const auxiliary of auxiliaryDocuments) {
    const prefix = pascal(auxiliary.id);
    for (const [name, schema] of Object.entries(auxiliary.document.schemas ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      lines.push(...emitSchema(`${prefix}${name}`, schema, prefix), "");
    }
    for (const { resourceName, methodName, method } of walkDiscoveryMethods(
      auxiliary.document.resources ?? {},
    )) {
      lines.push(
        `export interface ${auxiliaryParamsTypeName(auxiliary.id, resourceName, methodName)} {`,
      );
      for (const [paramName, param] of Object.entries(method.parameters ?? {}).sort(([a], [b]) =>
        a.localeCompare(b),
      )) {
        lines.push(
          `  ${safeKey(paramName)}${param.required ? "" : "?"}: ${paramType(param, prefix)};`,
        );
      }
      lines.push("}", "");
    }
  }

  return lines.join("\n");
}

function emitSchema(name, schema, referencePrefix = "") {
  const lines = [];
  if (schema.type === "object" || schema.properties || schema.additionalProperties) {
    lines.push(`export interface ${name} {`);
    if (schema.properties) {
      for (const [propName, prop] of Object.entries(schema.properties).sort(([a], [b]) =>
        a.localeCompare(b),
      )) {
        const required = Array.isArray(schema.required) && schema.required.includes(propName);
        lines.push(
          `  ${safeKey(propName)}${required ? "" : "?"}: ${schemaType(prop, referencePrefix)};`,
        );
      }
    }
    if (schema.additionalProperties) {
      lines.push(
        `  [key: string]: ${schemaType(schema.additionalProperties, referencePrefix)} | undefined;`,
      );
    }
    lines.push("}");
    return lines;
  }

  lines.push(`export type ${name} = ${schemaType(schema, referencePrefix)};`);
  return lines;
}

function emitResources() {
  const lines = [
    "// This file was generated from google-discovery/youtube-v3.json.",
    "// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.",
    "",
    'import type { YouTubeClient, YouTubeRequestOptions } from "../client.ts";',
    'import type * as YouTubeTypes from "./types.ts";',
    "",
    "export function createYouTubeResources(client: YouTubeClient) {",
    "  return {",
  ];

  for (const resourceName of RESOURCE_NAMES) {
    const resource = discovery.resources?.[resourceName];
    if (!resource) continue;
    lines.push(`    ${resourceName}: {`);
    for (const [methodName, method] of Object.entries(resource.methods ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      const paramsName = `YouTubeTypes.${paramsTypeName(resourceName, methodName)}`;
      const responseName = method.response?.$ref ? `YouTubeTypes.${method.response.$ref}` : "void";
      const requestName = method.request?.$ref
        ? `YouTubeTypes.${method.request.$ref}`
        : "undefined";
      const hasRequiredParams = Object.values(method.parameters ?? {}).some(
        (param) => param.required,
      );
      const paramArg =
        hasRequiredParams || method.request?.$ref
          ? `params: ${paramsName}`
          : `params: ${paramsName} = {}`;
      const bodyArg = method.request?.$ref ? `body: ${requestName}` : "body?: undefined";
      lines.push(
        `      ${methodName}(${paramArg}, ${bodyArg}, opts?: YouTubeRequestOptions): Promise<${responseName}> {`,
      );
      lines.push(`        return client.request<${responseName}>({`);
      lines.push(`          method: ${JSON.stringify(method.httpMethod)},`);
      lines.push(`          path: ${JSON.stringify(method.path)},`);
      lines.push("          params,");
      if (method.request?.$ref) lines.push("          body,");
      lines.push("          opts,");
      lines.push("        });");
      lines.push("      },");
    }
    lines.push("    },");
  }

  lines.push("  };", "}", "");
  lines.push("export type YouTubeResources = ReturnType<typeof createYouTubeResources>;");
  return lines.join("\n");
}

function emitAuxiliaryResources() {
  const lines = [
    "// This file was generated from the YouTube Analytics and Reporting discovery documents.",
    "// Do not edit by hand.",
    "",
    'import type { YouTubeClient, YouTubeRequestOptions } from "../client.ts";',
    'import type * as YouTubeTypes from "./types.ts";',
    "",
    "export function createYouTubeAuxiliaryResources(client: YouTubeClient) {",
    "  return {",
  ];
  for (const auxiliary of auxiliaryDocuments) {
    const prefix = pascal(auxiliary.id);
    lines.push(`    ${auxiliary.id}: {`);
    for (const { resourceName, methodName, method } of walkDiscoveryMethods(
      auxiliary.document.resources ?? {},
    )) {
      const paramsName = `YouTubeTypes.${auxiliaryParamsTypeName(auxiliary.id, resourceName, methodName)}`;
      const responseName = method.response?.$ref
        ? `YouTubeTypes.${prefix}${method.response.$ref}`
        : "void";
      const requestName = method.request?.$ref
        ? `YouTubeTypes.${prefix}${method.request.$ref}`
        : "undefined";
      const resourceKey = lowerCamel(pascal(resourceName));
      const functionName = `${resourceKey}${pascal(methodName)}`;
      const required = Object.values(method.parameters ?? {}).some(
        (parameter) => parameter.required,
      );
      const paramArg =
        required || method.request?.$ref ? `params: ${paramsName}` : `params: ${paramsName} = {}`;
      const bodyArg = method.request?.$ref ? `body: ${requestName}` : "body?: undefined";
      lines.push(
        `      ${functionName}(${paramArg}, ${bodyArg}, opts?: YouTubeRequestOptions): Promise<${responseName}> {`,
      );
      lines.push(`        return client.request<${responseName}>({`);
      lines.push(`          method: ${JSON.stringify(method.httpMethod)},`);
      lines.push(
        `          path: ${JSON.stringify(absoluteDiscoveryPath(auxiliary.document, method.path))},`,
      );
      lines.push("          params,");
      if (method.request?.$ref) lines.push("          body,");
      lines.push("          opts,", "        });", "      },");
    }
    lines.push("    },");
  }
  lines.push("  };", "}", "");
  return lines.join("\n");
}

function* walkDiscoveryMethods(resources, parents = []) {
  for (const [name, resource] of Object.entries(resources).sort(([a], [b]) => a.localeCompare(b))) {
    const path = [...parents, name];
    for (const [methodName, method] of Object.entries(resource.methods ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      yield { resourceName: path.join("."), methodName, method };
    }
    yield* walkDiscoveryMethods(resource.resources ?? {}, path);
  }
}

function absoluteDiscoveryPath(document, methodPath) {
  const base = document.rootUrl ?? document.baseUrl;
  return `${base.replace(/\/$/, "")}/${methodPath.replace(/^\//, "")}`;
}

function auxiliaryParamsTypeName(service, resourceName, methodName) {
  return `YouTube${pascal(service)}${pascal(resourceName)}${pascal(methodName)}Params`;
}

function paramsTypeName(resourceName, methodName) {
  return `YouTube${pascal(resourceName)}${pascal(methodName)}Params`;
}

function paramType(param, referencePrefix = "") {
  const base = schemaType(param, referencePrefix);
  return param.repeated ? `${base}[]` : base;
}

function schemaType(schema, referencePrefix = "") {
  if (!schema) return "unknown";
  if (schema.$ref) return `${referencePrefix}${schema.$ref}`;
  if (schema.enum?.length) return schema.enum.map((value) => JSON.stringify(value)).join(" | ");

  switch (schema.type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return `${schemaType(schema.items, referencePrefix)}[]`;
    case "object": {
      if (schema.properties) {
        const props = Object.entries(schema.properties)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([key, value]) => `${safeKey(key)}?: ${schemaType(value, referencePrefix)}`)
          .join("; ");
        return `{ ${props} }`;
      }
      if (schema.additionalProperties) {
        return `Record<string, ${schemaType(schema.additionalProperties, referencePrefix)}>`;
      }
      return "Record<string, unknown>";
    }
    default:
      return "unknown";
  }
}

function safeKey(key) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
}

function pascal(value) {
  return value
    .replace(/(^|[^A-Za-z0-9]+)([A-Za-z0-9])/g, (_, __, char) => char.toUpperCase())
    .replace(/[^A-Za-z0-9]/g, "");
}

function lowerCamel(value) {
  const result = pascal(value);
  return result.charAt(0).toLowerCase() + result.slice(1);
}
