// Auto-generated client for BC Partners — do not edit
import type { BcPartnerGetParams, BcPartnerGetResponse, BcPartnerAddParams, BcPartnerAddResponse, BcPartnerDeleteParams, BcPartnerDeleteResponse, BcPartnerAssetGetParams, BcPartnerAssetGetResponse } from "../types/bc-partners.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcPartners(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get the partners of a BC */
    async getPartner(params: BcPartnerGetParams): Promise<BcPartnerGetResponse> {
      return get<BcPartnerGetResponse>("/open_api/v1.3/bc/partner/get/", params as unknown as Record<string, unknown>);
    },

    /** Add a partner to a BC */
    async partnerAdd(params: BcPartnerAddParams): Promise<BcPartnerAddResponse> {
      return post<BcPartnerAddResponse>("/open_api/v1.3/bc/partner/add/", params as unknown as Record<string, unknown>);
    },

    /** Delete a partner from a BC */
    async deletePartner(params: BcPartnerDeleteParams): Promise<BcPartnerDeleteResponse> {
      return post<BcPartnerDeleteResponse>("/open_api/v1.3/bc/partner/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get the assets of a partner */
    async getAsset(params: BcPartnerAssetGetParams): Promise<BcPartnerAssetGetResponse> {
      return get<BcPartnerAssetGetResponse>("/open_api/v1.3/bc/partner/asset/get/", params as unknown as Record<string, unknown>);
    },
  };
}
