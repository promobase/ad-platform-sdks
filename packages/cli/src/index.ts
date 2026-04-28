#!/usr/bin/env node
import { Command } from "commander";
import { serveMcpStdio } from "./mcp.ts";
import { registerMetaCommands } from "./meta/index.ts";

export function createProgram(): Command {
  const program = new Command();
  program
    .name("openpromo-ads")
    .description("CLI for OpenPromo ad platform SDKs")
    .version("0.1.0")
    .showHelpAfterError()
    .showSuggestionAfterError();

  registerMetaCommands(program);
  registerMcpCommands(program);

  return program;
}

function registerMcpCommands(program: Command): void {
  const mcp = program.command("mcp").description("MCP server integration");
  mcp
    .command("serve")
    .description("Start a stdio MCP server exposing CLI operations as tools")
    .action(async () => {
      await serveMcpStdio();
    });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await createProgram().parseAsync(process.argv);
}
