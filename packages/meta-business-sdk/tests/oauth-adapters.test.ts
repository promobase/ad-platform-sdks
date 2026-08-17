import { describe, expect, test } from "bun:test";

import {
  createFacebookOAuthAdapter,
  createInstagramOAuthAdapter,
  createThreadsOAuthAdapter,
} from "../src/oauth-adapters.ts";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("Graph OAuth adapters", () => {
  test("exchanges Facebook code and normalizes the long-lived token", async () => {
    const requests: string[] = [];
    const adapter = createFacebookOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async (input) => {
        requests.push(String(input));
        return requests.length === 1
          ? jsonResponse({ access_token: "short-lived" })
          : jsonResponse({
              access_token: "long-lived",
              token_type: "bearer",
              expires_in: 5_184_000,
            });
      }) as typeof fetch,
    });

    const authorization = await adapter.authorize({ scopes: ["pages_show_list"], state: "state" });
    const grant = await adapter.exchangeCode({
      code: "code",
      state: "state",
      expectedState: "state",
      scopes: ["pages_show_list"],
    });

    expect(authorization.state).toBe("state");
    expect(grant.accessToken).toBe("long-lived");
    expect(grant.providerData.longLived.access_token).toBe("long-lived");
    expect(grant.providerData.credentialFamily).toBe("facebook-login");
    expect(grant.scopes).toEqual(["pages_show_list"]);
    expect(requests).toHaveLength(2);
  });

  test("accepts Facebook long-lived responses without expires_in", async () => {
    const adapter = createFacebookOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async (input) => {
        const url = String(input);
        if (url.includes("fb_exchange_token")) {
          return jsonResponse({ access_token: "long-lived", token_type: "bearer" });
        }
        return jsonResponse({ access_token: "short-lived" });
      }) as typeof fetch,
    });

    const grant = await adapter.exchangeCode({
      code: "code",
      state: "state",
      expectedState: "state",
    });

    expect(grant.accessToken).toBe("long-lived");
    expect(grant.accessTokenExpiresAt).toBeInstanceOf(Date);
  });

  test("lists Facebook Pages with the fields needed by account setup", async () => {
    const adapter = createFacebookOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async (input) => {
        expect(String(input)).toContain("me/accounts");
        expect(String(input)).toContain("fan_count");
        return jsonResponse({
          data: [
            {
              id: "page-1",
              name: "Page One",
              access_token: "page-token",
              fan_count: 42,
              about: "A page",
              picture: { data: { url: "https://example.test/page.jpg" } },
            },
          ],
        });
      }) as typeof fetch,
    });

    await expect(adapter.listPages({ accessToken: "user-token" })).resolves.toEqual([
      expect.objectContaining({
        id: "page-1",
        name: "Page One",
        access_token: "page-token",
        fan_count: 42,
      }),
    ]);
  });

  test("normalizes Instagram numeric user IDs from the OAuth token response", async () => {
    const responses = [
      '{"access_token":"short-lived","user_id":25159999793598036}',
      JSON.stringify({ access_token: "long-lived", token_type: "bearer", expires_in: 5_184_000 }),
    ];
    const adapter = createInstagramOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () =>
        new Response(responses.shift(), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })) as unknown as typeof fetch,
    });

    const grant = await adapter.exchangeCode({
      code: "code",
      state: "state",
      expectedState: "state",
    });

    expect(grant.accessToken).toBe("long-lived");
    expect(grant.providerData.shortLived.user_id).toBe("25159999793598036");
  });

  test("validates provider token payloads before normalization", async () => {
    const adapter = createFacebookOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () => jsonResponse({ access_token: "short-lived" })) as unknown as typeof fetch,
    });

    await expect(
      adapter.exchangeCode({ code: "code", state: "state", expectedState: "state" }),
    ).rejects.toThrow();
  });

  test("enforces state and PKCE requirements at the adapter boundary", async () => {
    const facebook = createFacebookOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
    });
    await expect(
      facebook.exchangeCode({ code: "code", state: "wrong", expectedState: "stored" }),
    ).rejects.toThrow("OAuth state mismatch");
    await expect(facebook.exchangeCode({ code: "code" })).rejects.toThrow(
      "OAuth state and expectedState are required",
    );

    const threads = createThreadsOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
    });
    const authorization = await threads.authorize({
      scopes: ["threads_basic"],
      state: "state",
      pkce: "auto",
    });
    expect(authorization.codeVerifier).toBeString();
    expect(authorization.url).toContain("code_challenge=");
    await expect(
      threads.exchangeCode({ code: "code", state: "state", expectedState: "state" }),
    ).rejects.toThrow("code verifier");

    const instagram = createInstagramOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
    });
    await expect(
      instagram.authorize({ scopes: ["instagram_business_basic"], state: "state", pkce: "auto" }),
    ).rejects.toThrow("does not use PKCE");
  });

  test("exposes typed Instagram and Threads profile discovery", async () => {
    const instagram = createInstagramOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () =>
        jsonResponse({
          id: "ig-1",
          username: "instagram",
          followers_count: 10,
        })) as unknown as typeof fetch,
    });
    const threads = createThreadsOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () =>
        jsonResponse({
          id: "threads-1",
          username: "threads",
          threads_biography: "hello",
        })) as unknown as typeof fetch,
    });

    const instagramProfile = await instagram.getProfile({ accessToken: "access" });
    const threadsProfile = await threads.getProfile({ accessToken: "access" });

    expect(instagramProfile.followers_count).toBe(10);
    expect(threadsProfile.threads_biography).toBe("hello");
  });
});
