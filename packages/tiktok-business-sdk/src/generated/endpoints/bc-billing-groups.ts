// Auto-generated client for BC Billing Groups — do not edit
import type { BcBillingGroupCreateParams, BcBillingGroupCreateResponse, BcBillingGroupUpdateParams, BcBillingGroupUpdateResponse, BcBillingGroupGetParams, BcBillingGroupGetResponse, BcBillingGroupAdvertiserListParams, BcBillingGroupAdvertiserListResponse } from "../types/bc-billing-groups.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcBillingGroups(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create a Billing Group */
    async createBillingGroup(params: BcBillingGroupCreateParams): Promise<BcBillingGroupCreateResponse> {
      return post<BcBillingGroupCreateResponse>("/open_api/v1.3/bc/billing_group/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a Billing Group */
    async updateBillingGroup(params: BcBillingGroupUpdateParams): Promise<BcBillingGroupUpdateResponse> {
      return post<BcBillingGroupUpdateResponse>("/open_api/v1.3/bc/billing_group/update/", params as unknown as Record<string, unknown>);
    },

    /** Get Billing Groups */
    async getBillingGroup(params: BcBillingGroupGetParams): Promise<BcBillingGroupGetResponse> {
      return get<BcBillingGroupGetResponse>("/open_api/v1.3/bc/billing_group/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the advertiser list of a Billing Group */
    async listAdvertiser(params: BcBillingGroupAdvertiserListParams): Promise<BcBillingGroupAdvertiserListResponse> {
      return get<BcBillingGroupAdvertiserListResponse>("/open_api/v1.3/bc/billing_group/advertiser/list/", params as unknown as Record<string, unknown>);
    },
  };
}
