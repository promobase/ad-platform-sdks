// @generated
// fingerprint: sha256:6165e997923a2d6829801d8a7f699369dad60712fefaf01e7bd5e2b8c60c4c4a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Groups — do not edit
import type { AdgroupGetParams, AdgroupGetResponse, AdgroupQuotaParams, AdgroupQuotaResponse, AdAudienceSizeEstimateParams, AdAudienceSizeEstimateResponse, AdgroupCreateParams, AdgroupCreateResponse, AdgroupUpdateParams, AdgroupUpdateResponse, AdgroupStatusUpdateParams, AdgroupStatusUpdateResponse, AdgroupBudgetUpdateParams, AdgroupBudgetUpdateResponse } from "../types/ad-groups.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdGroups(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {
  const apiBase = (opts.baseUrl ?? TT_API_BASE).replace(/\/$/, "");
  const fetchImpl = opts.fetch ?? fetch;

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetchImpl(`${apiBase}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetchImpl(`${apiBase}${path}`, {
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
