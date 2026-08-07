import type {
  AnyEndpointDescriptor,
  EndpointCatalog,
  EndpointSearchOptions,
} from "@mosaic/sdk-runtime/effect";
import { Schema } from "effect";

import type {
  AnyOperation,
  OperationCatalog,
  OperationPlatform,
  OperationSearchOptions,
} from "./core.ts";

export interface CodemodeToolExecuteContext {
  executionId: string;
}

/** Structural match for @cloudflare/codemode's ConnectorTool contract. */
export interface CodemodeConnectorTool {
  description?: string;
  inputSchema: Record<string, unknown>;
  outputSchema: Record<string, unknown>;
  requiresApproval: boolean;
  replay: "log" | "reexecute";
  execute: (args: unknown, context?: CodemodeToolExecuteContext) => Promise<unknown>;
  revert?: (args: unknown, result: unknown, context?: CodemodeToolExecuteContext) => Promise<void>;
}

export type CodemodeConnectorTools = Record<string, CodemodeConnectorTool>;

export interface CodemodeConnectorDefinition {
  name: string;
  instructions: string;
  tools: CodemodeConnectorTools;
  operationIds: readonly string[];
}

export interface CodemodeAdapterOptions {
  /** Limit the connector to one platform. Recommended for stable sandbox namespaces. */
  platform?: OperationPlatform;
  /** Sandbox namespace. Defaults to the selected platform or `adPlatforms`. */
  name?: string;
  instructions?: string;
  search?: Omit<OperationSearchOptions, "platform">;
}

/**
 * Build a dependency-free connector definition compatible with Cloudflare Code Mode.
 * A host can return `definition.tools` from `CodemodeConnector.tools()`.
 */
export function toCodemodeConnector<const Operations extends readonly AnyOperation[]>(
  catalog: OperationCatalog<Operations>,
  options: CodemodeAdapterOptions = {},
): CodemodeConnectorDefinition {
  const descriptions = catalog.search("", {
    ...options.search,
    platform: options.platform,
    limit: Number.MAX_SAFE_INTEGER,
  });
  const operationById = new Map(catalog.operations.map((operation) => [operation.id, operation]));
  const tools: CodemodeConnectorTools = {};

  for (const description of descriptions) {
    const operation = operationById.get(description.id);
    if (!operation) continue;
    const methodName = connectorMethodName(operation.id, options.platform !== undefined);
    if (tools[methodName]) {
      throw new Error(`Code Mode method collision for ${methodName}; select a single platform`);
    }
    tools[methodName] = {
      description: operation.description ?? operation.summary,
      inputSchema: description.inputSchema as unknown as Record<string, unknown>,
      outputSchema: description.outputSchema as unknown as Record<string, unknown>,
      requiresApproval: operation.requiresApproval,
      replay: operation.effect === "read" ? "log" : "reexecute",
      execute: (args, context) =>
        catalog.invoke(operation.id, args, {
          requestId: context?.executionId,
        }),
      ...(operation.revert
        ? {
            revert: async (
              args: unknown,
              result: unknown,
              context?: CodemodeToolExecuteContext,
            ) => {
              const input = Schema.decodeUnknownSync(
                operation.inputSchema as Schema.Schema<unknown, unknown, never>,
              )(args);
              const output = Schema.decodeUnknownSync(
                operation.outputSchema as Schema.Schema<unknown, unknown, never>,
              )(result);
              await operation.revert?.(input, output, {
                requestId: context?.executionId,
              });
            },
          }
        : {}),
    };
  }

  const name = options.name ?? options.platform ?? "adPlatforms";
  return {
    name,
    instructions:
      options.instructions ??
      `Use ${name} to discover and compose typed advertising platform operations. Read operations run immediately; governed mutations may pause for approval.`,
    tools,
    operationIds: descriptions.map((description) => description.id),
  };
}

/** Project generated Effect endpoint metadata into Code Mode without redefining schemas. */
export function toCodemodeEndpointConnector<
  const Descriptors extends readonly AnyEndpointDescriptor[],
>(
  catalog: EndpointCatalog<Descriptors>,
  options: Omit<CodemodeAdapterOptions, "search"> & { search?: EndpointSearchOptions } = {},
): CodemodeConnectorDefinition {
  const descriptions = catalog.search("", {
    ...options.search,
    platform: options.platform,
    limit: Number.MAX_SAFE_INTEGER,
  });
  const tools: CodemodeConnectorTools = {};
  for (const description of descriptions) {
    const methodName = connectorMethodName(description.id, options.platform !== undefined);
    if (tools[methodName]) throw new Error(`Code Mode method collision for ${methodName}`);
    tools[methodName] = {
      description: description.description ?? description.summary,
      inputSchema: description.inputSchema as unknown as Record<string, unknown>,
      outputSchema: description.outputSchema as unknown as Record<string, unknown>,
      requiresApproval: description.requiresApproval,
      replay: description.effect === "read" ? "log" : "reexecute",
      execute: (args, context) =>
        catalog.invoke(description.id, args, { requestId: context?.executionId }),
    };
  }
  const name = options.name ?? options.platform ?? "adPlatforms";
  return {
    name,
    instructions:
      options.instructions ??
      `Use ${name} to discover and compose generated SDK endpoints. Mutations are approval-gated by endpoint metadata.`,
    tools,
    operationIds: descriptions.map(({ id }) => id),
  };
}

function connectorMethodName(id: string, stripPlatform: boolean): string {
  const segments = id.split(".");
  if (stripPlatform) segments.shift();
  return segments
    .map((segment, index) =>
      index === 0 ? segment : segment.charAt(0).toUpperCase() + segment.slice(1),
    )
    .join("");
}
