import type { GoogleBusinessProfileOAuthConfig, GoogleOAuthTokenResponse } from "./types.ts";

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

export function createGoogleBusinessProfileOAuth(config: GoogleBusinessProfileOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  async function tokenRequest(body: URLSearchParams): Promise<GoogleOAuthTokenResponse> {
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as GoogleOAuthTokenResponse & {
      error?: string;
      error_description?: string;
    };
    if (!response.ok) {
      throw new Error(data.error_description ?? data.error ?? "Google OAuth token request failed");
    }
    return data;
  }

  return {
    getAuthorizationUrl(opts?: {
      state?: string;
      scopes?: string[];
      loginHint?: string;
      prompt?: "none" | "consent" | "select_account";
    }): string {
      const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        response_type: "code",
        access_type: "offline",
        include_granted_scopes: "true",
        scope: (opts?.scopes ?? ["https://www.googleapis.com/auth/business.manage"]).join(" "),
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
