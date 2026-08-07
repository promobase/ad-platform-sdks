// Auto-generated client for Keyword Targets — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetGlobalRankedKeywordRecommendationResponse, GetRankedKeywordRecommendationResponse } from "../types.ts";
import type { GetGlobalRankedKeywordRecommendationParams, GetRankedKeywordRecommendationParams } from "../params.ts";

/** Keyword Targets — 2 endpoints */
export function createKeywordTargetsClient(api: AmazonAdsApiClient) {
  return {
    /** Get global keyword recommendations */
    async getGlobalRankedKeywordRecommendation(params: GetGlobalRankedKeywordRecommendationParams): Promise<GetGlobalRankedKeywordRecommendationResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<GetGlobalRankedKeywordRecommendationResponse>(`/sp/global/targets/keywords/recommendations/list`, body);
      return envelope;
    },

    /** Get keyword recommendations */
    async getRankedKeywordRecommendation(params: GetRankedKeywordRecommendationParams): Promise<GetRankedKeywordRecommendationResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<GetRankedKeywordRecommendationResponse>(`/sp/targets/keywords/recommendations`, body);
      return envelope;
    },
  };
}
