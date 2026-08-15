// @generated
// fingerprint: sha256:4b5708c8d4853f205796b422f3e8ee8f83524d621f30667189030a220c96f1f9
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Campaign negative keywords — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsCampaignNegativeKeywordsResponse } from "../types.ts";
import type { CreateSponsoredProductsCampaignNegativeKeywordParams, UpdateSponsoredProductsCampaignNegativeKeywordParams, DeleteSponsoredProductsCampaignNegativeKeywordParams, ListSponsoredProductsCampaignNegativeKeywordsParams } from "../params.ts";

/** Campaign negative keywords — 4 endpoints */
export function createCampaignNegativeKeywordsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsCampaignNegativeKeywords */
    async createSponsoredProductsCampaignNegativeKeyword(params: CreateSponsoredProductsCampaignNegativeKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaignNegativeKeywords`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsCampaignNegativeKeywords */
    async updateSponsoredProductsCampaignNegativeKeyword(params: UpdateSponsoredProductsCampaignNegativeKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/campaignNegativeKeywords`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsCampaignNegativeKeywords */
    async deleteSponsoredProductsCampaignNegativeKeyword(params: DeleteSponsoredProductsCampaignNegativeKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaignNegativeKeywords/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsCampaignNegativeKeywords */
    async listSponsoredProductsCampaignNegativeKeywords(params: ListSponsoredProductsCampaignNegativeKeywordsParams): Promise<ListSponsoredProductsCampaignNegativeKeywordsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsCampaignNegativeKeywordsResponse>(`/sp/campaignNegativeKeywords/list`, rest);
      return envelope;
    },
  };
}
