import {
  AllPlatforms,
  assertOAuthState,
  OAuthAdapterError,
  secondsFromNow,
  type OAuthAdapter,
  type OAuthTokenSet,
} from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { createYouTubeClient } from "./client.ts";
import { createYouTubeOAuth } from "./oauth.ts";
import type { YouTubeOAuthConfig, YouTubeOAuthTokenResponse } from "./oauth.ts";

export interface YouTubeChannelAccount {
  readonly id: string;
  readonly title: string;
  readonly customUrl?: string;
  readonly thumbnailUrl?: string;
  readonly subscriberCount?: number;
}

const tokenSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string()),
  scope: v.optional(v.string()),
  token_type: v.string(),
  id_token: v.optional(v.string()),
});
const channelListSchema = v.object({
  items: v.optional(
    v.array(
      v.object({
        id: v.optional(v.string()),
        snippet: v.optional(
          v.object({
            title: v.optional(v.string()),
            customUrl: v.optional(v.string()),
            thumbnails: v.optional(
              v.object({
                default: v.optional(v.object({ url: v.string() })),
                medium: v.optional(v.object({ url: v.string() })),
              }),
            ),
          }),
        ),
        statistics: v.optional(v.object({ subscriberCount: v.optional(v.string()) })),
      }),
    ),
  ),
});

function tokenSet(raw: YouTubeOAuthTokenResponse): OAuthTokenSet<YouTubeOAuthTokenResponse> {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
    tokenType: raw.token_type,
    scopes: raw.scope?.split(" ").filter(Boolean) ?? [],
    accessTokenExpiresAt: secondsFromNow(raw.expires_in),
    providerData: raw,
  };
}

/** Normalized OAuth adapter for YouTube's Google OAuth flow. */
export function createYouTubeOAuthAdapter(
  config: YouTubeOAuthConfig,
): OAuthAdapter<YouTubeOAuthTokenResponse> & {
  listChannels(input: {
    accessToken: string;
    channelId?: string;
  }): Promise<readonly YouTubeChannelAccount[]>;
} {
  const legacy = createYouTubeOAuth(config);
  return {
    provider: AllPlatforms.YOUTUBE,
    async authorize(input) {
      if (input.pkce !== undefined) {
        throw new OAuthAdapterError("YouTube OAuth does not use PKCE", {
          provider: AllPlatforms.YOUTUBE,
          phase: "authorize",
        });
      }
      return {
        url: legacy.getAuthorizationUrl({ scopes: [...input.scopes], state: input.state }),
        state: input.state,
      };
    },
    async exchangeCode(input) {
      assertOAuthState(input.state, input.expectedState);
      return tokenSet(v.parse(tokenSchema, await legacy.exchangeCode(input.code)));
    },
    async refresh(input) {
      if (!input.refreshToken) {
        throw new OAuthAdapterError("YouTube refresh requires a refresh token", {
          provider: AllPlatforms.YOUTUBE,
          phase: "refresh",
        });
      }
      return tokenSet(v.parse(tokenSchema, await legacy.refreshToken(input.refreshToken)));
    },
    async revoke(input) {
      await legacy.revokeToken(input.token);
    },
    async listChannels(input) {
      const client = createYouTubeClient({
        accessToken: input.accessToken,
        fetch: config.fetch,
      });
      const response = await client.resources.channels.list(
        {
          part: ["snippet", "statistics"],
          ...(input.channelId ? { id: [input.channelId] } : { mine: true }),
        },
        undefined,
        { signal: config.signal },
      );
      const body = v.parse(channelListSchema, response);
      return (body.items ?? [])
        .filter((item): item is typeof item & { id: string; snippet: { title: string } } =>
          Boolean(item.id && item.snippet?.title),
        )
        .map((item) => ({
          id: item.id,
          title: item.snippet.title,
          customUrl: item.snippet.customUrl,
          thumbnailUrl:
            item.snippet.thumbnails?.medium?.url ?? item.snippet.thumbnails?.default?.url,
          subscriberCount:
            item.statistics?.subscriberCount === undefined
              ? undefined
              : Number(item.statistics.subscriberCount),
        }));
    },
  };
}
