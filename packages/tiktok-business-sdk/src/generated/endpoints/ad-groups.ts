// @generated
// fingerprint: sha256:e819f6849c14cfc2e4659a38bc91ffe41f133943ccccda2df848870b97fe0dd5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Groups — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { AdgroupGetParams, AdgroupGetResponse, AdgroupQuotaParams, AdgroupQuotaResponse, AdAudienceSizeEstimateParams, AdAudienceSizeEstimateResponse, AdgroupCreateParams, AdgroupCreateResponse, AdgroupUpdateParams, AdgroupUpdateResponse, AdgroupStatusUpdateParams, AdgroupStatusUpdateResponse, AdgroupBudgetUpdateParams, AdgroupBudgetUpdateResponse } from "../types/ad-groups.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdGroups(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get ad groups */
    async getAdgroup(params: AdgroupGetParams): Promise<AdgroupGetResponse> {
      return get<AdgroupGetResponse>("/open_api/v1.3/adgroup/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the dynamic quota on active ad groups */
    async adgroupQuota(params: AdgroupQuotaParams): Promise<AdgroupQuotaResponse> {
      return get<AdgroupQuotaResponse>("/open_api/v1.3/adgroup/quota/", params as unknown as Record<string, unknown>);
    },

    /** Estimate audience size */
    async audienceSizeEstimate(params: AdAudienceSizeEstimateParams): Promise<AdAudienceSizeEstimateResponse> {
      return post<AdAudienceSizeEstimateResponse>("/open_api/v1.3/ad/audience_size/estimate/", params as unknown as Record<string, unknown>);
    },

    /** Create an ad group */
    async createAdgroup(params: AdgroupCreateParams): Promise<AdgroupCreateResponse> {
      return post<AdgroupCreateResponse>("/open_api/v1.3/adgroup/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an ad group */
    async updateAdgroup(params: AdgroupUpdateParams): Promise<AdgroupUpdateResponse> {
      return post<AdgroupUpdateResponse>("/open_api/v1.3/adgroup/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the statuses of ad groups */
    async updateStatus(params: AdgroupStatusUpdateParams): Promise<AdgroupStatusUpdateResponse> {
      return post<AdgroupStatusUpdateResponse>("/open_api/v1.3/adgroup/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the budgets of ad groups */
    async updateBudget(params: AdgroupBudgetUpdateParams): Promise<AdgroupBudgetUpdateResponse> {
      return post<AdgroupBudgetUpdateResponse>("/open_api/v1.3/adgroup/budget/update/", params as unknown as Record<string, unknown>);
    },
  };
}
