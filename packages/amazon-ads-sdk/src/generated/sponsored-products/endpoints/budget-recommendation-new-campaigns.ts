// Auto-generated client for Budget Recommendation New Campaigns — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetBudgetRecommendationResponse } from "../types.ts";
import type { GetBudgetRecommendationParams } from "../params.ts";

/** Budget Recommendation New Campaigns — 1 endpoints */
export function createBudgetRecommendationNewCampaignsClient(api: AmazonAdsApiClient) {
  return {
    /** getBudgetRecommendation */
    async getBudgetRecommendation(params: GetBudgetRecommendationParams): Promise<GetBudgetRecommendationResponse> {
      const rest = params;
      const envelope = await api.post<GetBudgetRecommendationResponse>(`/sp/campaigns/initialBudgetRecommendation`, rest);
      return envelope;
    },
  };
}
