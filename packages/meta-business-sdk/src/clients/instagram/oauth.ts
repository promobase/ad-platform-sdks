import type { OAuthScopeInput } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { InstagramLoginOAuthScopes, type InstagramLoginOAuthScope } from "../../oauth-scopes.ts";
import type {
  InstagramBusinessUserProfile,
  LongLivedToken,
  OAuthConfig,
  ShortLivedToken,
} from "./types.ts";

const IG_OAUTH_BASE = "https://api.instagram.com/oauth";
const IG_GRAPH_BASE = "https://graph.instagram.com";

const shortLivedTokenSchema = v.object({ access_token: v.string(), user_id: v.string() });
const longLivedTokenSchema = v.object({
  access_token: v.string(),
  token_type: v.string(),
  expires_in: v.number(),
});
const profileSchema = v.object({
  id: v.string(),
  user_id: v.optional(v.string()),
  username: v.string(),
  name: v.optional(v.string()),
  account_type: v.optional(v.picklist(["BUSINESS", "MEDIA_CREATOR", "PERSONAL"])),
  media_count: v.optional(v.number()),
  followers_count: v.optional(v.number()),
  follows_count: v.optional(v.number()),
  biography: v.optional(v.string()),
  profile_picture_url: v.optional(v.string()),
  website: v.optional(v.string()),
});

export function createOAuth(config: OAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  return {
    /**
     * Generate the authorization URL to redirect users to.
     */
    getAuthorizationUrl<
      const TRequested extends readonly string[] = readonly InstagramLoginOAuthScope[],
    >(opts?: {
      scopes?: OAuthScopeInput<InstagramLoginOAuthScope, TRequested>;
      state?: string;
    }): string {
      const scopes = opts?.scopes ?? [
        InstagramLoginOAuthScopes.BusinessBasic,
        InstagramLoginOAuthScopes.BusinessContentPublish,
        InstagramLoginOAuthScopes.BusinessManageComments,
        InstagramLoginOAuthScopes.BusinessManageInsights,
        InstagramLoginOAuthScopes.BusinessManageMessages,
      ];
      const params = new URLSearchParams({
        client_id: config.appId,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
      });
      return `${IG_OAUTH_BASE}/authorize?${params.toString()}`;
    },

    /**
     * Exchange authorization code for a short-lived token.
     */
    async exchangeCode(code: string): Promise<ShortLivedToken> {
      const body = new URLSearchParams({
        client_id: config.appId,
        client_secret: config.appSecret,
        grant_type: "authorization_code",
        redirect_uri: config.redirectUri,
        code,
      });

      const response = await fetchImpl(`${IG_OAUTH_BASE}/access_token`, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: config.signal,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`OAuth code exchange failed: ${JSON.stringify(error)}`);
      }

      return v.parse(shortLivedTokenSchema, await response.json());
    },

    /**
     * Exchange short-lived token for a long-lived token (60 days).
     */
    async exchangeForLongLived(shortLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "ig_exchange_token",
        client_secret: config.appSecret,
        access_token: shortLivedToken,
      });

      const response = await fetchImpl(`${IG_GRAPH_BASE}/access_token?${params.toString()}`, {
        signal: config.signal,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Long-lived token exchange failed: ${JSON.stringify(error)}`);
      }

      return v.parse(longLivedTokenSchema, await response.json());
    },

    /**
     * Refresh a long-lived token before it expires.
     * Returns a new token valid for another 60 days.
     * Can only refresh tokens that are at least 24 hours old and not expired.
     */
    async refreshToken(longLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "ig_refresh_token",
        access_token: longLivedToken,
      });

      const response = await fetchImpl(
        `${IG_GRAPH_BASE}/refresh_access_token?${params.toString()}`,
        { signal: config.signal },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Token refresh failed: ${JSON.stringify(error)}`);
      }

      return v.parse(longLivedTokenSchema, await response.json());
    },

    async getBusinessUserProfile(
      accessToken: string,
      id = "me",
    ): Promise<InstagramBusinessUserProfile> {
      const fields = [
        "id",
        "user_id",
        "name",
        "username",
        "profile_picture_url",
        "media_count",
        "followers_count",
        "follows_count",
        "account_type",
        "biography",
        "website",
      ];
      const params = new URLSearchParams({ access_token: accessToken, fields: fields.join(",") });
      const response = await fetchImpl(`${IG_GRAPH_BASE}/v26.0/${id}?${params}`, {
        signal: config.signal,
      });
      if (!response.ok) throw new Error(`Instagram profile fetch failed: ${await response.text()}`);
      return v.parse(profileSchema, await response.json());
    },

    /**
     * Full OAuth flow helper: exchange code -> get long-lived token in one call.
     */
    async completeOAuth(code: string): Promise<{ token: LongLivedToken; userId: string }> {
      const shortLived = await this.exchangeCode(code);
      const longLived = await this.exchangeForLongLived(shortLived.access_token);
      return { token: longLived, userId: shortLived.user_id };
    },
  };
}
