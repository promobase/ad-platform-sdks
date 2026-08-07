// Auto-generated client for BudgetRules — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetSDBudgetRulesForAdvertiserResponseEndpoint, GetBudgetRuleByRuleIdForSDCampaignsResponse, GetCampaignsAssociatedWithSDBudgetRuleResponse, ListAssociatedBudgetRulesForSDCampaignsResponse, DisassociateAssociatedBudgetRuleForSDCampaignsResponse } from "../types.ts";
import type { GetSDBudgetRulesForAdvertiserParams, CreateBudgetRulesForSDCampaignParams, UpdateBudgetRulesForSDCampaignParams, GetBudgetRuleByRuleIdForSDCampaignsParams, GetCampaignsAssociatedWithSDBudgetRuleParams, ListAssociatedBudgetRulesForSDCampaignsParams, CreateAssociatedBudgetRulesForSDCampaignParams, DeleteDisassociateAssociatedBudgetRuleForSDCampaignParams } from "../params.ts";

/** BudgetRules — 8 endpoints */
export function createBudgetrulesClient(api: AmazonAdsApiClient) {
  return {
    /** Get all budget rules created by an advertiser */
    async getSDBudgetRulesForAdvertiser(params: GetSDBudgetRulesForAdvertiserParams): Promise<GetSDBudgetRulesForAdvertiserResponseEndpoint> {
      const query = params;
      const envelope = await api.get<GetSDBudgetRulesForAdvertiserResponseEndpoint>(`/sd/budgetRules`, query);
      return envelope;
    },

    /** Creates one or more budget rules. */
    async createBudgetRulesForSDCampaign(params: CreateBudgetRulesForSDCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sd/budgetRules`, rest);
      return envelope;
    },

    /** Update one or more budget rules. */
    async updateBudgetRulesForSDCampaign(params: UpdateBudgetRulesForSDCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sd/budgetRules`, rest);
      return envelope;
    },

    /** Gets a budget rule specified by identifier. */
    async getBudgetRuleByRuleIdForSDCampaigns(params: GetBudgetRuleByRuleIdForSDCampaignsParams): Promise<GetBudgetRuleByRuleIdForSDCampaignsResponse> {
      const { budgetRuleId, ...query } = params;
      const envelope = await api.get<GetBudgetRuleByRuleIdForSDCampaignsResponse>(`/sd/budgetRules/${budgetRuleId}`, query);
      return envelope;
    },

    /** Gets all the campaigns associated with a budget rule */
    async getCampaignsAssociatedWithSDBudgetRule(params: GetCampaignsAssociatedWithSDBudgetRuleParams): Promise<GetCampaignsAssociatedWithSDBudgetRuleResponse> {
      const { budgetRuleId, ...query } = params;
      const envelope = await api.get<GetCampaignsAssociatedWithSDBudgetRuleResponse>(`/sd/budgetRules/${budgetRuleId}/campaigns`, query);
      return envelope;
    },

    /** Gets a list of budget rules associated to a campaign specified by identifier. */
    async listAssociatedBudgetRulesForSDCampaigns(params: ListAssociatedBudgetRulesForSDCampaignsParams): Promise<ListAssociatedBudgetRulesForSDCampaignsResponse> {
      const { campaignId, ...query } = params;
      const envelope = await api.get<ListAssociatedBudgetRulesForSDCampaignsResponse>(`/sd/campaigns/${campaignId}/budgetRules`, query);
      return envelope;
    },

    /** Associates one or more budget rules to a campaign specified by identifer. */
    async createAssociatedBudgetRulesForSDCampaign(params: CreateAssociatedBudgetRulesForSDCampaignParams): Promise<unknown> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<unknown>(`/sd/campaigns/${campaignId}/budgetRules`, rest);
      return envelope;
    },

    /** Disassociates a budget rule specified by identifier from a campaign specified by identifier. */
    async deleteDisassociateAssociatedBudgetRuleForSDCampaign(params: DeleteDisassociateAssociatedBudgetRuleForSDCampaignParams): Promise<DisassociateAssociatedBudgetRuleForSDCampaignsResponse> {
      const { campaignId, budgetRuleId } = params;
      const envelope = await api.delete<DisassociateAssociatedBudgetRuleForSDCampaignsResponse>(`/sd/campaigns/${campaignId}/budgetRules/${budgetRuleId}`);
      return envelope;
    },
  };
}
