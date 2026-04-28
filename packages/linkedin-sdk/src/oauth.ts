import type { LinkedInOAuthConfig, LinkedInTokenResponse, LinkedInUserInfo } from "./types.ts";

const LINKEDIN_OAUTH_BASE = "https://www.linkedin.com/oauth/v2";
const LINKEDIN_API_BASE = "https://api.linkedin.com/v2";

const DEFAULT_SCOPES = [
  "openid",
  "profile",
  "email",
  "w_member_social",
  "w_organization_social",
  "rw_organization_admin",
];

export function createLinkedInOAuth(config: LinkedInOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  return {
    getAuthorizationUrl(opts?: { scopes?: string[]; state?: string }): string {
      const params = new URLSearchParams({
        response_type: "code",
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        scope: (opts?.scopes ?? DEFAULT_SCOPES).join(" "),
        ...(opts?.state ? { state: opts.state } : {}),
      });

      return `${LINKEDIN_OAUTH_BASE}/authorization?${params.toString()}`;
    },

    async exchangeCode(code: string): Promise<LinkedInTokenResponse> {
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: config.redirectUri,
      });

      return tokenRequest(fetchImpl, body, "LinkedIn OAuth code exchange failed");
    },

    async refreshToken(refreshToken: string): Promise<LinkedInTokenResponse> {
      const body = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: config.clientId,
        client_secret: config.clientSecret,
      });

      return tokenRequest(fetchImpl, body, "LinkedIn token refresh failed");
    },

    async getUserInfo(accessToken: string): Promise<LinkedInUserInfo> {
      const response = await fetchImpl(`${LINKEDIN_API_BASE}/userinfo`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`LinkedIn userinfo failed: ${error}`);
      }
      return response.json() as Promise<LinkedInUserInfo>;
    },

    async completeOAuth(code: string): Promise<{
      token: LinkedInTokenResponse;
      user: LinkedInUserInfo;
      memberUrn: `urn:li:person:${string}`;
    }> {
      const token = await this.exchangeCode(code);
      const user = await this.getUserInfo(token.access_token);
      return {
        token,
        user,
        memberUrn: `urn:li:person:${user.sub}`,
      };
    },
  };
}

async function tokenRequest(
  fetchImpl: typeof fetch,
  body: URLSearchParams,
  message: string,
): Promise<LinkedInTokenResponse> {
  const response = await fetchImpl(`${LINKEDIN_OAUTH_BASE}/accessToken`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`${message}: ${error}`);
  }

  return response.json() as Promise<LinkedInTokenResponse>;
}
