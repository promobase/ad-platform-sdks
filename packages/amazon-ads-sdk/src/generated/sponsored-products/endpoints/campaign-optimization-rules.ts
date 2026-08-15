// @generated
// fingerprint: sha256:59d95ae83a40df9a462af078a16427c34023e7788415c0375f18be6c0134ce03
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Campaign Optimization Rules — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { CreateOptimizationRuleResponse, UpdateOptimizationRuleResponse, DeleteCampaignOptimizationRuleResponse, GetCampaignOptimizationRuleResponse, GetOptimizationRuleEligibilityResponse, GetRuleNotificationResponse } from "../types.ts";
import type { CreateOptimizationRuleParams, UpdateOptimizationRuleParams, DeleteCampaignOptimizationRuleParams, GetCampaignOptimizationRuleParams, GetOptimizationRuleEligibilityParams, GetRuleNotificationParams } from "../params.ts";

/** Campaign Optimization Rules — 6 endpoints */
export function createCampaignOptimizationRulesClient(api: AmazonAdsApiClient) {
  return {
    /** Creates a campaign optimization rule. */
    async createOptimizationRule(params: CreateOptimizationRuleParams): Promise<CreateOptimizationRuleResponse> {
      const rest = params;
      const envelope = await api.post<CreateOptimizationRuleResponse>(`/sp/rules/campaignOptimization`, rest);
      return envelope;
    },

    /** Updates a campaign optimization rule. */
    async updateOptimizationRule(params: UpdateOptimizationRuleParams): Promise<UpdateOptimizationRuleResponse> {
      const rest = params;
      const envelope = await api.put<UpdateOptimizationRuleResponse>(`/sp/rules/campaignOptimization`, rest);
      return envelope;
    },

    /** Deletes a campaign optimization rule specified by identifier. */
    async deleteCampaignOptimizationRule(params: DeleteCampaignOptimizationRuleParams): Promise<DeleteCampaignOptimizationRuleResponse> {
      const { campaignOptimizationId } = params;
      const envelope = await api.delete<DeleteCampaignOptimizationRuleResponse>(`/sp/rules/campaignOptimization/${campaignOptimizationId}`);
      return envelope;
    },

    /** Gets a campaign optimization rule specified by identifier. */
    async getCampaignOptimizationRule(params: GetCampaignOptimizationRuleParams): Promise<GetCampaignOptimizationRuleResponse> {
      const { campaignOptimizationId, ...query } = params;
      const envelope = await api.get<GetCampaignOptimizationRuleResponse>(`/sp/rules/campaignOptimization/${campaignOptimizationId}`, query);
      return envelope;
    },

    /** Gets a campaign optimization rule eligibility for SP campaigns. */
    async getOptimizationRuleEligibility(params: GetOptimizationRuleEligibilityParams): Promise<GetOptimizationRuleEligibilityResponse> {
      const rest = params;
      const envelope = await api.post<GetOptimizationRuleEligibilityResponse>(`/sp/rules/campaignOptimization/eligibility`, rest);
      return envelope;
    },

    /** Gets campaign optimization rule state. Recommended refresh frequency is once a day. */
    async getRuleNotification(params: GetRuleNotificationParams): Promise<GetRuleNotificationResponse> {
      const rest = params;
      const envelope = await api.post<GetRuleNotificationResponse>(`/sp/rules/campaignOptimization/state`, rest);
      return envelope;
    },
  };
}
