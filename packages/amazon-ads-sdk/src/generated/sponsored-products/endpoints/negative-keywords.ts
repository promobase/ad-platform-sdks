// Auto-generated client for Negative keywords — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredProductsNegativeKeywordsResponse } from "../types.ts";
import type { CreateSponsoredProductsNegativeKeywordParams, UpdateSponsoredProductsNegativeKeywordParams, DeleteSponsoredProductsNegativeKeywordParams, ListSponsoredProductsNegativeKeywordsParams } from "../params.ts";

/** Negative keywords — 4 endpoints */
export function createNegativeKeywordsClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredProductsNegativeKeywords */
    async createSponsoredProductsNegativeKeyword(params: CreateSponsoredProductsNegativeKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/negativeKeywords`, rest);
      return envelope;
    },

    /** UpdateSponsoredProductsNegativeKeywords */
    async updateSponsoredProductsNegativeKeyword(params: UpdateSponsoredProductsNegativeKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/negativeKeywords`, rest);
      return envelope;
    },

    /** DeleteSponsoredProductsNegativeKeywords */
    async deleteSponsoredProductsNegativeKeyword(params: DeleteSponsoredProductsNegativeKeywordParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/negativeKeywords/delete`, rest);
      return envelope;
    },

    /** ListSponsoredProductsNegativeKeywords */
    async listSponsoredProductsNegativeKeywords(params: ListSponsoredProductsNegativeKeywordsParams): Promise<ListSponsoredProductsNegativeKeywordsResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredProductsNegativeKeywordsResponse>(`/sp/negativeKeywords/list`, rest);
      return envelope;
    },
  };
}
