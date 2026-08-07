export interface AmazonAdsOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** OAuth scopes for the Amazon Ads API (LWA — Login with Amazon). */
export const AmazonAdsScopes = {
  CampaignManagement: "advertising::campaign_management",
  Audiences: "advertising::audiences",
  TestCreateAccount: "advertising::test:create_account",
} as const;

export type AmazonAdsScope = (typeof AmazonAdsScopes)[keyof typeof AmazonAdsScopes];

export interface AmazonAdsOAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

const AUTHORIZATION_URL = "https://www.amazon.com/ap/oa";
const TOKEN_URL = "https://api.amazon.com/auth/o2/token";

/**
 * OAuth 2.0 client for the Amazon Ads API via Login with Amazon (LWA).
 *
 * Amazon expects HTTP Basic auth on the token endpoint with the URL-encoded
 * client id as username and URL-encoded secret as password.
 */
export function createAmazonAdsOAuth(config: AmazonAdsOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;
  const basic = btoa(
    `${encodeURIComponent(config.clientId)}:${encodeURIComponent(config.clientSecret)}`,
  );

  async function tokenRequest(body: URLSearchParams): Promise<AmazonAdsOAuthTokenResponse> {
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "openpromo-amazon-ads-sdk/0.1",
      },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as AmazonAdsOAuthTokenResponse & {
      error?: string;
      error_description?: string;
    };
    if (!response.ok || data.error) {
      throw new Error(data.error_description ?? data.error ?? "Amazon LWA token request failed");
    }
    return data;
  }

  return {
    getAuthorizationUrl(opts: {
      state: string;
      scopes?: readonly AmazonAdsScope[];
      redirectUri?: string;
    }): string {
      const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: opts.redirectUri ?? config.redirectUri,
        response_type: "code",
        scope: (opts.scopes ?? [AmazonAdsScopes.CampaignManagement]).join(" "),
        state: opts.state,
      });
      return `${AUTHORIZATION_URL}?${params.toString()}`;
    },

    exchangeCode(
      code: string,
      opts?: { redirectUri?: string },
    ): Promise<AmazonAdsOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: opts?.redirectUri ?? config.redirectUri,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<AmazonAdsOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
      );
    },
  };
}
