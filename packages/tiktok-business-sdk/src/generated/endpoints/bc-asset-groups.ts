// Auto-generated client for BC Asset Groups — do not edit
import type { BcAssetGroupCreateParams, BcAssetGroupCreateResponse, BcAssetGroupUpdateParams, BcAssetGroupUpdateResponse, BcAssetGroupListParams, BcAssetGroupListResponse, BcAssetGroupGetParams, BcAssetGroupGetResponse, BcAssetGroupDeleteParams, BcAssetGroupDeleteResponse } from "../types/bc-asset-groups.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcAssetGroups(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create an Asset Group  */
    async createAssetGroup(params: BcAssetGroupCreateParams): Promise<BcAssetGroupCreateResponse> {
      return post<BcAssetGroupCreateResponse>("/open_api/v1.3/bc/asset_group/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an Asset Group */
    async updateAssetGroup(params: BcAssetGroupUpdateParams): Promise<BcAssetGroupUpdateResponse> {
      return post<BcAssetGroupUpdateResponse>("/open_api/v1.3/bc/asset_group/update/", params as unknown as Record<string, unknown>);
    },

    /** Get all Asset Groups */
    async listAssetGroup(params: BcAssetGroupListParams): Promise<BcAssetGroupListResponse> {
      return get<BcAssetGroupListResponse>("/open_api/v1.3/bc/asset_group/list/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of an Asset Group */
    async getAssetGroup(params: BcAssetGroupGetParams): Promise<BcAssetGroupGetResponse> {
      return get<BcAssetGroupGetResponse>("/open_api/v1.3/bc/asset_group/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete Asset Groups  */
    async deleteAssetGroup(params: BcAssetGroupDeleteParams): Promise<BcAssetGroupDeleteResponse> {
      return post<BcAssetGroupDeleteResponse>("/open_api/v1.3/bc/asset_group/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
