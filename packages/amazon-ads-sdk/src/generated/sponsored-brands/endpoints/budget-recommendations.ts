// @generated
// fingerprint: sha256:d2d2546fd68519e57ecf2048141106a56dfab3f8315e5b401f8f6aa585aed115
// DO NOT EDIT: generated file; changes will be overwritten.
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
