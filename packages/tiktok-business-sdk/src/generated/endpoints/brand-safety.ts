// @generated
// fingerprint: sha256:0fbbf7e71d0031677d597527c24810a7172df9133d85dea29fd47d3303295070
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Brand Safety — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { TiktokInventoryFiltersGetParams, TiktokInventoryFiltersGetResponse, TiktokInventoryFiltersUpdateParams, TiktokInventoryFiltersUpdateResponse } from "../types/brand-safety.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBrandSafety(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get the Brand Safety Hub settings of an ad account */
    async getTiktokInventoryFilters(params: TiktokInventoryFiltersGetParams): Promise<TiktokInventoryFiltersGetResponse> {
      return get<TiktokInventoryFiltersGetResponse>("/open_api/v1.3/tiktok_inventory_filters/get/", params as unknown as Record<string, unknown>);
    },

    /** Set or update the Brand Safety Hub settings of an ad account */
    async updateTiktokInventoryFilters(params: TiktokInventoryFiltersUpdateParams): Promise<TiktokInventoryFiltersUpdateResponse> {
      return post<TiktokInventoryFiltersUpdateResponse>("/open_api/v1.3/tiktok_inventory_filters/update/", params as unknown as Record<string, unknown>);
    },
  };
}
