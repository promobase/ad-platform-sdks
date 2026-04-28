#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Command } from "commander";
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

function createRegistryProgram(): Command {
  const program = new Command();
  program.name("openpromo-ads");
  registerPlatformCommands(program);
  return program;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await serveMcpStdio();
}
