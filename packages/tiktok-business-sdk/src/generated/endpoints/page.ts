// Auto-generated client for Page — do not edit
import type { PageGetParams, PageGetResponse, Oauth2AccessTokenTipSdkCreateParams, Oauth2AccessTokenTipSdkCreateResponse, Oauth2AccessTokenTipSdkValidateParams, Oauth2AccessTokenTipSdkValidateResponse, Oauth2AccessTokenTipSdkRenewParams, Oauth2AccessTokenTipSdkRenewResponse } from "../types/page.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createPage(opts: { accessToken: string; advertiserId: string }) {
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
