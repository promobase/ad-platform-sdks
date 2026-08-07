// Auto-generated client for Optimization Rules — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListSponsoredBrandsOptimizationRulesResponse } from "../types.ts";
import type { CreateSponsoredBrandsOptimizationRuleParams, UpdateSponsoredBrandsOptimizationRuleParams, PostAssociateSponsoredBrandsOptimizationRulesParams, PostDisassociateSponsoredBrandsOptimizationRulesParams, ListSponsoredBrandsOptimizationRulesParams } from "../params.ts";

/** Optimization Rules — 5 endpoints */
export function createOptimizationRulesClient(api: AmazonAdsApiClient) {
  return {
    /** CreateSponsoredBrandsOptimizationRules */
    async createSponsoredBrandsOptimizationRule(params: CreateSponsoredBrandsOptimizationRuleParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/rules/optimization`, rest);
      return envelope;
    },

    /** UpdateSponsoredBrandsOptimizationRules */
    async updateSponsoredBrandsOptimizationRule(params: UpdateSponsoredBrandsOptimizationRuleParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sb/rules/optimization`, rest);
      return envelope;
    },

    /** AssociateSponsoredBrandsOptimizationRules */
    async postAssociateSponsoredBrandsOptimizationRules(params: PostAssociateSponsoredBrandsOptimizationRulesParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/rules/optimization/associate`, rest);
      return envelope;
    },

    /** DisassociateSponsoredBrandsOptimizationRules */
    async postDisassociateSponsoredBrandsOptimizationRules(params: PostDisassociateSponsoredBrandsOptimizationRulesParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/rules/optimization/disassociate`, rest);
      return envelope;
    },

    /** ListSponsoredBrandsOptimizationRules */
    async listSponsoredBrandsOptimizationRules(params: ListSponsoredBrandsOptimizationRulesParams): Promise<ListSponsoredBrandsOptimizationRulesResponse> {
      const rest = params;
      const envelope = await api.post<ListSponsoredBrandsOptimizationRulesResponse>(`/sb/rules/optimization/list`, rest);
      return envelope;
    },
  };
}
