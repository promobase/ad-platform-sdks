import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { writeEffectArtifacts } from "../packages/sdk-codegen/src/index.ts";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const specDir = join(root, "packages/google-business-profile-sdk/spec/discovery");
const outputDir = join(root, "packages/google-business-profile-sdk/src/generated/effect");
const refresh = process.argv.includes("--refresh");
const services = [
  [
    "account-management",
    "https://mybusinessaccountmanagement.googleapis.com/$discovery/rest?version=v1",
  ],
  [
    "business-information",
    "https://mybusinessbusinessinformation.googleapis.com/$discovery/rest?version=v1",
  ],
  ["performance", "https://businessprofileperformance.googleapis.com/$discovery/rest?version=v1"],
  ["verifications", "https://mybusinessverifications.googleapis.com/$discovery/rest?version=v1"],
  ["notifications", "https://mybusinessnotifications.googleapis.com/$discovery/rest?version=v1"],
  ["lodging", "https://mybusinesslodging.googleapis.com/$discovery/rest?version=v1"],
  ["place-actions", "https://mybusinessplaceactions.googleapis.com/$discovery/rest?version=v1"],
  ["q-and-a", "https://mybusinessqanda.googleapis.com/$discovery/rest?version=v1"],
  [
    "legacy-v4",
    "https://developers.google.com/my-business/samples/mybusiness_google_rest_v4p9.json",
  ],
];

await mkdir(specDir, { recursive: true });
const documents = [];
for (const [service, url] of services) {
  const path = join(specDir, `${service}.json`);
  if (refresh) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to refresh ${service}: HTTP ${response.status}`);
    const source = await response.text();
    JSON.parse(source);
    await writeFile(path, `${JSON.stringify(JSON.parse(source), null, 2)}\n`, "utf8");
  }
  const source = await readFile(path, "utf8").catch(() => {
    throw new Error(`Missing ${path}; run codegen:refresh first`);
  });
  documents.push({ service, url, source, document: JSON.parse(source) });
}

await writeEffectArtifacts({
  outputDir,
  contractOutputDir: join(root, "packages/google-business-profile-sdk/src/generated"),
  docsOutputDir: join(root, "apps/docs/src/content/docs/reference"),
  ir: buildIr(),
});

function buildIr() {
  const models = [];
  const endpoints = [];
  const capabilities = new Map();
  for (const { service, document } of documents) {
    const prefix = pascal(service);
    for (const [name, schema] of Object.entries(document.schemas ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      models.push(discoveryModel(`${prefix}${name}`, schema, prefix));
    }
    for (const { resource, methodName, method } of walkMethods(document.resources ?? {})) {
      const effect =
        method.httpMethod === "GET" ? "read" : method.httpMethod === "DELETE" ? "delete" : "write";
      const capabilityId = `${service}.${effect === "read" ? "read" : "manage"}`;
      const requiredScopes = [...(method.scopes ?? [])].sort();
      mergeCapability(capabilities, capabilityId, service, effect, requiredScopes);
      const parameters = Object.entries(method.parameters ?? {})
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, parameter]) => ({
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
      const providerOperationId = method.id ?? `${service}.${resource}.${methodName}`;
      endpoints.push({
        id: `GoogleBusinessProfile${pascal(providerOperationId)}`,
        operationId: `google-business-profile.${providerOperationId}`,
        platform: "google-business-profile",
        method: method.httpMethod,
        path: absolutePath(document, method.path),
        parameters,
        output: method.response?.$ref
          ? { kind: "reference", target: `${prefix}${method.response.$ref}` }
          : { kind: "primitive", name: "unknown" },
        errors: standardErrors(),
        effect,
        execution: effect === "read" ? "inline" : "durable",
        idempotency: method.httpMethod === "GET" ? "safe" : "unsafe",
        requiredScopes,
        capabilities: [capabilityId],
        rateLimitBucket: `google-business-profile-${service}`,
        authSchemes: ["OAuth2"],
        protocols: method.mediaUpload ? ["json", "multipart", "resumable"] : ["json"],
        summary: method.description?.split("\n")[0] || providerOperationId,
        ...(method.description ? { description: method.description } : {}),
      });
    }
  }

  const businessCalls = businessCallsEndpoint();
  endpoints.push(businessCalls);
  mergeCapability(
    capabilities,
    businessCalls.capabilities[0],
    "business-calls",
    "read",
    businessCalls.requiredScopes,
  );
  const checksum = createHash("sha256")
    .update(documents.map(({ service, source }) => `${service}\0${source}`).join("\0"))
    .digest("hex");
  return {
    platform: "google-business-profile",
    source: {
      kind: "discovery",
      location: "packages/google-business-profile-sdk/spec/discovery",
      revision: documents
        .map(({ service, document }) => `${service}:${document.revision ?? document.version}`)
        .join(","),
      checksum,
    },
    version: "v1+legacy-v4",
    models,
    endpoints,
    capabilities: [...capabilities.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: endpoints.length,
      excludedOperations: [],
      unresolvedSchemas: [],
      protocols: ["json", "multipart", "resumable"],
    },
  };
}

function* walkMethods(resources, parents = []) {
  for (const [resourceName, resource] of Object.entries(resources).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const path = [...parents, resourceName];
    for (const [methodName, method] of Object.entries(resource.methods ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      yield { resource: path.join("."), methodName, method };
    }
    yield* walkMethods(resource.resources ?? {}, path);
  }
}

function discoveryModel(name, schema, prefix) {
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
          type: discoveryType(field, prefix),
          required: schema.required?.includes(fieldName) ?? false,
          nullable: false,
          ...(field.description ? { documentation: field.description } : {}),
        })),
      ...(schema.description ? { documentation: schema.description } : {}),
    };
  }
  return { kind: "scalar", id: name, name, wire: "json", value: discoveryType(schema, prefix) };
}

function discoveryType(schema, prefix) {
  if (!schema) return { kind: "primitive", name: "unknown" };
  if (schema.$ref) return { kind: "reference", target: `${prefix}${schema.$ref}` };
  if (schema.enum?.length) {
    return { kind: "union", variants: schema.enum.map((value) => ({ kind: "literal", value })) };
  }
  if (schema.repeated)
    return { kind: "array", items: discoveryType({ ...schema, repeated: false }, prefix) };
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
      return { kind: "array", items: discoveryType(schema.items, prefix) };
    case "object":
      return schema.additionalProperties
        ? { kind: "record", values: discoveryType(schema.additionalProperties, prefix) }
        : { kind: "primitive", name: "json" };
    default:
      return { kind: "primitive", name: "unknown" };
  }
}

function mergeCapability(map, id, service, effect, scopes) {
  const existing = map.get(id);
  if (existing) {
    existing.requiredScopes = [...new Set([...existing.requiredScopes, ...scopes])].sort();
    return;
  }
  map.set(id, {
    id,
    summary: `${effect === "read" ? "Read" : "Manage"} Google Business Profile ${service}`,
    requiredScopes: [...scopes],
  });
}

function absolutePath(document, methodPath) {
  const base = document.rootUrl ?? document.baseUrl;
  return `${base.replace(/\/$/, "")}/${methodPath.replace(/^\//, "")}`;
}

function businessCallsEndpoint() {
  return {
    id: "GoogleBusinessProfileBusinessCallsInsightsList",
    operationId: "google-business-profile.businesscalls.locations.businesscallsinsights.list",
    platform: "google-business-profile",
    method: "GET",
    path: "https://mybusinessbusinesscalls.googleapis.com/v1/{parent}/businesscallsinsights",
    parameters: [
      parameter("parent", "path", true),
      parameter("pageSize", "query", false, { kind: "primitive", name: "integer" }),
      parameter("pageToken", "query", false),
      parameter("filter", "query", false),
    ],
    output: { kind: "primitive", name: "json" },
    errors: standardErrors(),
    effect: "read",
    execution: "inline",
    idempotency: "safe",
    requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
    capabilities: ["business-calls.read"],
    rateLimitBucket: "google-business-profile-business-calls",
    authSchemes: ["OAuth2"],
    protocols: ["json"],
    summary: "List business call insights for a location",
    description:
      "Documented Business Calls endpoint; Google does not currently publish a discovery document for this service.",
  };
}

function parameter(name, location, required, type = { kind: "primitive", name: "string" }) {
  return { name, location, type, required, nullable: false };
}

function standardErrors() {
  return [
    { status: 401, retryable: false },
    { status: 403, retryable: false },
    { status: 429, retryable: true },
    { status: 500, retryable: true },
    { status: 503, retryable: true },
  ];
}

function pascal(value) {
  const result = String(value)
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return /^[A-Za-z_$]/.test(result) ? result : `N${result}`;
}
