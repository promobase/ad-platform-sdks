// @generated
// fingerprint: sha256:b4baaf97fd4e0c17f899634996cda5f7b3ac138aef8b61c53245e5ae671580d5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ads — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { AdGetParams, AdGetResponse, AdCreateParams, AdCreateResponse, AdUpdateParams, AdUpdateResponse, AdStatusUpdateParams, AdStatusUpdateResponse } from "../types/ads.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAds(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get ads */
    async getAd(params: AdGetParams): Promise<AdGetResponse> {
      return get<AdGetResponse>("/open_api/v1.3/ad/get/", params as unknown as Record<string, unknown>);
    },

    /** Create ads */
    async createAd(params: AdCreateParams): Promise<AdCreateResponse> {
      return post<AdCreateResponse>("/open_api/v1.3/ad/create/", params as unknown as Record<string, unknown>);
    },

    /** Update ads */
    async updateAd(params: AdUpdateParams): Promise<AdUpdateResponse> {
      return post<AdUpdateResponse>("/open_api/v1.3/ad/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the statuses of ads */
    async updateStatus(params: AdStatusUpdateParams): Promise<AdStatusUpdateResponse> {
      return post<AdStatusUpdateResponse>("/open_api/v1.3/ad/status/update/", params as unknown as Record<string, unknown>);
    },
  };
}
