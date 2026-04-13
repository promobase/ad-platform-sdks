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

// Well-known proto types that we flatten to plain TS types rather than emit
// a full interface for. Covers google.protobuf wrappers plus a couple of
// commonly-referenced types from google.rpc and google.longrunning that show
// up in Google Ads service definitions.
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
  // Non-protobuf well-knowns that Google Ads references but which we do not
  // want to emit full interfaces for — they live outside the v23 namespace
  // and pulling them in would balloon the generated tree with transitive
  // dependencies we do not actually use.
  "google.rpc.Status": "unknown",
  "google.longrunning.Operation": "unknown",
};

export function resolveType(
  protoType: string,
  repeated: boolean,
  mapInfo: { keyType: string; valueType: string } | null,
  shortNameMap?: Map<string, string>,
): ResolvedType {
  if (mapInfo) {
    const key = resolveType(mapInfo.keyType, false, null, shortNameMap);
    const value = resolveType(mapInfo.valueType, false, null, shortNameMap);
    const keyTs = key.tsType === "number" ? "number" : "string";
    return {
      tsType: `Record<${keyTs}, ${value.tsType}>`,
      imports: value.imports,
    };
  }

  const base = resolveBase(protoType, shortNameMap);
  return {
    tsType: repeated ? `${base.tsType}[]` : base.tsType,
    imports: base.imports,
  };
}

function resolveBase(
  protoType: string,
  shortNameMap?: Map<string, string>,
): ResolvedType {
  if (SCALAR_MAP[protoType]) return { tsType: SCALAR_MAP[protoType]!, imports: [] };

  const normalized = protoType.replace(/^\./, "");
  if (WELL_KNOWN_SCALAR[normalized]) {
    return { tsType: WELL_KNOWN_SCALAR[normalized]!, imports: [] };
  }

  // Look up the mangled/canonical short name for this proto fullName in the
  // orchestrator-supplied map. Falls back to the last `.` segment so unit
  // tests and small fixtures continue to work without a map.
  const mapped = shortNameMap?.get(normalized);
  if (mapped) {
    return { tsType: mapped, imports: [{ name: mapped, fullName: normalized }] };
  }
  const parts = normalized.split(".");
  const short = parts[parts.length - 1]!;
  return { tsType: short, imports: [{ name: short, fullName: normalized }] };
}
