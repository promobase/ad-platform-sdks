import { describe, expect, test } from "bun:test";

import { createGoogleBusinessProfileOAuthAdapter } from "../src/oauth-adapters.ts";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("Google Business Profile OAuth adapter", () => {
  test("discovers accounts and locations with the normalized grant", async () => {
    let call = 0;
    const adapter = createGoogleBusinessProfileOAuthAdapter({
      clientId: "client",
      clientSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () => {
        call += 1;
        if (call === 1) {
          return jsonResponse({
            access_token: "access",
            refresh_token: "refresh",
            expires_in: 3_600,
            scope: "https://www.googleapis.com/auth/business.manage",
            token_type: "Bearer",
          });
        }
        if (call === 2)
          return jsonResponse({ accounts: [{ name: "accounts/1", accountName: "Owner" }] });
        return jsonResponse({ locations: [{ name: "accounts/1/locations/2", title: "Store" }] });
      }) as unknown as typeof fetch,
    });

    const grant = await adapter.exchangeCode({ code: "code", state: "state" });
    const accounts = await adapter.listAccounts({ accessToken: grant.accessToken });
    const locations = await adapter.listLocations({
      accessToken: grant.accessToken,
      accountName: accounts[0]!.name,
    });

    expect(accounts[0]?.name).toBe("accounts/1");
    expect(locations[0]?.name).toBe("accounts/1/locations/2");
  });
});
