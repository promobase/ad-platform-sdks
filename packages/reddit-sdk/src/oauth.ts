export interface RedditOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** OAuth scopes for the Reddit Ads API. */
export const RedditScopes = {
  /** Read access to ads data. */
  AdsRead: "adsread",
  /** Write/edit access to ads. */
  AdsEdit: "adsedit",
  /** Access to historical data. */
  History: "history",
} as const;

export type RedditKnownScope = (typeof RedditScopes)[keyof typeof RedditScopes];
export type RedditScope = RedditKnownScope | OAuthCustomScope;

export interface RedditOAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

const AUTHORIZATION_URL = "https://www.reddit.com/api/v1/authorize";
const TOKEN_URL = "https://www.reddit.com/api/v1/access_token";

/**
 * OAuth 2.0 client for Reddit.
 *
 * Reddit uses HTTP Basic auth on the token endpoint with the client id as the
 * username and the secret as the password (client credentials must be
 * URL-encoded). Request a `permanent` duration to receive a refresh token.
 */
export function createRedditOAuth(config: RedditOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  const basic = btoa(
    `${encodeURIComponent(config.clientId)}:${encodeURIComponent(config.clientSecret)}`,
  );

  async function tokenRequest(body: URLSearchParams): Promise<RedditOAuthTokenResponse> {
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "openpromo-reddit-sdk/0.1",
      },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as RedditOAuthTokenResponse & {
      error?: string;
      error_description?: string;
    };
    if (!response.ok || data.error) {
      throw new Error(data.error_description ?? data.error ?? "Reddit OAuth token request failed");
    }
    return data;
  }

  return {
    getAuthorizationUrl(opts: {
      state: string;
      scopes?: readonly RedditScope[];
      duration?: "permanent" | "temporary";
      redirectUri?: string;
    }): string {
      const params = new URLSearchParams({
        client_id: config.clientId,
        response_type: "code",
        state: opts.state,
        redirect_uri: opts.redirectUri ?? config.redirectUri,
        duration: opts.duration ?? "permanent",
        scope: (opts.scopes ?? [RedditScopes.AdsRead, RedditScopes.AdsEdit]).join(" "),
      });
      return `${AUTHORIZATION_URL}?${params.toString()}`;
    },

    exchangeCode(code: string, opts?: { redirectUri?: string }): Promise<RedditOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: opts?.redirectUri ?? config.redirectUri,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<RedditOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
      );
    },
  };
}
import type { OAuthCustomScope } from "@openpromo/sdk-runtime";
