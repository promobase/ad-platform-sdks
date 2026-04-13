import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { ads } from "../../src/clients/ads.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("ads exposes get/list/remove only (create not on type surface)", () => {
  const client = makeClient(() => new Response("{}", { status: 200 }));
  const api = ads(client, "123");
  expect(typeof api.get).toBe("function");
  expect(typeof api.list).toBe("function");
  expect(typeof api.remove).toBe("function");
  expect((api as Record<string, unknown>).create).toBeUndefined();
});

test("get queries FROM ad_group_ad and extracts ad", async () => {
  const client = makeClient((_u, init) => {
    const body = JSON.parse(init?.body as string);
    expect(body.query).toContain("FROM ad_group_ad");
    expect(body.query).toContain("ad_group_ad.ad.resource_name = 'customers/123/ads/999'");
    return new Response(
      JSON.stringify({
        results: [{ adGroupAd: { ad: { id: "999", resourceName: "customers/123/ads/999" } } }],
      }),
      { status: 200 },
    );
  });
  const got = await ads(client, "123").get("customers/123/ads/999");
  expect(got?.id).toBe("999");
});

test("list returns ads from ad_group_ad rows", async () => {
  const client = makeClient(() =>
    new Response(
      JSON.stringify({
        results: [
          { adGroupAd: { ad: { id: "1" } } },
          { adGroupAd: { ad: { id: "2" } } },
        ],
      }),
      { status: 200 },
    ),
  );
  const all = await ads(client, "123").list();
  expect(all.map((a) => a.id)).toEqual(["1", "2"]);
});

test("remove delegates to adGroupAdService.mutateAdGroupAds", async () => {
  let body: any;
  const client = makeClient((url, init) => {
    body = JSON.parse(init?.body as string);
    expect(url).toContain("/v23/customers/123/adGroupAds:mutate");
    return new Response("{}", { status: 200 });
  });
  await ads(client, "123").remove("customers/123/adGroupAds/777~888");
  expect(body.operations[0].remove).toBe("customers/123/adGroupAds/777~888");
});
