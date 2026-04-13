export interface TypeResolverContext {
  knownObjects: Set<string>;
  knownEnums: Set<string>;
}

export interface GenericParse {
  outer: string;
  inner: string[];
}

/**
 * Parses a generic type string like "list<string>" or "map<string, int>".
 * Returns null if the string has no generic parameters.
 * Handles nested angle brackets correctly.
 */
export function parseGenericType(typeStr: string): GenericParse | null {
  const firstAngle = typeStr.indexOf("<");
  if (firstAngle === -1) return null;

  const outer = typeStr.slice(0, firstAngle).trim();
  // Strip the outermost < ... >
  const innerRaw = typeStr.slice(firstAngle + 1, typeStr.length - 1);

  // Split on commas at depth 0
  const inner: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < innerRaw.length; i++) {
    const ch = innerRaw[i];
    if (ch === "<") depth++;
    else if (ch === ">") depth--;
    else if (ch === "," && depth === 0) {
      inner.push(innerRaw.slice(start, i).trim());
      start = i + 1;
    }
  }
  inner.push(innerRaw.slice(start).trim());

  return { outer, inner };
}

/**
 * Converts an enum type name like "Campaign_bid_strategy" to PascalCase "CampaignBidStrategy".
 */
export function enumTypeToTsName(enumType: string): string {
  return enumType
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/** Primitive and special type mappings */
const PRIMITIVES: Record<string, string> = {
  string: "string",
  bool: "boolean",
  boolean: "boolean",
  int: "number",
  "unsigned int": "number",
  float: "number",
  double: "number",
  numeric: "number",
  datetime: "string",
  file: "File | Blob | ReadableStream",
  // bare containers
  Object: "Record<string, unknown>",
  map: "Record<string, unknown>",
  list: "unknown[]",
};

/**
 * Resolves a Meta spec type string to a TypeScript type expression.
 */
export function resolveType(typeStr: string, ctx: TypeResolverContext): string {
  const trimmed = typeStr.trim();

  // 1. Primitive / bare container lookup
  if (trimmed in PRIMITIVES) {
    return PRIMITIVES[trimmed]!;
  }

  // 2. Generic types: list<...> or map<...>
  const parsed = parseGenericType(trimmed);
  if (parsed !== null) {
    const { outer, inner } = parsed;

    if (outer === "list") {
      const resolvedInner = resolveType(inner[0]!, ctx);
      return `${resolvedInner}[]`;
    }

    if (outer === "map") {
      const keyType = resolveType(inner[0]!, ctx);
      const valType = resolveType(inner[1]!, ctx);
      // Record keys must be string | number | symbol; fall back to string for complex key types
      const safeKeyType = keyType === "string" || keyType === "number" ? keyType : "string";
      return `Record<${safeKeyType}, ${valType}>`;
    }

    // Unknown generic — fall through to unknown
    return "unknown";
  }

  // 3. Known enum types (knownEnums stores PascalCase TsNames)
  const tsName = enumTypeToTsName(trimmed);
  if (ctx.knownEnums.has(tsName)) {
    return tsName;
  }

  // 4. Known object references
  if (ctx.knownObjects.has(trimmed)) {
    return `${trimmed}Fields`;
  }

  // 5. Enum-like patterns without values — fall back to string
  // Field enums: "Campaign_bid_strategy", Param enums: "adcampaigngroup_objective"
  if (/^[A-Z]\w+_\w+$/.test(trimmed) || /^[a-z]\w+_\w+$/.test(trimmed)) {
    return "string";
  }

  // 6. Fallback
  return "unknown";
}
