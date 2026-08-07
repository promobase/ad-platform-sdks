import { expect, test } from "bun:test";

import { createEndpointClient, defineEndpointDescriptor } from "@mosaic/sdk-runtime/effect";
import type { Tool } from "ai";
import { Schema } from "effect";

import { toAiSdkEndpointTools, toAiSdkTools } from "../src/operations/ai.ts";
import { toCodemodeConnector, toCodemodeEndpointConnector } from "../src/operations/codemode.ts";
import { createOperationCatalog, defineOperation } from "../src/operations/index.ts";

const operation = defineOperation({
  id: "instagram.posts.metrics.get",
  platform: "instagram",
  summary: "Get Instagram post metrics",
  tags: ["posts", "metrics"],
  inputSchema: Schema.Struct({ postId: Schema.String }),
  outputSchema: Schema.Struct({ postId: Schema.String, views: Schema.Number }),
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiresApproval: false,
  execute: ({ postId }) => ({ postId, views: 42 }),
});

test("AI SDK adapter reuses catalog schemas and execution", async () => {
  const catalog = createOperationCatalog([operation] as const);
  const tools = toAiSdkTools(catalog);
  const adapted = tools.instagram_posts_metrics_get as Tool & {
    execute: (input: unknown, options: Record<string, unknown>) => Promise<unknown>;
  };

  expect("~standard" in (adapted.inputSchema as object)).toBe(true);
  expect("~standard" in (adapted.outputSchema as object)).toBe(true);
  await expect(
    adapted.execute(
      { postId: "ig-1" },
      { toolCallId: "call-1", messages: [], abortSignal: undefined },
    ),
  ).resolves.toEqual({ postId: "ig-1", views: 42 });
});

test("Code Mode adapter produces a platform namespace with JSON schemas", async () => {
  const catalog = createOperationCatalog([operation] as const);
  const connector = toCodemodeConnector(catalog, { platform: "instagram" });

  expect(connector.name).toBe("instagram");
  expect(connector.operationIds).toEqual(["instagram.posts.metrics.get"]);
  expect(connector.tools.postsMetricsGet?.requiresApproval).toBe(false);
  expect(connector.tools.postsMetricsGet?.replay).toBe("log");
  expect(connector.tools.postsMetricsGet?.inputSchema).toMatchObject({ type: "object" });
  await expect(
    connector.tools.postsMetricsGet?.execute({ postId: "ig-1" }, { executionId: "exec-1" }),
  ).resolves.toEqual({ postId: "ig-1", views: 42 });
});

test("generated Effect endpoints project to AI SDK and Code Mode from one schema", async () => {
  const endpoint = defineEndpointDescriptor({
    id: "youtube.posts.get",
    platform: "youtube",
    method: "GET",
    path: "https://example.test/posts/{postId}",
    summary: "Get a post",
    effect: "read",
    execution: "inline",
    idempotency: "safe",
    requiredScopes: [],
    capabilities: ["post.read"],
    parameters: [
      { name: "postId", wireName: "postId", location: "path", required: true, nullable: false },
    ],
    inputSchema: Schema.Struct({ postId: Schema.String }),
    outputSchema: Schema.Struct({ id: Schema.String }),
  });
  const client = createEndpointClient([endpoint] as const, {
    fetch: (async () => new Response('{"id":"yt-1"}')) as unknown as typeof fetch,
  });
  const connector = toCodemodeEndpointConnector(client.catalog, { platform: "youtube" });
  const tools = toAiSdkEndpointTools(client.catalog);
  expect(connector.tools.postsGet?.inputSchema).toMatchObject({ type: "object" });
  expect(tools.youtube_posts_get).toBeDefined();
  await expect(connector.tools.postsGet?.execute({ postId: "yt-1" })).resolves.toEqual({
    id: "yt-1",
  });
  await client.dispose();
});
