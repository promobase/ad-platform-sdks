import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import protobuf from "protobufjs";

// Directory inside the installed protobufjs package that ships the
// google/protobuf/*.proto common types (descriptor.proto, etc.). Used as a
// final fallback so that imports of `google/protobuf/descriptor.proto` work
// without the caller having to vendor it themselves.
const PROTOBUFJS_COMMON_DIR = (() => {
  try {
    const req = createRequire(import.meta.url);
    const pkgPath = req.resolve("protobufjs/package.json");
    return path.dirname(pkgPath);
  } catch {
    return null;
  }
})();

export interface FieldAst {
  name: string;
  type: string;
  id: number;
  repeated: boolean;
  optional: boolean;
  map?: { keyType: string; valueType: string };
  oneofName?: string;
}

export interface MessageAst {
  fullName: string;
  name: string;
  fields: FieldAst[];
  nestedMessages: MessageAst[];
  nestedEnums: EnumAst[];
  oneofs: { name: string; fieldNames: string[] }[];
  sourceFile?: string;
}

export interface EnumValueAst {
  name: string;
  number: number;
}

export interface EnumAst {
  fullName: string;
  name: string;
  values: EnumValueAst[];
}

export interface HttpOption {
  verb: "get" | "post" | "put" | "patch" | "delete";
  path: string;
  body?: string;
}

export interface MethodAst {
  name: string;
  requestType: string;
  responseType: string;
  httpOption?: HttpOption;
}

export interface ServiceAst {
  fullName: string;
  name: string;
  methods: MethodAst[];
}

export interface ProtoRoot {
  messages: MessageAst[];
  enums: EnumAst[];
  services: ServiceAst[];
}

export async function loadProtos(entryFiles: string[], includePaths: string[]): Promise<ProtoRoot> {
  const root = new protobuf.Root();
  const searchDirs = [...includePaths];
  if (PROTOBUFJS_COMMON_DIR) searchDirs.push(PROTOBUFJS_COMMON_DIR);
  root.resolvePath = (_origin, target) => {
    if (fs.existsSync(target)) return target;
    for (const dir of searchDirs) {
      const candidate = path.join(dir, target);
      if (fs.existsSync(candidate)) return candidate;
    }
    return target;
  };
  await root.load(entryFiles, { keepCase: true });
  root.resolveAll();

  const messages: MessageAst[] = [];
  const enums: EnumAst[] = [];
  const services: ServiceAst[] = [];

  function walk(ns: protobuf.NamespaceBase) {
    for (const child of ns.nestedArray) {
      if (child instanceof protobuf.Type) {
        messages.push(toMessage(child));
        walk(child);
      } else if (child instanceof protobuf.Enum) {
        enums.push(toEnum(child));
      } else if (child instanceof protobuf.Service) {
        services.push(toService(child));
      } else if (child instanceof protobuf.Namespace) {
        walk(child as protobuf.NamespaceBase);
      }
    }
  }
  walk(root);

  return { messages, enums, services };
}

function toMessage(t: protobuf.Type): MessageAst {
  const fields: FieldAst[] = t.fieldsArray.map((f) => {
    const ast: FieldAst = {
      name: f.name,
      type: f.type,
      id: f.id,
      repeated: f.repeated,
      optional: f.optional ?? false,
    };
    if (f instanceof protobuf.MapField) {
      ast.map = { keyType: f.keyType, valueType: f.type };
    }
    if (f.partOf) ast.oneofName = f.partOf.name;
    return ast;
  });

  const nestedMessages: MessageAst[] = [];
  const nestedEnums: EnumAst[] = [];
  for (const n of t.nestedArray) {
    if (n instanceof protobuf.Type) nestedMessages.push(toMessage(n));
    else if (n instanceof protobuf.Enum) nestedEnums.push(toEnum(n));
  }

  const sourceFile = (t as unknown as { filename?: string }).filename;

  return {
    fullName: t.fullName.replace(/^\./, ""),
    name: t.name,
    fields,
    nestedMessages,
    nestedEnums,
    oneofs: t.oneofsArray.map((o) => ({ name: o.name, fieldNames: o.oneof })),
    sourceFile: sourceFile ?? undefined,
  };
}

function toEnum(e: protobuf.Enum): EnumAst {
  return {
    fullName: e.fullName.replace(/^\./, ""),
    name: e.name,
    values: Object.entries(e.values).map(([name, number]) => ({
      name,
      number: number as number,
    })),
  };
}

const HTTP_VERBS = ["get", "post", "put", "patch", "delete"] as const;

function extractHttpOption(container: Record<string, unknown> | undefined): HttpOption | undefined {
  if (!container) return undefined;
  for (const verb of HTTP_VERBS) {
    const pathVal = container[verb];
    if (typeof pathVal === "string") {
      return {
        verb,
        path: pathVal,
        body: typeof container.body === "string" ? (container.body as string) : undefined,
      };
    }
  }
  return undefined;
}

function toService(s: protobuf.Service): ServiceAst {
  const methods: MethodAst[] = s.methodsArray.map((m) => {
    let httpOption: HttpOption | undefined;

    // protobufjs exposes parsed options in a couple of shapes depending on
    // version: either m.parsedOptions as an array of {key: value} entries, or
    // m.options as a flat map keyed like "(google.api.http).get".
    const parsed = (m as unknown as { parsedOptions?: unknown }).parsedOptions;
    if (Array.isArray(parsed)) {
      for (const entry of parsed as Array<Record<string, unknown>>) {
        const httpOpt = entry["(google.api.http)"] as Record<string, unknown> | undefined;
        const extracted = extractHttpOption(httpOpt);
        if (extracted) {
          httpOption = extracted;
          break;
        }
      }
    }

    if (!httpOption && m.options) {
      const opts = m.options as Record<string, unknown>;
      // Flat form: "(google.api.http).get" -> "/v1/..."
      for (const verb of HTTP_VERBS) {
        const key = `(google.api.http).${verb}`;
        const pathVal = opts[key];
        if (typeof pathVal === "string") {
          const bodyVal = opts["(google.api.http).body"];
          httpOption = {
            verb,
            path: pathVal,
            body: typeof bodyVal === "string" ? bodyVal : undefined,
          };
          break;
        }
      }
      // Nested form: "(google.api.http)" -> { get: "..." }
      if (!httpOption) {
        const nested = opts["(google.api.http)"] as Record<string, unknown> | undefined;
        httpOption = extractHttpOption(nested);
      }
    }

    return {
      name: m.name,
      requestType: m.resolvedRequestType?.fullName.replace(/^\./, "") ?? m.requestType,
      responseType: m.resolvedResponseType?.fullName.replace(/^\./, "") ?? m.responseType,
      httpOption,
    };
  });
  return {
    fullName: s.fullName.replace(/^\./, ""),
    name: s.name,
    methods,
  };
}
