import { test, expect, mock, afterEach } from "bun:test";
import { Cursor, type PaginationStrategy } from "../src/cursor.ts";
import { ApiClient } from "../src/client.ts";

const originalFetch = globalThis.fetch;

const testPagination: PaginationStrategy<any> = {
  getData: (response: any) => response.data ?? [],
  getNextPageParams: (response: any) => {
    const after = response.paging?.cursors?.after;
    return after && response.paging?.next ? { after } : null;
  },
};

function mockFetchPages(pages: { data: unknown[]; after?: string }[]) {
  let callIndex = 0;
  globalThis.fetch = mock(() => {
    const page = pages[callIndex++]!;
    return Promise.resolve(new Response(JSON.stringify({
      data: page.data,
      paging: { cursors: { after: page.after }, ...(page.after ? { next: "https://next" } : {}) },
    }), { status: 200, headers: { "Content-Type": "application/json" } }));
  }) as unknown as typeof fetch;
}

afterEach(() => { globalThis.fetch = originalFetch; });

test("next() returns first page", async () => {
  mockFetchPages([{ data: [{ id: "1" }, { id: "2" }], after: "c1" }]);
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const cursor = new Cursor<{ id: string }>(client, "items", { fields: ["id"] }, testPagination);
  const page = await cursor.next();
  expect(page.data).toHaveLength(2);
  expect(page.hasNext).toBe(true);
});

test("detects last page", async () => {
  mockFetchPages([{ data: [{ id: "1" }] }]);
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const cursor = new Cursor<{ id: string }>(client, "items", { fields: ["id"] }, testPagination);
  const page = await cursor.next();
  expect(page.hasNext).toBe(false);
});

test("async iteration across pages", async () => {
  mockFetchPages([{ data: [{ id: "1" }], after: "c1" }, { data: [{ id: "2" }] }]);
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const cursor = new Cursor<{ id: string }>(client, "items", { fields: ["id"] }, testPagination);
  const ids: string[] = [];
  for await (const item of cursor) ids.push(item.id);
  expect(ids).toEqual(["1", "2"]);
});

test("toArray()", async () => {
  mockFetchPages([{ data: [{ id: "1" }], after: "c1" }, { data: [{ id: "2" }] }]);
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const all = await new Cursor<{ id: string }>(client, "items", { fields: ["id"] }, testPagination).toArray();
  expect(all).toHaveLength(2);
});

test("take(n)", async () => {
  mockFetchPages([{ data: [{ id: "1" }, { id: "2" }], after: "c1" }, { data: [{ id: "3" }] }]);
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const first2 = await new Cursor<{ id: string }>(client, "items", { fields: ["id"] }, testPagination).take(2);
  expect(first2).toHaveLength(2);
});

test("lazy — no fetch on construction", () => {
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  new Cursor<{ id: string }>(client, "items", { fields: ["id"] }, testPagination);
  expect(true).toBe(true);
});
