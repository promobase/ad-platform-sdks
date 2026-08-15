// @generated
// fingerprint: sha256:db704516704715c75253cd2e3809d25646f2c3bb45ce38b006bd23f34901f115
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Smart Creative — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { AdAcoGetParams, AdAcoGetResponse, AdAcoCreateParams, AdAcoCreateResponse, AdAcoUpdateParams, AdAcoUpdateResponse, AdAcoMaterialStatusUpdateParams, AdAcoMaterialStatusUpdateResponse } from "../types/smart-creative.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSmartCreative(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get Smart Creative materials */
    async getAco(params: AdAcoGetParams): Promise<AdAcoGetResponse> {
      return get<AdAcoGetResponse>("/open_api/v1.3/ad/aco/get/", params as unknown as Record<string, unknown>);
    },

    /** Create Smart Creative ads */
    async createAco(params: AdAcoCreateParams): Promise<AdAcoCreateResponse> {
      return post<AdAcoCreateResponse>("/open_api/v1.3/ad/aco/create/", params as unknown as Record<string, unknown>);
    },

    /** Update Smart Creative materials */
    async updateAco(params: AdAcoUpdateParams): Promise<AdAcoUpdateResponse> {
      return post<AdAcoUpdateResponse>("/open_api/v1.3/ad/aco/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the statuses of Smart Creative materials */
    async updateMaterialStatus(params: AdAcoMaterialStatusUpdateParams): Promise<AdAcoMaterialStatusUpdateResponse> {
      return post<AdAcoMaterialStatusUpdateResponse>("/open_api/v1.3/ad/aco/material_status/update/", params as unknown as Record<string, unknown>);
    },
  };
}
