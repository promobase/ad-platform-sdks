// Auto-generated client for Campaign — do not edit
import type { CampaignGetParams, CampaignGetResponse, CampaignCreateParams, CampaignCreateResponse, CampaignUpdateParams, CampaignUpdateResponse, CampaignStatusUpdateParams, CampaignStatusUpdateResponse, CampaignQuotaInfoParams, CampaignQuotaInfoResponse, CampaignCopyTaskCreateParams, CampaignCopyTaskCreateResponse, CampaignCopyTaskCheckParams, CampaignCopyTaskCheckResponse, CampaignQuotaGetParams, CampaignQuotaGetResponse } from "../types/campaign.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCampaign(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {
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
    /** Get campaigns */
    async getCampaign(params: CampaignGetParams): Promise<CampaignGetResponse> {
      return get<CampaignGetResponse>("/open_api/v1.3/campaign/get/", params as unknown as Record<string, unknown>);
    },

    /** Create a campaign */
    async createCampaign(params: CampaignCreateParams): Promise<CampaignCreateResponse> {
      return post<CampaignCreateResponse>("/open_api/v1.3/campaign/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a campaign */
    async updateCampaign(params: CampaignUpdateParams): Promise<CampaignUpdateResponse> {
      return post<CampaignUpdateResponse>("/open_api/v1.3/campaign/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the operation statuses of campaigns */
    async updateStatus(params: CampaignStatusUpdateParams): Promise<CampaignStatusUpdateResponse> {
      return post<CampaignStatusUpdateResponse>("/open_api/v1.3/campaign/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the quota for a SKAN Dedicated Campaign per ad network */
    async quotaInfo(params: CampaignQuotaInfoParams): Promise<CampaignQuotaInfoResponse> {
      return get<CampaignQuotaInfoResponse>("/open_api/v1.3/campaign/quota/info/", params as unknown as Record<string, unknown>);
    },

    /** Create an asynchronous copy task for a Manual Campaign */
    async createTask(params: CampaignCopyTaskCreateParams): Promise<CampaignCopyTaskCreateResponse> {
      return post<CampaignCopyTaskCreateResponse>("/open_api/v1.3/campaign/copy/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the results of an asynchronous copy task for a Manual Campaign */
    async taskCheck(params: CampaignCopyTaskCheckParams): Promise<CampaignCopyTaskCheckResponse> {
      return get<CampaignCopyTaskCheckResponse>("/open_api/v1.3/campaign/copy/task/check/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Get the quota for an iOS 14 Dedicated Campaign */
    async getQuota(params: CampaignQuotaGetParams): Promise<CampaignQuotaGetResponse> {
      return get<CampaignQuotaGetResponse>("/open_api/v1.3/campaign/quota/get/", params as unknown as Record<string, unknown>);
    },
  };
}
