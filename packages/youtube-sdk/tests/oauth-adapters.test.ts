import { describe, expect, test } from "bun:test";

import { createYouTubeOAuthAdapter } from "../src/oauth-adapters.ts";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("YouTube OAuth adapter", () => {
  test("discovers the authenticated channel after token exchange", async () => {
    let call = 0;
    const adapter = createYouTubeOAuthAdapter({
      clientId: "client",
      clientSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async () => {
        call += 1;
        return call === 1
          ? jsonResponse({
              access_token: "access",
              refresh_token: "refresh",
              expires_in: 3_600,
              scope: "youtube.upload youtube.readonly",
              token_type: "Bearer",
            })
          : jsonResponse({
              items: [
                {
                  id: "channel-1",
                  snippet: {
                    title: "Channel",
                    customUrl: "@channel",
                    thumbnails: { medium: { url: "https://img.example/channel.jpg" } },
                  },
                  statistics: { subscriberCount: "42" },
                },
              ],
            });
      }) as unknown as typeof fetch,
    });

    const grant = await adapter.exchangeCode({ code: "code", state: "state" });
    const channels = await adapter.listChannels({ accessToken: grant.accessToken });

    expect(channels).toHaveLength(1);
    expect(channels[0]).toEqual({
      id: "channel-1",
      title: "Channel",
      customUrl: "@channel",
      thumbnailUrl: "https://img.example/channel.jpg",
      subscriberCount: 42,
    });
  });
});
