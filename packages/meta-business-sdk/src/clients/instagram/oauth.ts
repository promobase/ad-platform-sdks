import type { OAuthConfig, ShortLivedToken, LongLivedToken } from "./types.ts";

const IG_OAUTH_BASE = "https://api.instagram.com/oauth";
const IG_GRAPH_BASE = "https://graph.instagram.com";

export function createOAuth(config: OAuthConfig) {
  return {
    /**
     * Generate the authorization URL to redirect users to.
     */
    getAuthorizationUrl(opts?: { scopes?: string[]; state?: string }): string {
      const scopes = opts?.scopes ?? [
        "instagram_business_basic",
        "instagram_business_content_publish",
        "instagram_business_manage_comments",
        "instagram_business_manage_insights",
      ];
      const params = new URLSearchParams({
        client_id: config.appId,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
      });
      return `https://www.instagram.com/oauth/authorize?${params.toString()}`;
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

      const response = await fetch(`${IG_OAUTH_BASE}/access_token`, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`OAuth code exchange failed: ${JSON.stringify(error)}`);
      }

      return response.json() as Promise<ShortLivedToken>;
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

      const response = await fetch(`${IG_GRAPH_BASE}/access_token?${params.toString()}`);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Long-lived token exchange failed: ${JSON.stringify(error)}`);
      }

      return response.json() as Promise<LongLivedToken>;
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

      const response = await fetch(`${IG_GRAPH_BASE}/refresh_access_token?${params.toString()}`);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Token refresh failed: ${JSON.stringify(error)}`);
      }

      return response.json() as Promise<LongLivedToken>;
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
