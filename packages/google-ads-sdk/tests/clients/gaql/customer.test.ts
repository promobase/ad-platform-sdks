import { test, expect, mock } from "bun:test";
import { Google } from "../../../src/index.ts";

test("customer.gaql binds client and customerId", async () => {
  const calls: { url: string; body: any }[] = [];
  const fetchMock = mock(async (url: string, init?: RequestInit) => {
    calls.push({ url, body: init?.body ? JSON.parse(init.body as string) : null });
    return new Response(
      JSON.stringify({
        results: [{ campaign: { id: "1", name: "A" } }],
      }),
      { status: 200 },
    );
  });

  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
  const customer = Google.Ads.customer(client, "123");

  const row = await customer.gaql
    .from("campaign")
    .select("campaign.id", "campaign.name")
    .limit(1)
    .first();

  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/v23/customers/123/googleAds:search");
  expect(calls[0]!.body.query).toBe(
    "SELECT campaign.id, campaign.name FROM campaign LIMIT 1",
  );
  expect(row?.campaign.id).toBe("1");
});

test("Google.Ads.gaql unbound requires explicit client and customerId", async () => {
  const fetchMock = mock(async () =>
    new Response(JSON.stringify({ results: [] }), { status: 200 }),
  );
  const client = Google.createClient({
    getAccessToken: async () => "tok",
    developerToken: "dev",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });

  const { rows } = await Google.Ads.gaql
    .from("campaign")
    .select("campaign.id")
    .execute(client.http, "999");
  expect(rows).toEqual([]);
});
