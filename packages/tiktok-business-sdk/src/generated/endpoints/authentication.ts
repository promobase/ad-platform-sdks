// Auto-generated client for Authentication — do not edit
import type { Oauth2AccessTokenParams, Oauth2AccessTokenResponse, Oauth2RevokeTokenParams, Oauth2RevokeTokenResponse, TtUserOauth2TokenParams, TtUserOauth2TokenResponse, TtUserOauth2RefreshTokenParams, TtUserOauth2RefreshTokenResponse, TtUserOauth2RevokeParams, TtUserOauth2RevokeResponse } from "../types/authentication.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAuthentication(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Obtain a long-term access token */
    async oauth2AccessToken(params: Oauth2AccessTokenParams): Promise<Oauth2AccessTokenResponse> {
      return post<Oauth2AccessTokenResponse>("/open_api/v1.3/oauth2/access_token/", params as unknown as Record<string, unknown>);
    },

    /** Revoke a long-term access token */
    async oauth2RevokeToken(params: Oauth2RevokeTokenParams): Promise<Oauth2RevokeTokenResponse> {
      return post<Oauth2RevokeTokenResponse>("/open_api/v1.3/oauth2/revoke_token/", params as unknown as Record<string, unknown>);
    },

    /** Obtain a short-term access token */
    async oauth2Token(params: TtUserOauth2TokenParams): Promise<TtUserOauth2TokenResponse> {
      return post<TtUserOauth2TokenResponse>("/open_api/v1.3/tt_user/oauth2/token/", params as unknown as Record<string, unknown>);
    },

    /** Renew a short-term access token */
    async oauth2RefreshToken(params: TtUserOauth2RefreshTokenParams): Promise<TtUserOauth2RefreshTokenResponse> {
      return post<TtUserOauth2RefreshTokenResponse>("/open_api/v1.3/tt_user/oauth2/refresh_token/", params as unknown as Record<string, unknown>);
    },

    /** Revoke a short-term access token */
    async oauth2Revoke(params: TtUserOauth2RevokeParams): Promise<TtUserOauth2RevokeResponse> {
      return post<TtUserOauth2RevokeResponse>("/open_api/v1.3/tt_user/oauth2/revoke/", params as unknown as Record<string, unknown>);
    },
  };
}
