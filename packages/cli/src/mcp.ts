#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type {
  AnyOperation,
  OperationCatalog,
  OperationSearchOptions,
} from "@openpromo/ad-platforms/operations";
import type {
  AnyEndpointDescriptor,
  EndpointCatalog,
  EndpointSearchOptions,
} from "@openpromo/sdk-runtime/effect";
import { Command } from "commander";
import { z } from "zod";

import {
  type CliContext,
  executeRegisteredCommand,
  getRegisteredCommands,
  type RegisteredCliCommand,
  serializeCliError,
} from "./command.ts";
import { registerPlatformCommands } from "./register.ts";

export function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "openpromo-ads",
    version: "0.1.0",
  });

  const program = createRegistryProgram();
  for (const command of getRegisteredCommands(program)) {
    registerCommandTool(server, command);
  }

  return server;
}

export interface RegisterOperationCatalogOptions {
  prefix?: string;
  search?: OperationSearchOptions;
}

/** Register canonical SDK operations as MCP tools without redefining their schemas or handlers. */
export function registerOperationCatalog<const Operations extends readonly AnyOperation[]>(
  server: McpServer,
  catalog: OperationCatalog<Operations>,
  options: RegisterOperationCatalogOptions = {},
): void {
  const selectedIds = new Set(
    catalog.search("", { ...options.search, limit: Number.MAX_SAFE_INTEGER }).map(({ id }) => id),
  );

  for (const operation of catalog.operations) {
    if (!selectedIds.has(operation.id)) continue;
    const description = catalog.describe(operation.id);
    const name = `${options.prefix ?? ""}${operation.id.replaceAll(".", "_")}`;
    server.registerTool(
      name,
      {
        title: operation.summary,
        description: operation.description ?? operation.summary,
        inputSchema: z.fromJSONSchema(
          description.inputSchema as unknown as Parameters<typeof z.fromJSONSchema>[0],
        ),
        outputSchema: z.fromJSONSchema(
          description.outputSchema as unknown as Parameters<typeof z.fromJSONSchema>[0],
        ),
        annotations: {
          readOnlyHint: operation.effect === "read",
          destructiveHint: operation.effect === "delete",
          idempotentHint: operation.idempotency === "safe",
          openWorldHint: true,
        },
        _meta: {
          "openpromo/operationId": operation.id,
          "openpromo/platform": operation.platform,
          "openpromo/effect": operation.effect,
          "openpromo/execution": operation.execution,
          "openpromo/requiresApproval": operation.requiresApproval,
          "openpromo/requiredScopes": operation.requiredScopes ?? [],
        },
      },
      async (input: unknown) => {
        try {
          const output = await catalog.invoke(operation.id, input);
          return {
            content: [{ type: "text" as const, text: JSON.stringify(output, null, 2) }],
            ...(isRecord(output) ? { structuredContent: output } : {}),
          };
        } catch (error) {
          const serialized = serializeCliError(error);
          return {
            isError: true,
            content: [{ type: "text" as const, text: JSON.stringify(serialized, null, 2) }],
          };
        }
      },
    );
  }
}

export interface RegisterEndpointCatalogOptions {
  prefix?: string;
  search?: EndpointSearchOptions;
}

/** Register generated Effect endpoint schemas and metadata directly as MCP tools. */
export function registerEndpointCatalog<const Descriptors extends readonly AnyEndpointDescriptor[]>(
  server: McpServer,
  catalog: EndpointCatalog<Descriptors>,
  options: RegisterEndpointCatalogOptions = {},
): void {
  for (const description of catalog.search("", {
    ...options.search,
    limit: Number.MAX_SAFE_INTEGER,
  })) {
    const descriptor = catalog.operations.find(({ id }) => id === description.id);
    if (!descriptor) continue;
    server.registerTool(
      `${options.prefix ?? ""}${descriptor.id.replaceAll(".", "_")}`,
      {
        title: descriptor.summary,
        description: descriptor.description ?? descriptor.summary,
        inputSchema: z.fromJSONSchema(
          description.inputSchema as unknown as Parameters<typeof z.fromJSONSchema>[0],
        ),
        outputSchema: z.fromJSONSchema(
          description.outputSchema as unknown as Parameters<typeof z.fromJSONSchema>[0],
        ),
        annotations: {
          readOnlyHint: descriptor.effect === "read",
          destructiveHint: descriptor.effect === "delete",
          idempotentHint: descriptor.idempotency === "safe",
          openWorldHint: true,
        },
        _meta: {
          "openpromo/operationId": descriptor.id,
          "openpromo/platform": descriptor.platform,
          "openpromo/effect": descriptor.effect,
          "openpromo/execution": descriptor.execution,
          "openpromo/requiresApproval": descriptor.effect !== "read",
          "openpromo/requiredScopes": descriptor.requiredScopes,
        },
      },
      async (input: unknown) => {
        try {
          const output = await catalog.invoke(descriptor.id, input);
          return {
            content: [{ type: "text" as const, text: JSON.stringify(output, null, 2) }],
            ...(isRecord(output) ? { structuredContent: output } : {}),
          };
        } catch (error) {
          const serialized = serializeCliError(error);
          return {
            isError: true,
            content: [{ type: "text" as const, text: JSON.stringify(serialized, null, 2) }],
          };
        }
      },
    );
  }
}

export async function serveMcpStdio(): Promise<void> {
  const server = createMcpServer();
  await server.connect(new StdioServerTransport());
}

function registerCommandTool(server: McpServer, command: RegisteredCliCommand): void {
  server.registerTool(
    command.toolName,
    {
      title: command.path.join(" "),
      description: `${command.description}\n\nCLI: openpromo-ads ${command.path.join(" ")}`,
      inputSchema: command.schema,
      _meta: {
        "openpromo/cliCommand": command.path,
      },
    },
    async (input) => {
      const result = await runMcpCommand(command, input);
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    },
  );
}

async function runMcpCommand(command: RegisteredCliCommand, input: unknown): Promise<unknown> {
  try {
    return (
      (await executeRegisteredCommand(command, input, {
        env: process.env,
        stdout: process.stderr,
        stderr: process.stderr,
      } satisfies CliContext)) ?? { success: true }
    );
  } catch (error) {
    return serializeCliError(error);
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function createRegistryProgram(): Command {
  const program = new Command();
  program.name("openpromo-ads");
  registerPlatformCommands(program);
  return program;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await serveMcpStdio();
}
