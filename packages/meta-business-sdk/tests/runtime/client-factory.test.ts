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
