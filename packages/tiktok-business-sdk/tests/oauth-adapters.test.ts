import { describe, expect, test } from "bun:test";

import {
  createTikTokAdvertiserOAuthAdapter,
  createTikTokBusinessOAuthAdapter,
  createTikTokDeveloperOAuthAdapter,
} from "../src/oauth-adapters.ts";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("TikTok OAuth adapters", () => {
  test("normalizes Business refresh and exposes typed profile discovery", async () => {
    let call = 0;
    const adapter = createTikTokBusinessOAuthAdapter({
      clientKey: "client",
      clientSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () => {
        call += 1;
        if (call === 3) {
          return jsonResponse({
            code: 0,
            message: "OK",
            request_id: "profile-request",
            data: { display_name: "Business", username: "business" },
          });
        }
        return jsonResponse({
          code: 0,
          message: "OK",
          request_id: `request-${call}`,
          data: {
            access_token: call === 1 ? "access-1" : "access-2",
            token_type: "Bearer",
            scope: "user.info.basic video.publish",
            expires_in: 86_400,
            refresh_token: "refresh-2",
            refresh_token_expires_in: 31_536_000,
            open_id: "business-1",
          },
        });
      }) as unknown as typeof fetch,
    });

    const grant = await adapter.exchangeCode({ code: "code", state: "state" });
    const refreshed = await adapter.refresh!({ refreshToken: grant.refreshToken });
    const profile = await adapter.getProfile({
      accessToken: refreshed.accessToken,
      businessId: refreshed.providerData.open_id,
    });

    expect(grant.scopes).toEqual(["user.info.basic", "video.publish"]);
    expect(grant.providerData.credentialFamily).toBe("business-login");
    expect(refreshed.accessToken).toBe("access-2");
    expect(profile.username).toBe("business");
  });

  test("supports the advertiser compatibility flow and discovery", async () => {
    let call = 0;
    const adapter = createTikTokAdvertiserOAuthAdapter({
      appId: "app",
      appSecret: "secret",
      redirectUri: "https://example.test/advertiser-callback",
      fetch: (async () => {
        call += 1;
        return jsonResponse(
          call === 1
            ? {
                code: 0,
                message: "OK",
                data: { access_token: "advertiser-access", advertiser_ids: ["adv-1"] },
              }
            : {
                code: 0,
                message: "OK",
                data: {
                  list: [{ advertiser_id: "adv-1", advertiser_name: "Advertiser" }],
                },
              },
        );
      }) as unknown as typeof fetch,
    });

    const authorization = await adapter.authorize({ scopes: [], state: "state" });
    const grant = await adapter.exchangeCode({
      code: "code",
      state: "state",
      scopes: ["advertiser.read"],
    });
    const advertisers = await adapter.listAdvertisers({
      accessToken: grant.accessToken,
      advertiserIds: grant.providerData.advertiser_ids ?? [],
    });

    expect(authorization.url).toContain("portal/auth");
    expect(grant.accessToken).toBe("advertiser-access");
    expect(grant.scopes).toEqual(["advertiser.read"]);
    expect(grant.providerData.credentialFamily).toBe("marketing-api");
    expect(advertisers[0]?.advertiser_id).toBe("adv-1");
  });

  test("requires PKCE for the Developer compatibility flow", async () => {
    const adapter = createTikTokDeveloperOAuthAdapter({
      clientKey: "client",
      clientSecret: "secret",
      redirectUri: "https://example.test/callback",
    });
    const authorization = await adapter.authorize({
      scopes: ["user.info.basic"],
      state: "state",
      pkce: "auto",
    });

    expect(authorization.codeVerifier).toBeString();
    await expect(
      adapter.exchangeCode({ code: "code", state: "state", expectedState: "state" }),
    ).rejects.toThrow("code verifier");
  });
});
