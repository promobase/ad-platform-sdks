import { test, expect, mock, afterEach } from "bun:test";
import { createClient } from "../../src/generated/index.ts";

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

test("field selection narrows return type via Pick<>", async () => {
  mockFetchJson({ id: "act_123", name: "Test Account", currency: "USD" });

  const api = createClient({ accessToken: "tok" });
  const result = await api.adAccount("act_123").get({
    fields: ["id", "name", "currency"],
  });

  // These compile because they're in the requested fields
  expect(result.id).toBe("act_123");
  expect(result.name).toBe("Test Account");
  expect(result.currency).toBe("USD");
});

test("cursor async iteration works with typed results", async () => {
  mockFetchJson({
    data: [
      { id: "1", name: "Campaign A" },
      { id: "2", name: "Campaign B" },
    ],
    paging: { cursors: {} },
  });

  const api = createClient({ accessToken: "tok" });
  const items: { id: string; name: string }[] = [];

  for await (const campaign of api.adAccount("act_123").campaigns.list({
    fields: ["id", "name"],
  })) {
    items.push({ id: campaign.id as string, name: campaign.name as string });
  }

  expect(items).toHaveLength(2);
  expect(items[0]!.name).toBe("Campaign A");
});

test("create edge sends POST with params", async () => {
  mockFetchJson({ id: "new_campaign_123" });

  const api = createClient({ accessToken: "tok" });
  await api.adAccount("act_123").campaigns.create({
    name: "New Campaign",
    objective: "OUTCOME_SALES",
    special_ad_categories: [],
  });

  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>)
    .mock.calls[0] as [string, RequestInit];
  expect(url).toContain("act_123/campaigns");
  expect(init.method).toBe("POST");
});

test("update sends POST to node", async () => {
  mockFetchJson({ success: true });

  const api = createClient({ accessToken: "tok" });
  await api.campaign("123456").update({
    name: "Updated Name",
    status: "ACTIVE",
  });

  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>)
    .mock.calls[0] as [string, RequestInit];
  expect(url).toContain("123456");
  expect(init.method).toBe("POST");
});

test("delete sends DELETE to node", async () => {
  mockFetchJson({ success: true });

  const api = createClient({ accessToken: "tok" });
  await api.campaign("123456").delete();

  const [url, init] = (globalThis.fetch as unknown as ReturnType<typeof mock>)
    .mock.calls[0] as [string, RequestInit];
  expect(url).toContain("123456");
  expect(init.method).toBe("DELETE");
});

test("cursor.take() limits results across pages", async () => {
  let callCount = 0;
  globalThis.fetch = mock(() => {
    callCount++;
    const data =
      callCount === 1
        ? { data: [{ id: "1" }, { id: "2" }], paging: { cursors: { after: "c1" }, next: "x" } }
        : { data: [{ id: "3" }, { id: "4" }], paging: { cursors: {} } };
    return Promise.resolve(
      new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as unknown as typeof fetch;

  const api = createClient({ accessToken: "tok" });
  const first3 = await api.adAccount("act_123").campaigns.list({
    fields: ["id"],
  }).take(3);

  expect(first3).toHaveLength(3);
  expect(first3.map((c) => c.id)).toEqual(["1", "2", "3"]);
});
