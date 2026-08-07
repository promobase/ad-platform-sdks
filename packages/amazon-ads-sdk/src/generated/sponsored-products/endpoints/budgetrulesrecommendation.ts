// Auto-generated client for BudgetRulesRecommendation — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { SPGetBudgetRulesRecommendationResponse, SPGetAllRuleEventsResponse } from "../types.ts";
import type { PostSPGetBudgetRulesRecommendationParams, PostSPGetAllRuleEventsParams } from "../params.ts";

/** BudgetRulesRecommendation — 2 endpoints */
export function createBudgetrulesrecommendationClient(api: AmazonAdsApiClient) {
  return {
    /** Gets a list of special events with suggested date range and suggested budget increase for a campaign specified by identifier. */
    async postSPGetBudgetRulesRecommendation(params: PostSPGetBudgetRulesRecommendationParams): Promise<SPGetBudgetRulesRecommendationResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<SPGetBudgetRulesRecommendationResponse>(`/sp/campaigns/budgetRules/recommendations`, body);
      return envelope;
    },

    /** Gets all special individual and grouped events with suggested date range in advertiser's marketplace. */
    async postSPGetAllRuleEvents(params: PostSPGetAllRuleEventsParams): Promise<SPGetAllRuleEventsResponse> {
      const rest = params;
      const envelope = await api.post<SPGetAllRuleEventsResponse>(`/sp/v1/events`, rest);
      return envelope;
    },
  };
}
