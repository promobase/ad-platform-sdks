// @generated
// fingerprint: sha256:1843f7e605fa9cc7e4040c5f124f2f17becdd4cec89d6a7a331a31378c4da862
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BudgetRulesRecommendation — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { SBGetBudgetRulesRecommendationResponse } from "../types.ts";
import type { PostSBGetBudgetRulesRecommendationParams } from "../params.ts";

/** BudgetRulesRecommendation — 1 endpoints */
export function createBudgetrulesrecommendationClient(api: AmazonAdsApiClient) {
  return {
    /** Gets a list of special events with suggested date range and suggested budget increase for a campaign specified by identifier. */
    async postSBGetBudgetRulesRecommendation(params: PostSBGetBudgetRulesRecommendationParams): Promise<SBGetBudgetRulesRecommendationResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<SBGetBudgetRulesRecommendationResponse>(`/sb/campaigns/budgetRules/recommendations`, body);
      return envelope;
    },
  };
}
