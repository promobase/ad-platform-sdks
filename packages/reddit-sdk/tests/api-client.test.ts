import { expect, test } from "bun:test";

import { Reddit, RedditApiClient, RedditApiError } from "../src/index.ts";

function envelope(data: unknown, status = 200): Response {
  return new Response(JSON.stringify({ data }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

test("get sends Bearer auth and returns the envelope", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://ads-api.reddit.com/api/v3/accounts?limit=10");
    expect((init!.headers as Record<string, string>).Authorization).toBe("Bearer tok");
    return envelope({ accounts: [{ id: "t2_1", name: "Acme" }] });
  }) as unknown as typeof fetch;

  const api = new RedditApiClient({ accessToken: "tok", fetch: fetchImpl });
  const result = await api.get<{ data: { accounts: { id: string; name: string }[] } }>(
    "/accounts",
    { limit: 10 },
  );
  expect(result.data.accounts).toHaveLength(1);
});

test("throws RedditApiError on HTTP errors with error object", async () => {
  const fetchImpl = (async () =>
    new Response(
      JSON.stringify({
        error: { code: "PERMISSION_DENIED", message: "No access to this account" },
      }),
      { status: 403 },
    )) as unknown as typeof fetch;

  const api = new RedditApiClient({ accessToken: "tok", fetch: fetchImpl });
  const error = await api.get("/accounts").catch((e: unknown) => e);
  expect(error).toBeInstanceOf(RedditApiError);
  if (error instanceof RedditApiError) {
    expect(error.status).toBe(403);
    expect(error.errorCode).toBe("PERMISSION_DENIED");
    expect(error.message).toContain("No access");
    expect(error.isAuthError).toBe(true);
  }
});

test("retries 429 responses and succeeds", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) {
      return new Response(JSON.stringify({ error: { code: "RATE_LIMIT", message: "slow down" } }), {
        status: 429,
      });
    }
    return envelope({ accounts: [] });
  }) as unknown as typeof fetch;

  const api = new RedditApiClient({
    accessToken: "tok",
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  const result = await api.get<{ data: { accounts: unknown[] } }>("/accounts");
  expect(result.data.accounts).toEqual([]);
  expect(calls).toBe(2);
});

test("retries on network errors", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) throw new TypeError("network down");
    return envelope({ accounts: [] });
  }) as unknown as typeof fetch;

  const api = new RedditApiClient({
    accessToken: "tok",
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  await api.get("/accounts");
  expect(calls).toBe(2);
});

test("post JSON body", async () => {
  const fetchImpl = (async (_input: string | URL, init?: RequestInit) => {
    expect(init?.method).toBe("POST");
    expect((init!.headers as Record<string, string>)["Content-Type"]).toBe("application/json");
    expect(JSON.parse(String(init?.body))).toEqual({ name: "C1" });
    return envelope({ id: "c1", name: "C1" });
  }) as unknown as typeof fetch;

  const api = new RedditApiClient({ accessToken: "tok", fetch: fetchImpl });
  const result = await api.post<{ data: { id: string; name: string } }>("/accounts/a1/campaigns", {
    name: "C1",
  });
  expect(result.data.id).toBe("c1");
});

// ─── Generated clients ───────────────────────────────────────────────

test("accounts.listAccounts returns the data array", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://ads-api.reddit.com/api/v3/accounts");
    return envelope([{ id: "t2_1", name: "Acme", currency: "USD" }]);
  }) as unknown as typeof fetch;

  const client = Reddit.createClient({ accessToken: "tok", fetch: fetchImpl });
  const accounts = await client.accounts.listAccounts({});
  expect(accounts).toHaveLength(1);
  expect(accounts[0]!.id).toBe("t2_1");
});

test("campaigns.listCampaigns uses the account path param", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://ads-api.reddit.com/api/v3/accounts/t2_1/campaigns");
    return envelope([{ id: "c1", name: "Spring", account_id: "t2_1" }]);
  }) as unknown as typeof fetch;

  const client = Reddit.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaigns = await client.campaigns.listCampaigns({ accountId: "t2_1" });
  expect(campaigns[0]!.name).toBe("Spring");
});

test("campaigns.createCampaign posts the body with path params stripped", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://ads-api.reddit.com/api/v3/accounts/t2_1/campaigns");
    const body = JSON.parse(String(init?.body));
    expect(body).toEqual({
      name: "Spring Sale",
      objective: "LEADS",
      configured_status: "ACTIVE",
      funding_instrument_id: "fi_1",
    });
    expect(body.accountId).toBeUndefined();
    return envelope({ id: "c9", name: "Spring Sale", account_id: "t2_1" });
  }) as unknown as typeof fetch;

  const client = Reddit.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaign = await client.campaigns.createCampaign({
    accountId: "t2_1",
    name: "Spring Sale",
    objective: "LEADS",
    configured_status: "ACTIVE",
    funding_instrument_id: "fi_1",
  });
  expect(campaign.id).toBe("c9");
});

test("campaigns.getCampaign returns a single object", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://ads-api.reddit.com/api/v3/accounts/t2_1/campaigns/c1");
    return envelope({ id: "c1", name: "C1", account_id: "t2_1" });
  }) as unknown as typeof fetch;

  const client = Reddit.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaign = await client.campaigns.getCampaign({ accountId: "t2_1", campaignId: "c1" });
  expect(campaign.name).toBe("C1");
});

test("campaigns.deleteCampaign sends DELETE", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://ads-api.reddit.com/api/v3/accounts/t2_1/campaigns/c1");
    expect(init?.method).toBe("DELETE");
    return new Response(JSON.stringify({ data: {} }), { status: 200 });
  }) as unknown as typeof fetch;

  const client = Reddit.createClient({ accessToken: "tok", fetch: fetchImpl });
  await client.campaigns.deleteCampaign({ accountId: "t2_1", campaignId: "c1" });
});
