export interface SnapchatOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** OAuth scopes supported by the Snapchat Marketing API. */
export const SnapchatScopes = {
  /** Read and write access to the Snapchat Marketing (Ads) API. */
  Marketing: "snapchat-marketing-api",
  /** Read and write access to the Snapchat Conversions API. */
  Conversions: "snapchat-offline-conversions-api",
  /** Read access to the Snapchat Public Profile API. */
  Profile: "snapchat-profile-api",
} as const;

export type SnapchatKnownScope = (typeof SnapchatScopes)[keyof typeof SnapchatScopes];
export type SnapchatScope = SnapchatKnownScope | OAuthCustomScope;

export interface SnapchatOAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

const AUTHORIZATION_URL = "https://accounts.snapchat.com/login/oauth2/authorize";
const TOKEN_URL = "https://accounts.snapchat.com/login/oauth2/access_token";

/**
 * OAuth 2.0 client for the Snapchat Marketing API.
 *
 * Access tokens are short-lived (60 minutes); use `refreshToken` to renew.
 * Note: Snapchat expects `client_id`/`client_secret` in the form body, not
 * HTTP Basic auth.
 */
export function createSnapchatOAuth(config: SnapchatOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  async function tokenRequest(body: URLSearchParams): Promise<SnapchatOAuthTokenResponse> {
    body.set("client_id", config.clientId);
    body.set("client_secret", config.clientSecret);
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as SnapchatOAuthTokenResponse & {
      error?: string;
      error_description?: string;
    };
    if (!response.ok || data.error) {
      throw new Error(
        data.error_description ?? data.error ?? "Snapchat OAuth token request failed",
      );
    }
    return data;
  }

  return {
    getAuthorizationUrl(opts: {
      state?: string;
      scopes?: readonly SnapchatScope[];
      redirectUri?: string;
    }): string {
      const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: opts.redirectUri ?? config.redirectUri,
        response_type: "code",
        scope: (opts.scopes ?? [SnapchatScopes.Marketing]).join(" "),
      });
      if (opts.state) params.set("state", opts.state);
      return `${AUTHORIZATION_URL}?${params.toString()}`;
    },

    exchangeCode(
      code: string,
      opts?: { redirectUri?: string },
    ): Promise<SnapchatOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: opts?.redirectUri ?? config.redirectUri,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<SnapchatOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
      );
    },
  };
}
import type { OAuthCustomScope } from "@openpromo/sdk-runtime";
