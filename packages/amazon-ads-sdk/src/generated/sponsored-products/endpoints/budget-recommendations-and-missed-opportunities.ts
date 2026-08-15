// @generated
// fingerprint: sha256:b3c5ecb33eda90af64fe40fcf2d522a136af7bfe42c15ebbf24c9cf74e5ccf34
// DO NOT EDIT: generated file; changes will be overwritten.
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
