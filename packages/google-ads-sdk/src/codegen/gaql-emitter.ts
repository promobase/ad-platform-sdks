import type { ProtoRoot, MessageAst, EnumAst } from "./parser.ts";
import { resolveType } from "./type-resolver.ts";
import { snakeToCamel } from "./http-binding.ts";

const SCALAR_TYPES = new Set([
  "string",
  "bool",
  "bytes",
  "double",
  "float",
  "int32",
  "uint32",
  "sint32",
  "fixed32",
  "sfixed32",
  "int64",
  "uint64",
  "sint64",
  "fixed64",
  "sfixed64",
]);

export interface GaqlFieldEntry {
  gaqlKey: string;
  namespace: string;
  camelPath: string;
  tsType: string;
  enumImport?: string;
}

export interface GaqlResourceCatalog {
  resourceName: string;
  typeAlias: string;
  fields: GaqlFieldEntry[];
}

export interface GaqlCatalog {
  resources: Map<string, GaqlResourceCatalog>;
  metrics: GaqlFieldEntry[];
  segments: GaqlFieldEntry[];
  renderResourceFile(resource: string): string;
  renderMetricsFile(): string;
  renderSegmentsFile(): string;
  renderFieldMapFile(): string;
  renderResourceMapFile(): string;
  renderIndexFile(): string;
}

export interface EmitterOptions {
  resourcesPackagePrefix: string;
  metricsMessageFullName: string | null;
  segmentsMessageFullName: string | null;
}

const MAX_DEPTH = 6;

export function emitGaqlCatalog(root: ProtoRoot, opts: EmitterOptions): GaqlCatalog {
  const messageIndex = new Map<string, MessageAst>();
  for (const m of root.messages) messageIndex.set(m.fullName, m);
  const messageByShortName = new Map<string, MessageAst>();
  for (const m of root.messages) {
    if (!messageByShortName.has(m.name)) messageByShortName.set(m.name, m);
  }
  const enumByShortName = new Map<string, EnumAst>();
  const enumByFullName = new Map<string, EnumAst>();
  for (const e of root.enums) {
    enumByFullName.set(e.fullName, e);
    if (!enumByShortName.has(e.name)) enumByShortName.set(e.name, e);
  }

  const ctx: WalkContext = {
    messageIndex,
    messageByShortName,
    enumByShortName,
    enumByFullName,
  };

  const prefixSegments = opts.resourcesPackagePrefix.split(".").length;

  // A message is treated as a resource only if no other message in the same
  // package references it as a field type (so helper/nested types like
  // NetworkSettings don't become top-level resources).
  const referencedTypes = new Set<string>();
  for (const m of root.messages) {
    for (const f of m.fields) {
      if (!SCALAR_TYPES.has(f.type)) referencedTypes.add(f.type);
    }
  }

  const resources = new Map<string, GaqlResourceCatalog>();
  for (const m of root.messages) {
    if (!m.fullName.startsWith(`${opts.resourcesPackagePrefix}.`)) continue;
    if (m.fullName.split(".").length !== prefixSegments + 1) continue;
    if (referencedTypes.has(m.name) || referencedTypes.has(m.fullName)) continue;
    const resourceName = toSnakeCase(m.name);
    const typeAlias = `${m.name}SelectableField`;
    const fields: GaqlFieldEntry[] = [];
    walkMessage(m, [resourceName], [], fields, ctx, 0);
    resources.set(resourceName, { resourceName, typeAlias, fields });
  }

  const metrics: GaqlFieldEntry[] = [];
  if (opts.metricsMessageFullName) {
    const metricsMsg = messageIndex.get(opts.metricsMessageFullName);
    if (metricsMsg) walkMessage(metricsMsg, ["metrics"], [], metrics, ctx, 0);
  }

  const segments: GaqlFieldEntry[] = [];
  if (opts.segmentsMessageFullName) {
    const segmentsMsg = messageIndex.get(opts.segmentsMessageFullName);
    if (segmentsMsg) walkMessage(segmentsMsg, ["segments"], [], segments, ctx, 0);
  }

  return {
    resources,
    metrics,
    segments,
    renderResourceFile(resource) {
      const cat = resources.get(resource);
      if (!cat) throw new Error(`unknown resource: ${resource}`);
      const lines = cat.fields.map((f) => `  | "${f.gaqlKey}"`);
      return `// Generated. Do not edit by hand.\nexport type ${cat.typeAlias} =\n${lines.join("\n") || "  never"};\n`;
    },
    renderMetricsFile() {
      const lines = metrics.map((f) => `  | "${f.gaqlKey}"`);
      return `// Generated. Do not edit by hand.\nexport type MetricField =\n${lines.join("\n") || "  never"};\n`;
    },
    renderSegmentsFile() {
      const lines = segments.map((f) => `  | "${f.gaqlKey}"`);
      return `// Generated. Do not edit by hand.\nexport type SegmentField =\n${lines.join("\n") || "  never"};\n`;
    },
    renderFieldMapFile() {
      const all = [
        ...[...resources.values()].flatMap((r) => r.fields),
        ...metrics,
        ...segments,
      ];
      const enumImports = new Set<string>();
      for (const f of all) if (f.enumImport) enumImports.add(f.enumImport);
      const importLines = [...enumImports]
        .sort()
        .map((name) => `import type { ${name} } from "../enums/${name}.ts";`)
        .join("\n");
      const entries = all
        .map(
          (f) =>
            `  "${f.gaqlKey}": FieldInfo<"${f.namespace}", "${f.camelPath}", ${f.tsType}>;`,
        )
        .join("\n");
      return `${importLines}\n\n// Generated. Do not edit by hand.\nexport interface FieldInfo<NS extends string, P extends string, T> {\n  namespace: NS;\n  path: P;\n  tsType: T;\n}\n\nexport type FieldMap = {\n${entries}\n};\n`;
    },
    renderResourceMapFile() {
      const resImports = [...resources.values()]
        .map((r) => `import type { ${r.typeAlias} } from "./resources/${r.resourceName}.ts";`)
        .join("\n");
      const entries = [...resources.values()]
        .map((r) => `  ${r.resourceName}: ${r.typeAlias} | MetricField | SegmentField;`)
        .join("\n");
      return `${resImports}\nimport type { MetricField } from "./metrics.ts";\nimport type { SegmentField } from "./segments.ts";\n\n// Generated. Do not edit by hand.\nexport type ResourceFieldMap = {\n${entries}\n};\n\nexport type GaqlResource = keyof ResourceFieldMap;\n`;
    },
    renderIndexFile() {
      const lines = [
        `export * from "./field-map.ts";`,
        `export * from "./resource-map.ts";`,
        `export * from "./metrics.ts";`,
        `export * from "./segments.ts";`,
      ];
      for (const r of resources.values()) {
        lines.push(`export * from "./resources/${r.resourceName}.ts";`);
      }
      return lines.join("\n") + "\n";
    },
  };
}

interface WalkContext {
  messageIndex: Map<string, MessageAst>;
  messageByShortName: Map<string, MessageAst>;
  enumByShortName: Map<string, EnumAst>;
  enumByFullName: Map<string, EnumAst>;
}

function lookupMessage(protoType: string, ctx: WalkContext): MessageAst | undefined {
  const normalized = protoType.replace(/^\./, "");
  return ctx.messageIndex.get(normalized) ?? ctx.messageByShortName.get(normalized);
}

function lookupEnum(protoType: string, ctx: WalkContext): EnumAst | undefined {
  const normalized = protoType.replace(/^\./, "");
  return ctx.enumByFullName.get(normalized) ?? ctx.enumByShortName.get(normalized);
}

function walkMessage(
  msg: MessageAst,
  namespacePath: string[],
  camelPath: string[],
  out: GaqlFieldEntry[],
  ctx: WalkContext,
  depth: number,
) {
  if (depth > MAX_DEPTH) return;
  for (const field of msg.fields) {
    if (field.map) continue;

    const snakeLeaf = field.name;
    const camelLeaf = snakeToCamel(field.name);
    const gaqlKey = [...namespacePath, snakeLeaf].join(".");
    const namespace = namespacePath[0]!;
    const fullCamelPath = [...camelPath, camelLeaf].join(".");

    const resolved = resolveType(field.type, field.repeated, null);
    const isScalar = SCALAR_TYPES.has(field.type);
    const wellKnown = isWellKnown(field.type);
    const enumRef = !isScalar && !wellKnown ? lookupEnum(field.type, ctx) : undefined;

    const pushLeaf = () => {
      out.push({
        gaqlKey,
        namespace,
        camelPath: fullCamelPath,
        tsType: resolved.tsType,
        enumImport: pickEnumImport(resolved),
      });
    };

    if (isScalar || wellKnown || enumRef) {
      pushLeaf();
      continue;
    }

    if (field.repeated) {
      pushLeaf();
      continue;
    }

    const nested = lookupMessage(field.type, ctx);
    if (!nested) {
      pushLeaf();
      continue;
    }
    walkMessage(
      nested,
      [...namespacePath, snakeLeaf],
      [...camelPath, camelLeaf],
      out,
      ctx,
      depth + 1,
    );
  }
}

function isWellKnown(protoType: string): boolean {
  const t = protoType.replace(/^\./, "");
  return (
    t.startsWith("google.protobuf.") &&
    (t.endsWith("Value") ||
      t === "google.protobuf.Timestamp" ||
      t === "google.protobuf.Duration" ||
      t === "google.protobuf.FieldMask" ||
      t === "google.protobuf.Empty" ||
      t === "google.protobuf.Any" ||
      t === "google.protobuf.Struct")
  );
}

function pickEnumImport(resolved: {
  tsType: string;
  imports: { name: string }[];
}): string | undefined {
  const base = resolved.tsType.replace(/\[\]$/, "");
  if (["string", "number", "boolean", "unknown"].includes(base)) return undefined;
  if (base.startsWith("Record<")) return undefined;
  return resolved.imports.find((i) => i.name === base)?.name;
}

function toSnakeCase(s: string): string {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
