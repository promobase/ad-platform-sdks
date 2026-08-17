import type { OAuthScopeInput } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { FacebookOAuthScopes, type FacebookOAuthScope } from "../../oauth-scopes.ts";
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

const shortLivedTokenSchema = v.object({ access_token: v.string() });
const longLivedTokenSchema = v.object({
  access_token: v.string(),
  token_type: v.string(),
  expires_in: v.optional(v.number()),
});
const pageTokenSchema = v.object({
  id: v.string(),
  name: v.string(),
  access_token: v.string(),
  username: v.optional(v.string()),
  category: v.optional(v.string()),
  fan_count: v.optional(v.number()),
  followers_count: v.optional(v.number()),
  about: v.optional(v.string()),
  picture: v.optional(
    v.object({
      data: v.optional(
        v.object({
          url: v.optional(v.string()),
          width: v.optional(v.number()),
          height: v.optional(v.number()),
        }),
      ),
    }),
  ),
});
const profileSchema = v.object({
  id: v.string(),
  name: v.string(),
  email: v.optional(v.string()),
  picture: v.optional(
    v.object({
      data: v.optional(
        v.object({
          url: v.optional(v.string()),
          width: v.optional(v.number()),
          height: v.optional(v.number()),
        }),
      ),
    }),
  ),
});
const permissionSchema = v.object({ permission: v.string(), status: v.string() });
const pageInfoSchema = v.object({
  id: v.string(),
  name: v.string(),
  access_token: v.optional(v.string()),
  username: v.optional(v.string()),
  category: v.optional(v.string()),
  fan_count: v.optional(v.number()),
  followers_count: v.optional(v.number()),
  about: v.optional(v.string()),
  picture: v.optional(
    v.object({
      data: v.optional(
        v.object({
          url: v.optional(v.string()),
          width: v.optional(v.number()),
          height: v.optional(v.number()),
        }),
      ),
    }),
  ),
});

export function createOAuth(config: OAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  const requestInit: RequestInit = { signal: config.signal };
  return {
    /** Generate the authorization URL to redirect users to. */
    getAuthorizationUrl<
      const TRequested extends readonly string[] = readonly FacebookOAuthScope[],
    >(opts?: { scopes?: OAuthScopeInput<FacebookOAuthScope, TRequested>; state?: string }): string {
      const scopes = opts?.scopes ?? [
        FacebookOAuthScopes.PagesShowList,
        FacebookOAuthScopes.PagesManagePosts,
        FacebookOAuthScopes.PagesManageEngagement,
        FacebookOAuthScopes.PagesReadEngagement,
        FacebookOAuthScopes.PagesReadUserEngagement,
        FacebookOAuthScopes.PublishVideo,
      ];
      const params = new URLSearchParams({
        client_id: config.appId,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
      });
      return `${FB_OAUTH_BASE}/v26.0/dialog/oauth?${params.toString()}`;
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
        `${FB_GRAPH_BASE}/v26.0/oauth/access_token?${params.toString()}`,
        requestInit,
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Facebook OAuth code exchange failed: ${JSON.stringify(error)}`);
      }

      return v.parse(shortLivedTokenSchema, await response.json());
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
        `${FB_GRAPH_BASE}/v26.0/oauth/access_token?${params.toString()}`,
        requestInit,
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Long-lived token exchange failed: ${JSON.stringify(error)}`);
      }

      return v.parse(longLivedTokenSchema, await response.json());
    },

    /**
     * Get Page tokens for all Pages the user manages.
     * Each Page gets its own long-lived access token that doesn't expire
     * as long as the user token used to get it is a long-lived token.
     */
    async getPageTokens(userAccessToken: string): Promise<PageToken[]> {
      const params = new URLSearchParams({
        access_token: userAccessToken,
        fields:
          "id,name,access_token,username,picture.type(large),category,fan_count,followers_count,about",
      });

      const response = await fetchImpl(
        `${FB_GRAPH_BASE}/v26.0/me/accounts?${params.toString()}`,
        requestInit,
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to get Page tokens: ${JSON.stringify(error)}`);
      }

      const body = v.parse(v.object({ data: v.array(pageTokenSchema) }), await response.json());
      return body.data;
    },

    async getUserProfile(
      accessToken: string,
      id = "me",
      fields = ["id", "name", "picture.width(200).height(200)", "email"],
    ): Promise<FacebookUserProfile> {
      const params = new URLSearchParams({ access_token: accessToken, fields: fields.join(",") });
      const response = await fetchImpl(`${FB_GRAPH_BASE}/v26.0/${id}?${params}`, requestInit);
      if (!response.ok) throw new Error(`Facebook profile fetch failed: ${await response.text()}`);
      return v.parse(profileSchema, await response.json());
    },

    async getPermissions(accessToken: string): Promise<FacebookPermission[]> {
      const params = new URLSearchParams({ access_token: accessToken });
      const response = await fetchImpl(
        `${FB_GRAPH_BASE}/v26.0/me/permissions?${params}`,
        requestInit,
      );
      if (!response.ok) {
        throw new Error(`Facebook permission fetch failed: ${await response.text()}`);
      }
      const body = v.parse(v.object({ data: v.array(permissionSchema) }), await response.json());
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
      const response = await fetchImpl(`${FB_GRAPH_BASE}/v26.0/${pageId}?${params}`, requestInit);
      if (!response.ok) throw new Error(`Facebook Page fetch failed: ${await response.text()}`);
      return v.parse(pageInfoSchema, await response.json());
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
