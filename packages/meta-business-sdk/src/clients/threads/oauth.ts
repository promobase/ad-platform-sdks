import type { OAuthScopeInput } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { ThreadsOAuthScopes, type ThreadsOAuthScope } from "../../oauth-scopes.ts";
import type { LongLivedToken, OAuthConfig, ShortLivedToken, ThreadsUserProfile } from "./types.ts";

const THREADS_OAUTH_BASE = "https://threads.net/oauth";
const THREADS_GRAPH_BASE = "https://graph.threads.net";

const shortLivedTokenSchema = v.object({ access_token: v.string(), user_id: v.string() });
const longLivedTokenSchema = v.object({
  access_token: v.string(),
  token_type: v.string(),
  expires_in: v.number(),
});
const userProfileSchema = v.object({
  id: v.string(),
  username: v.string(),
  threads_profile_picture_url: v.optional(v.string()),
  threads_biography: v.optional(v.string()),
});

export function createOAuth(config: OAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  return {
    getAuthorizationUrl<
      const TRequested extends readonly string[] = readonly ThreadsOAuthScope[],
    >(opts?: {
      scopes?: OAuthScopeInput<ThreadsOAuthScope, TRequested>;
      state?: string;
      codeChallenge?: string;
    }): string {
      const scopes = opts?.scopes ?? [
        ThreadsOAuthScopes.Basic,
        ThreadsOAuthScopes.ContentPublish,
        ThreadsOAuthScopes.ManageReplies,
        ThreadsOAuthScopes.ReadReplies,
        ThreadsOAuthScopes.ManageInsights,
      ];
      const params = new URLSearchParams({
        client_id: config.appId,
        redirect_uri: config.redirectUri,
        scope: scopes.join(","),
        response_type: "code",
        ...(opts?.state ? { state: opts.state } : {}),
        ...(opts?.codeChallenge
          ? { code_challenge: opts.codeChallenge, code_challenge_method: "S256" }
          : {}),
      });
      return `${THREADS_OAUTH_BASE}/authorize?${params.toString()}`;
    },

    async exchangeCode(code: string, codeVerifier?: string): Promise<ShortLivedToken> {
      const body = new URLSearchParams({
        client_id: config.appId,
        client_secret: config.appSecret,
        grant_type: "authorization_code",
        redirect_uri: config.redirectUri,
        code,
      });
      if (codeVerifier) body.set("code_verifier", codeVerifier);
      const response = await fetchImpl(`${THREADS_GRAPH_BASE}/oauth/access_token`, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: config.signal,
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Threads OAuth code exchange failed: ${JSON.stringify(error)}`);
      }
      return v.parse(shortLivedTokenSchema, await response.json());
    },

    async exchangeForLongLived(shortLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "th_exchange_token",
        client_secret: config.appSecret,
        access_token: shortLivedToken,
      });
      const response = await fetchImpl(`${THREADS_GRAPH_BASE}/access_token?${params.toString()}`, {
        signal: config.signal,
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Threads long-lived token exchange failed: ${JSON.stringify(error)}`);
      }
      return v.parse(longLivedTokenSchema, await response.json());
    },

    async refreshToken(longLivedToken: string): Promise<LongLivedToken> {
      const params = new URLSearchParams({
        grant_type: "th_refresh_token",
        access_token: longLivedToken,
      });
      const response = await fetchImpl(
        `${THREADS_GRAPH_BASE}/refresh_access_token?${params.toString()}`,
        { signal: config.signal },
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Threads token refresh failed: ${JSON.stringify(error)}`);
      }
      return v.parse(longLivedTokenSchema, await response.json());
    },

    async getUserProfile(accessToken: string, id = "me"): Promise<ThreadsUserProfile> {
      const fields = ["id", "username", "threads_profile_picture_url", "threads_biography"];
      const params = new URLSearchParams({
        access_token: accessToken,
        fields: fields.join(","),
      });
      const response = await fetchImpl(`${THREADS_GRAPH_BASE}/v1.0/${id}?${params}`, {
        signal: config.signal,
      });
      if (!response.ok) {
        throw new Error(`Threads profile fetch failed: ${await response.text()}`);
      }
      return v.parse(userProfileSchema, await response.json());
    },

    async completeOAuth(code: string): Promise<{ token: LongLivedToken; userId: string }> {
      const shortLived = await this.exchangeCode(code);
      const longLived = await this.exchangeForLongLived(shortLived.access_token);
      return { token: longLived, userId: shortLived.user_id };
    },
  };
}
