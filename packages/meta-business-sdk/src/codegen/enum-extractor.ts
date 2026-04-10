export type EnumMap = Map<string, string[]>;

/**
 * Parse key: 'VALUE' pairs from an Object.freeze({...}) block source string.
 * Returns a record of { key: value } pairs.
 */
export function parseEnumBlock(source: string): Record<string, string> {
  const result: Record<string, string> = {};
  const kvPattern = /(\w+)\s*:\s*'([^']+)'/g;
  let match: RegExpExecArray | null;
  while ((match = kvPattern.exec(source)) !== null) {
    result[match[1]!] = match[2]!;
  }
  return result;
}

/**
 * Extract all enum blocks from a class source string.
 * Skips the "Fields" enum block.
 * Returns a Map keyed by "ClassName_EnumName" with string[] of enum values.
 */
export function extractEnumsFromSource(className: string, source: string): EnumMap {
  const enumMap: EnumMap = new Map();
  const blockPattern =
    /static\s+get\s+(\w+)\s*\(\)\s*:\s*Object\s*\{[^}]*return\s+Object\.freeze\(\{([^}]*)\}\)/gs;

  let match: RegExpExecArray | null;
  while ((match = blockPattern.exec(source)) !== null) {
    const enumName = match[1]!;
    const blockContent = match[2]!;

    if (enumName === "Fields") {
      continue;
    }

    const kvPairs = parseEnumBlock(blockContent);
    const values = Object.values(kvPairs);
    enumMap.set(`${className}_${enumName}`, values);
  }

  return enumMap;
}

/**
 * Scan all .js files in the given directory, extract class names and enums,
 * and return a merged EnumMap of all enums found.
 */
export async function extractAllEnums(nodeSdkObjectsDir: string): Promise<EnumMap> {
  const merged: EnumMap = new Map();
  const glob = new Bun.Glob("**/*.js");

  for await (const relPath of glob.scan(nodeSdkObjectsDir)) {
    const filePath = `${nodeSdkObjectsDir}/${relPath}`;
    const file = Bun.file(filePath);
    const source = await file.text();

    const classMatch = source.match(/export\s+default\s+class\s+(\w+)\s+extends/);
    if (!classMatch) {
      continue;
    }

    const className = classMatch[1]!;
    const fileEnums = extractEnumsFromSource(className, source);

    for (const [key, values] of fileEnums) {
      merged.set(key, values);
    }
  }

  return merged;
}
