// @generated
// fingerprint: sha256:f82d35120e2f2d0878582677b0b7a438dfddf9e095baafa7fadacdae3162b8a7
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Targeting clauses — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsTargetingClausesResponse } from "../types.ts";
import type { CreateSponsoredProductsTargetingClauseParams, UpdateSponsoredProductsTargetingClauseParams, DeleteSponsoredProductsTargetingClauseParams, ListSponsoredProductsTargetingClausesParams } from "../params.ts";

/** Targeting clauses — 4 endpoints */
export function createTargetingClausesClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsTargetingClauses */
    async createSponsoredProductsTargetingClause(params: CreateSponsoredProductsTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/targets`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsTargetingClauses */
    async updateSponsoredProductsTargetingClause(params: UpdateSponsoredProductsTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/targets`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsTargetingClauses */
    async deleteSponsoredProductsTargetingClause(params: DeleteSponsoredProductsTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/targets/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsTargetingClauses */
    async listSponsoredProductsTargetingClauses(params: ListSponsoredProductsTargetingClausesParams): Promise<ListSponsoredProductsTargetingClausesResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsTargetingClausesResponse>(`/sp/targets/list`, rest);
      return envelope;
    },
  };
}
