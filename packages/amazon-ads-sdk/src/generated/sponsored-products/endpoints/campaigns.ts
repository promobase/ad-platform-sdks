// @generated
// fingerprint: sha256:16fc392fadae909143f6830a62b4853b767a30fccc2a8e373988221c6f91c2df
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Campaigns — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsCampaignsResponse } from "../types.ts";
import type { CreateSponsoredProductsCampaignParams, UpdateSponsoredProductsCampaignParams, DeleteSponsoredProductsCampaignParams, ListSponsoredProductsCampaignsParams } from "../params.ts";

/** Campaigns — 4 endpoints */
export function createCampaignsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsCampaigns */
    async createSponsoredProductsCampaign(params: CreateSponsoredProductsCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaigns`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsCampaigns */
    async updateSponsoredProductsCampaign(params: UpdateSponsoredProductsCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/campaigns`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsCampaigns */
    async deleteSponsoredProductsCampaign(params: DeleteSponsoredProductsCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaigns/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsCampaigns */
    async listSponsoredProductsCampaigns(params: ListSponsoredProductsCampaignsParams): Promise<ListSponsoredProductsCampaignsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsCampaignsResponse>(`/sp/campaigns/list`, rest);
      return envelope;
    },
  };
}
