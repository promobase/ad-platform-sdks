// @generated
// fingerprint: sha256:4b0feb8638d76309036db7f6f217fb9ec69b74e9a3a6990a3765758caaa63144
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Authentication — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { Oauth2AccessTokenParams, Oauth2AccessTokenResponse, Oauth2RevokeTokenParams, Oauth2RevokeTokenResponse, TtUserOauth2TokenParams, TtUserOauth2TokenResponse, TtUserOauth2RefreshTokenParams, TtUserOauth2RefreshTokenResponse, TtUserOauth2RevokeParams, TtUserOauth2RevokeResponse } from "../types/authentication.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAuthentication(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
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
