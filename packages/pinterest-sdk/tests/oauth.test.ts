import { expect, test } from "bun:test";

import { createPinterestOAuth, PinterestScopes } from "../src/index.ts";

const config = {
  clientId: "client-123",
  clientSecret: "secret-456",
  redirectUri: "https://example.com/callback",
};

test("getAuthorizationUrl builds the authorize URL", () => {
  const oauth = createPinterestOAuth(config);
  const url = new URL(oauth.getAuthorizationUrl({ state: "abc123" }));
  expect(url.origin + url.pathname).toBe("https://www.pinterest.com/oauth/");
  expect(url.searchParams.get("client_id")).toBe("client-123");
  expect(url.searchParams.get("redirect_uri")).toBe("https://example.com/callback");
  expect(url.searchParams.get("response_type")).toBe("code");
  expect(url.searchParams.get("state")).toBe("abc123");
  expect(url.searchParams.get("scope")).toBe("boards:read,pins:read,ads:read");
});

test("getAuthorizationUrl supports custom scopes", () => {
  const oauth = createPinterestOAuth(config);
  const url = new URL(
    oauth.getAuthorizationUrl({ state: "s", scopes: [PinterestScopes.AdsWrite] }),
  );
  expect(url.searchParams.get("scope")).toBe("ads:write");
});

test("exchangeCode sends Basic auth and form body", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://api.pinterest.com/v5/oauth/token");
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
        scope: "boards:read",
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const oauth = createPinterestOAuth({ ...config, fetch: fetchImpl });
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

  const oauth = createPinterestOAuth({ ...config, fetch: fetchImpl });
  const tokens = await oauth.refreshToken("old-refresh");
  expect(tokens.access_token).toBe("new-token");
});

test("exchangeCode throws on error responses", async () => {
  const fetchImpl = (async () =>
    new Response(JSON.stringify({ message: "invalid_client" }), {
      status: 400,
    })) as unknown as typeof fetch;

  const oauth = createPinterestOAuth({ ...config, fetch: fetchImpl });
  await expect(oauth.exchangeCode("bad")).rejects.toThrow("invalid_client");
});
