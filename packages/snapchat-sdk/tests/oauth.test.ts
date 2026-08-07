import { expect, test } from "bun:test";

import { createSnapchatOAuth, SnapchatScopes } from "../src/index.ts";

const config = {
  clientId: "client-123",
  clientSecret: "secret-456",
  redirectUri: "https://example.com/callback",
};

test("getAuthorizationUrl builds the authorize URL", () => {
  const oauth = createSnapchatOAuth(config);
  const url = new URL(oauth.getAuthorizationUrl({ state: "abc123" }));
  expect(url.origin + url.pathname).toBe("https://accounts.snapchat.com/login/oauth2/authorize");
  expect(url.searchParams.get("client_id")).toBe("client-123");
  expect(url.searchParams.get("redirect_uri")).toBe("https://example.com/callback");
  expect(url.searchParams.get("response_type")).toBe("code");
  expect(url.searchParams.get("scope")).toBe("snapchat-marketing-api");
  expect(url.searchParams.get("state")).toBe("abc123");
});

test("getAuthorizationUrl supports multiple scopes", () => {
  const oauth = createSnapchatOAuth(config);
  const url = new URL(
    oauth.getAuthorizationUrl({ scopes: [SnapchatScopes.Marketing, SnapchatScopes.Conversions] }),
  );
  expect(url.searchParams.get("scope")).toBe(
    "snapchat-marketing-api snapchat-offline-conversions-api",
  );
});

test("exchangeCode posts form-encoded credentials and returns tokens", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    const url = String(input);
    expect(url).toBe("https://accounts.snapchat.com/login/oauth2/access_token");
    expect(init?.method).toBe("POST");
    const body = new URLSearchParams(String(init?.body));
    expect(body.get("grant_type")).toBe("authorization_code");
    expect(body.get("code")).toBe("the-code");
    expect(body.get("client_id")).toBe("client-123");
    expect(body.get("client_secret")).toBe("secret-456");
    expect(body.get("redirect_uri")).toBe("https://example.com/callback");
    return new Response(
      JSON.stringify({
        access_token: "0.token",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "refresh-token",
        scope: "snapchat-marketing-api",
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const oauth = createSnapchatOAuth({ ...config, fetch: fetchImpl });
  const tokens = await oauth.exchangeCode("the-code");
  expect(tokens.access_token).toBe("0.token");
  expect(tokens.refresh_token).toBe("refresh-token");
  expect(tokens.expires_in).toBe(3600);
});

test("refreshToken posts grant_type=refresh_token", async () => {
  const fetchImpl = (async (_input: string | URL, init?: RequestInit) => {
    const body = new URLSearchParams(String(init?.body));
    expect(body.get("grant_type")).toBe("refresh_token");
    expect(body.get("refresh_token")).toBe("old-refresh");
    return new Response(
      JSON.stringify({ access_token: "new-token", token_type: "Bearer", expires_in: 3600 }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const oauth = createSnapchatOAuth({ ...config, fetch: fetchImpl });
  const tokens = await oauth.refreshToken("old-refresh");
  expect(tokens.access_token).toBe("new-token");
});

test("exchangeCode throws on error responses", async () => {
  const fetchImpl = (async () =>
    new Response(JSON.stringify({ error: "invalid_grant", error_description: "code expired" }), {
      status: 400,
    })) as unknown as typeof fetch;

  const oauth = createSnapchatOAuth({ ...config, fetch: fetchImpl });
  await expect(oauth.exchangeCode("bad")).rejects.toThrow("code expired");
});
