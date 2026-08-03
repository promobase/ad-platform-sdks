import { expect, test } from "bun:test";

import { createOperationCatalog, defineOperation } from "@openpromo/ad-platforms/operations";
import { createEndpointClient, defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Command } from "commander";
import { Schema } from "effect";
import { z } from "zod";

import { executeRegisteredCommand, getRegisteredCommands } from "../src/command.ts";
import { registerEndpointCatalog, registerOperationCatalog } from "../src/mcp.ts";
import {
  registerEndpointCatalogCommands,
  registerOperationCatalogCommands,
} from "../src/operations.ts";

const operation = defineOperation({
  id: "youtube.posts.metrics.get",
  platform: "youtube",
  summary: "Get YouTube video statistics",
  tags: ["posts", "metrics"],
  inputSchema: Schema.Struct({ postId: Schema.String }),
  outputSchema: Schema.Struct({ postId: Schema.String, views: Schema.Number }),
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiresApproval: false,
  execute: ({ postId }) => ({ postId, views: 10 }),
});

test("registers operation catalog discovery and invocation CLI commands", async () => {
  const catalog = createOperationCatalog([operation] as const);
  const program = new Command().name("test");
  registerOperationCatalogCommands(program, catalog);

  expect(getRegisteredCommands(program).map(({ path }) => path.join(" "))).toEqual([
    "operations list",
    "operations search",
    "operations describe",
    "operations invoke",
  ]);

  const invoke = getRegisteredCommands(program).find(
    ({ path }) => path.join(" ") === "operations invoke",
  )!;
  await expect(
    executeRegisteredCommand(
      invoke,
      { id: "youtube.posts.metrics.get", input: { postId: "yt-1" } },
      { env: {}, stdout: process.stdout, stderr: process.stderr },
    ),
  ).resolves.toEqual({ postId: "yt-1", views: 10 });
});

test("registers catalog operations as MCP tools with operation metadata", async () => {
  const catalog = createOperationCatalog([operation] as const);
  const registrations: Array<{
    name: string;
    config: Record<string, unknown>;
    handler: (input: unknown) => Promise<Record<string, unknown>>;
  }> = [];
  const server = {
    registerTool: (
      name: string,
      config: Record<string, unknown>,
      handler: (input: unknown) => Promise<Record<string, unknown>>,
    ) => registrations.push({ name, config, handler }),
  };

  registerOperationCatalog(server as never, catalog);

  expect(registrations[0]?.name).toBe("youtube_posts_metrics_get");
  expect(registrations[0]?.config._meta).toMatchObject({
    "openpromo/operationId": "youtube.posts.metrics.get",
    "openpromo/effect": "read",
  });
  await expect(registrations[0]?.handler({ postId: "yt-1" })).resolves.toMatchObject({
    structuredContent: { postId: "yt-1", views: 10 },
  });
});

test("generated Effect endpoint catalogs drive CLI and MCP adapters", async () => {
  const endpoint = defineEndpointDescriptor({
    id: "youtube.videos.get",
    platform: "youtube",
    method: "GET",
    path: "https://example.test/videos/{id}",
    summary: "Get a video",
    effect: "read",
    execution: "inline",
    idempotency: "safe",
    requiredScopes: [],
    capabilities: ["video.read"],
    parameters: [{ name: "id", wireName: "id", location: "path", required: true, nullable: false }],
    inputSchema: Schema.Struct({ id: Schema.String }),
    outputSchema: Schema.Struct({ id: Schema.String }),
  });
  const client = createEndpointClient([endpoint] as const, {
    fetch: (async () => new Response('{"id":"v-1"}')) as unknown as typeof fetch,
  });
  const program = new Command().name("test");
  registerEndpointCatalogCommands(program, client.catalog);
  expect(getRegisteredCommands(program).map(({ path }) => path.join(" "))).toEqual([
    "endpoints list",
    "endpoints search",
    "endpoints describe",
    "endpoints invoke",
  ]);
  const registrations: Array<{
    name: string;
    config: Record<string, unknown>;
    handler: (input: unknown) => Promise<Record<string, unknown>>;
  }> = [];
  const server = {
    registerTool: (
      name: string,
      config: Record<string, unknown>,
      handler: (input: unknown) => Promise<Record<string, unknown>>,
    ) => registrations.push({ name, config, handler }),
  };
  registerEndpointCatalog(server as never, client.catalog);
  expect(registrations[0]?.name).toBe("youtube_videos_get");
  expect(registrations[0]?.config._meta).toMatchObject({
    "openpromo/operationId": "youtube.videos.get",
  });
  await expect(registrations[0]?.handler({ id: "v-1" })).resolves.toMatchObject({
    structuredContent: { id: "v-1" },
  });
  await client.dispose();
});
