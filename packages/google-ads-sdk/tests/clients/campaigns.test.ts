import { expect, mock, test } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { campaigns } from "../../src/clients/campaigns.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create accepts string ref and rich-object ref for campaignBudget", async () => {
  const bodies: unknown[] = [];
  const client = makeClient((_url, init) => {
    bodies.push(JSON.parse(init?.body as string));
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/campaigns/555" }] }),
      { status: 200 },
    );
  });
  const api = campaigns(client, "123");

  await api.create({
    name: "A",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: "customers/123/campaignBudgets/789",
  });

  await api.create({
    name: "B",
    status: "PAUSED",
    advertisingChannelType: "SEARCH",
    campaignBudget: {
      name: "Q1",
      amountMicros: "5000000",
      resourceName: "customers/123/campaignBudgets/999",
    },
  });

  expect((bodies[0] as any).operations[0].create.campaignBudget).toBe(
    "customers/123/campaignBudgets/789",
  );
  expect((bodies[1] as any).operations[0].create.campaignBudget).toBe(
    "customers/123/campaignBudgets/999",
  );
});

test("create returns input merged with resourceName", async () => {
  const client = makeClient(
    () =>
      new Response(JSON.stringify({ results: [{ resourceName: "customers/123/campaigns/555" }] }), {
        status: 200,
      }),
  );
  const result = await campaigns(client, "123").create({
    name: "A",
    status: "ENABLED",
    advertisingChannelType: "SEARCH",
    campaignBudget: "customers/123/campaignBudgets/789",
  });
  expect(result.resourceName).toBe("customers/123/campaigns/555");
  expect(result.name).toBe("A");
  expect(result.status).toBe("ENABLED");
});

test("update sends updateMask from patch keys", async () => {
  let body: any;
  const client = makeClient((_url, init) => {
    body = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  await campaigns(client, "123").update("customers/123/campaigns/555", {
    status: "PAUSED",
    name: "renamed",
  });
  expect(body.operations[0].updateMask).toBe("status,name");
  expect(body.operations[0].update.resourceName).toBe("customers/123/campaigns/555");
});

test("remove sends remove-only op", async () => {
  let body: any;
  const client = makeClient((_url, init) => {
    body = JSON.parse(init?.body as string);
    return new Response("{}", { status: 200 });
  });
  await campaigns(client, "123").remove("customers/123/campaigns/555");
  expect(body.operations[0].remove).toBe("customers/123/campaigns/555");
});

test("get issues GAQL with resource_name filter", async () => {
  let body: any;
  const client = makeClient((_url, init) => {
    body = JSON.parse(init?.body as string);
    return new Response(JSON.stringify({ results: [{ campaign: { id: "555", name: "A" } }] }), {
      status: 200,
    });
  });
  const got = await campaigns(client, "123").get("customers/123/campaigns/555");
  expect(body.query).toContain("FROM campaign");
  expect(body.query).toContain("campaign.resource_name = 'customers/123/campaigns/555'");
  expect(got?.name).toBe("A");
});

test("list returns array", async () => {
  const client = makeClient(
    () =>
      new Response(
        JSON.stringify({
          results: [{ campaign: { id: "1", name: "A" } }, { campaign: { id: "2", name: "B" } }],
        }),
        { status: 200 },
      ),
  );
  const all = await campaigns(client, "123").list();
  expect(all.map((c) => c.name)).toEqual(["A", "B"]);
});
