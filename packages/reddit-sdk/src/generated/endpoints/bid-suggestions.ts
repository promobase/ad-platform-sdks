// @generated
// fingerprint: sha256:ae591ced5e82953bc8d61c0400477149ae64995c257f8243ee43472c49751e1b
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Bid Suggestions — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { BidSuggestion, BidSuggestionRequest } from "../types.ts";
import type { GetBidsuggestionParams } from "../params.ts";

/** Bid Suggestions — 1 endpoints */
export function createBidSuggestionsClient(api: RedditApiClient) {
  return {
    /** Get bid suggestion */
    async getBidsuggestion(params: GetBidsuggestionParams): Promise<BidSuggestion> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/bid_suggestion`, rest);
      return envelope.data as BidSuggestion;
    },
  };
}
