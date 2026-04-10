// Auto-generated client for Campaign — do not edit
import type { CampaignCopyTaskCreateParams, CampaignCopyTaskCreateResponse, CampaignCopyTaskCheckParams, CampaignCopyTaskCheckResponse } from "../types/campaign.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCampaign(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create an asynchronous campaign copy task */
    async createTask(params: CampaignCopyTaskCreateParams): Promise<CampaignCopyTaskCreateResponse> {
      return post<CampaignCopyTaskCreateResponse>("/open_api/v1.3/campaign/copy/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the results of an asynchronous campaign copy task */
    async taskCheck(params: CampaignCopyTaskCheckParams): Promise<CampaignCopyTaskCheckResponse> {
      return get<CampaignCopyTaskCheckResponse>("/open_api/v1.3/campaign/copy/task/check/", params as unknown as Record<string, unknown>);
    },
  };
}
