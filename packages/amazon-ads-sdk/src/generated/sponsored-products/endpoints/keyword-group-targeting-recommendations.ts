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
