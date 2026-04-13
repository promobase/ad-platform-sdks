import type { LongLivedToken, OAuthConfig, PageToken } from "./types.ts";

const FB_OAUTH_BASE = "https://www.facebook.com";
const FB_GRAPH_BASE = "https://graph.facebook.com";

export function createOAuth(config: OAuthConfig) {
  return {
    /** Generate the authorization URL to redirect users to. */
    getAuthorizationUrl(opts?: { scopes?: string[]; state?: string }): string {
      const scopes = opts?.scopes ?? [
        "pages_show_list",
        "pages_manage_posts",
        "pages_manage_engagement",
        "pages_read_engagement",
        "pages_read_user_engagement",
        "publish_video",
      ];
      const params = new URLSearchParams({
        client_id: config.appId,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
      });
      return `${FB_OAUTH_BASE}/v25.0/dialog/oauth?${params.toString()}`;
    },

    /** Exchange authorization code for a short-lived user token. */
    async exchangeCode(code: string): Promise<{ access_token: string }> {
      const params = new URLSearchParams({
        client_id: config.appId,
        client_secret: config.appSecret,
        redirect_uri: config.redirectUri,
        code,
      });

      const response = await fetch(
        `${FB_GRAPH_BASE}/v25.0/oauth/access_token?${params.toString()}`,
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Facebook OAuth code exchange failed: ${JSON.stringify(error)}`);
      }

      return response.json() as Promise<{ access_token: string }>;
    },

    /** Exchange short-lived user token for a long-lived user token (60 days). */
    async exchangeForLongLived(shortLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "fb_exchange_token",
        client_id: config.appId,
        client_secret: config.appSecret,
        fb_exchange_token: shortLivedToken,
      });

      const response = await fetch(
        `${FB_GRAPH_BASE}/v25.0/oauth/access_token?${params.toString()}`,
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Long-lived token exchange failed: ${JSON.stringify(error)}`);
      }

      return response.json() as Promise<LongLivedToken>;
    },

    /**
     * Get Page tokens for all Pages the user manages.
     * Each Page gets its own long-lived access token that doesn't expire
     * as long as the user token used to get it is a long-lived token.
     */
    async getPageTokens(userAccessToken: string): Promise<PageToken[]> {
      const params = new URLSearchParams({
        access_token: userAccessToken,
        fields: "id,name,access_token,username,picture",
      });

      const response = await fetch(`${FB_GRAPH_BASE}/v25.0/me/accounts?${params.toString()}`);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to get Page tokens: ${JSON.stringify(error)}`);
      }

      const body = (await response.json()) as { data: PageToken[] };
      return body.data;
    },

    /**
     * Full OAuth flow: exchange code → long-lived user token → Page tokens.
     */
    async completeOAuth(code: string): Promise<{ userToken: LongLivedToken; pages: PageToken[] }> {
      const shortLived = await this.exchangeCode(code);
      const longLived = await this.exchangeForLongLived(shortLived.access_token);
      const pages = await this.getPageTokens(longLived.access_token);
      return { userToken: longLived, pages };
    },
  };
}
