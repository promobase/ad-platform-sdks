// @generated
// fingerprint: sha256:4a5219508a2fc57cc47f1ca89acea9b2a332aa3c914f19dbabdd038a4b28119e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Partners — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcPartnerGetParams, BcPartnerGetResponse, BcPartnerAddParams, BcPartnerAddResponse, BcPartnerDeleteParams, BcPartnerDeleteResponse, BcPartnerAssetDeleteParams, BcPartnerAssetDeleteResponse, BcPartnerAssetGetParams, BcPartnerAssetGetResponse } from "../types/bc-partners.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcPartners(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get the partners of a BC */
    async getPartner(params: BcPartnerGetParams): Promise<BcPartnerGetResponse> {
      return get<BcPartnerGetResponse>("/open_api/v1.3/bc/partner/get/", params as unknown as Record<string, unknown>);
    },

    /** Add a partner to a BC */
    async partnerAdd(params: BcPartnerAddParams): Promise<BcPartnerAddResponse> {
      return post<BcPartnerAddResponse>("/open_api/v1.3/bc/partner/add/", params as unknown as Record<string, unknown>);
    },

    /** Delete a partner from a BC */
    async deletePartner(params: BcPartnerDeleteParams): Promise<BcPartnerDeleteResponse> {
      return post<BcPartnerDeleteResponse>("/open_api/v1.3/bc/partner/delete/", params as unknown as Record<string, unknown>);
    },

    /** Cancel the sharing of assets */
    async deleteAsset(params: BcPartnerAssetDeleteParams): Promise<BcPartnerAssetDeleteResponse> {
      return post<BcPartnerAssetDeleteResponse>("/open_api/v1.3/bc/partner/asset/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get the assets of a partner */
    async getAsset(params: BcPartnerAssetGetParams): Promise<BcPartnerAssetGetResponse> {
      return get<BcPartnerAssetGetResponse>("/open_api/v1.3/bc/partner/asset/get/", params as unknown as Record<string, unknown>);
    },
  };
}
