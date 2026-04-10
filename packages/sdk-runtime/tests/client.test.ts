import { test, expect, mock, afterEach } from "bun:test";
import { ApiClient } from "../src/client.ts";
import type { RateLimiter } from "../src/client.ts";
import { ApiError } from "../src/errors.ts";

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

test("get sends GET with access token and fields", async () => {
  mockFetch({ status: 200, body: { id: "123", name: "Test" } });
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const result = await client.get<{ id: string; name: string }>("123", { fields: ["id", "name"] });
  expect(result).toEqual({ id: "123", name: "Test" });
  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("https://api.example.com/123");
  expect(url).toContain("access_token=tok");
});

test("post sends POST with params", async () => {
  mockFetch({ status: 200, body: { id: "456" } });
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  const result = await client.post<{ id: string }>("items", { name: "Test" });
  expect(result).toEqual({ id: "456" });
  const [, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string, RequestInit];
  expect(init.method).toBe("POST");
});

test("throws ApiError on error response by default", async () => {
  mockFetch({ status: 400, body: { error: "bad" } });
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com" });
  expect(client.get("123", { fields: ["id"] })).rejects.toBeInstanceOf(ApiError);
});

test("uses custom onError handler", async () => {
  mockFetch({ status: 401, body: { error: { message: "Unauthorized" } } });
  class CustomError extends Error { status: number; constructor(m: string, s: number) { super(m); this.status = s; } }
  const client = new ApiClient({
    accessToken: "tok",
    baseUrl: "https://api.example.com",
    onError: (status, _body) => new CustomError("Custom!", status),
  });
  expect(client.get("123", { fields: ["id"] })).rejects.toBeInstanceOf(CustomError);
});

test("respects apiVersion in URL path", async () => {
  mockFetch({ status: 200, body: {} });
  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com", apiVersion: "v2" });
  await client.get("123", { fields: [] });
  const [url] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [string];
  expect(url).toContain("https://api.example.com/v2/123");
});

test("rate limiter is called before and after requests", async () => {
  mockFetch({ status: 200, body: { ok: true } });

  let checkCalled = false;
  let afterCalled = false;
  let receivedStatus = 0;

  const limiter: RateLimiter = {
    check: () => { checkCalled = true; return { shouldWait: false, waitMs: 0 }; },
    afterResponse: (status, _headers) => { afterCalled = true; receivedStatus = status; },
  };

  const client = new ApiClient({ accessToken: "tok", baseUrl: "https://api.example.com", rateLimiter: limiter });
  await client.get("test", { fields: ["id"] });

  expect(checkCalled).toBe(true);
  expect(afterCalled).toBe(true);
  expect(receivedStatus).toBe(200);
});

test("rate limiter delay is awaited when shouldWait", async () => {
  mockFetch({ status: 200, body: { ok: true } });

  let delayCalledWith = 0;
  const limiter: RateLimiter = {
    check: () => ({ shouldWait: true, waitMs: 100 }),
    afterResponse: () => {},
  };

  const client = new ApiClient({
    accessToken: "tok",
    baseUrl: "https://api.example.com",
    rateLimiter: limiter,
    delay: async (ms) => { delayCalledWith = ms; },
  });
  await client.get("test", { fields: ["id"] });

  expect(delayCalledWith).toBe(100);
});
