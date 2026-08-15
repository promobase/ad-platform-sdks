// @generated
// fingerprint: sha256:5f11d0b6b980097829a9cd50329511f56f1eeb2a48cc4676c7ccbf2a93af545c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Keywords — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsKeywordsResponse } from "../types.ts";
import type { CreateSponsoredProductsKeywordParams, UpdateSponsoredProductsKeywordParams, DeleteSponsoredProductsKeywordParams, ListSponsoredProductsKeywordsParams } from "../params.ts";

/** Keywords — 4 endpoints */
export function createKeywordsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsKeywords */
    async createSponsoredProductsKeyword(params: CreateSponsoredProductsKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/keywords`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsKeywords */
    async updateSponsoredProductsKeyword(params: UpdateSponsoredProductsKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/keywords`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsKeywords */
    async deleteSponsoredProductsKeyword(params: DeleteSponsoredProductsKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/keywords/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsKeywords */
    async listSponsoredProductsKeywords(params: ListSponsoredProductsKeywordsParams): Promise<ListSponsoredProductsKeywordsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsKeywordsResponse>(`/sp/keywords/list`, rest);
      return envelope;
    },
  };
}
