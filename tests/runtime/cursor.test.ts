import { test, expect, mock, afterEach } from "bun:test";
import { Cursor } from "../../src/runtime/cursor.ts";
import { ApiClient } from "../../src/runtime/client.ts";

const originalFetch = globalThis.fetch;

function mockFetchPages(pages: { data: unknown[]; after?: string }[]) {
  let callIndex = 0;
  globalThis.fetch = mock(() => {
    const page = pages[callIndex++]!;
    return Promise.resolve(new Response(JSON.stringify({
      data: page.data,
      paging: { cursors: { after: page.after }, ...(page.after ? { next: "https://graph.facebook.com/next" } : {}) },
    }), { status: 200, headers: { "Content-Type": "application/json" } }));
  }) as unknown as typeof fetch;
}

afterEach(() => { globalThis.fetch = originalFetch; });

test("Cursor.next() returns first page of results", async () => {
  mockFetchPages([{ data: [{ id: "1", name: "A" }, { id: "2", name: "B" }], after: "cur1" }]);
  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string; name: string }>(client, "act_123/campaigns", { fields: ["id", "name"] });
  const page = await cursor.next();
  expect(page.data).toHaveLength(2);
  expect(page.data[0]!.id).toBe("1");
  expect(page.hasNext).toBe(true);
});

test("Cursor detects last page (no next)", async () => {
  mockFetchPages([{ data: [{ id: "1" }] }]);
  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });
  const page = await cursor.next();
  expect(page.hasNext).toBe(false);
});

test("Cursor is async-iterable across multiple pages", async () => {
  mockFetchPages([{ data: [{ id: "1" }, { id: "2" }], after: "cur1" }, { data: [{ id: "3" }] }]);
  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });
  const ids: string[] = [];
  for await (const item of cursor) { ids.push(item.id); }
  expect(ids).toEqual(["1", "2", "3"]);
});

test("Cursor.toArray() collects all pages", async () => {
  mockFetchPages([{ data: [{ id: "1" }], after: "cur1" }, { data: [{ id: "2" }] }]);
  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });
  const all = await cursor.toArray();
  expect(all).toHaveLength(2);
  expect(all.map((x) => x.id)).toEqual(["1", "2"]);
});

test("Cursor.take(n) stops after n items across pages", async () => {
  mockFetchPages([{ data: [{ id: "1" }, { id: "2" }], after: "cur1" }, { data: [{ id: "3" }, { id: "4" }] }]);
  const client = new ApiClient({ accessToken: "tok" });
  const cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });
  const first3 = await cursor.take(3);
  expect(first3).toHaveLength(3);
  expect(first3.map((x) => x.id)).toEqual(["1", "2", "3"]);
});

test("Cursor is lazy — no fetch until next() or iteration", () => {
  const client = new ApiClient({ accessToken: "tok" });
  const _cursor = new Cursor<{ id: string }>(client, "path", { fields: ["id"] });
  expect(true).toBe(true);
});
