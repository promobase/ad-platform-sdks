import * as v from "valibot";

export interface YouTubeOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface YouTubeOAuthTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
  token_type: string;
  id_token?: string;
}

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const REVOKE_URL = "https://oauth2.googleapis.com/revoke";
const tokenSchema = v.object({
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string()),
  scope: v.optional(v.string()),
  token_type: v.string(),
  id_token: v.optional(v.string()),
});

export function createYouTubeOAuth(config: YouTubeOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  async function tokenRequest(body: URLSearchParams): Promise<YouTubeOAuthTokenResponse> {
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
          "YouTube OAuth token request failed",
      );
    }
    return v.parse(tokenSchema, data);
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
        prompt: opts?.prompt ?? "consent",
        scope: (
          opts?.scopes ?? [
            "https://www.googleapis.com/auth/youtube.upload",
            "https://www.googleapis.com/auth/youtube.readonly",
          ]
        ).join(" "),
        ...(opts?.state ? { state: opts.state } : {}),
        ...(opts?.loginHint ? { login_hint: opts.loginHint } : {}),
      });
      return `${AUTH_URL}?${params.toString()}`;
    },

    exchangeCode(code: string): Promise<YouTubeOAuthTokenResponse> {
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

    refreshToken(refreshToken: string): Promise<YouTubeOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          client_id: config.clientId,
          client_secret: config.clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      );
    },

    async revokeToken(token: string): Promise<void> {
      const response = await fetchImpl(`${REVOKE_URL}?${new URLSearchParams({ token })}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: config.signal,
      });
      if (!response.ok) throw new Error(`YouTube OAuth revoke failed: ${await response.text()}`);
    },
  };
}
