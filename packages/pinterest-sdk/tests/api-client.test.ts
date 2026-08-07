import { expect, test } from "bun:test";

import { Pinterest, PinterestApiClient, PinterestApiError } from "../src/index.ts";

test("get sends Bearer auth and query params", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://api.pinterest.com/v5/boards?page_size=10");
    expect((init!.headers as Record<string, string>).Authorization).toBe("Bearer tok");
    return new Response(
      JSON.stringify({ items: [{ id: "b1", name: "Travel" }], bookmark: "next-page" }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const api = new PinterestApiClient({ accessToken: "tok", fetch: fetchImpl });
  const result = await api.get<{ items: { id: string }[]; bookmark?: string }>("/boards", {
    page_size: 10,
  });
  expect(result.items[0]!.id).toBe("b1");
  expect(result.bookmark).toBe("next-page");
});

test("throws PinterestApiError on HTTP errors", async () => {
  const fetchImpl = (async () =>
    new Response(JSON.stringify({ code: 4030, message: "You are not authorized" }), {
      status: 403,
    })) as unknown as typeof fetch;

  const api = new PinterestApiClient({ accessToken: "tok", fetch: fetchImpl });
  const error = await api.get("/boards").catch((e: unknown) => e);
  expect(error).toBeInstanceOf(PinterestApiError);
  if (error instanceof PinterestApiError) {
    expect(error.status).toBe(403);
    expect(error.errorCode).toBe(4030);
    expect(error.message).toContain("not authorized");
    expect(error.isAuthError).toBe(true);
  }
});

test("retries 429 responses and succeeds", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) {
      return new Response(JSON.stringify({ code: 4290, message: "rate limited" }), { status: 429 });
    }
    return new Response(JSON.stringify({ items: [] }), { status: 200 });
  }) as unknown as typeof fetch;

  const api = new PinterestApiClient({
    accessToken: "tok",
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  const result = await api.get<{ items: unknown[] }>("/boards");
  expect(result.items).toEqual([]);
  expect(calls).toBe(2);
});

test("patch sends PATCH with JSON body", async () => {
  const fetchImpl = (async (_input: string | URL, init?: RequestInit) => {
    expect(init?.method).toBe("PATCH");
    expect((init!.headers as Record<string, string>)["Content-Type"]).toBe("application/json");
    expect(JSON.parse(String(init?.body))).toEqual({ name: "New Name" });
    return new Response(JSON.stringify({ id: "b1", name: "New Name" }), { status: 200 });
  }) as unknown as typeof fetch;

  const api = new PinterestApiClient({ accessToken: "tok", fetch: fetchImpl });
  const result = await api.patch<{ id: string }>("/boards/b1", { name: "New Name" });
  expect(result.id).toBe("b1");
});

// ─── Generated clients ───────────────────────────────────────────────

test("boards.listBoards returns the typed list response", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://api.pinterest.com/v5/boards");
    return new Response(
      JSON.stringify({
        items: [
          { id: "b1", name: "Travel", owner: { id: "u1", username: "acme" }, privacy: "PUBLIC" },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Pinterest.createClient({ accessToken: "tok", fetch: fetchImpl });
  const boards = await client.boards.listBoards({});
  expect(boards.items[0]!.name).toBe("Travel");
});

test("campaigns.listCampaigns uses the adAccountId path param", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://api.pinterest.com/v5/ad_accounts/aa1/campaigns");
    return new Response(JSON.stringify({ items: [{ id: "c1", name: "Spring" }] }), { status: 200 });
  }) as unknown as typeof fetch;

  const client = Pinterest.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaigns = await client.campaigns.listCampaigns({ adAccountId: "aa1" });
  expect(campaigns.items[0]!.name).toBe("Spring");
});

test("campaigns.createCampaign posts the body with path params stripped", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://api.pinterest.com/v5/ad_accounts/aa1/campaigns");
    const body = JSON.parse(String(init?.body));
    expect(body).toEqual([{ name: "Spring Sale", objective_type: "AWARENESS" }]);
    return new Response(JSON.stringify({ items: [{ data: { id: "c9", name: "Spring Sale" } }] }), {
      status: 200,
    });
  }) as unknown as typeof fetch;

  const client = Pinterest.createClient({ accessToken: "tok", fetch: fetchImpl });
  const campaign = await client.campaigns.createCampaign({
    adAccountId: "aa1",
    body: [{ name: "Spring Sale", objective_type: "AWARENESS" }],
  });
  expect(campaign.items[0]!.data!.id).toBe("c9");
});

test("pins.getPin returns a single pin", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://api.pinterest.com/v5/pins/p1");
    return new Response(JSON.stringify({ id: "p1", title: "A pin", link: "https://example.com" }), {
      status: 200,
    });
  }) as unknown as typeof fetch;

  const client = Pinterest.createClient({ accessToken: "tok", fetch: fetchImpl });
  const pin = await client.pins.getPins({ pinId: "p1" });
  expect(pin.title).toBe("A pin");
});
