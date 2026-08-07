import { expect, test } from "bun:test";

import { AmazonAds, AmazonAdsApiClient, AmazonAdsApiError } from "../src/index.ts";

const opts = { accessToken: "tok", clientId: "client-1", profileId: "profile-1" };

test("requests send the three required Amazon headers", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://advertising-api.amazon.com/sp/campaigns?state=ENABLED");
    const headers = init!.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer tok");
    expect(headers["Amazon-Advertising-API-ClientId"]).toBe("client-1");
    expect(headers["Amazon-Advertising-API-Scope"]).toBe("profile-1");
    return new Response(JSON.stringify({ campaigns: [] }), { status: 200 });
  }) as unknown as typeof fetch;

  const api = new AmazonAdsApiClient({ ...opts, fetch: fetchImpl });
  const result = await api.get<{ campaigns: unknown[] }>("/sp/campaigns", { state: "ENABLED" });
  expect(result.campaigns).toEqual([]);
});

test("supports EU region base URL", () => {
  const api = new AmazonAdsApiClient({ ...opts, baseUrl: "https://advertising-api-eu.amazon.com" });
  expect((api as unknown as { baseUrl: string }).baseUrl).toBe(
    "https://advertising-api-eu.amazon.com",
  );
});

test("throws AmazonAdsApiError on ValidationException bodies", async () => {
  const fetchImpl = (async () =>
    new Response(
      JSON.stringify({ code: "ValidationException", details: "campaignId is required" }),
      { status: 400 },
    )) as unknown as typeof fetch;

  const api = new AmazonAdsApiClient({ ...opts, fetch: fetchImpl });
  const error = await api.get("/sp/campaigns").catch((e: unknown) => e);
  expect(error).toBeInstanceOf(AmazonAdsApiError);
  if (error instanceof AmazonAdsApiError) {
    expect(error.status).toBe(400);
    expect(error.errorCode).toBe("ValidationException");
    expect(error.message).toContain("campaignId");
  }
});

test("retries 429 responses and succeeds", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) {
      return new Response(JSON.stringify({ code: "RateLimit", details: "slow down" }), {
        status: 429,
      });
    }
    return new Response(JSON.stringify({ campaigns: [] }), { status: 200 });
  }) as unknown as typeof fetch;

  const api = new AmazonAdsApiClient({
    ...opts,
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  const result = await api.get<{ campaigns: unknown[] }>("/sp/campaigns");
  expect(result.campaigns).toEqual([]);
  expect(calls).toBe(2);
});

// ─── Generated clients ───────────────────────────────────────────────

test("sponsoredProducts.campaigns.listSponsoredProductsCampaigns returns the typed response", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://advertising-api.amazon.com/sp/campaigns/list");
    expect(init?.method).toBe("POST");
    expect(JSON.parse(String(init?.body))).toEqual({ campaignIdFilter: { include: ["c1"] } });
    return new Response(
      JSON.stringify({
        campaigns: [{ campaignId: "c1", name: "Spring", state: "ENABLED" }],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = AmazonAds.createClient({ ...opts, fetch: fetchImpl });
  const result = await client.sponsoredProducts.campaigns.listSponsoredProductsCampaigns({
    campaignIdFilter: { include: ["c1"] },
  });
  expect(result.campaigns?.[0]!.name).toBe("Spring");
});

test("sponsoredBrands.campaigns.createSponsoredBrandsCampaign posts the body", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://advertising-api.amazon.com/sb/v4/campaigns");
    expect(init?.method).toBe("POST");
    const body = JSON.parse(String(init?.body));
    expect(body.campaigns[0]!.name).toBe("Brand Campaign");
    expect(body.campaigns[0]!.budgetType).toBe("DAILY");
    return new Response(JSON.stringify({ campaignId: "c9" }), { status: 200 });
  }) as unknown as typeof fetch;

  const client = AmazonAds.createClient({ ...opts, fetch: fetchImpl });
  const result = await client.sponsoredBrands.campaigns.createSponsoredBrandsCampaign({
    campaigns: [{ name: "Brand Campaign", budget: 10, budgetType: "DAILY", state: "ENABLED" }],
  });
  expect((result as { campaignId?: string }).campaignId).toBe("c9");
});
