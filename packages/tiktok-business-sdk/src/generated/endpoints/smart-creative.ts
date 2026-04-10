// Auto-generated client for Smart Creative — do not edit
import type { AdAcoGetParams, AdAcoGetResponse, AdAcoCreateParams, AdAcoCreateResponse, AdAcoUpdateParams, AdAcoUpdateResponse, AdAcoMaterialStatusUpdateParams, AdAcoMaterialStatusUpdateResponse } from "../types/smart-creative.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSmartCreative(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get Smart Creative materials */
    async getAco(params: AdAcoGetParams): Promise<AdAcoGetResponse> {
      return get<AdAcoGetResponse>("/open_api/v1.3/ad/aco/get/", params as unknown as Record<string, unknown>);
    },

    /** Create Smart Creative ads */
    async createAco(params: AdAcoCreateParams): Promise<AdAcoCreateResponse> {
      return post<AdAcoCreateResponse>("/open_api/v1.3/ad/aco/create/", params as unknown as Record<string, unknown>);
    },

    /** Update Smart Creative materials */
    async updateAco(params: AdAcoUpdateParams): Promise<AdAcoUpdateResponse> {
      return post<AdAcoUpdateResponse>("/open_api/v1.3/ad/aco/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the statuses of Smart Creative materials */
    async updateMaterialStatus(params: AdAcoMaterialStatusUpdateParams): Promise<AdAcoMaterialStatusUpdateResponse> {
      return post<AdAcoMaterialStatusUpdateResponse>("/open_api/v1.3/ad/aco/material_status/update/", params as unknown as Record<string, unknown>);
    },
  };
}
