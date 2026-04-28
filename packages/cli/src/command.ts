import { readFileSync } from "node:fs";
import type { Command } from "commander";
import { ZodError, type z } from "zod";

const registrySymbol = Symbol.for("openpromo.ads.cli.commandRegistry");

export interface CliContext {
  env: NodeJS.ProcessEnv;
  stdout: NodeJS.WriteStream;
  stderr: NodeJS.WriteStream;
}

export interface CommandOption {
  flags: string;
  description: string;
  defaultValue?: string | boolean | string[];
}

export interface DefineCommandOptions<TSchema extends z.ZodTypeAny> {
  name: string;
  description: string;
  schema: TSchema;
  options?: CommandOption[];
  action: (input: z.output<TSchema>, ctx: CliContext) => Promise<unknown> | unknown;
}

export interface RegisteredCliCommand<TSchema extends z.ZodTypeAny = z.ZodTypeAny> {
  name: string;
  path: string[];
  toolName: string;
  description: string;
  schema: TSchema;
  options: CommandOption[];
  action: (input: z.output<TSchema>, ctx: CliContext) => Promise<unknown> | unknown;
}

export function defineCommand<TSchema extends z.ZodTypeAny>(
  parent: Command,
  opts: DefineCommandOptions<TSchema>,
): Command {
  const command = parent.command(opts.name).description(opts.description);

  command.option("--input <json>", "JSON object merged before explicit flags");
  command.option("--input-file <path>", "Path to a JSON object merged before explicit flags");
  for (const option of opts.options ?? []) {
    command.option(option.flags, option.description, option.defaultValue);
  }

  command.action(async (rawOptions: Record<string, unknown>) => {
    const ctx = defaultContext();
    try {
      const input = loadStructuredInput(rawOptions);
      const result = await executeRegisteredCommand(
        {
          name: opts.name,
          path: commandPath(command),
          toolName: toolName(commandPath(command)),
          description: opts.description,
          schema: opts.schema,
          options: opts.options ?? [],
          action: opts.action,
        },
        input,
        ctx,
      );
      writeJson(ctx, result ?? { success: true });
    } catch (error) {
      handleCliError(error, ctx);
      process.exitCode = 1;
    }
  });

  commandRegistry(parent).push({
    name: opts.name,
    path: commandPath(command),
    toolName: toolName(commandPath(command)),
    description: opts.description,
    schema: opts.schema,
    options: opts.options ?? [],
    action: opts.action,
  } as RegisteredCliCommand);

  return command;
}

export async function executeRegisteredCommand<TSchema extends z.ZodTypeAny>(
  command: RegisteredCliCommand<TSchema>,
  input: unknown,
  ctx: CliContext,
): Promise<unknown> {
  const parsed = command.schema.parse(input);
  return command.action(parsed, ctx);
}

export function createGroup(parent: Command, name: string, description: string): Command {
  return parent.command(name).description(description);
}

export function option(
  flags: string,
  description: string,
  defaultValue?: string | boolean | string[],
): CommandOption {
  return { flags, description, defaultValue };
}

export function writeJson(ctx: CliContext, value: unknown): void {
  ctx.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

export function handleCliError(error: unknown, ctx: CliContext): void {
  writeJson(ctx, serializeCliError(error));
}

export function serializeCliError(error: unknown): Record<string, unknown> {
  if (error instanceof ZodError) {
    return {
      ok: false,
      error: "Invalid arguments",
      issues: error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  return {
    ok: false,
    error: error instanceof Error ? error.message : String(error),
  };
}

export function getRegisteredCommands(program: Command): RegisteredCliCommand[] {
  return commandRegistry(program).slice();
}

function commandRegistry(command: Command): RegisteredCliCommand[] {
  const root = rootCommand(command) as Command & {
    [registrySymbol]?: RegisteredCliCommand[];
  };
  root[registrySymbol] ??= [];
  return root[registrySymbol];
}

function rootCommand(command: Command): Command {
  let current = command;
  while (current.parent) {
    current = current.parent;
  }
  return current;
}

function commandPath(command: Command): string[] {
  const path: string[] = [];
  let current: Command | undefined = command;
  while (current?.parent) {
    path.unshift(current.name());
    current = current.parent;
  }
  return path;
}

function toolName(path: string[]): string {
  return path.join("_").replaceAll("-", "_");
}

function defaultContext(): CliContext {
  return {
    env: process.env,
    stdout: process.stdout,
    stderr: process.stderr,
  };
}

function loadStructuredInput(rawOptions: Record<string, unknown>): Record<string, unknown> {
  const inputFromFlag = parseJsonObject(rawOptions.input, "--input");
  const inputFromFile =
    typeof rawOptions.inputFile === "string"
      ? parseJsonObject(readFileSync(rawOptions.inputFile, "utf8"), "--input-file")
      : {};

  const flags = stripMetaOptions(rawOptions);
  return { ...inputFromFile, ...inputFromFlag, ...flags };
}

function stripMetaOptions(rawOptions: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(rawOptions)) {
    if (key === "input" || key === "inputFile" || value === undefined) {
      continue;
    }
    result[key] = value;
  }
  return result;
}

function parseJsonObject(value: unknown, source: string): Record<string, unknown> {
  if (value === undefined) {
    return {};
  }
  if (typeof value !== "string") {
    throw new Error(`${source} must be a JSON object`);
  }

  const parsed = JSON.parse(value) as unknown;
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`${source} must be a JSON object`);
  }
  return parsed as Record<string, unknown>;
}
