// tests/runtime/client.test.ts
import { test, expect, mock, afterEach } from "bun:test";
import { ApiClient } from "../../src/runtime/client.ts";
import { FacebookApiError } from "../../src/runtime/errors.ts";

const originalFetch = globalThis.fetch;

function mockFetch(response: { status: number; body: unknown }) {
  globalThis.fetch = mock(() =>
    Promise.resolve(new Response(JSON.stringify(response.body), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    }))
  ) as unknown as typeof fetch;
}

afterEach(() => { globalThis.fetch = originalFetch; });

test("ApiClient.get sends GET with access token and fields", async () => {
  mockFetch({ status: 200, body: { id: "123", name: "Test" } });
  const client = new ApiClient({ accessToken: "tok_123" });
  const result = await client.get<{ id: string; name: string }>("123", { fields: ["id", "name"] });
  expect(result).toEqual({ id: "123", name: "Test" });
  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("https://graph.facebook.com/v25.0/123");
  expect(url).toContain("access_token=tok_123");
  expect(url).toContain("fields=id%2Cname");
});

test("ApiClient.post sends POST with params", async () => {
  mockFetch({ status: 200, body: { id: "456" } });
  const client = new ApiClient({ accessToken: "tok_123" });
  const result = await client.post<{ id: string }>("act_123/campaigns", { name: "My Campaign", objective: "OUTCOME_SALES" });
  expect(result).toEqual({ id: "456" });
  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(url).toContain("act_123/campaigns");
  expect(init.method).toBe("POST");
});

test("ApiClient throws FacebookApiError on error response", async () => {
  mockFetch({ status: 400, body: { error: { message: "Invalid token", type: "OAuthException", code: 190, fbtrace_id: "abc" } } });
  const client = new ApiClient({ accessToken: "bad_token" });
  expect(client.get("123", { fields: ["id"] })).rejects.toBeInstanceOf(FacebookApiError);
});

test("ApiClient.getEdge returns paginated response shape", async () => {
  mockFetch({ status: 200, body: { data: [{ id: "1" }, { id: "2" }], paging: { cursors: { after: "cursor_abc" }, next: "https://..." } } });
  const client = new ApiClient({ accessToken: "tok_123" });
  const result = await client.getEdge("act_123/campaigns", { fields: ["id"] });
  expect(result.data).toHaveLength(2);
  expect(result.paging.cursors.after).toBe("cursor_abc");
});

test("ApiClient respects custom apiVersion and baseUrl", async () => {
  mockFetch({ status: 200, body: {} });
  const client = new ApiClient({ accessToken: "tok", apiVersion: "v24.0", baseUrl: "https://custom.graph.com" });
  await client.get("123", { fields: [] });
  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("https://custom.graph.com/v24.0/123");
});
