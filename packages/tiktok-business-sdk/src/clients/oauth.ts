import type { OAuthScopeInput } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { TikTokBusinessOAuthScopes, type TikTokBusinessOAuthScope } from "../oauth-scopes.ts";
import type { OAuthConfig, TokenInfo, TokenResponse } from "./types.ts";

const TT_AUTH_BASE = "https://www.tiktok.com/v2/auth/authorize";
const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

const tokenSchema = v.object({
  access_token: v.string(),
  token_type: v.optional(v.string()),
  scope: v.optional(v.string()),
  expires_in: v.number(),
  refresh_token: v.string(),
  refresh_token_expires_in: v.optional(v.number()),
  open_id: v.string(),
});
const tokenInfoSchema = v.object({
  app_id: v.string(),
  creator_id: v.string(),
  scope: v.string(),
});
const profileSchema = v.record(v.string(), v.unknown());

function responseSchema<TSchema extends v.GenericSchema>(data: TSchema) {
  return v.object({
    code: v.number(),
    message: v.string(),
    request_id: v.string(),
    data,
  });
}

export function createOAuth(config: OAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  return {
    /** Generate the authorization URL to redirect users to. */
    getAuthorizationUrl<
      const TRequested extends readonly string[] = readonly TikTokBusinessOAuthScope[],
    >(opts?: {
      scopes?: OAuthScopeInput<TikTokBusinessOAuthScope, TRequested>;
      state?: string;
      disableAutoAuth?: boolean;
    }): string {
      const scopes = opts?.scopes ?? [
        TikTokBusinessOAuthScopes.UserInfoBasic,
        TikTokBusinessOAuthScopes.UserInfoUsername,
        TikTokBusinessOAuthScopes.UserInfoProfile,
        TikTokBusinessOAuthScopes.UserInfoStats,
        TikTokBusinessOAuthScopes.UserAccountType,
        TikTokBusinessOAuthScopes.UserInsights,
        TikTokBusinessOAuthScopes.VideoList,
        TikTokBusinessOAuthScopes.VideoInsights,
        TikTokBusinessOAuthScopes.VideoPublish,
        TikTokBusinessOAuthScopes.VideoUpload,
        TikTokBusinessOAuthScopes.CommentList,
        TikTokBusinessOAuthScopes.CommentListManage,
        TikTokBusinessOAuthScopes.BizSparkAuth,
      ];
      const params = new URLSearchParams({
        client_key: config.clientKey,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
        ...(opts?.disableAutoAuth ? { disable_auto_auth: "1" } : {}),
      });
      return `${TT_AUTH_BASE}?${params.toString()}`;
    },

    /** Exchange authorization code for access + refresh tokens. Auth code is valid 10 minutes, single-use. */
    async exchangeCode(code: string): Promise<TokenResponse> {
      const response = await fetchImpl(`${TT_API_BASE}/tt_user/oauth2/token/`, {
        method: "POST",
        signal: config.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: config.clientKey,
          client_secret: config.clientSecret,
          grant_type: "authorization_code",
          auth_code: code,
          redirect_uri: config.redirectUri,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`TikTok OAuth code exchange failed: ${JSON.stringify(error)}`);
      }

      const body = v.parse(responseSchema(tokenSchema), await response.json());
      if (body.code !== 0) {
        throw new Error(`TikTok OAuth code exchange failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /** Refresh access token using a refresh token. Refresh tokens are valid for 1 year. */
    async refreshToken(refreshToken: string): Promise<TokenResponse> {
      const response = await fetchImpl(`${TT_API_BASE}/tt_user/oauth2/refresh_token/`, {
        method: "POST",
        signal: config.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: config.clientKey,
          client_secret: config.clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`TikTok token refresh failed: ${JSON.stringify(error)}`);
      }

      const body = v.parse(responseSchema(tokenSchema), await response.json());
      if (body.code !== 0) {
        throw new Error(`TikTok token refresh failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /** Revoke an access token. */
    async revokeToken(accessToken: string): Promise<void> {
      const response = await fetchImpl(`${TT_API_BASE}/tt_user/oauth2/revoke/`, {
        method: "POST",
        signal: config.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: config.clientKey,
          client_secret: config.clientSecret,
          access_token: accessToken,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`TikTok token revocation failed: ${JSON.stringify(error)}`);
      }

      const body = v.parse(responseSchema(v.record(v.string(), v.never())), await response.json());
      if (body.code !== 0) {
        throw new Error(`TikTok token revocation failed: ${body.message} (code ${body.code})`);
      }
    },

    /**
     * Inspect an access token to check its scopes and associated account.
     * Uses app credentials (not the access token in the header).
     */
    async getTokenInfo(accessToken: string): Promise<TokenInfo> {
      const response = await fetchImpl(`${TT_API_BASE}/tt_user/token_info/get/`, {
        method: "POST",
        signal: config.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          app_id: config.clientKey,
          access_token: accessToken,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`TikTok token info failed: ${JSON.stringify(error)}`);
      }

      const body = v.parse(responseSchema(tokenInfoSchema), await response.json());
      if (body.code !== 0) {
        throw new Error(`TikTok token info failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /**
     * Fetch user profile info using the Business API.
     * Returns display_name, username, profile_image, follower counts, etc.
     */
    async getUserProfile(
      accessToken: string,
      businessId: string,
    ): Promise<Record<string, unknown>> {
      const fields = [
        "display_name",
        "username",
        "profile_image",
        "profile_deep_link",
        "bio_description",
        "is_verified",
        "is_business_account",
        "followers_count",
        "following_count",
        "total_likes",
        "videos_count",
      ];
      const params = new URLSearchParams({
        business_id: businessId,
        fields: JSON.stringify(fields),
      });

      const response = await fetchImpl(`${TT_API_BASE}/business/get/?${params.toString()}`, {
        headers: { "Access-Token": accessToken },
        signal: config.signal,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to get TikTok user profile: ${JSON.stringify(error)}`);
      }

      const body = v.parse(responseSchema(profileSchema), await response.json());
      if (body.code !== 0) {
        throw new Error(`TikTok user profile failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /**
     * Full OAuth flow: exchange code -> get tokens + profile in one call.
     * Access token expires in 24 hours, refresh token in 1 year.
     */
    async completeOAuth(
      code: string,
    ): Promise<{ token: TokenResponse; businessId: string; profile: Record<string, unknown> }> {
      const token = await this.exchangeCode(code);
      const profile = await this.getUserProfile(token.access_token, token.open_id);
      return { token, businessId: token.open_id, profile };
    },
  };
}
