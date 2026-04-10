// Auto-generated client for Pangle — do not edit
import type { PangleBlockListGetParams, PangleBlockListGetResponse, PangleBlockListUpdateParams, PangleBlockListUpdateResponse, PangleAudiencePackageGetParams, PangleAudiencePackageGetResponse } from "../types/pangle.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createPangle(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get the Pangle block list */
    async getPangleBlockList(params: PangleBlockListGetParams): Promise<PangleBlockListGetResponse> {
      return get<PangleBlockListGetResponse>("/open_api/v1.3/pangle_block_list/get/", params as unknown as Record<string, unknown>);
    },

    /** Update the Pangle block list */
    async updatePangleBlockList(params: PangleBlockListUpdateParams): Promise<PangleBlockListUpdateResponse> {
      return post<PangleBlockListUpdateResponse>("/open_api/v1.3/pangle_block_list/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the Pangle audience packages */
    async getPangleAudiencePackage(params: PangleAudiencePackageGetParams): Promise<PangleAudiencePackageGetResponse> {
      return get<PangleAudiencePackageGetResponse>("/open_api/v1.3/pangle_audience_package/get/", params as unknown as Record<string, unknown>);
    },
  };
}
