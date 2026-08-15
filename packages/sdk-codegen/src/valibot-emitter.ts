import type { FieldIr, ModelIr, SdkIr, TypeRefIr } from "./ir.ts";

export function emitValibotSchemaModule(ir: SdkIr): string {
  const lines = [
    "// This file is generated. Do not edit by hand.",
    'import * as v from "valibot";',
    "",
  ];

  for (const model of orderModels(ir.models)) {
    if (model.documentation) lines.push(docComment(model.documentation));
    lines.push(emitModel(model), "");
  }

  return `${lines.join("\n").trim()}\n`;
}

function emitModel(model: ModelIr): string {
  switch (model.kind) {
    case "enum": {
      const values = model.values.map((value) => JSON.stringify(value)).join(", ");
      const known = model.values.length > 0 ? `v.picklist([${values}])` : "v.never()";
      const schema = model.open ? `v.union([${known}, v.string()])` : known;
      const type = model.values.map((value) => JSON.stringify(value)).join(" | ") || "never";
      return `export type ${model.name} = ${model.open ? `${type} | string` : type};\nexport const ${model.name}Schema: v.GenericSchema<unknown, ${model.name}> = ${schema};`;
    }
    case "object": {
      const fields = model.fields.map(emitField).join("\n");
      const typeFields = model.fields.map(emitTypeField).join("\n");
      return `export type ${model.name} = {\n${typeFields}\n};\nexport const ${model.name}Schema: v.GenericSchema<unknown, ${model.name}> = v.looseObject({\n${fields}\n});`;
    }
    case "union": {
      const schema = emitUnion(model.variants.map(emitTypeRef));
      const type = model.variants.map(emitTypeScriptRef).join(" | ") || "never";
      return `export type ${model.name} = ${type};\nexport const ${model.name}Schema: v.GenericSchema<unknown, ${model.name}> = ${schema};`;
    }
    case "scalar":
      return `export type ${model.name} = ${emitTypeScriptRef(model.value)};\nexport const ${model.name}Schema: v.GenericSchema<unknown, ${model.name}> = ${emitTypeRef(model.value)};`;
  }
}

function emitField(field: FieldIr): string {
  const key = safeProperty(field.wireName ?? field.name);
  let schema = emitTypeRef(field.type);
  if (field.nullable) schema = `v.nullable(${schema})`;
  if (!field.required) schema = `v.optional(${schema})`;
  return `  ${key}: ${schema},`;
}

function emitTypeField(field: FieldIr): string {
  const key = safeProperty(field.wireName ?? field.name);
  const optional = field.required ? "" : "?";
  const nullable = field.nullable ? " | null" : "";
  return `  readonly ${key}${optional}: ${emitTypeScriptRef(field.type)}${nullable};`;
}

function emitTypeRef(type: TypeRefIr): string {
  switch (type.kind) {
    case "primitive":
      switch (type.name) {
        case "string":
          return type.format === "date-time"
            ? "v.pipe(v.string(), v.isoTimestamp())"
            : "v.string()";
        case "number":
          return "v.number()";
        case "integer":
          return "v.pipe(v.number(), v.integer())";
        case "boolean":
          return "v.boolean()";
        case "unknown":
        case "json":
          return "v.unknown()";
      }
    case "reference":
      return `v.lazy(() => ${type.target}Schema)`;
    case "literal":
      return `v.literal(${JSON.stringify(type.value)})`;
    case "array":
      return `v.array(${emitTypeRef(type.items)})`;
    case "record":
      return `v.record(v.string(), ${emitTypeRef(type.values)})`;
    case "union":
      return emitUnion(type.variants.map(emitTypeRef));
    case "intersection": {
      const members = type.members.map(emitTypeRef);
      return members.length === 0
        ? "v.unknown()"
        : members.length === 1
          ? members[0]!
          : `v.intersect([${members.join(", ")}])`;
    }
  }
}

function emitTypeScriptRef(type: TypeRefIr): string {
  switch (type.kind) {
    case "primitive":
      switch (type.name) {
        case "string":
        case "number":
        case "integer":
        case "boolean":
          return type.name === "string" ? "string" : type.name === "boolean" ? "boolean" : "number";
        case "unknown":
        case "json":
          return "unknown";
      }
    case "reference":
      return type.target;
    case "literal":
      return JSON.stringify(type.value);
    case "array":
      return `ReadonlyArray<${emitTypeScriptRef(type.items)}>`;
    case "record":
      return `Readonly<Record<string, ${emitTypeScriptRef(type.values)}>>`;
    case "union":
      return type.variants.map(emitTypeScriptRef).join(" | ") || "never";
    case "intersection":
      return type.members.map(emitTypeScriptRef).join(" & ") || "unknown";
  }
}

function emitUnion(variants: readonly string[]): string {
  if (variants.length === 0) return "v.never()";
  if (variants.length === 1) return variants[0]!;
  return `v.union([${variants.join(", ")}])`;
}

function orderModels(models: readonly ModelIr[]): readonly ModelIr[] {
  return [...models].sort((left, right) => left.name.localeCompare(right.name));
}

function safeProperty(name: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}

function docComment(value: string): string {
  return `/** ${value.replaceAll("*/", "*\\/")} */`;
}
