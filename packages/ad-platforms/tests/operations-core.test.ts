import { expect, test } from "bun:test";

import { z } from "zod";

import { createOperationCatalog, defineOperation } from "../src/operations/index.ts";

const getMetrics = defineOperation({
  id: "instagram.posts.metrics.get",
  platform: "instagram",
  summary: "Get Instagram post metrics",
  tags: ["posts", "metrics", "insights"],
  inputSchema: z.object({ postId: z.string() }),
  outputSchema: z.object({ postId: z.string(), views: z.number() }),
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiresApproval: false,
  requiredScopes: ["instagram_business_manage_insights"],
  execute: ({ postId }) => ({ postId, views: 42 }),
});

test("catalog validates, describes, searches, and invokes typed operations", async () => {
  const catalog = createOperationCatalog([getMetrics] as const);

  const description = catalog.describe("instagram.posts.metrics.get");
  expect(description.effect).toBe("read");
  expect(description.inputSchema).toMatchObject({ type: "object" });
  expect(description.outputSchema).toMatchObject({ type: "object" });
  expect(catalog.search("instagram insights")[0]?.id).toBe("instagram.posts.metrics.get");

  const output = await catalog.invoke("instagram.posts.metrics.get", { postId: "post-1" });
  expect(output).toEqual({ postId: "post-1", views: 42 });
});

test("catalog rejects duplicate ids and invalid inputs", async () => {
  expect(() => createOperationCatalog([getMetrics, getMetrics] as const)).toThrow(
    "Duplicate operation id",
  );

  const catalog = createOperationCatalog([getMetrics] as const);
  await expect(catalog.invoke("instagram.posts.metrics.get", {})).rejects.toThrow();
});

test("catalog middleware observes validated operations", async () => {
  const events: string[] = [];
  const catalog = createOperationCatalog([getMetrics] as const, {
    middleware: {
      beforeExecute: (operation) => {
        events.push(`before:${operation.id}`);
      },
      afterExecute: (operation) => {
        events.push(`after:${operation.id}`);
      },
    },
  });

  await catalog.invoke("instagram.posts.metrics.get", { postId: "post-1" });
  expect(events).toEqual([
    "before:instagram.posts.metrics.get",
    "after:instagram.posts.metrics.get",
  ]);
});
