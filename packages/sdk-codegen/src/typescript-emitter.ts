import type { FieldIr, ModelIr, SdkIr, TypeRefIr } from "./ir.ts";

export function emitTypeScriptModule(ir: SdkIr): string {
  const lines = ["// This file is generated. Do not edit by hand.", ""];

  for (const model of orderModels(ir.models)) {
    if (model.documentation) lines.push(docComment(model.documentation));
    lines.push(emitModel(model), "");
  }

  return `${lines.join("\n").trim()}\n`;
}

function emitModel(model: ModelIr): string {
  switch (model.kind) {
    case "enum": {
      const literals = model.values.map((value) => JSON.stringify(value));
      const type = literals.length > 0 ? literals.join(" | ") : "never";
      return `export type ${model.name} = ${model.open ? `${type} | string` : type};`;
    }
    case "object":
      return `export interface ${model.name} {\n${model.fields.map(emitField).join("\n")}\n}`;
    case "union":
      return `export type ${model.name} = ${model.variants.map(emitTypeRef).join(" | ") || "never"};`;
    case "scalar":
      return `export type ${model.name} = ${emitTypeRef(model.value)};`;
  }
}

function emitField(field: FieldIr): string {
  const name = safeProperty(field.wireName ?? field.name);
  const optional = field.required ? "" : "?";
  const nullable = field.nullable ? " | null" : "";
  const readonly = field.readonly === false ? "" : "readonly ";
  return `  ${readonly}${name}${optional}: ${emitTypeRef(field.type)}${nullable};`;
}

function emitTypeRef(type: TypeRefIr): string {
  switch (type.kind) {
    case "primitive":
      switch (type.name) {
        case "string":
          return type.format === "date-time" ? "string" : "string";
        case "number":
        case "integer":
          return "number";
        case "boolean":
          return "boolean";
        case "unknown":
        case "json":
          return "unknown";
      }
    case "reference":
      return type.target;
    case "literal":
      return JSON.stringify(type.value);
    case "array":
      return `ReadonlyArray<${emitTypeRef(type.items)}>`;
    case "record":
      return `Readonly<Record<string, ${emitTypeRef(type.values)}>>`;
    case "union":
      return type.variants.map(emitTypeRef).join(" | ") || "never";
    case "intersection":
      return type.members.map(emitTypeRef).join(" & ") || "unknown";
  }
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
