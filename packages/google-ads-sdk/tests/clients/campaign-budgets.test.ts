import { expect, mock, test } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { campaignBudgets } from "../../src/clients/campaign-budgets.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create wraps input in operations array, returns resourceName", async () => {
  const calls: { url: string; init?: RequestInit }[] = [];
  const client = makeClient((url, init) => {
    calls.push({ url, init });
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/campaignBudgets/789" }] }),
      { status: 200 },
    );
  });
  const api = campaignBudgets(client, "123");
  const result = await api.create({ name: "Q1", amountMicros: "5000000" });

  expect(calls).toHaveLength(1);
  expect(calls[0]!.url).toContain("/v23/customers/123/campaignBudgets:mutate");
  expect(calls[0]!.init?.method).toBe("POST");
  const body = JSON.parse(calls[0]!.init?.body as string);
  expect(body.operations).toEqual([{ create: { name: "Q1", amountMicros: "5000000" } }]);

  expect(result.resourceName).toBe("customers/123/campaignBudgets/789");
  expect(result.name).toBe("Q1");
});

test("createMany preserves input to result order", async () => {
  const client = makeClient(
    () =>
      new Response(
        JSON.stringify({
          results: [
            { resourceName: "customers/123/campaignBudgets/1" },
            { resourceName: "customers/123/campaignBudgets/2" },
          ],
        }),
        { status: 200 },
      ),
  );
  const api = campaignBudgets(client, "123");
  const [a, b] = await api.createMany([
    { name: "A", amountMicros: "1000000" },
    { name: "B", amountMicros: "2000000" },
  ]);
  expect(a!.name).toBe("A");
  expect(a!.resourceName).toBe("customers/123/campaignBudgets/1");
  expect(b!.name).toBe("B");
  expect(b!.resourceName).toBe("customers/123/campaignBudgets/2");
});

test("create throws when response lacks resourceName", async () => {
  const client = makeClient(() => new Response(JSON.stringify({ results: [{}] }), { status: 200 }));
  const api = campaignBudgets(client, "123");
  await expect(api.create({ name: "x", amountMicros: "1" })).rejects.toThrow(/resourceName/);
});

test("update builds updateMask from patch keys", async () => {
  let capturedBody: unknown;
  const client = makeClient((_url, init) => {
    capturedBody = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  const api = campaignBudgets(client, "123");
  await api.update("customers/123/campaignBudgets/789", { amountMicros: "7000000" });
  expect(capturedBody).toEqual({
    operations: [
      {
        update: { resourceName: "customers/123/campaignBudgets/789", amountMicros: "7000000" },
        updateMask: "amountMicros",
      },
    ],
  });
});

test("remove sends remove-only operation", async () => {
  let capturedBody: unknown;
  const client = makeClient((_url, init) => {
    capturedBody = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  const api = campaignBudgets(client, "123");
  await api.remove("customers/123/campaignBudgets/789");
  expect(capturedBody).toEqual({
    operations: [{ remove: "customers/123/campaignBudgets/789" }],
  });
});

test("get returns single budget or null", async () => {
  const client = makeClient((url, init) => {
    expect(url).toContain("/v23/customers/123/googleAds:search");
    const body = JSON.parse(init?.body as string);
    expect(body.query).toContain(
      "campaign_budget.resource_name = 'customers/123/campaignBudgets/789'",
    );
    return new Response(
      JSON.stringify({
        results: [{ campaignBudget: { id: "789", name: "Q1", amountMicros: "5000000" } }],
      }),
      { status: 200 },
    );
  });
  const api = campaignBudgets(client, "123");
  const got = await api.get("customers/123/campaignBudgets/789");
  expect(got?.name).toBe("Q1");
});

test("get returns null on empty results", async () => {
  const client = makeClient(() => new Response(JSON.stringify({ results: [] }), { status: 200 }));
  const api = campaignBudgets(client, "123");
  const got = await api.get("customers/123/campaignBudgets/789");
  expect(got).toBeNull();
});

test("list returns array of budgets", async () => {
  const client = makeClient(
    () =>
      new Response(
        JSON.stringify({
          results: [
            { campaignBudget: { id: "1", name: "A" } },
            { campaignBudget: { id: "2", name: "B" } },
          ],
        }),
        { status: 200 },
      ),
  );
  const api = campaignBudgets(client, "123");
  const all = await api.list();
  expect(all.map((b) => b.name)).toEqual(["A", "B"]);
});
