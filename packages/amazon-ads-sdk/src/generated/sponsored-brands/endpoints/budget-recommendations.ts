// Auto-generated client for Budget Recommendations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { GetBudgetRecommendationsParams } from "../params.ts";

/** Budget Recommendations — 1 endpoints */
export function createBudgetRecommendationsClient(api: AmazonAdsApiClient) {
  return {
    /** Gets daily budget recommendations. */
    async getBudgetRecommendations(params: GetBudgetRecommendationsParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/campaigns/budgetRecommendations`, rest);
      return envelope;
    },
  };
}
