import type {
  FacebookPageInfo,
  FacebookPermission,
  FacebookUserProfile,
  LongLivedToken,
  OAuthConfig,
  PageToken,
} from "./types.ts";

const FB_OAUTH_BASE = "https://www.facebook.com";
const FB_GRAPH_BASE = "https://graph.facebook.com";

export function createOAuth(config: OAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  const requestInit: RequestInit = { signal: config.signal };
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

      const response = await fetchImpl(
        `${FB_GRAPH_BASE}/v25.0/oauth/access_token?${params.toString()}`,
        requestInit,
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

      const response = await fetchImpl(
        `${FB_GRAPH_BASE}/v25.0/oauth/access_token?${params.toString()}`,
        requestInit,
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

      const response = await fetchImpl(
        `${FB_GRAPH_BASE}/v25.0/me/accounts?${params.toString()}`,
        requestInit,
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to get Page tokens: ${JSON.stringify(error)}`);
      }

      const body = (await response.json()) as { data: PageToken[] };
      return body.data;
    },

    async getUserProfile(
      accessToken: string,
      id = "me",
      fields = ["id", "name", "picture.width(200).height(200)", "email"],
    ): Promise<FacebookUserProfile> {
      const params = new URLSearchParams({ access_token: accessToken, fields: fields.join(",") });
      const response = await fetchImpl(`${FB_GRAPH_BASE}/v25.0/${id}?${params}`, requestInit);
      if (!response.ok) throw new Error(`Facebook profile fetch failed: ${await response.text()}`);
      return response.json() as Promise<FacebookUserProfile>;
    },

    async getPermissions(accessToken: string): Promise<FacebookPermission[]> {
      const params = new URLSearchParams({ access_token: accessToken });
      const response = await fetchImpl(
        `${FB_GRAPH_BASE}/v25.0/me/permissions?${params}`,
        requestInit,
      );
      if (!response.ok) {
        throw new Error(`Facebook permission fetch failed: ${await response.text()}`);
      }
      const body = (await response.json()) as { data: FacebookPermission[] };
      return body.data;
    },

    async verifyPermissions(accessToken: string, required: string[]): Promise<string[]> {
      const permissions = await this.getPermissions(accessToken);
      const granted = permissions
        .filter((permission) => permission.status === "granted")
        .map((permission) => permission.permission);
      const missing = required.filter((permission) => !granted.includes(permission));
      if (missing.length > 0)
        throw new Error(`Missing Facebook permissions: ${missing.join(", ")}`);
      return granted;
    },

    async getPageInformation(accessToken: string, pageId: string): Promise<FacebookPageInfo> {
      const params = new URLSearchParams({
        access_token: accessToken,
        fields:
          "id,name,username,access_token,picture.width(200).height(200),category,fan_count,followers_count,about",
      });
      const response = await fetchImpl(`${FB_GRAPH_BASE}/v25.0/${pageId}?${params}`, requestInit);
      if (!response.ok) throw new Error(`Facebook Page fetch failed: ${await response.text()}`);
      return response.json() as Promise<FacebookPageInfo>;
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
