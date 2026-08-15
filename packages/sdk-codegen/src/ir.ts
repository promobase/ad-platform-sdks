import { Schema } from "effect";

export const PlatformIdSchema = Schema.Literal(
  "facebook",
  "google-ads",
  "google-business-profile",
  "instagram",
  "linkedin",
  "amazon-ads",
  "amazon-ads-api",
  "amazon-ads-sb",
  "amazon-ads-sd",
  "amazon-ads-sp",
  "bluesky",
  "pinterest",
  "reddit",
  "snapchat",
  "threads",
  "tiktok",
  "x",
  "youtube",
);
export type PlatformId = typeof PlatformIdSchema.Type;

export const SpecSourceKindSchema = Schema.Literal(
  "discovery",
  "documentation",
  "fern",
  "handwritten",
  "openapi",
  "protobuf",
  "vendor-json",
);

export const SpecSourceSchema = Schema.Struct({
  kind: SpecSourceKindSchema,
  location: Schema.String,
  revision: Schema.optional(Schema.String),
  checksum: Schema.optional(Schema.String),
});
export type SpecSource = typeof SpecSourceSchema.Type;

export const ExcludedOperationIrSchema = Schema.Struct({
  operationId: Schema.String,
  reason: Schema.String,
  documentation: Schema.optional(Schema.String),
});
export type ExcludedOperationIr = typeof ExcludedOperationIrSchema.Type;

export const CoverageIrSchema = Schema.Struct({
  discoveredOperations: Schema.Number,
  excludedOperations: Schema.Array(ExcludedOperationIrSchema),
  unresolvedSchemas: Schema.Array(Schema.String),
  protocols: Schema.Array(Schema.String),
});
export type CoverageIr = typeof CoverageIrSchema.Type;

export type TypeRefIr =
  | {
      readonly kind: "primitive";
      readonly name: "string" | "number" | "integer" | "boolean" | "unknown" | "json";
      readonly format?: string;
    }
  | { readonly kind: "reference"; readonly target: string }
  | { readonly kind: "literal"; readonly value: string | number | boolean }
  | { readonly kind: "array"; readonly items: TypeRefIr }
  | { readonly kind: "record"; readonly values: TypeRefIr }
  | { readonly kind: "union"; readonly variants: readonly TypeRefIr[] }
  | { readonly kind: "intersection"; readonly members: readonly TypeRefIr[] };

export const TypeRefIrSchema: Schema.Schema<TypeRefIr> = Schema.suspend(() =>
  Schema.Union(
    Schema.Struct({
      kind: Schema.Literal("primitive"),
      name: Schema.Literal("string", "number", "integer", "boolean", "unknown", "json"),
      format: Schema.optional(Schema.String),
    }),
    Schema.Struct({ kind: Schema.Literal("reference"), target: Schema.String }),
    Schema.Struct({
      kind: Schema.Literal("literal"),
      value: Schema.Union(Schema.String, Schema.Number, Schema.Boolean),
    }),
    Schema.Struct({ kind: Schema.Literal("array"), items: TypeRefIrSchema }),
    Schema.Struct({ kind: Schema.Literal("record"), values: TypeRefIrSchema }),
    Schema.Struct({ kind: Schema.Literal("union"), variants: Schema.Array(TypeRefIrSchema) }),
    Schema.Struct({
      kind: Schema.Literal("intersection"),
      members: Schema.Array(TypeRefIrSchema),
    }),
  ),
);

export const FieldIrSchema = Schema.Struct({
  name: Schema.String,
  wireName: Schema.optional(Schema.String),
  type: TypeRefIrSchema,
  required: Schema.Boolean,
  nullable: Schema.Boolean,
  readonly: Schema.optional(Schema.Boolean),
  documentation: Schema.optional(Schema.String),
  deprecated: Schema.optional(Schema.Boolean),
});
export type FieldIr = typeof FieldIrSchema.Type;

export const ObjectModelIrSchema = Schema.Struct({
  kind: Schema.Literal("object"),
  id: Schema.String,
  name: Schema.String,
  wire: Schema.Literal("json", "protobuf"),
  fields: Schema.Array(FieldIrSchema),
  documentation: Schema.optional(Schema.String),
});

export const EnumModelIrSchema = Schema.Struct({
  kind: Schema.Literal("enum"),
  id: Schema.String,
  name: Schema.String,
  wire: Schema.Literal("json", "protobuf"),
  values: Schema.Array(Schema.String),
  open: Schema.optional(Schema.Boolean),
  documentation: Schema.optional(Schema.String),
});

export const UnionModelIrSchema = Schema.Struct({
  kind: Schema.Literal("union"),
  id: Schema.String,
  name: Schema.String,
  wire: Schema.Literal("json", "protobuf"),
  variants: Schema.Array(TypeRefIrSchema),
  documentation: Schema.optional(Schema.String),
});

export const ScalarModelIrSchema = Schema.Struct({
  kind: Schema.Literal("scalar"),
  id: Schema.String,
  name: Schema.String,
  wire: Schema.Literal("json", "protobuf"),
  value: TypeRefIrSchema,
  documentation: Schema.optional(Schema.String),
});

export const ModelIrSchema = Schema.Union(
  ObjectModelIrSchema,
  EnumModelIrSchema,
  UnionModelIrSchema,
  ScalarModelIrSchema,
);
export type ModelIr = typeof ModelIrSchema.Type;

export const ParameterLocationSchema = Schema.Literal("path", "query", "header", "body");
export const EndpointParameterIrSchema = Schema.Struct({
  name: Schema.String,
  wireName: Schema.optional(Schema.String),
  location: ParameterLocationSchema,
  type: TypeRefIrSchema,
  required: Schema.Boolean,
  nullable: Schema.Boolean,
  documentation: Schema.optional(Schema.String),
});
export type EndpointParameterIr = typeof EndpointParameterIrSchema.Type;

export const PaginationIrSchema = Schema.Struct({
  kind: Schema.Literal("cursor", "page-token", "offset"),
  requestField: Schema.String,
  responseField: Schema.String,
  itemsField: Schema.String,
});

export const ErrorRefIrSchema = Schema.Struct({
  status: Schema.optional(Schema.Number),
  code: Schema.optional(Schema.String),
  model: Schema.optional(TypeRefIrSchema),
  retryable: Schema.Boolean,
});

export const EndpointIrSchema = Schema.Struct({
  id: Schema.String,
  operationId: Schema.String,
  platform: PlatformIdSchema,
  method: Schema.Literal("GET", "POST", "PUT", "PATCH", "DELETE"),
  path: Schema.String,
  parameters: Schema.Array(EndpointParameterIrSchema),
  output: TypeRefIrSchema,
  errors: Schema.Array(ErrorRefIrSchema),
  effect: Schema.Literal("read", "write", "publish", "delete", "spend"),
  execution: Schema.Literal("inline", "durable"),
  idempotency: Schema.Literal("safe", "keyed", "unsafe"),
  requiredScopes: Schema.Array(Schema.String),
  capabilities: Schema.Array(Schema.String),
  pagination: Schema.optional(PaginationIrSchema),
  rateLimitBucket: Schema.optional(Schema.String),
  authSchemes: Schema.optional(Schema.Array(Schema.String)),
  protocols: Schema.optional(Schema.Array(Schema.String)),
  staticHeaders: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  summary: Schema.String,
  description: Schema.optional(Schema.String),
});
export type EndpointIr = typeof EndpointIrSchema.Type;

export const CapabilityIrSchema = Schema.Struct({
  id: Schema.String,
  summary: Schema.String,
  description: Schema.optional(Schema.String),
  requiredScopes: Schema.Array(Schema.String),
});
export type CapabilityIr = typeof CapabilityIrSchema.Type;

export const SdkIrSchema = Schema.Struct({
  platform: PlatformIdSchema,
  source: SpecSourceSchema,
  version: Schema.String,
  models: Schema.Array(ModelIrSchema),
  endpoints: Schema.Array(EndpointIrSchema),
  capabilities: Schema.Array(CapabilityIrSchema),
  coverage: Schema.optional(CoverageIrSchema),
});
export type SdkIr = typeof SdkIrSchema.Type;

export const decodeSdkIr = Schema.decodeUnknown(SdkIrSchema);

export function validateSdkIr(ir: SdkIr): readonly string[] {
  const issues: string[] = [];
  if (ir.coverage) {
    const accountedOperations = ir.endpoints.length + ir.coverage.excludedOperations.length;
    if (ir.coverage.discoveredOperations !== accountedOperations) {
      issues.push(
        `Coverage mismatch: discovered ${ir.coverage.discoveredOperations}, emitted ${ir.endpoints.length}, excluded ${ir.coverage.excludedOperations.length}`,
      );
    }
    const excludedIds = new Set<string>();
    for (const exclusion of ir.coverage.excludedOperations) {
      if (excludedIds.has(exclusion.operationId)) {
        issues.push(`Duplicate excluded operation id: ${exclusion.operationId}`);
      }
      excludedIds.add(exclusion.operationId);
    }
  }
  const modelIds = new Set<string>();
  const modelNames = new Set<string>();
  for (const model of ir.models) {
    if (modelIds.has(model.id)) issues.push(`Duplicate model id: ${model.id}`);
    if (modelNames.has(model.name)) issues.push(`Duplicate model name: ${model.name}`);
    modelIds.add(model.id);
    modelNames.add(model.name);
    if (model.kind === "enum" && model.values.length === 0) {
      issues.push(`Enum has no values: ${model.id}`);
    }
  }

  const capabilityIds = new Set(ir.capabilities.map((capability) => capability.id));
  const endpointIds = new Set<string>();
  const operationIds = new Set<string>();
  for (const endpoint of ir.endpoints) {
    if (endpointIds.has(endpoint.id)) issues.push(`Duplicate endpoint id: ${endpoint.id}`);
    if (operationIds.has(endpoint.operationId)) {
      issues.push(`Duplicate operation id: ${endpoint.operationId}`);
    }
    endpointIds.add(endpoint.id);
    operationIds.add(endpoint.operationId);
    if (endpoint.platform !== ir.platform) {
      issues.push(`Endpoint ${endpoint.id} platform does not match ${ir.platform}`);
    }
    if (endpoint.effect === "read" && endpoint.idempotency !== "safe") {
      issues.push(`Read endpoint is not idempotent: ${endpoint.id}`);
    }
    for (const capability of endpoint.capabilities) {
      if (!capabilityIds.has(capability)) {
        issues.push(`Endpoint ${endpoint.id} references unknown capability: ${capability}`);
      }
    }
    visitTypeRefs(endpoint.output, modelIds, endpoint.id, issues);
    for (const parameter of endpoint.parameters) {
      visitTypeRefs(parameter.type, modelIds, endpoint.id, issues);
    }
  }
  return issues;
}

function visitTypeRefs(
  type: TypeRefIr,
  modelIds: ReadonlySet<string>,
  owner: string,
  issues: string[],
): void {
  switch (type.kind) {
    case "reference":
      if (!modelIds.has(type.target))
        issues.push(`${owner} references unknown model: ${type.target}`);
      return;
    case "array":
      visitTypeRefs(type.items, modelIds, owner, issues);
      return;
    case "record":
      visitTypeRefs(type.values, modelIds, owner, issues);
      return;
    case "union":
      for (const variant of type.variants) visitTypeRefs(variant, modelIds, owner, issues);
      return;
    case "intersection":
      for (const member of type.members) visitTypeRefs(member, modelIds, owner, issues);
      return;
    case "primitive":
    case "literal":
      return;
  }
}
