import { expect, mock, test } from "bun:test";
import { HttpClient, HttpError } from "../src/http-client.ts";

test("HttpClient sends JSON POST with custom headers", async () => {
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    expect(url).toBe("https://api.example.com/v1/things:mutate");
    expect(init?.method).toBe("POST");
    const headers = init?.headers as Record<string, string>;
    expect(headers.authorization).toBe("Bearer tok");
    expect(headers["x-custom"]).toBe("val");
    expect(headers["content-type"]).toBe("application/json");
    expect(init?.body).toBe(JSON.stringify({ name: "foo" }));
    return new Response(JSON.stringify({ id: "1" }), { status: 200 });
  });

  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({ authorization: "Bearer tok", "x-custom": "val" }),
    fetch: fetchMock as unknown as typeof fetch,
  });

  const result = await client.post<{ id: string }>("/v1/things:mutate", { name: "foo" });
  expect(result).toEqual({ id: "1" });
});

test("HttpClient throws HttpError on non-2xx", async () => {
  const fetchMock = mock(
    async () =>
      new Response(JSON.stringify({ error: { code: 400, message: "bad" } }), { status: 400 }),
  );
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
  });
  await expect(client.post("/v1/x", {})).rejects.toBeInstanceOf(HttpError);
});

test("HttpClient GET appends query params", async () => {
  let capturedUrl = "";
  const fetchMock = mock(async (url: string) => {
    capturedUrl = url;
    return new Response("{}", { status: 200 });
  });
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
  });
  await client.get("/v1/thing", { query: { pageSize: 10, filter: "x" } });
  expect(capturedUrl).toBe("https://api.example.com/v1/thing?pageSize=10&filter=x");
});

test("HttpClient retries retryable statuses", async () => {
  let calls = 0;
  const fetchMock = mock(async () => {
    calls++;
    if (calls < 3) return new Response("{}", { status: 503 });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  });
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 3, initialBackoffMs: 1 },
    delay: async () => {},
  });
  const result = await client.get<{ ok: boolean }>("/v1/x");
  expect(result.ok).toBe(true);
  expect(calls).toBe(3);
});

test("HttpClient uses custom onError", async () => {
  class MyError extends Error {
    constructor(
      public status: number,
      public body: unknown,
    ) {
      super("my");
    }
  }
  const fetchMock = mock(async () => new Response('{"msg":"nope"}', { status: 403 }));
  const client = new HttpClient({
    baseUrl: "https://api.example.com",
    getHeaders: async () => ({}),
    fetch: fetchMock as unknown as typeof fetch,
    onError: (status, body) => new MyError(status, body),
  });
  await expect(client.get("/v1/x")).rejects.toBeInstanceOf(MyError);
});
