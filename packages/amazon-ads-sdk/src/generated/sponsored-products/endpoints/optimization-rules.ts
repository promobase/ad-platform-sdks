// @generated
// fingerprint: sha256:c301384f0f1120d3b499d0eb1a4df7f44ed1ec16423b21402a751bd18f094abd
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Optimization Rules — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { SearchOptimizationRulesResponse } from "../types.ts";
import type { PostAssociateOptimizationRulesToCampaignParams, CreateOptimizationRuleParams, UpdateOptimizationRuleParams, PostSearchOptimizationRulesParams } from "../params.ts";

/** Optimization Rules — 4 endpoints */
export function createOptimizationRulesClient(api: AmazonAdsApiClient) {
  return {
    /** Associates one or multiple optimization rules with a campaign.
 */
    async postAssociateOptimizationRulesToCampaign(params: PostAssociateOptimizationRulesToCampaignParams): Promise<unknown> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<unknown>(`/sp/campaigns/${campaignId}/optimizationRules`, rest);
      return envelope;
    },

    /** Creates one or more optimization rules.
 */
    async createOptimizationRule(params: CreateOptimizationRuleParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/rules/optimization`, rest);
      return envelope;
    },

    /** Updates one or more optimization rules.
 */
    async updateOptimizationRule(params: UpdateOptimizationRuleParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/rules/optimization`, rest);
      return envelope;
    },

    /** Searches optimization rules based on optional filters.
 */
    async postSearchOptimizationRules(params: PostSearchOptimizationRulesParams): Promise<SearchOptimizationRulesResponse> {
      const rest = params;
      const envelope = await api.post<SearchOptimizationRulesResponse>(`/sp/rules/optimization/search`, rest);
      return envelope;
    },
  };
}
