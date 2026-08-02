import type { AnyOperation, OperationCatalog } from "@openpromo/ad-platforms/operations";
import type { Command } from "commander";
import { z } from "zod";

import { createGroup, defineCommand, option } from "./command.ts";

/** Add catalog discovery and invocation commands to a host CLI program. */
export function registerOperationCatalogCommands<Operations extends readonly AnyOperation[]>(
  parent: Command,
  catalog: OperationCatalog<Operations>,
): Command {
  const group = createGroup(parent, "operations", "Discover and invoke canonical SDK operations");

  defineCommand(group, {
    name: "list",
    description: "List configured canonical operations",
    schema: z.object({}),
    action: () => catalog.list(),
  });

  defineCommand(group, {
    name: "search",
    description: "Search configured canonical operations",
    schema: z.object({ query: z.string(), limit: z.coerce.number().int().positive().optional() }),
    options: [
      option("--query <query>", "Search terms"),
      option("--limit <count>", "Maximum results"),
    ],
    action: ({ query, limit }) => catalog.search(query, { limit }),
  });

  defineCommand(group, {
    name: "describe",
    description: "Describe a canonical operation and its schemas",
    schema: z.object({ id: z.string() }),
    options: [option("--id <operation>", "Operation id")],
    action: ({ id }) => catalog.describe(id),
  });

  defineCommand(group, {
    name: "invoke",
    description: "Invoke a configured canonical operation",
    schema: z.object({ id: z.string(), input: z.record(z.string(), z.unknown()).default({}) }),
    options: [option("--id <operation>", "Operation id")],
    action: ({ id, input }) => catalog.invoke(id, input),
  });

  return group;
}
