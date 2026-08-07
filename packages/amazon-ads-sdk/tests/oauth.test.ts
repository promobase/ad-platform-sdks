import { expect, test } from "bun:test";

import { createAmazonAdsOAuth, AmazonAdsScopes } from "../src/index.ts";

const config = {
  clientId: "client-123",
  clientSecret: "secret-456",
  redirectUri: "https://example.com/callback",
};

test("getAuthorizationUrl builds the LWA authorize URL", () => {
  const oauth = createAmazonAdsOAuth(config);
  const url = new URL(oauth.getAuthorizationUrl({ state: "abc123" }));
  expect(url.origin + url.pathname).toBe("https://www.amazon.com/ap/oa");
  expect(url.searchParams.get("client_id")).toBe("client-123");
  expect(url.searchParams.get("redirect_uri")).toBe("https://example.com/callback");
  expect(url.searchParams.get("response_type")).toBe("code");
  expect(url.searchParams.get("state")).toBe("abc123");
  expect(url.searchParams.get("scope")).toBe("advertising::campaign_management");
});

test("getAuthorizationUrl supports custom scopes", () => {
  const oauth = createAmazonAdsOAuth(config);
  const url = new URL(
    oauth.getAuthorizationUrl({ state: "s", scopes: [AmazonAdsScopes.Audiences] }),
  );
  expect(url.searchParams.get("scope")).toBe("advertising::audiences");
});

test("exchangeCode sends Basic auth to the LWA token endpoint", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://api.amazon.com/auth/o2/token");
    expect(init?.method).toBe("POST");
    const headers = init?.headers as Record<string, string>;
    expect(headers.Authorization).toBe(`Basic ${btoa("client-123:secret-456")}`);
    const body = new URLSearchParams(String(init?.body));
    expect(body.get("grant_type")).toBe("authorization_code");
    expect(body.get("code")).toBe("the-code");
    return new Response(
      JSON.stringify({
        access_token: "token-1",
        token_type: "bearer",
        expires_in: 3600,
        refresh_token: "refresh-1",
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const oauth = createAmazonAdsOAuth({ ...config, fetch: fetchImpl });
  const tokens = await oauth.exchangeCode("the-code");
  expect(tokens.access_token).toBe("token-1");
  expect(tokens.refresh_token).toBe("refresh-1");
});

test("refreshToken posts grant_type=refresh_token", async () => {
  const fetchImpl = (async (_input: string | URL, init?: RequestInit) => {
    const body = new URLSearchParams(String(init?.body));
    expect(body.get("grant_type")).toBe("refresh_token");
    expect(body.get("refresh_token")).toBe("old-refresh");
    return new Response(
      JSON.stringify({ access_token: "new-token", token_type: "bearer", expires_in: 3600 }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const oauth = createAmazonAdsOAuth({ ...config, fetch: fetchImpl });
  const tokens = await oauth.refreshToken("old-refresh");
  expect(tokens.access_token).toBe("new-token");
});
