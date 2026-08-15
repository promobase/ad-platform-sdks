// @generated
// fingerprint: sha256:e2b0f2db618d56706d99405d51212b5ae14d13a02f3402cdfd15775e7ad6935d
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for terms — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { TermsRelatedListResponse, TermsSuggestedListResponse } from "../types.ts";
import type { ListTermsRelatedParams, ListTermsSuggestedParams } from "../params.ts";

/** terms — 2 endpoints */
export function createTermsClient(api: PinterestApiClient) {
  return {
    /** List related terms
   * Requires pinterest_oauth2: ads:read. */
    async listTermsRelated(params: ListTermsRelatedParams): Promise<TermsRelatedListResponse> {
      const query = params;
      const envelope = await api.get<TermsRelatedListResponse>(`/terms/related`, query);
      return envelope;
    },

    /** List suggested terms
   * Requires pinterest_oauth2: ads:read. */
    async listTermsSuggested(params: ListTermsSuggestedParams): Promise<TermsSuggestedListResponse> {
      const query = params;
      const envelope = await api.get<TermsSuggestedListResponse>(`/terms/suggested`, query);
      return envelope;
    },
  };
}
