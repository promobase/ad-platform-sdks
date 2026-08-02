import { tool, type Tool } from "ai";

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
      inputSchema: operation.inputSchema,
      outputSchema: operation.outputSchema,
      execute: async (input, execution) =>
        catalog.invoke(operation.id, input, {
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
