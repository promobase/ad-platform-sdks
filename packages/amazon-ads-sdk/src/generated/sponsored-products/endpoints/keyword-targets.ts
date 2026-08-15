// @generated
// fingerprint: sha256:3a808c0eaeb8a1ff4760c3b469cedf677bbf782659a0775a21dfc576f5e740f3
// DO NOT EDIT: generated file; changes will be overwritten.
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
