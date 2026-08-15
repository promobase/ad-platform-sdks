// @generated
// fingerprint: sha256:4ff96aad4d1c384fc2ade0bfad7a1b8a76a51ee1dbddfeed230f6d2166e86a74
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Upgraded Smart+ — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { SmartPlusCampaignGetParams, SmartPlusCampaignGetResponse, SmartPlusCampaignCreateParams, SmartPlusCampaignCreateResponse, SmartPlusCampaignUpdateParams, SmartPlusCampaignUpdateResponse, SmartPlusCampaignStatusUpdateParams, SmartPlusCampaignStatusUpdateResponse, SmartPlusCampaignCopyTaskCreateParams, SmartPlusCampaignCopyTaskCreateResponse, SmartPlusCampaignCopyTaskCheckParams, SmartPlusCampaignCopyTaskCheckResponse, SmartPlusAdgroupGetParams, SmartPlusAdgroupGetResponse, SmartPlusAdgroupCreateParams, SmartPlusAdgroupCreateResponse, SmartPlusAdgroupUpdateParams, SmartPlusAdgroupUpdateResponse, SmartPlusAdgroupStatusUpdateParams, SmartPlusAdgroupStatusUpdateResponse, SmartPlusAdgroupBudgetUpdateParams, SmartPlusAdgroupBudgetUpdateResponse, SmartPlusAdGetParams, SmartPlusAdGetResponse, SmartPlusAdCreateParams, SmartPlusAdCreateResponse, SmartPlusAdUpdateParams, SmartPlusAdUpdateResponse, SmartPlusAdStatusUpdateParams, SmartPlusAdStatusUpdateResponse, SmartPlusAdMaterialStatusUpdateParams, SmartPlusAdMaterialStatusUpdateResponse, SmartPlusAdPreviewParams, SmartPlusAdPreviewResponse, SmartPlusAdReviewInfoParams, SmartPlusAdReviewInfoResponse, SmartPlusMaterialReviewInfoParams, SmartPlusMaterialReviewInfoResponse, SmartPlusAdAppealParams, SmartPlusAdAppealResponse } from "../types/upgraded-smart.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createUpgradedSmart(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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

    /** Create an asynchronous copy task for an Upgraded Smart+ Campaign */
    async createTask(params: SmartPlusCampaignCopyTaskCreateParams): Promise<SmartPlusCampaignCopyTaskCreateResponse> {
      return post<SmartPlusCampaignCopyTaskCreateResponse>("/open_api/v1.3/smart_plus/campaign/copy/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the results of an asynchronous copy task for an Upgraded Smart+ Campaign */
    async taskCheck(params: SmartPlusCampaignCopyTaskCheckParams): Promise<SmartPlusCampaignCopyTaskCheckResponse> {
      return get<SmartPlusCampaignCopyTaskCheckResponse>("/open_api/v1.3/smart_plus/campaign/copy/task/check/", params as unknown as Record<string, unknown>);
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
