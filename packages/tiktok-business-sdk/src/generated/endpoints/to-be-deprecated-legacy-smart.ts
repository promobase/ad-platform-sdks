// @generated
// fingerprint: sha256:559d050e623a766c2ed257cea4ad71631096c454d44112285bd0321b33f15918
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for (To be deprecated) Legacy Smart+ — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CampaignSpcQuotaGetParams, CampaignSpcQuotaGetResponse, CampaignSpcCreateParams, CampaignSpcCreateResponse, CampaignSpcUpdateParams, CampaignSpcUpdateResponse, CampaignSpcGetParams, CampaignSpcGetResponse, CampaignSpcMaterialStatusUpdateParams, CampaignSpcMaterialStatusUpdateResponse } from "../types/to-be-deprecated-legacy-smart.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createToBeDeprecatedLegacySmart(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** (To be deprecated) Get the dynamic quota on Legacy Smart+ Campaigns */
    async getQuota(params: CampaignSpcQuotaGetParams): Promise<CampaignSpcQuotaGetResponse> {
      return get<CampaignSpcQuotaGetResponse>("/open_api/v1.3/campaign/spc/quota/get/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Create a Legacy Smart+ Campaign */
    async createSpc(params: CampaignSpcCreateParams): Promise<CampaignSpcCreateResponse> {
      return post<CampaignSpcCreateResponse>("/open_api/v1.3/campaign/spc/create/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Update a Legacy Smart+ Campaign */
    async updateSpc(params: CampaignSpcUpdateParams): Promise<CampaignSpcUpdateResponse> {
      return post<CampaignSpcUpdateResponse>("/open_api/v1.3/campaign/spc/update/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Get Legacy Smart+ Campaigns */
    async getSpc(params: CampaignSpcGetParams): Promise<CampaignSpcGetResponse> {
      return get<CampaignSpcGetResponse>("/open_api/v1.3/campaign/spc/get/", params as unknown as Record<string, unknown>);
    },

    /** (To be deprecated) Disable or enable creatives in a Legacy Smart+ Campaign */
    async updateMaterialStatus(params: CampaignSpcMaterialStatusUpdateParams): Promise<CampaignSpcMaterialStatusUpdateResponse> {
      return post<CampaignSpcMaterialStatusUpdateResponse>("/open_api/v1.3/campaign/spc/material_status/update/", params as unknown as Record<string, unknown>);
    },
  };
}
