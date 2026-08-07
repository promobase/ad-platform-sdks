import type { SdkIr, TypeRefIr } from "@mosaic/sdk-codegen";

import type { EnumAst, MessageAst, ProtoRoot } from "./parser.ts";

const GOOGLE_ADS_SCOPE = "https://www.googleapis.com/auth/adwords";

export function googleAdsCanonicalIr(options: {
  root: ProtoRoot;
  messages: ReadonlyMap<string, MessageAst>;
  enums: ReadonlyMap<string, EnumAst>;
  shortNames: ReadonlyMap<string, string>;
  packagePrefix: string;
  version: string;
  sourceRevision?: string;
}): SdkIr {
  const { root, messages, enums, shortNames, packagePrefix, version, sourceRevision } = options;
  const models: SdkIr["models"][number][] = [];
  for (const [fullName, message] of [...messages].sort(([a], [b]) => a.localeCompare(b))) {
    const name = shortNames.get(fullName)!;
    models.push({
      kind: "object",
      id: name,
      name,
      wire: "protobuf",
      fields: message.fields.map((field) => ({
        name: field.name,
        type: protobufFieldType(field, shortNames),
        required: false,
        nullable: false,
      })),
    });
  }
  for (const [fullName, enumType] of [...enums].sort(([a], [b]) => a.localeCompare(b))) {
    const name = shortNames.get(fullName)!;
    models.push({
      kind: "enum",
      id: name,
      name,
      wire: "protobuf",
      values: enumType.values.map((value) => value.name),
    });
  }

  const endpoints: SdkIr["endpoints"][number][] = [];
  const capabilities = new Map<string, SdkIr["capabilities"][number]>();
  for (const service of root.services
    .filter((candidate) => candidate.fullName.startsWith(`${packagePrefix}.`))
    .sort((a, b) => a.fullName.localeCompare(b.fullName))) {
    for (const method of service.methods) {
      const effect = methodEffect(method.name);
      const resource = lowerCamel(service.name.replace(/Service$/, ""));
      const capabilityId = `${resource}.${effect === "read" ? "read" : "manage"}`;
      if (!capabilities.has(capabilityId)) {
        capabilities.set(capabilityId, {
          id: capabilityId,
          summary: `${effect === "read" ? "Read" : "Manage"} Google Ads ${resource}`,
          requiredScopes: [GOOGLE_ADS_SCOPE],
        });
      }
      const request = resolveReference(method.requestType, shortNames);
      const response = resolveReference(method.responseType, shortNames);
      endpoints.push({
        id: `GoogleAds${service.name}${method.name}`,
        operationId: `googleAds.${resource}.${lowerCamel(method.name)}`,
        platform: "google-ads",
        method: (method.httpOption?.verb.toUpperCase() ?? "POST") as
          | "GET"
          | "POST"
          | "PUT"
          | "PATCH"
          | "DELETE",
        path: method.httpOption?.path ?? `/${service.fullName}/${method.name}`,
        parameters: [
          {
            name: "request",
            location: "body",
            type: request ?? { kind: "primitive", name: "unknown" },
            required: true,
            nullable: false,
          },
        ],
        output: response ?? { kind: "primitive", name: "unknown" },
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
        idempotency: effect === "read" ? "safe" : "unsafe",
        requiredScopes: [GOOGLE_ADS_SCOPE],
        capabilities: [capabilityId],
        rateLimitBucket: "google-ads-api",
        authSchemes: ["OAuth2", "DeveloperToken"],
        protocols:
          method.responseStream || method.requestStream
            ? ["protobuf-json", "stream"]
            : ["protobuf-json"],
        summary: `${service.name}.${method.name}`,
      });
    }
  }

  return {
    platform: "google-ads",
    source: {
      kind: "protobuf",
      location: `packages/google-ads-sdk/vendor/googleapis/google/ads/googleads/${version}`,
      revision: sourceRevision,
    },
    version,
    models,
    endpoints,
    capabilities: [...capabilities.values()].sort((a, b) => a.id.localeCompare(b.id)),
    coverage: {
      discoveredOperations: endpoints.length,
      excludedOperations: [],
      unresolvedSchemas: collectUnresolvedSchemas(root, messages, shortNames, packagePrefix),
      protocols: ["protobuf-json", "stream"],
    },
  };
}

function collectUnresolvedSchemas(
  root: ProtoRoot,
  messages: ReadonlyMap<string, MessageAst>,
  shortNames: ReadonlyMap<string, string>,
  packagePrefix: string,
): string[] {
  const unresolved = new Set<string>();
  const inspect = (raw: string) => {
    if (resolveReference(raw, shortNames)) return;
    if (isKnownScalar(raw)) return;
    unresolved.add(raw.replace(/^\./, ""));
  };
  for (const message of messages.values()) {
    for (const field of message.fields) {
      inspect(field.map?.valueType ?? field.type);
    }
  }
  for (const service of root.services.filter((candidate) =>
    candidate.fullName.startsWith(`${packagePrefix}.`),
  )) {
    for (const method of service.methods) {
      inspect(method.requestType);
      inspect(method.responseType);
    }
  }
  return [...unresolved].sort();
}

function isKnownScalar(raw: string): boolean {
  return new Set([
    "string",
    "bytes",
    "bool",
    "double",
    "float",
    "int32",
    "sint32",
    "sfixed32",
    "uint32",
    "fixed32",
    "int64",
    "sint64",
    "sfixed64",
    "uint64",
    "fixed64",
    "google.longrunning.Operation",
    "google.protobuf.Duration",
    "google.protobuf.Empty",
    "google.protobuf.FieldMask",
    "google.rpc.Status",
    "google.type.Money",
  ]).has(raw.replace(/^\./, ""));
}

function protobufFieldType(
  field: MessageAst["fields"][number],
  shortNames: ReadonlyMap<string, string>,
): TypeRefIr {
  let type: TypeRefIr;
  if (field.map) {
    type = { kind: "record", values: protobufType(field.map.valueType, shortNames) };
  } else {
    type = protobufType(field.type, shortNames);
  }
  return field.repeated ? { kind: "array", items: type } : type;
}

function protobufType(raw: string, shortNames: ReadonlyMap<string, string>): TypeRefIr {
  const reference = resolveReference(raw, shortNames);
  if (reference) return reference;
  switch (raw.replace(/^\./, "")) {
    case "string":
    case "bytes":
    case "google.protobuf.Duration":
    case "google.protobuf.FieldMask":
      return { kind: "primitive", name: "string" };
    case "bool":
      return { kind: "primitive", name: "boolean" };
    case "double":
    case "float":
      return { kind: "primitive", name: "number" };
    case "int32":
    case "sint32":
    case "sfixed32":
    case "uint32":
    case "fixed32":
      return { kind: "primitive", name: "integer" };
    case "int64":
    case "sint64":
    case "sfixed64":
    case "uint64":
    case "fixed64":
      return { kind: "primitive", name: "string" };
    case "google.longrunning.Operation":
    case "google.protobuf.Empty":
    case "google.rpc.Status":
    case "google.type.Money":
      return { kind: "primitive", name: "json" };
    default:
      return { kind: "primitive", name: "unknown" };
  }
}

function resolveReference(
  raw: string,
  shortNames: ReadonlyMap<string, string>,
): TypeRefIr | undefined {
  const normalized = raw.replace(/^\./, "");
  const direct = shortNames.get(raw) ?? shortNames.get(normalized);
  if (direct) return { kind: "reference", target: direct };
  const shortMatch = [...shortNames.values()].find((candidate) => candidate === normalized);
  if (shortMatch) return { kind: "reference", target: shortMatch };
  const suffixMatches = [...shortNames]
    .filter(([fullName]) => fullName.endsWith(`.${normalized}`))
    .map(([, shortName]) => shortName);
  const name = suffixMatches.length === 1 ? suffixMatches[0] : undefined;
  return name ? { kind: "reference", target: name } : undefined;
}

function methodEffect(name: string): "read" | "write" | "delete" {
  if (/^(get|list|search|recommend|suggest)/i.test(name)) return "read";
  if (/delete|remove/i.test(name)) return "delete";
  return "write";
}

function lowerCamel(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}
