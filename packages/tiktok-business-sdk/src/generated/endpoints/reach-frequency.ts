// @generated
// fingerprint: sha256:9db55040a96104947537ddd77fb1a23461f0d8d7faa7e708231bee6ea9fc47d8
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Reach & Frequency — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { RfInventoryEstimateParams, RfInventoryEstimateResponse, AdgroupRfCreateParams, AdgroupRfCreateResponse, AdgroupRfUpdateParams, AdgroupRfUpdateResponse, RfOrderCancelParams, RfOrderCancelResponse, AdgroupRfEstimatedInfoParams, AdgroupRfEstimatedInfoResponse, RfContractQueryParams, RfContractQueryResponse, RfDeliveryTimezoneParams, RfDeliveryTimezoneResponse } from "../types/reach-frequency.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createReachFrequency(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
