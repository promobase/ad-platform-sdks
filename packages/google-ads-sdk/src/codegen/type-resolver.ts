export interface ResolvedType {
  tsType: string;
  imports: { name: string; fullName: string }[];
}

const SCALAR_MAP: Record<string, string> = {
  string: "string",
  bool: "boolean",
  bytes: "string",
  double: "number",
  float: "number",
  int32: "number",
  uint32: "number",
  sint32: "number",
  fixed32: "number",
  sfixed32: "number",
  int64: "string",
  uint64: "string",
  sint64: "string",
  fixed64: "string",
  sfixed64: "string",
};

const WELL_KNOWN_SCALAR: Record<string, string> = {
  "google.protobuf.StringValue": "string",
  "google.protobuf.BytesValue": "string",
  "google.protobuf.BoolValue": "boolean",
  "google.protobuf.DoubleValue": "number",
  "google.protobuf.FloatValue": "number",
  "google.protobuf.Int32Value": "number",
  "google.protobuf.UInt32Value": "number",
  "google.protobuf.Int64Value": "string",
  "google.protobuf.UInt64Value": "string",
  "google.protobuf.Timestamp": "string",
  "google.protobuf.Duration": "string",
  "google.protobuf.FieldMask": "string",
  "google.protobuf.Empty": "Record<string, never>",
  "google.protobuf.Any": "unknown",
  "google.protobuf.Struct": "Record<string, unknown>",
  "google.protobuf.Value": "unknown",
  "google.protobuf.ListValue": "unknown[]",
};

export function resolveType(
  protoType: string,
  repeated: boolean,
  mapInfo: { keyType: string; valueType: string } | null,
): ResolvedType {
  if (mapInfo) {
    const key = resolveType(mapInfo.keyType, false, null);
    const value = resolveType(mapInfo.valueType, false, null);
    const keyTs = key.tsType === "number" ? "number" : "string";
    return {
      tsType: `Record<${keyTs}, ${value.tsType}>`,
      imports: value.imports,
    };
  }

  const base = resolveBase(protoType);
  return {
    tsType: repeated ? `${base.tsType}[]` : base.tsType,
    imports: base.imports,
  };
}

function resolveBase(protoType: string): ResolvedType {
  if (SCALAR_MAP[protoType]) return { tsType: SCALAR_MAP[protoType]!, imports: [] };

  const normalized = protoType.replace(/^\./, "");
  if (WELL_KNOWN_SCALAR[normalized]) {
    return { tsType: WELL_KNOWN_SCALAR[normalized]!, imports: [] };
  }

  const parts = normalized.split(".");
  const short = parts[parts.length - 1]!;
  return { tsType: short, imports: [{ name: short, fullName: normalized }] };
}
