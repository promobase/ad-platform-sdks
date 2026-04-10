import type { OAuthConfig, ShortLivedToken, LongLivedToken } from "./types.ts";

const THREADS_OAUTH_BASE = "https://threads.net/oauth";
const THREADS_GRAPH_BASE = "https://graph.threads.net";

export function createOAuth(config: OAuthConfig) {
  return {
    getAuthorizationUrl(opts?: { scopes?: string[]; state?: string }): string {
      const scopes = opts?.scopes ?? [
        "threads_basic",
        "threads_content_publish",
        "threads_manage_replies",
        "threads_read_replies",
        "threads_manage_insights",
      ];
      const params = new URLSearchParams({
        client_id: config.appId,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
      });
      return `${THREADS_OAUTH_BASE}/authorize?${params.toString()}`;
    },

    async exchangeCode(code: string): Promise<ShortLivedToken> {
      const body = new URLSearchParams({
        client_id: config.appId,
        client_secret: config.appSecret,
        grant_type: "authorization_code",
        redirect_uri: config.redirectUri,
        code,
      });
      const response = await fetch(`${THREADS_GRAPH_BASE}/oauth/access_token`, {
        method: "POST", body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Threads OAuth code exchange failed: ${JSON.stringify(error)}`);
      }
      return response.json() as Promise<ShortLivedToken>;
    },

    async exchangeForLongLived(shortLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "th_exchange_token",
        client_secret: config.appSecret,
        access_token: shortLivedToken,
      });
      const response = await fetch(`${THREADS_GRAPH_BASE}/access_token?${params.toString()}`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Threads long-lived token exchange failed: ${JSON.stringify(error)}`);
      }
      return response.json() as Promise<LongLivedToken>;
    },

    async refreshToken(longLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "th_refresh_token",
        access_token: longLivedToken,
      });
      const response = await fetch(`${THREADS_GRAPH_BASE}/refresh_access_token?${params.toString()}`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Threads token refresh failed: ${JSON.stringify(error)}`);
      }
      return response.json() as Promise<LongLivedToken>;
    },

    async completeOAuth(code: string): Promise<{ token: LongLivedToken; userId: string }> {
      const shortLived = await this.exchangeCode(code);
      const longLived = await this.exchangeForLongLived(shortLived.access_token);
      return { token: longLived, userId: shortLived.user_id };
    },
  };
}
