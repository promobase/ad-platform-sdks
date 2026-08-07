import type { AnyEndpointDescriptor, EndpointCatalog } from "@mosaic/sdk-runtime/effect";
import { tool, type Tool } from "ai";
import { Schema } from "effect";

import type { AnyOperation, OperationCatalog, OperationPlatform } from "./core.ts";

export interface AiSdkToolAdapterOptions {
  platform?: OperationPlatform | readonly OperationPlatform[];
  prefix?: string;
}

/** Project catalog operations into AI SDK tools without redefining their schemas or handlers. */
export function toAiSdkTools<const Operations extends readonly AnyOperation[]>(
  catalog: OperationCatalog<Operations>,
  options: AiSdkToolAdapterOptions = {},
): Record<string, Tool> {
  const platforms = toArray(options.platform);
  const tools: Record<string, Tool> = {};

  for (const operation of catalog.operations) {
    if (platforms.length > 0 && !platforms.includes(operation.platform)) continue;
    const name = `${options.prefix ?? ""}${operation.id.replaceAll(".", "_")}`;
    tools[name] = tool({
      description: operation.description ?? operation.summary,
      inputSchema: Schema.standardSchemaV1(
        operation.inputSchema as Schema.Schema<unknown, unknown, never>,
      ),
      outputSchema: Schema.standardSchemaV1(
        operation.outputSchema as Schema.Schema<unknown, unknown, never>,
      ),
      execute: async (input, execution) =>
        catalog.invoke(operation.id, input, {
          requestId: execution.toolCallId,
          signal: execution.abortSignal,
        }),
    });
  }

  return tools;
}

/** Project generated Effect schemas into AI SDK tools through Standard Schema v1. */
export function toAiSdkEndpointTools<const Descriptors extends readonly AnyEndpointDescriptor[]>(
  catalog: EndpointCatalog<Descriptors>,
  options: AiSdkToolAdapterOptions = {},
): Record<string, Tool> {
  const platforms = toArray(options.platform);
  const tools: Record<string, Tool> = {};
  for (const descriptor of catalog.operations) {
    if (platforms.length > 0 && !platforms.includes(descriptor.platform as OperationPlatform))
      continue;
    const name = `${options.prefix ?? ""}${descriptor.id.replaceAll(".", "_")}`;
    tools[name] = tool({
      description: descriptor.description ?? descriptor.summary,
      inputSchema: Schema.standardSchemaV1(
        descriptor.inputSchema as Schema.Schema<unknown, unknown, never>,
      ),
      outputSchema: Schema.standardSchemaV1(
        descriptor.outputSchema as Schema.Schema<unknown, unknown, never>,
      ),
      execute: async (input, execution) =>
        catalog.invoke(descriptor.id, input, {
          requestId: execution.toolCallId,
          signal: execution.abortSignal,
        }),
    });
  }
  return tools;
}

function toArray<T>(value: T | readonly T[] | undefined): readonly T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value as T];
}
