import type { SdkIr, TypeRefIr } from "@openpromo/sdk-codegen";

import type { EnumAst, MessageAst, ProtoRoot } from "./parser.ts";

const GOOGLE_ADS_SCOPE = "https://www.googleapis.com/auth/adwords";

export function googleAdsCanonicalIr(options: {
  root: ProtoRoot;
  messages: ReadonlyMap<string, MessageAst>;
  enums: ReadonlyMap<string, EnumAst>;
  shortNames: ReadonlyMap<string, string>;
  packagePrefix: string;
  version: string;
}): SdkIr {
  const { root, messages, enums, shortNames, packagePrefix, version } = options;
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
        summary: `${service.name}.${method.name}`,
      });
    }
  }

  return {
    platform: "google-ads",
    source: {
      kind: "protobuf",
      location: `packages/google-ads-sdk/vendor/googleapis/google/ads/googleads/${version}`,
    },
    version,
    models,
    endpoints,
    capabilities: [...capabilities.values()].sort((a, b) => a.id.localeCompare(b.id)),
  };
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
    default:
      return { kind: "primitive", name: "unknown" };
  }
}

function resolveReference(
  raw: string,
  shortNames: ReadonlyMap<string, string>,
): TypeRefIr | undefined {
  const name = shortNames.get(raw) ?? shortNames.get(raw.replace(/^\./, ""));
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
