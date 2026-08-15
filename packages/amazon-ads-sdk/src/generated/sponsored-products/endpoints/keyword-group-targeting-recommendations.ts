// @generated
// fingerprint: sha256:9d16b2ed9e9c067c3cb3b643ca38511da804962ac97112aa03086df30bf968e3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Keyword Group Targeting Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetKeywordGroupRecommendationsResponse } from "../types.ts";
import type { GetKeywordGroupRecommendationsParams } from "../params.ts";

/** Keyword Group Targeting Recommendations — 1 endpoints */
export function createKeywordGroupTargetingRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** getKeywordGroupRecommendations */
    async getKeywordGroupRecommendations(params: GetKeywordGroupRecommendationsParams): Promise<GetKeywordGroupRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetKeywordGroupRecommendationsResponse>(`/sp/targeting/recommendations/keywordGroups`, rest);
      return envelope;
    },
  };
}
