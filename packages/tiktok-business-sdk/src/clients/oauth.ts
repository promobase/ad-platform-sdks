import type { OAuthConfig, TokenResponse, TokenInfo, TikTokResponse } from "./types.ts";

const TT_AUTH_BASE = "https://www.tiktok.com/v2/auth/authorize";
const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

export function createOAuth(config: OAuthConfig) {
  return {
    /** Generate the authorization URL to redirect users to. */
    getAuthorizationUrl(opts?: { scopes?: string[]; state?: string; disableAutoAuth?: boolean }): string {
      const scopes = opts?.scopes ?? [
        "user.info.basic",
        "user.info.username",
        "user.info.profile",
        "user.info.stats",
        "user.account.type",
        "user.insights",
        "video.list",
        "video.insights",
        "video.publish",
        "video.upload",
        "comment.list",
        "comment.list.manage",
        "biz.spark.auth",
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
      const response = await fetch(`${TT_API_BASE}/tt_user/oauth2/token/`, {
        method: "POST",
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

      const body = (await response.json()) as TikTokResponse<TokenResponse>;
      if (body.code !== 0) {
        throw new Error(`TikTok OAuth code exchange failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /** Refresh access token using a refresh token. Refresh tokens are valid for 1 year. */
    async refreshToken(refreshToken: string): Promise<TokenResponse> {
      const response = await fetch(`${TT_API_BASE}/tt_user/oauth2/refresh_token/`, {
        method: "POST",
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

      const body = (await response.json()) as TikTokResponse<TokenResponse>;
      if (body.code !== 0) {
        throw new Error(`TikTok token refresh failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /** Revoke an access token. */
    async revokeToken(accessToken: string): Promise<void> {
      const response = await fetch(`${TT_API_BASE}/tt_user/oauth2/revoke/`, {
        method: "POST",
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

      const body = (await response.json()) as TikTokResponse<Record<string, never>>;
      if (body.code !== 0) {
        throw new Error(`TikTok token revocation failed: ${body.message} (code ${body.code})`);
      }
    },

    /**
     * Inspect an access token to check its scopes and associated account.
     * Uses app credentials (not the access token in the header).
     */
    async getTokenInfo(accessToken: string): Promise<TokenInfo> {
      const response = await fetch(`${TT_API_BASE}/tt_user/token_info/get/`, {
        method: "POST",
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

      const body = (await response.json()) as TikTokResponse<TokenInfo>;
      if (body.code !== 0) {
        throw new Error(`TikTok token info failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /**
     * Fetch user profile info using the Business API.
     * Returns display_name, username, profile_image, follower counts, etc.
     */
    async getUserProfile(accessToken: string, businessId: string): Promise<Record<string, unknown>> {
      const fields = [
        "display_name", "username", "profile_image", "profile_deep_link",
        "bio_description", "is_verified", "is_business_account",
        "followers_count", "following_count", "total_likes", "videos_count",
      ];
      const params = new URLSearchParams({
        business_id: businessId,
        fields: JSON.stringify(fields),
      });

      const response = await fetch(`${TT_API_BASE}/business/get/?${params.toString()}`, {
        headers: { "Access-Token": accessToken },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to get TikTok user profile: ${JSON.stringify(error)}`);
      }

      const body = (await response.json()) as TikTokResponse<Record<string, unknown>>;
      if (body.code !== 0) {
        throw new Error(`TikTok user profile failed: ${body.message} (code ${body.code})`);
      }
      return body.data;
    },

    /**
     * Full OAuth flow: exchange code -> get tokens + profile in one call.
     * Access token expires in 24 hours, refresh token in 1 year.
     */
    async completeOAuth(code: string): Promise<{ token: TokenResponse; businessId: string; profile: Record<string, unknown> }> {
      const token = await this.exchangeCode(code);
      const profile = await this.getUserProfile(token.access_token, token.open_id);
      return { token, businessId: token.open_id, profile };
    },
  };
}
