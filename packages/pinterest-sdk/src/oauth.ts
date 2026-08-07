export interface PinterestOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** OAuth scopes for the Pinterest REST API v5 (from the official spec). */
export const PinterestScopes = {
  AdsRead: "ads:read",
  AdsWrite: "ads:write",
  BillingRead: "billing:read",
  BillingWrite: "billing:write",
  BizAccessRead: "biz_access:read",
  BizAccessWrite: "biz_access:write",
  BoardsRead: "boards:read",
  BoardsReadSecret: "boards:read_secret",
  BoardsWrite: "boards:write",
  CatalogsRead: "catalogs:read",
  CatalogsWrite: "catalogs:write",
  PinsRead: "pins:read",
  PinsReadSecret: "pins:read_secret",
  PinsWrite: "pins:write",
  UserAccountsRead: "user_accounts:read",
  UserAccountsWrite: "user_accounts:write",
} as const;

export type PinterestScope = (typeof PinterestScopes)[keyof typeof PinterestScopes];

export interface PinterestOAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

const AUTHORIZATION_URL = "https://www.pinterest.com/oauth/";
const TOKEN_URL = "https://api.pinterest.com/v5/oauth/token";

/**
 * OAuth 2.0 client for Pinterest.
 *
 * Pinterest expects HTTP Basic auth on the token endpoint with the URL-encoded
 * client id as username and URL-encoded secret as password.
 */
export function createPinterestOAuth(config: PinterestOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  const basic = btoa(
    `${encodeURIComponent(config.clientId)}:${encodeURIComponent(config.clientSecret)}`,
  );

  async function tokenRequest(body: URLSearchParams): Promise<PinterestOAuthTokenResponse> {
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "openpromo-pinterest-sdk/0.1",
      },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as PinterestOAuthTokenResponse & {
      error?: string;
      error_description?: string;
      message?: string;
      code?: number;
    };
    if (!response.ok || data.error) {
      throw new Error(
        data.error_description ??
          data.error ??
          data.message ??
          "Pinterest OAuth token request failed",
      );
    }
    return data;
  }

  return {
    getAuthorizationUrl(opts: {
      state: string;
      scopes?: readonly PinterestScope[];
      redirectUri?: string;
    }): string {
      const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: opts.redirectUri ?? config.redirectUri,
        response_type: "code",
        scope: (
          opts.scopes ?? [
            PinterestScopes.BoardsRead,
            PinterestScopes.PinsRead,
            PinterestScopes.AdsRead,
          ]
        ).join(","),
        state: opts.state,
      });
      return `${AUTHORIZATION_URL}?${params.toString()}`;
    },

    exchangeCode(
      code: string,
      opts?: { redirectUri?: string },
    ): Promise<PinterestOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: opts?.redirectUri ?? config.redirectUri,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<PinterestOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
      );
    },
  };
}
