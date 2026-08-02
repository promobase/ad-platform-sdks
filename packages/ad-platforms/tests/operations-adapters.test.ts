import { expect, test } from "bun:test";

import type { Tool } from "ai";
import { z } from "zod";

import { toAiSdkTools } from "../src/operations/ai.ts";
import { toCodemodeConnector } from "../src/operations/codemode.ts";
import { createOperationCatalog, defineOperation } from "../src/operations/index.ts";

const operation = defineOperation({
  id: "instagram.posts.metrics.get",
  platform: "instagram",
  summary: "Get Instagram post metrics",
  tags: ["posts", "metrics"],
  inputSchema: z.object({ postId: z.string() }),
  outputSchema: z.object({ postId: z.string(), views: z.number() }),
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

  expect(adapted.inputSchema).toBe(operation.inputSchema);
  expect(adapted.outputSchema).toBe(operation.outputSchema);
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
