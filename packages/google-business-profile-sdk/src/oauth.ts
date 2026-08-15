import type { OAuthCustomScope, OAuthScopeInput } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import type { GoogleBusinessProfileOAuthConfig, GoogleOAuthTokenResponse } from "./types.ts";

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
export const GoogleBusinessProfileOAuthScopes = {
  BusinessManage: "https://www.googleapis.com/auth/business.manage",
} as const;
export type GoogleBusinessProfileKnownOAuthScope =
  (typeof GoogleBusinessProfileOAuthScopes)[keyof typeof GoogleBusinessProfileOAuthScopes];
export type GoogleBusinessProfileOAuthScope =
  | GoogleBusinessProfileKnownOAuthScope
  | OAuthCustomScope;
const tokenSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string()),
  scope: v.optional(v.string()),
  token_type: v.string(),
  id_token: v.optional(v.string()),
});

export function createGoogleBusinessProfileOAuth(config: GoogleBusinessProfileOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  async function tokenRequest(body: URLSearchParams): Promise<GoogleOAuthTokenResponse> {
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as Record<string, unknown>;
    if (!response.ok) {
      throw new Error(
        (typeof data.error_description === "string" && data.error_description) ||
          (typeof data.error === "string" && data.error) ||
          "Google OAuth token request failed",
      );
    }
    return v.parse(tokenSchema, data);
  }

  return {
    getAuthorizationUrl<
      const TRequested extends readonly string[] = readonly GoogleBusinessProfileOAuthScope[],
    >(opts?: {
      state?: string;
      scopes?: OAuthScopeInput<GoogleBusinessProfileOAuthScope, TRequested>;
      loginHint?: string;
      prompt?: "none" | "consent" | "select_account";
    }): string {
      const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        response_type: "code",
        access_type: "offline",
        include_granted_scopes: "true",
        scope: (opts?.scopes ?? [GoogleBusinessProfileOAuthScopes.BusinessManage]).join(" "),
        prompt: opts?.prompt ?? "consent",
        ...(opts?.state ? { state: opts.state } : {}),
        ...(opts?.loginHint ? { login_hint: opts.loginHint } : {}),
      });
      return `${AUTH_URL}?${params.toString()}`;
    },

    exchangeCode(code: string): Promise<GoogleOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          client_id: config.clientId,
          client_secret: config.clientSecret,
          redirect_uri: config.redirectUri,
          grant_type: "authorization_code",
          code,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<GoogleOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          client_id: config.clientId,
          client_secret: config.clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      );
    },
  };
}
