import { afterEach, expect, mock, test } from "bun:test";
import { createClient } from "../../src/generated/index.ts";

const originalFetch = globalThis.fetch;

function mockFetchBatch(responses: (object | null)[]) {
  globalThis.fetch = mock(() => {
    const body = responses.map((r) =>
      r === null ? null : { code: 200, headers: [], body: JSON.stringify(r) },
    );
    return Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as unknown as typeof fetch;
}

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("batch sends multiple requests in one call", async () => {
  mockFetchBatch([
    { id: "act_123", name: "My Account", currency: "USD" },
    {
      data: [
        { id: "1", name: "Campaign A" },
        { id: "2", name: "Campaign B" },
      ],
    },
  ]);

  const api = createClient({ accessToken: "tok" });
  const results = await api.batch((b) => ({
    account: b.get(api.adAccount("act_123"), { fields: ["id", "name", "currency"] }),
    campaigns: b.getEdge(api.adAccount("act_123").campaigns, { fields: ["id", "name"] }),
  }));

  expect(results.account.id).toBe("act_123");
  expect(results.account.name).toBe("My Account");
  expect(results.campaigns).toHaveLength(2);
  expect(results.campaigns[0]!.name).toBe("Campaign A");
});

test("batch post sends POST requests", async () => {
  mockFetchBatch([{ id: "new_123" }]);

  const api = createClient({ accessToken: "tok" });
  const results = await api.batch((b) => ({
    newCampaign: b.post(api.adAccount("act_123").campaigns, {
      name: "Test",
      objective: "OUTCOME_SALES",
      special_ad_categories: [],
    }),
  }));

  expect(results.newCampaign).toBeDefined();

  // Verify the batch was sent as POST with batch param
  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>).mock.calls[0] as [
    string,
    RequestInit,
  ];
  expect(init.method).toBe("POST");
  // The body should contain "batch=" with the serialized requests
  const body = init.body?.toString() ?? "";
  expect(body).toContain("batch=");
});

test("batch throws on error response", async () => {
  globalThis.fetch = mock(() => {
    const body = [
      {
        code: 400,
        headers: [],
        body: JSON.stringify({
          error: { message: "Bad", type: "OAuthException", code: 190, fbtrace_id: "abc" },
        }),
      },
    ];
    return Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as unknown as typeof fetch;

  const api = createClient({ accessToken: "tok" });
  expect(
    api.batch((b) => ({
      account: b.get(api.adAccount("act_123"), { fields: ["id"] }),
    })),
  ).rejects.toThrow("Bad");
});

test("batch throws on null response (throttled)", async () => {
  globalThis.fetch = mock(() => {
    return Promise.resolve(
      new Response(JSON.stringify([null]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as unknown as typeof fetch;

  const api = createClient({ accessToken: "tok" });
  expect(
    api.batch((b) => ({
      account: b.get(api.adAccount("act_123"), { fields: ["id"] }),
    })),
  ).rejects.toThrow("not executed");
});

test("batch throws if more than 50 requests", async () => {
  const api = createClient({ accessToken: "tok" });
  expect(
    api.batch((b) => {
      const handles: Record<string, any> = {};
      for (let i = 0; i < 51; i++) {
        handles[`req${i}`] = b.get(api.adAccount("act_123"), { fields: ["id"] });
      }
      return handles;
    }),
  ).rejects.toThrow("exceeds maximum of 50");
});
