import type { FieldIr, ModelIr, SdkIr, TypeRefIr } from "./ir.ts";

export function emitEffectSchemaModule(ir: SdkIr): string {
  const lines = [
    "// This file is generated. Do not edit by hand.",
    'import { Schema } from "effect";',
    "",
  ];

  for (const model of orderModels(ir.models)) {
    if (model.documentation) lines.push(docComment(model.documentation));
    lines.push(emitModel(model), "");
  }

  return `${lines.join("\n").trim()}\n`;
}

export function emitModel(model: ModelIr): string {
  switch (model.kind) {
    case "enum": {
      const literals = model.values.map((value) => JSON.stringify(value)).join(", ");
      const type = model.values.map((value) => JSON.stringify(value)).join(" | ") || "never";
      const schema = model.open
        ? `Schema.Union(Schema.Literal(${literals}), Schema.String)`
        : `Schema.Literal(${literals})`;
      const decoded = model.open ? `${type} | string` : type;
      return `${emitTypeAliases(model.name, decoded, decoded)}\n${emitSchemaDeclaration(model.name, schema)}`;
    }
    case "object": {
      const fields = model.fields
        .map((field) => `  ${safeProperty(field.name)}: ${emitField(field)},`)
        .join("\n");
      const decodedFields = model.fields.map((field) => emitTypeField(field, false)).join("\n");
      const encodedFields = model.fields.map((field) => emitTypeField(field, true)).join("\n");
      return `export interface ${model.name} {\n${decodedFields}\n}\nexport interface ${model.name}Encoded {\n${encodedFields}\n}\n${emitSchemaDeclaration(model.name, `Schema.Struct({\n${fields}\n})`)}`;
    }
    case "union": {
      const variants = model.variants.map((variant) => emitTypeRef(variant)).join(", ");
      const decoded = model.variants.map((variant) => emitTsType(variant, false)).join(" | ");
      const encoded = model.variants.map((variant) => emitTsType(variant, true)).join(" | ");
      return `${emitTypeAliases(model.name, decoded, encoded)}\n${emitSchemaDeclaration(model.name, `Schema.Union(${variants})`)}`;
    }
    case "scalar": {
      const decoded = emitTsType(model.value, false);
      const encoded = emitTsType(model.value, true);
      return `${emitTypeAliases(model.name, decoded, encoded)}\n${emitSchemaDeclaration(model.name, emitTypeRef(model.value))}`;
    }
  }
}

export function emitTypeRef(type: TypeRefIr, referencePrefix = ""): string {
  switch (type.kind) {
    case "primitive":
      switch (type.name) {
        case "string":
          return type.format === "date-time" ? "Schema.DateFromString" : "Schema.String";
        case "number":
          return "Schema.Number";
        case "integer":
          return "Schema.Int";
        case "boolean":
          return "Schema.Boolean";
        case "unknown":
        case "json":
          return "Schema.Unknown";
      }
    case "reference":
      return `Schema.suspend(() => ${referencePrefix}${type.target})`;
    case "literal":
      return `Schema.Literal(${JSON.stringify(type.value)})`;
    case "array":
      return `Schema.Array(${emitTypeRef(type.items, referencePrefix)})`;
    case "record":
      return `Schema.Record({ key: Schema.String, value: ${emitTypeRef(type.values, referencePrefix)} })`;
    case "union":
      return `Schema.Union(${type.variants.map((variant) => emitTypeRef(variant, referencePrefix)).join(", ")})`;
    case "intersection":
      return type.members
        .map((member) => emitTypeRef(member, referencePrefix))
        .reduce((left, right) => `Schema.extend(${left}, ${right})`);
  }
}

function emitField(field: FieldIr): string {
  const value = field.nullable
    ? `Schema.NullOr(${emitTypeRef(field.type)})`
    : emitTypeRef(field.type);
  if (!field.wireName || field.wireName === field.name) {
    return field.required ? value : `Schema.optional(${value})`;
  }
  const property = field.required
    ? `Schema.propertySignature(${value})`
    : `Schema.optional(${value})`;
  return `${property}.pipe(Schema.fromKey(${JSON.stringify(field.wireName)}))`;
}

function emitSchemaDeclaration(name: string, expression: string): string {
  return `export const ${name}: Schema.Schema<${name}, ${name}Encoded, never> = ${expression};`;
}

function emitTypeAliases(name: string, decoded: string, encoded: string): string {
  return `export type ${name} = ${decoded};\nexport type ${name}Encoded = ${encoded};`;
}

function emitTypeField(field: FieldIr, encoded: boolean): string {
  const name = encoded && field.wireName ? field.wireName : field.name;
  const optional = field.required ? "" : "?";
  const nullable = field.nullable ? " | null" : "";
  return `  readonly ${safeProperty(name)}${optional}: ${emitTsType(field.type, encoded)}${nullable};`;
}

function emitTsType(type: TypeRefIr, encoded: boolean): string {
  switch (type.kind) {
    case "primitive":
      switch (type.name) {
        case "string":
          return type.format === "date-time" && !encoded ? "Date" : "string";
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
      return encoded ? `${type.target}Encoded` : type.target;
    case "literal":
      return JSON.stringify(type.value);
    case "array":
      return `ReadonlyArray<${emitTsType(type.items, encoded)}>`;
    case "record":
      return `Readonly<Record<string, ${emitTsType(type.values, encoded)}>>`;
    case "union":
      return type.variants.map((variant) => emitTsType(variant, encoded)).join(" | ");
    case "intersection":
      return type.members.map((member) => emitTsType(member, encoded)).join(" & ");
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
