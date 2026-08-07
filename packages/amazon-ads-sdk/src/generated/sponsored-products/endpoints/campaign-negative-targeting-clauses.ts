// Auto-generated client for Campaign negative targeting clauses — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsCampaignNegativeTargetingClausesResponse } from "../types.ts";
import type { CreateSponsoredProductsCampaignNegativeTargetingClauseParams, UpdateSponsoredProductsCampaignNegativeTargetingClauseParams, DeleteSponsoredProductsCampaignNegativeTargetingClauseParams, ListSponsoredProductsCampaignNegativeTargetingClausesParams } from "../params.ts";

/** Campaign negative targeting clauses — 4 endpoints */
export function createCampaignNegativeTargetingClausesClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsCampaignNegativeTargetingClauses */
    async createSponsoredProductsCampaignNegativeTargetingClause(params: CreateSponsoredProductsCampaignNegativeTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaignNegativeTargets`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsCampaignNegativeTargetingClauses */
    async updateSponsoredProductsCampaignNegativeTargetingClause(params: UpdateSponsoredProductsCampaignNegativeTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/campaignNegativeTargets`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsCampaignNegativeTargetingClauses */
    async deleteSponsoredProductsCampaignNegativeTargetingClause(params: DeleteSponsoredProductsCampaignNegativeTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/campaignNegativeTargets/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsCampaignNegativeTargetingClauses */
    async listSponsoredProductsCampaignNegativeTargetingClauses(params: ListSponsoredProductsCampaignNegativeTargetingClausesParams): Promise<ListSponsoredProductsCampaignNegativeTargetingClausesResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsCampaignNegativeTargetingClausesResponse>(`/sp/campaignNegativeTargets/list`, rest);
      return envelope;
    },
  };
}
