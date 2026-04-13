import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { adGroups } from "../../src/clients/ad-groups.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create resolves Ref<Campaign> and posts the correct body", async () => {
  let body: any;
  const client = makeClient((url, init) => {
    body = JSON.parse(init?.body as string);
    expect(url).toContain("/v23/customers/123/adGroups:mutate");
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/adGroups/777" }] }),
      { status: 200 },
    );
  });
  const result = await adGroups(client, "123").create({
    name: "Shoes",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign: {
      name: "Q1",
      resourceName: "customers/123/campaigns/555",
      advertisingChannelType: "SEARCH",
    } as any,
  });
  expect(body.operations[0].create.campaign).toBe("customers/123/campaigns/555");
  expect(result.resourceName).toBe("customers/123/adGroups/777");
});

test("create accepts string ref", async () => {
  let body: any;
  const client = makeClient((_u, init) => {
    body = JSON.parse(init?.body as string);
    return new Response(
      JSON.stringify({ results: [{ resourceName: "customers/123/adGroups/777" }] }),
      { status: 200 },
    );
  });
  await adGroups(client, "123").create({
    name: "Shoes",
    status: "ENABLED",
    type: "SEARCH_STANDARD",
    campaign: "customers/123/campaigns/555",
  });
  expect(body.operations[0].create.campaign).toBe("customers/123/campaigns/555");
});

test("update/remove/get/list basic shapes", async () => {
  const bodies: any[] = [];
  const client = makeClient((_u, init) => {
    bodies.push(init?.body ? JSON.parse(init.body as string) : null);
    return new Response(
      JSON.stringify({ results: [{ adGroup: { id: "777", name: "Shoes" } }] }),
      { status: 200 },
    );
  });
  const api = adGroups(client, "123");
  await api.update("customers/123/adGroups/777", { status: "PAUSED" });
  await api.remove("customers/123/adGroups/777");
  const got = await api.get("customers/123/adGroups/777");
  const all = await api.list();

  expect(bodies[0].operations[0].updateMask).toBe("status");
  expect(bodies[1].operations[0].remove).toBe("customers/123/adGroups/777");
  expect(bodies[2].query).toContain("ad_group.resource_name = 'customers/123/adGroups/777'");
  expect(bodies[3].query).toContain("FROM ad_group");
  expect(got?.name).toBe("Shoes");
  expect(all).toHaveLength(1);
});
