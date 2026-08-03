import type { EndpointIr, SdkIr } from "./ir.ts";
import { emitTypeRef } from "./schema-emitter.ts";

export function emitEndpointDescriptors(ir: SdkIr): string {
  const lines = [
    "// This file is generated. Do not edit by hand.",
    'import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";',
    'import { Schema } from "effect";',
    'import * as Models from "./schemas.ts";',
    "",
  ];

  for (const endpoint of [...ir.endpoints].sort((a, b) => a.id.localeCompare(b.id))) {
    lines.push(emitEndpoint(endpoint), "");
  }
  lines.push(
    `export const endpointDescriptors = [${[...ir.endpoints]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((endpoint) => endpointIdentifier(endpoint))
      .join(", ")}] as const;`,
  );
  return `${lines.join("\n").trim()}\n`;
}

function emitEndpoint(endpoint: EndpointIr): string {
  const parameterMetadata = endpoint.parameters
    .map((parameter) =>
      JSON.stringify({
        name: parameter.name,
        wireName: parameter.wireName ?? parameter.name,
        location: parameter.location,
        required: parameter.required,
        nullable: parameter.nullable,
      }),
    )
    .join(",\n    ");
  const inputSchemaFields = endpoint.parameters
    .map((parameter) => {
      const expression = descriptorTypeRef(parameter.type);
      const nullable = parameter.nullable ? `Schema.NullOr(${expression})` : expression;
      return `    ${safeProperty(parameter.name)}: ${parameter.required ? nullable : `Schema.optional(${nullable})`},`;
    })
    .join("\n");
  const outputSchema = descriptorTypeRef(endpoint.output);
  const parameters =
    parameterMetadata.length > 0
      ? `[
    ${parameterMetadata}
  ]`
      : "[]";
  return `export const ${endpointIdentifier(endpoint)} = defineEndpointDescriptor({
  id: ${JSON.stringify(endpoint.operationId)},
  platform: ${JSON.stringify(endpoint.platform)},
  method: ${JSON.stringify(endpoint.method)},
  path: ${JSON.stringify(endpoint.path)},
  summary: ${JSON.stringify(endpoint.summary)},
  effect: ${JSON.stringify(endpoint.effect)},
  execution: ${JSON.stringify(endpoint.execution)},
  idempotency: ${JSON.stringify(endpoint.idempotency)},
  requiredScopes: ${JSON.stringify(endpoint.requiredScopes)},
  capabilities: ${JSON.stringify(endpoint.capabilities)},
  rateLimitBucket: ${JSON.stringify(endpoint.rateLimitBucket)},
  parameters: ${parameters},
  inputSchema: Schema.Struct({
${inputSchemaFields}
  }),
  outputSchema: ${outputSchema},
});`;
}

function endpointIdentifier(endpoint: EndpointIr): string {
  const identifier = endpoint.operationId.replaceAll(/[^A-Za-z0-9_$]/g, "_");
  return /^[A-Za-z_$]/.test(identifier) ? identifier : `_${identifier}`;
}

function descriptorTypeRef(type: EndpointIr["output"]): string {
  return type.kind === "reference" ? `Models.${type.target}` : emitTypeRef(type, "Models.");
}

function safeProperty(name: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}
