// Auto-generated client for (To be deprecated) Legacy Smart+ — do not edit
import type { CampaignSpcQuotaGetParams, CampaignSpcQuotaGetResponse, CampaignSpcCreateParams, CampaignSpcCreateResponse, CampaignSpcUpdateParams, CampaignSpcUpdateResponse, CampaignSpcMaterialStatusUpdateParams, CampaignSpcMaterialStatusUpdateResponse } from "../types/to-be-deprecated-legacy-smart.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createToBeDeprecatedLegacySmart(opts: { accessToken: string; advertiserId: string }) {
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
    /** (To be deprecated) Get the dynamic quota on Legacy Smart+ Campaigns */
    async getQuota(params: CampaignSpcQuotaGetParams): Promise<CampaignSpcQuotaGetResponse> {
      return get<CampaignSpcQuotaGetResponse>("/open_api/v1.3/campaign/spc/quota/get/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Create a Legacy Smart+ Campaign */
    async createSpc(params: CampaignSpcCreateParams): Promise<CampaignSpcCreateResponse> {
      return post<CampaignSpcCreateResponse>("/open_api/v1.3/campaign/spc/create/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Update a Legacy Smart+ Campaign */
    async updateSpc(params: CampaignSpcUpdateParams): Promise<CampaignSpcUpdateResponse> {
      return post<CampaignSpcUpdateResponse>("/open_api/v1.3/campaign/spc/update/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Disable or enable creatives in a Legacy Smart+ Campaign */
    async updateMaterialStatus(params: CampaignSpcMaterialStatusUpdateParams): Promise<CampaignSpcMaterialStatusUpdateResponse> {
      return post<CampaignSpcMaterialStatusUpdateResponse>("/open_api/v1.3/campaign/spc/material_status/update/", params as unknown as Record<string, unknown>);
    },
  };
}
