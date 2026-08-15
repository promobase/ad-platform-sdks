// @generated
// fingerprint: sha256:69cf8dcf8599f6b9c68a77ae8d2d1d22d7bd77d47ec1776ac95300bd141c4b9f
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Page — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { PageGetParams, PageGetResponse, Oauth2AccessTokenTipSdkCreateParams, Oauth2AccessTokenTipSdkCreateResponse, Oauth2AccessTokenTipSdkValidateParams, Oauth2AccessTokenTipSdkValidateResponse, Oauth2AccessTokenTipSdkRenewParams, Oauth2AccessTokenTipSdkRenewResponse } from "../types/page.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createPage(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get the Page ID */
    async getPage(params: PageGetParams): Promise<PageGetResponse> {
      return get<PageGetResponse>("/open_api/v1.3/page/get/", params as unknown as Record<string, unknown>);
    },

    /** Create a TIP Editor SDK access token */
    async createTipSdk(params: Oauth2AccessTokenTipSdkCreateParams): Promise<Oauth2AccessTokenTipSdkCreateResponse> {
      return post<Oauth2AccessTokenTipSdkCreateResponse>("/open_api/v1.3/oauth2/access_token/tip_sdk/create/", params as unknown as Record<string, unknown>);
    },

    /** Validate a TIP Editor SDK access token */
    async tipSdkValidate(params: Oauth2AccessTokenTipSdkValidateParams): Promise<Oauth2AccessTokenTipSdkValidateResponse> {
      return post<Oauth2AccessTokenTipSdkValidateResponse>("/open_api/v1.3/oauth2/access_token/tip_sdk/validate/", params as unknown as Record<string, unknown>);
    },

    /** Renew a TIP Editor SDK access token */
    async tipSdkRenew(params: Oauth2AccessTokenTipSdkRenewParams): Promise<Oauth2AccessTokenTipSdkRenewResponse> {
      return post<Oauth2AccessTokenTipSdkRenewResponse>("/open_api/v1.3/oauth2/access_token/tip_sdk/renew/", params as unknown as Record<string, unknown>);
    },
  };
}
