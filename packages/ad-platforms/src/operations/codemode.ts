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
      inputSchema: description.inputSchema,
      outputSchema: description.outputSchema,
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
              const input = operation.inputSchema.parse(args);
              const output = operation.outputSchema.parse(result);
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

function connectorMethodName(id: string, stripPlatform: boolean): string {
  const segments = id.split(".");
  if (stripPlatform) segments.shift();
  return segments
    .map((segment, index) =>
      index === 0 ? segment : segment.charAt(0).toUpperCase() + segment.slice(1),
    )
    .join("");
}
