import { expect, test } from "bun:test";

import { GoogleBusinessProfile } from "../src/index.ts";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

test("lists accounts and locations across the current GBP service endpoints", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });
    return json(calls.length === 1 ? { accounts: [{ name: "accounts/1" }] } : { locations: [] });
  }) as typeof fetch;
  const client = GoogleBusinessProfile.createClient({ accessToken: "token", fetch: fetchMock });

  await client.resources.accounts.list();
  await client.resources.locations.list("accounts/1");

  expect(calls[0]?.url).toBe("https://mybusinessaccountmanagement.googleapis.com/v1/accounts");
  expect(calls[1]?.url).toContain(
    "https://mybusinessbusinessinformation.googleapis.com/v1/accounts/1/locations",
  );
  expect(calls[1]?.url).toContain("readMask=");
  expect(new Headers(calls[0]?.init?.headers).get("authorization")).toBe("Bearer token");
});

test("creates CTA, event, and offer capable local posts", async () => {
  let request: { url?: string; init?: RequestInit } = {};
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    request = { url: String(input), init };
    return json({ name: "accounts/1/locations/2/localPosts/3", topicType: "EVENT" });
  }) as typeof fetch;
  const client = GoogleBusinessProfile.createClient({ accessToken: "token", fetch: fetchMock });

  const post = await client.resources.localPosts.create("accounts/1/locations/2", {
    languageCode: "en-US",
    summary: "Launch day",
    topicType: "EVENT",
    event: {
      title: "Launch",
      schedule: {
        startDate: { year: 2026, month: 8, day: 3 },
        endDate: { year: 2026, month: 8, day: 3 },
      },
    },
    callToAction: { actionType: "LEARN_MORE", url: "https://example.com" },
  });

  expect(request.url).toBe(
    "https://mybusiness.googleapis.com/v4/accounts/1/locations/2/localPosts",
  );
  expect(JSON.parse(String(request.init?.body)).event.title).toBe("Launch");
  expect(post.name).toEndWith("localPosts/3");
});

test("reports up to 100 local post metrics and fetches location time series", async () => {
  const calls: string[] = [];
  const fetchMock = (async (input: RequestInfo | URL) => {
    calls.push(String(input));
    return json(calls.length === 1 ? { localPostMetrics: [] } : { multiDailyMetricTimeSeries: [] });
  }) as typeof fetch;
  const client = GoogleBusinessProfile.createClient({ accessToken: "token", fetch: fetchMock });
  const location = "accounts/1/locations/2";

  await client.resources.localPosts.reportInsights(location, [`${location}/localPosts/3`]);
  await client.resources.performance.fetchMultiDailyMetricsTimeSeries(location, {
    dailyMetrics: ["WEBSITE_CLICKS", "CALL_CLICKS"],
    startDate: { year: 2026, month: 8, day: 1 },
    endDate: { year: 2026, month: 8, day: 2 },
  });

  expect(calls[0]).toContain("localPosts:reportInsights");
  expect(calls[1]).toContain("locations/2:fetchMultiDailyMetricsTimeSeries");
  expect(calls[1]).toContain("dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS");
  expect(() => client.resources.localPosts.reportInsights(location, [])).toThrow();
});

test("builds offline OAuth and refreshes tokens", async () => {
  const fetchMock = (async () =>
    json({
      access_token: "next",
      expires_in: 3600,
      token_type: "Bearer",
    })) as unknown as typeof fetch;
  const oauth = GoogleBusinessProfile.OAuth({
    clientId: "client",
    clientSecret: "secret",
    redirectUri: "https://app.example.com/callback",
    fetch: fetchMock,
  });

  const url = new URL(oauth.getAuthorizationUrl({ state: "state" }));
  expect(url.searchParams.get("access_type")).toBe("offline");
  expect(url.searchParams.get("scope")).toContain("business.manage");
  expect((await oauth.refreshToken("refresh")).access_token).toBe("next");
});
