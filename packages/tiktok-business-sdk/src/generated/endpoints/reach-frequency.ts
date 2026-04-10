// Auto-generated client for Reach & Frequency — do not edit
import type { RfInventoryEstimateParams, RfInventoryEstimateResponse, AdgroupRfCreateParams, AdgroupRfCreateResponse, AdgroupRfUpdateParams, AdgroupRfUpdateResponse, RfOrderCancelParams, RfOrderCancelResponse, AdgroupRfEstimatedInfoParams, AdgroupRfEstimatedInfoResponse, RfContractQueryParams, RfContractQueryResponse, RfDeliveryTimezoneParams, RfDeliveryTimezoneResponse } from "../types/reach-frequency.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createReachFrequency(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get inventory estimates */
    async inventoryEstimate(params: RfInventoryEstimateParams): Promise<RfInventoryEstimateResponse> {
      return get<RfInventoryEstimateResponse>("/open_api/v1.3/rf/inventory/estimate/", params as unknown as Record<string, unknown>);
    },

    /** Create an R&F ad group */
    async createRf(params: AdgroupRfCreateParams): Promise<AdgroupRfCreateResponse> {
      return post<AdgroupRfCreateResponse>("/open_api/v1.3/adgroup/rf/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an R&F ad group */
    async updateRf(params: AdgroupRfUpdateParams): Promise<AdgroupRfUpdateResponse> {
      return post<AdgroupRfUpdateResponse>("/open_api/v1.3/adgroup/rf/update/", params as unknown as Record<string, unknown>);
    },

    /** Cancel the R&F ad order */
    async orderCancel(params: RfOrderCancelParams): Promise<RfOrderCancelResponse> {
      return post<RfOrderCancelResponse>("/open_api/v1.3/rf/order/cancel/", params as unknown as Record<string, unknown>);
    },

    /** Get estimated info of R&F ad groups */
    async estimatedInfo(params: AdgroupRfEstimatedInfoParams): Promise<AdgroupRfEstimatedInfoResponse> {
      return get<AdgroupRfEstimatedInfoResponse>("/open_api/v1.3/adgroup/rf/estimated/info/", params as unknown as Record<string, unknown>);
    },

    /** Query contracts */
    async contractQuery(params: RfContractQueryParams): Promise<RfContractQueryResponse> {
      return get<RfContractQueryResponse>("/open_api/v1.3/rf/contract/query/", params as unknown as Record<string, unknown>);
    },

    /** Get R&F time zones */
    async deliveryTimezone(params: RfDeliveryTimezoneParams): Promise<RfDeliveryTimezoneResponse> {
      return get<RfDeliveryTimezoneResponse>("/open_api/v1.3/rf/delivery/timezone/", params as unknown as Record<string, unknown>);
    },
  };
}
