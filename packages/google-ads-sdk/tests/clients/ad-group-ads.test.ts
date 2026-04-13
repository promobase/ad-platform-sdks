import { test, expect, mock } from "bun:test";
import { HttpClient } from "@promobase/sdk-runtime";
import { adGroupAds } from "../../src/clients/ad-group-ads.ts";

function makeClient(respond: (url: string, init?: RequestInit) => Response): HttpClient {
  const fetchMock = mock(async (url: string, init?: RequestInit) => respond(url, init));
  return new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => ({ authorization: "Bearer tok" }),
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries: 0 },
  });
}

test("create resolves adGroup ref and nests full Ad in the operation", async () => {
  let body: any;
  const client = makeClient((_u, init) => {
    body = JSON.parse(init?.body as string);
    return new Response(
      JSON.stringify({
        results: [{ resourceName: "customers/123/adGroupAds/777~888" }],
      }),
      { status: 200 },
    );
  });
  const result = await adGroupAds(client, "123").create({
    adGroup: "customers/123/adGroups/777",
    status: "ENABLED",
    ad: {
      finalUrls: ["https://example.com"],
      responsiveSearchAd: {
        headlines: [{ text: "Buy shoes" }, { text: "Best deals" }, { text: "Free ship" }],
        descriptions: [{ text: "On sale now" }, { text: "Trusted brand" }],
      },
    },
  });
  const op = body.operations[0].create;
  expect(op.adGroup).toBe("customers/123/adGroups/777");
  expect(op.ad.finalUrls).toEqual(["https://example.com"]);
  expect(op.ad.responsiveSearchAd.headlines).toHaveLength(3);
  expect(result.resourceName).toBe("customers/123/adGroupAds/777~888");
});

test("remove + update basic shapes", async () => {
  const bodies: any[] = [];
  const client = makeClient((_u, init) => {
    bodies.push(JSON.parse(init?.body as string));
    return new Response("{}", { status: 200 });
  });
  const api = adGroupAds(client, "123");
  await api.update("customers/123/adGroupAds/777~888", { status: "PAUSED" });
  await api.remove("customers/123/adGroupAds/777~888");
  expect(bodies[0].operations[0].update.resourceName).toBe("customers/123/adGroupAds/777~888");
  expect(bodies[0].operations[0].updateMask).toBe("status");
  expect(bodies[1].operations[0].remove).toBe("customers/123/adGroupAds/777~888");
});

test("get returns first row's adGroupAd or null", async () => {
  const client = makeClient((_u, init) => {
    const body = JSON.parse(init?.body as string);
    expect(body.query).toContain("FROM ad_group_ad");
    return new Response(
      JSON.stringify({
        results: [{ adGroupAd: { resourceName: "customers/123/adGroupAds/777~888", status: "ENABLED" } }],
      }),
      { status: 200 },
    );
  });
  const got = await adGroupAds(client, "123").get("customers/123/adGroupAds/777~888");
  expect(got?.status).toBe("ENABLED");
});
