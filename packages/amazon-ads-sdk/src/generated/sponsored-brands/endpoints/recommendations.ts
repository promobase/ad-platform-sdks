// Auto-generated client for Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetHeadlineRecommendationsResponse } from "../types.ts";
import type { GetHeadlineRecommendationsParams } from "../params.ts";

/** Recommendations — 1 endpoints */
export function createRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** getHeadlineRecommendations */
    async getHeadlineRecommendations(params: GetHeadlineRecommendationsParams): Promise<GetHeadlineRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetHeadlineRecommendationsResponse>(`/sb/recommendations/creative/headline`, rest);
      return envelope;
    },
  };
}
