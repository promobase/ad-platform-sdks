// Auto-generated client for Budget recommendations and missed opportunities — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetBudgetRecommendationsResponse } from "../types.ts";
import type { GetBudgetRecommendationsParams } from "../params.ts";

/** Budget recommendations and missed opportunities — 1 endpoints */
export function createBudgetRecommendationsAndMissedOpportunitiesClient(api: AmazonAdsApiClient) {
  return {
    /** Get recommended daily budget and estimated missed opportunities for campaigns. */
    async getBudgetRecommendations(params: GetBudgetRecommendationsParams): Promise<GetBudgetRecommendationsResponse> {
      const rest = params;
      const envelope = await api.post<GetBudgetRecommendationsResponse>(`/sp/campaigns/budgetRecommendations`, rest);
      return envelope;
    },
  };
}
