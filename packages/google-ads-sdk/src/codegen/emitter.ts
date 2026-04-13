import type { EnumAst, MessageAst, ServiceAst, MethodAst, FieldAst } from "./parser.ts";
import { resolveType } from "./type-resolver.ts";
import { parseHttpPath, snakeToCamel } from "./http-binding.ts";

export function emitEnum(e: EnumAst, emittedName?: string): string {
  const name = emittedName ?? e.name;
  const values = e.values.map((v) => `  | "${v.name}"`).join("\n");
  return `// Generated from ${e.fullName}. Do not edit by hand.\nexport type ${name} =\n${values};\n`;
}

export function emitMessage(
  m: MessageAst,
  shortNameMap?: Map<string, string>,
  emittedName?: string,
): string {
  const selfName = emittedName ?? m.name;
  const imports = new Set<string>();
  const lines: string[] = [];
  for (const f of m.fields) {
    const resolved = resolveType(f.type, f.repeated, f.map ?? null, shortNameMap);
    for (const imp of resolved.imports) {
      if (imp.name !== selfName) imports.add(imp.name);
    }
    const jsName = snakeToCamel(f.name);
    lines.push(`  ${jsName}?: ${resolved.tsType};`);
  }
  const importLine =
    imports.size > 0
      ? `import type { ${[...imports].sort().join(", ")} } from "../index.ts";\n\n`
      : "";
  return `${importLine}// Generated from ${m.fullName}. Do not edit by hand.\nexport interface ${selfName} {\n${lines.join("\n")}\n}\n`;
}

export function emitService(
  s: ServiceAst,
  messageIndex: Map<string, MessageAst>,
  shortNameMap?: Map<string, string>,
): string {
  const methodBlocks: string[] = [];
  const usedTypes = new Set<string>();

  for (const m of s.methods) {
    const block = emitMethod(m, messageIndex, usedTypes, shortNameMap);
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
  shortNameMap: Map<string, string> | undefined,
): string | null {
  if (!m.httpOption) return null;

  const parsed = parseHttpPath(m.httpOption.path);
  const methodName = m.name.charAt(0).toLowerCase() + m.name.slice(1);

  // Use the type resolver to figure out what the request / response types
  // should look like in TS. Well-known types (google.protobuf.Empty,
  // google.longrunning.Operation, google.rpc.Status, …) resolve to scalar/
  // `unknown` TS shapes with no import, which avoids dangling references
  // to types that were never emitted.
  const reqResolved = resolveType(m.requestType, false, null, shortNameMap);
  const resResolved = resolveType(m.responseType, false, null, shortNameMap);
  for (const imp of reqResolved.imports) usedTypes.add(imp.name);
  for (const imp of resResolved.imports) usedTypes.add(imp.name);
  const reqTs = reqResolved.tsType;
  const resTs = resResolved.tsType;

  const req = messageIndex.get(m.requestType);
  const pathParamSet = new Set(parsed.pathParams);
  const pathParamSignature = parsed.pathParams
    .map((p) => `${snakeToCamel(p)}: string`)
    .join(", ");

  const verb = m.httpOption.verb;
  const needsBody = verb === "post" || verb === "put" || verb === "patch";

  // Only try to `Omit<ReqShape, pathKeys>` when the resolved request type is
  // a real generated interface we can index into. For well-known scalars we
  // just use the resolved type directly.
  const reqIsInterface = reqResolved.imports.length > 0;
  const omitKeys =
    reqIsInterface && parsed.pathParams.length > 0
      ? parsed.pathParams.map((p) => `"${snakeToCamel(p)}"`).join(" | ")
      : null;
  const bodyFieldsTs = omitKeys ? `Omit<${reqTs}, ${omitKeys}>` : reqTs;

  const nonPathFields: FieldAst[] = req
    ? req.fields.filter((f) => !pathParamSet.has(f.name))
    : [];

  const args: string[] = [`client: HttpClient`];
  if (pathParamSignature) args.push(pathParamSignature);

  let call: string;
  if (needsBody) {
    args.push(`body: ${bodyFieldsTs}`);
    call = `client.post<${resTs}>(\`${parsed.template}\`, body)`;
  } else if (verb === "delete") {
    call = `client.delete<${resTs}>(\`${parsed.template}\`)`;
  } else {
    // GET
    if (nonPathFields.length > 0) {
      args.push(`query: ${bodyFieldsTs} = {} as ${bodyFieldsTs}`);
      call = `client.get<${resTs}>(\`${parsed.template}\`, { query: query as Record<string, string | number | boolean | undefined> })`;
    } else {
      call = `client.get<${resTs}>(\`${parsed.template}\`)`;
    }
  }

  return `  ${methodName}(${args.join(", ")}): Promise<${resTs}> {\n    return ${call};\n  }`;
}
