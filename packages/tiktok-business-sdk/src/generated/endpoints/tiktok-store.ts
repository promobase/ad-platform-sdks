// @generated
// fingerprint: sha256:cc5c5b3bdceca25b35e6925b65ab4c2f4759c1b24bb8d7bdb0ad1945a6434a06
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for TikTok Store — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { StoreListParams, StoreListResponse, StoreProductGetParams, StoreProductGetResponse } from "../types/tiktok-store.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createTiktokStore(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get available stores under an ad account */
    async listStore(params: StoreListParams): Promise<StoreListResponse> {
      return get<StoreListResponse>("/open_api/v1.3/store/list/", params as unknown as Record<string, unknown>);
    },

    /** Get products within a TikTok Shop */
    async getProduct(params: StoreProductGetParams): Promise<StoreProductGetResponse> {
      return get<StoreProductGetResponse>("/open_api/v1.3/store/product/get/", params as unknown as Record<string, unknown>);
    },
  };
}
