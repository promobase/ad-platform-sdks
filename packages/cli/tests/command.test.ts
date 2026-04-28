import { afterEach, describe, expect, test } from "bun:test";
import { Command, CommanderError } from "commander";
import { z } from "zod";
import { defineCommand, getRegisteredCommands } from "../src/command.ts";
import { createProgram } from "../src/index.ts";
import { createMcpServer } from "../src/mcp.ts";

const originalWrite = process.stdout.write;

afterEach(() => {
  process.stdout.write = originalWrite;
  process.exitCode = undefined;
});

describe("CLI command helpers", () => {
  test("defineCommand merges JSON input with explicit flags and validates with Zod", async () => {
    const seen: unknown[] = [];
    const output: string[] = [];
    process.stdout.write = ((chunk: string) => {
      output.push(chunk);
      return true;
    }) as typeof process.stdout.write;

    const program = new Command().exitOverride();
    defineCommand(program, {
      name: "run",
      description: "Run a typed command",
      schema: z.object({
        name: z.string(),
        count: z.coerce.number(),
      }),
      options: [{ flags: "--name <name>", description: "Name" }],
      action(input) {
        seen.push(input);
        return { ok: true };
      },
    });

    await program.parseAsync([
      "node",
      "test",
      "run",
      "--input",
      '{"name":"old","count":2}',
      "--name",
      "new",
    ]);

    expect(seen).toEqual([{ name: "new", count: 2 }]);
    expect(JSON.parse(output.join(""))).toEqual({ ok: true });
  });

  test("program help exposes the Meta command tree", async () => {
    const helpOutput: string[] = [];
    process.stdout.write = ((chunk: string) => {
      helpOutput.push(chunk);
      return true;
    }) as typeof process.stdout.write;
    const program = createProgram()
      .exitOverride()
      .configureOutput({ writeOut: (value) => helpOutput.push(value) });

    try {
      await program.parseAsync([
        "node",
        "test",
        "meta",
        "instagram",
        "media",
        "publish-photo",
        "--help",
      ]);
    } catch (error) {
      expect(error).toBeInstanceOf(CommanderError);
    }

    const help = helpOutput.join("");
    expect(help).toContain("openpromo-ads meta instagram media publish-photo");
    expect(help).toContain("--image-url <url>");
    expect(help).toContain("--input-file <path>");
  });

  test("program exposes CLI leaf commands for MCP registration", () => {
    const commands = getRegisteredCommands(createProgram());
    const publishPhoto = commands.find(
      (command) => command.toolName === "meta_instagram_media_publish_photo",
    );

    expect(publishPhoto?.path).toEqual(["meta", "instagram", "media", "publish-photo"]);
    expect(publishPhoto?.description).toContain("Publish a photo");
  });

  test("MCP server can be constructed from the CLI command registry", () => {
    const server = createMcpServer();

    expect(server).toBeDefined();
    expect(server.server).toBeDefined();
  });
});
