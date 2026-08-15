// @generated
// fingerprint: sha256:db77e39a66a1bcbe6cd0e1e74236bda1c7aa4ddc1ccc62131312c891c71f2c6a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Negative targeting clauses — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsNegativeTargetingClausesResponse } from "../types.ts";
import type { CreateSponsoredProductsNegativeTargetingClauseParams, UpdateSponsoredProductsNegativeTargetingClauseParams, DeleteSponsoredProductsNegativeTargetingClauseParams, ListSponsoredProductsNegativeTargetingClausesParams } from "../params.ts";

/** Negative targeting clauses — 4 endpoints */
export function createNegativeTargetingClausesClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsNegativeTargetingClauses */
    async createSponsoredProductsNegativeTargetingClause(params: CreateSponsoredProductsNegativeTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/negativeTargets`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsNegativeTargetingClauses */
    async updateSponsoredProductsNegativeTargetingClause(params: UpdateSponsoredProductsNegativeTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/negativeTargets`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsNegativeTargetingClauses */
    async deleteSponsoredProductsNegativeTargetingClause(params: DeleteSponsoredProductsNegativeTargetingClauseParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/negativeTargets/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsNegativeTargetingClauses */
    async listSponsoredProductsNegativeTargetingClauses(params: ListSponsoredProductsNegativeTargetingClausesParams): Promise<ListSponsoredProductsNegativeTargetingClausesResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsNegativeTargetingClausesResponse>(`/sp/negativeTargets/list`, rest);
      return envelope;
    },
  };
}
