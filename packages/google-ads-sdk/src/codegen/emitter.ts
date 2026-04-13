import type { EnumAst, MessageAst, ServiceAst, MethodAst, FieldAst } from "./parser.ts";
import { resolveType } from "./type-resolver.ts";
import { parseHttpPath, snakeToCamel } from "./http-binding.ts";

export function emitEnum(e: EnumAst): string {
  const values = e.values.map((v) => `  | "${v.name}"`).join("\n");
  return `// Generated from ${e.fullName}. Do not edit by hand.\nexport type ${e.name} =\n${values};\n`;
}

export function emitMessage(m: MessageAst): string {
  const imports = new Set<string>();
  const lines: string[] = [];
  for (const f of m.fields) {
    const resolved = resolveType(f.type, f.repeated, f.map ?? null);
    for (const imp of resolved.imports) {
      if (imp.name !== m.name) imports.add(imp.name);
    }
    const jsName = snakeToCamel(f.name);
    lines.push(`  ${jsName}?: ${resolved.tsType};`);
  }
  const importLine =
    imports.size > 0
      ? `import type { ${[...imports].sort().join(", ")} } from "../index.ts";\n\n`
      : "";
  return `${importLine}// Generated from ${m.fullName}. Do not edit by hand.\nexport interface ${m.name} {\n${lines.join("\n")}\n}\n`;
}

export function emitService(s: ServiceAst, messageIndex: Map<string, MessageAst>): string {
  const methodBlocks: string[] = [];
  const usedTypes = new Set<string>();

  for (const m of s.methods) {
    const block = emitMethod(m, messageIndex, usedTypes);
    if (block) methodBlocks.push(block);
  }

  const instance = s.name.charAt(0).toLowerCase() + s.name.slice(1);
  const typeImports = [...usedTypes].sort();
  const typeImportBlock =
    typeImports.length > 0
      ? `import type { ${typeImports.join(", ")} } from "../index.ts";\n`
      : "";

  const body = methodBlocks.length > 0 ? `\n${methodBlocks.join(",\n\n")}\n` : "";

  return `${typeImportBlock}import type { HttpClient } from "@promobase/sdk-runtime";\n\n// Generated from ${s.fullName}. Do not edit by hand.\nexport const ${instance} = {${body}};\n`;
}

function emitMethod(
  m: MethodAst,
  messageIndex: Map<string, MessageAst>,
  usedTypes: Set<string>,
): string | null {
  if (!m.httpOption) return null;

  const parsed = parseHttpPath(m.httpOption.path);
  const methodName = m.name.charAt(0).toLowerCase() + m.name.slice(1);
  const reqShort = shortName(m.requestType);
  const resShort = shortName(m.responseType);

  usedTypes.add(reqShort);
  usedTypes.add(resShort);

  const req = messageIndex.get(m.requestType);
  const pathParamSet = new Set(parsed.pathParams);
  const pathParamSignature = parsed.pathParams
    .map((p) => `${snakeToCamel(p)}: string`)
    .join(", ");

  const verb = m.httpOption.verb;
  const needsBody = verb === "post" || verb === "put" || verb === "patch";

  const omitKeys =
    parsed.pathParams.length > 0
      ? parsed.pathParams.map((p) => `"${snakeToCamel(p)}"`).join(" | ")
      : null;
  const bodyFieldsTs = omitKeys ? `Omit<${reqShort}, ${omitKeys}>` : reqShort;

  const nonPathFields: FieldAst[] = req
    ? req.fields.filter((f) => !pathParamSet.has(f.name))
    : [];

  const args: string[] = [`client: HttpClient`];
  if (pathParamSignature) args.push(pathParamSignature);

  let call: string;
  if (needsBody) {
    args.push(`body: ${bodyFieldsTs}`);
    call = `client.post<${resShort}>(\`${parsed.template}\`, body)`;
  } else if (verb === "delete") {
    call = `client.delete<${resShort}>(\`${parsed.template}\`)`;
  } else {
    // GET
    if (nonPathFields.length > 0) {
      args.push(`query: ${bodyFieldsTs} = {} as ${bodyFieldsTs}`);
      call = `client.get<${resShort}>(\`${parsed.template}\`, { query: query as Record<string, string | number | boolean | undefined> })`;
    } else {
      call = `client.get<${resShort}>(\`${parsed.template}\`)`;
    }
  }

  return `  ${methodName}(${args.join(", ")}): Promise<${resShort}> {\n    return ${call};\n  }`;
}

function shortName(fullName: string): string {
  const parts = fullName.split(".");
  return parts[parts.length - 1]!;
}
