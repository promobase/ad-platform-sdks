// Auto-generated client for Upgraded Smart+ — do not edit
import type { SmartPlusCampaignGetParams, SmartPlusCampaignGetResponse, SmartPlusCampaignCreateParams, SmartPlusCampaignCreateResponse, SmartPlusCampaignUpdateParams, SmartPlusCampaignUpdateResponse, SmartPlusCampaignStatusUpdateParams, SmartPlusCampaignStatusUpdateResponse, SmartPlusAdgroupGetParams, SmartPlusAdgroupGetResponse, SmartPlusAdgroupCreateParams, SmartPlusAdgroupCreateResponse, SmartPlusAdgroupUpdateParams, SmartPlusAdgroupUpdateResponse, SmartPlusAdgroupStatusUpdateParams, SmartPlusAdgroupStatusUpdateResponse, SmartPlusAdgroupBudgetUpdateParams, SmartPlusAdgroupBudgetUpdateResponse, SmartPlusAdGetParams, SmartPlusAdGetResponse, SmartPlusAdCreateParams, SmartPlusAdCreateResponse, SmartPlusAdUpdateParams, SmartPlusAdUpdateResponse, SmartPlusAdStatusUpdateParams, SmartPlusAdStatusUpdateResponse, SmartPlusAdMaterialStatusUpdateParams, SmartPlusAdMaterialStatusUpdateResponse, SmartPlusAdPreviewParams, SmartPlusAdPreviewResponse, SmartPlusAdReviewInfoParams, SmartPlusAdReviewInfoResponse, SmartPlusMaterialReviewInfoParams, SmartPlusMaterialReviewInfoResponse, SmartPlusAdAppealParams, SmartPlusAdAppealResponse } from "../types/upgraded-smart.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createUpgradedSmart(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get Upgraded Smart+ Campaigns */
    async getCampaign(params: SmartPlusCampaignGetParams): Promise<SmartPlusCampaignGetResponse> {
      return get<SmartPlusCampaignGetResponse>("/open_api/v1.3/smart_plus/campaign/get/", params as unknown as Record<string, unknown>);
    },

    /** Create an Upgraded Smart+ Campaign */
    async createCampaign(params: SmartPlusCampaignCreateParams): Promise<SmartPlusCampaignCreateResponse> {
      return post<SmartPlusCampaignCreateResponse>("/open_api/v1.3/smart_plus/campaign/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an Upgraded Smart+ Campaign */
    async updateCampaign(params: SmartPlusCampaignUpdateParams): Promise<SmartPlusCampaignUpdateResponse> {
      return post<SmartPlusCampaignUpdateResponse>("/open_api/v1.3/smart_plus/campaign/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the operation statuses of Upgraded Smart+ Campaigns */
    async updateStatus(params: SmartPlusCampaignStatusUpdateParams): Promise<SmartPlusCampaignStatusUpdateResponse> {
      return post<SmartPlusCampaignStatusUpdateResponse>("/open_api/v1.3/smart_plus/campaign/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Get Upgraded Smart+ Ad Groups */
    async getAdgroup(params: SmartPlusAdgroupGetParams): Promise<SmartPlusAdgroupGetResponse> {
      return get<SmartPlusAdgroupGetResponse>("/open_api/v1.3/smart_plus/adgroup/get/", params as unknown as Record<string, unknown>);
    },

    /** Create an Upgraded Smart+ Ad Group */
    async createAdgroup(params: SmartPlusAdgroupCreateParams): Promise<SmartPlusAdgroupCreateResponse> {
      return post<SmartPlusAdgroupCreateResponse>("/open_api/v1.3/smart_plus/adgroup/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an Upgraded Smart+ Ad Group */
    async updateAdgroup(params: SmartPlusAdgroupUpdateParams): Promise<SmartPlusAdgroupUpdateResponse> {
      return post<SmartPlusAdgroupUpdateResponse>("/open_api/v1.3/smart_plus/adgroup/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the operation statuses of Upgraded Smart+ Ad Groups */
    async updateStatus2(params: SmartPlusAdgroupStatusUpdateParams): Promise<SmartPlusAdgroupStatusUpdateResponse> {
      return post<SmartPlusAdgroupStatusUpdateResponse>("/open_api/v1.3/smart_plus/adgroup/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the budgets of Upgraded Smart+ Ad Groups */
    async updateBudget(params: SmartPlusAdgroupBudgetUpdateParams): Promise<SmartPlusAdgroupBudgetUpdateResponse> {
      return post<SmartPlusAdgroupBudgetUpdateResponse>("/open_api/v1.3/smart_plus/adgroup/budget/update/", params as unknown as Record<string, unknown>);
    },

    /** Get Upgraded Smart+ Ads */
    async getAd(params: SmartPlusAdGetParams): Promise<SmartPlusAdGetResponse> {
      return get<SmartPlusAdGetResponse>("/open_api/v1.3/smart_plus/ad/get/", params as unknown as Record<string, unknown>);
    },

    /** Create an Upgraded Smart+ Ad */
    async createAd(params: SmartPlusAdCreateParams): Promise<SmartPlusAdCreateResponse> {
      return post<SmartPlusAdCreateResponse>("/open_api/v1.3/smart_plus/ad/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an Upgraded Smart+ Ad */
    async updateAd(params: SmartPlusAdUpdateParams): Promise<SmartPlusAdUpdateResponse> {
      return post<SmartPlusAdUpdateResponse>("/open_api/v1.3/smart_plus/ad/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the operation statuses of Upgraded Smart+ Ads */
    async updateStatus3(params: SmartPlusAdStatusUpdateParams): Promise<SmartPlusAdStatusUpdateResponse> {
      return post<SmartPlusAdStatusUpdateResponse>("/open_api/v1.3/smart_plus/ad/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Disable or enable creatives in an Upgraded Smart+ Ad */
    async updateMaterialStatus(params: SmartPlusAdMaterialStatusUpdateParams): Promise<SmartPlusAdMaterialStatusUpdateResponse> {
      return post<SmartPlusAdMaterialStatusUpdateResponse>("/open_api/v1.3/smart_plus/ad/material_status/update/", params as unknown as Record<string, unknown>);
    },

    /** Preview Upgraded Smart+ Ads */
    async adPreview(params: SmartPlusAdPreviewParams): Promise<SmartPlusAdPreviewResponse> {
      return post<SmartPlusAdPreviewResponse>("/open_api/v1.3/smart_plus/ad/preview/", params as unknown as Record<string, unknown>);
    },

    /** Get the review info of Upgraded Smart+ Ads */
    async adReviewInfo(params: SmartPlusAdReviewInfoParams): Promise<SmartPlusAdReviewInfoResponse> {
      return get<SmartPlusAdReviewInfoResponse>("/open_api/v1.3/smart_plus/ad/review_info/", params as unknown as Record<string, unknown>);
    },

    /** Get the review info of Upgraded Smart+ Ad creatives */
    async materialReviewInfo(params: SmartPlusMaterialReviewInfoParams): Promise<SmartPlusMaterialReviewInfoResponse> {
      return get<SmartPlusMaterialReviewInfoResponse>("/open_api/v1.3/smart_plus/material/review_info/", params as unknown as Record<string, unknown>);
    },

    /** Appeal rejection of an Upgraded Smart+ Ad */
    async adAppeal(params: SmartPlusAdAppealParams): Promise<SmartPlusAdAppealResponse> {
      return post<SmartPlusAdAppealResponse>("/open_api/v1.3/smart_plus/ad/appeal/", params as unknown as Record<string, unknown>);
    },
  };
}
