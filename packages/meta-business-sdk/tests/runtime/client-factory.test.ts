import { afterEach, expect, mock, test } from "bun:test";

const originalFetch = globalThis.fetch;

function mockFetchJson(body: unknown) {
  globalThis.fetch = mock(() =>
    Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ),
  ) as unknown as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("createClient returns object with adAccount accessor", async () => {
  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token" });
  expect(typeof api.adAccount).toBe("function");
  expect(typeof api.campaign).toBe("function");
});

test("createClient exposes raw client", async () => {
  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token" });
  expect(api.client).toBeDefined();
});

test("adAccount node has campaigns edge with list method", async () => {
  mockFetchJson({
    data: [{ id: "1", name: "Test Campaign" }],
    paging: { cursors: {} },
  });
  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token" });
  const acct = api.adAccount("act_123");
  expect(acct.campaigns).toBeDefined();
  const cursor = acct.campaigns.list({ fields: ["id", "name"] });
  const page = await cursor.next();
  expect(page.data).toHaveLength(1);
});

test("generated PagePost exposes the post insights edge", async () => {
  let requestUrl = "";
  globalThis.fetch = mock((input: Parameters<typeof fetch>[0]) => {
    requestUrl = String(input);
    return Promise.resolve(
      Response.json({ data: [{ name: "post_impressions", values: [{ value: 42 }] }] }),
    );
  }) as unknown as typeof fetch;

  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token", apiVersion: "v25.0" });
  const page = await api
    .pagePost("page_post_1")
    .insights({ fields: ["name", "values"], params: { period: "lifetime" } })
    .next();

  const url = new URL(requestUrl);
  expect(url.pathname).toBe("/v25.0/page_post_1/insights");
  expect(url.searchParams.get("fields")).toBe("name,values");
  expect(url.searchParams.get("period")).toBe("lifetime");
  expect(page.data[0]?.name).toBe("post_impressions");
});

test("generated IGMedia exposes media insights metrics", async () => {
  let requestUrl = "";
  globalThis.fetch = mock((input: Parameters<typeof fetch>[0]) => {
    requestUrl = String(input);
    return Promise.resolve(Response.json({ data: [{ name: "views", values: [{ value: 100 }] }] }));
  }) as unknown as typeof fetch;

  const { createClient } = await import("../../src/generated/index.ts");
  const api = createClient({ accessToken: "test_token", apiVersion: "v25.0" });
  const page = await api
    .iGMedia("ig_media_1")
    .insights({ fields: ["name", "values"], params: { metric: ["views", "reach"] } })
    .next();

  const url = new URL(requestUrl);
  expect(url.pathname).toBe("/v25.0/ig_media_1/insights");
  expect(url.searchParams.get("metric")).toBe(JSON.stringify(["views", "reach"]));
  expect(page.data[0]?.name).toBe("views");
});
