import { test, expect, mock, afterEach } from "bun:test";
import { withMiddleware, type ToolCallContext } from "../../src/ai/middleware.ts";
import { filterTools, filterToolsByName, limitTools } from "../../src/ai/filter.ts";
import { createRouter } from "../../src/ai/router.ts";
import { createInstagramTools } from "../../src/ai/instagram.ts";
import { createMetaTools } from "../../src/ai/index.ts";
import { createClient } from "../../src/generated/index.ts";
import { tool } from "ai";
import { z } from "zod";

const originalFetch = globalThis.fetch;
function mockFetchJson(body: unknown) {
  globalThis.fetch = mock(() =>
    Promise.resolve(new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } }))
  ) as unknown as typeof fetch;
}
afterEach(() => { globalThis.fetch = originalFetch; });

// --- Middleware tests ---

test("withMiddleware calls beforeExecute and afterExecute", async () => {
  const events: string[] = [];

  const tools = {
    test_tool: tool({
      description: "test",
      inputSchema: z.object({ input: z.string() }),
      execute: async ({ input }: { input: string }) => ({ output: input.toUpperCase() }),
    }),
  };

  const wrapped = withMiddleware(tools, {
    beforeExecute: (ctx) => { events.push(`before:${ctx.toolName}`); },
    afterExecute: (ctx) => { events.push(`after:${ctx.toolName}:${ctx.durationMs >= 0}`); },
  });

  const result = await (wrapped.test_tool as any).execute({ input: "hello" });
  expect(result).toEqual({ output: "HELLO" });
  expect(events).toEqual(["before:test_tool", "after:test_tool:true"]);
});

test("withMiddleware calls onError on failure", async () => {
  let errorCaught: unknown;

  const tools = {
    fail_tool: tool({
      description: "fails",
      inputSchema: z.object({}),
      execute: async (): Promise<string> => { throw new Error("boom"); },
    }),
  };

  const wrapped = withMiddleware(tools, {
    onError: (ctx) => { errorCaught = ctx.error; },
  });

  expect((wrapped.fail_tool as any).execute({})).rejects.toThrow("boom");
  await new Promise(r => setTimeout(r, 10));
  expect((errorCaught as Error).message).toBe("boom");
});

test("withMiddleware onError can return fallback value", async () => {
  const tools = {
    fail_tool: tool({
      description: "fails",
      inputSchema: z.object({}),
      execute: async (): Promise<string> => { throw new Error("boom"); },
    }),
  };

  const wrapped = withMiddleware(tools, {
    onError: () => ({ fallback: true }),
  });

  const result = await (wrapped.fail_tool as any).execute({});
  expect(result).toEqual({ fallback: true });
});

test("withMiddleware preserves tool descriptions and parameters", () => {
  const tools = {
    my_tool: tool({
      description: "My description",
      inputSchema: z.object({ x: z.number() }),
      execute: async ({ x }: { x: number }) => x * 2,
    }),
  };

  const wrapped = withMiddleware(tools, {});
  expect((wrapped.my_tool as any).description).toBe("My description");
});

// --- Filter tests ---

test("filterTools by platform category", () => {
  const api = createClient({ accessToken: "tok" });
  const allTools = createMetaTools({
    api,
    igAccountId: "ig_123",
    pageId: "page_123",
    pageAccessToken: "tok",
    adAccountId: "act_123",
  });

  const igTools = filterTools(allTools, ["instagram"]);
  expect(Object.keys(igTools).every(k => k.startsWith("ig_"))).toBe(true);
  expect(Object.keys(igTools).length).toBeGreaterThan(0);

  const publishTools = filterTools(allTools, ["publish"]);
  for (const key of Object.keys(publishTools)) {
    expect(key).toMatch(/publish|story/);
  }
});

test("filterToolsByName with wildcard", () => {
  const api = createClient({ accessToken: "tok" });
  const allTools = createMetaTools({
    api,
    igAccountId: "ig_123",
    pageId: "page_123",
    pageAccessToken: "tok",
  });

  const igOnly = filterToolsByName(allTools, ["ig_*"]);
  expect(Object.keys(igOnly).every(k => k.startsWith("ig_"))).toBe(true);

  const commentTools = filterToolsByName(allTools, ["*_comment_*"]);
  for (const key of Object.keys(commentTools)) {
    expect(key).toContain("comment");
  }
});

test("limitTools caps the number", () => {
  const api = createClient({ accessToken: "tok" });
  const allTools = createMetaTools({
    api,
    igAccountId: "ig_123",
    pageId: "page_123",
    pageAccessToken: "tok",
    adAccountId: "act_123",
  });

  const limited = limitTools(allTools, 5);
  expect(Object.keys(limited).length).toBe(5);
});

// --- Router tests ---

test("createRouter returns routerTools and getSelectedTools", async () => {
  const api = createClient({ accessToken: "tok" });
  const allTools = createMetaTools({
    api,
    igAccountId: "ig_123",
    pageId: "page_123",
    pageAccessToken: "tok",
  });

  const router = createRouter({ tools: allTools, categories: ["instagram", "facebook"] });

  // Initial: only router tools
  expect(Object.keys(router.routerTools)).toEqual(["select_tool_category", "list_categories"]);
  expect(Object.keys(router.getSelectedTools())).toEqual(["select_tool_category", "list_categories"]);

  // List categories
  const listResult = await (router.routerTools.list_categories as any).execute({});
  expect(listResult.categories.instagram).toBeGreaterThan(0);
  expect(listResult.categories.facebook).toBeGreaterThan(0);

  // Select instagram
  const selectResult = await (router.routerTools.select_tool_category as any).execute({ categories: ["instagram"] });
  expect(selectResult.activated).toEqual(["instagram"]);
  expect(selectResult.count).toBeGreaterThan(0);

  // Now getSelectedTools includes IG tools + router tools
  const selected = router.getSelectedTools();
  expect(Object.keys(selected).length).toBeGreaterThan(2);
  expect(selected.ig_publish_photo).toBeDefined();
  expect(selected.select_tool_category).toBeDefined(); // router still available

  // Reset
  router.reset();
  expect(Object.keys(router.getSelectedTools())).toEqual(["select_tool_category", "list_categories"]);
});
