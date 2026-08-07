// Auto-generated client for BudgetRules — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetSPBudgetRulesForAdvertiserResponseEndpoint, GetBudgetRuleByRuleIdForSPCampaignsResponse, GetCampaignsAssociatedWithSPBudgetRuleResponse, ListAssociatedBudgetRulesForSPCampaignsResponse, DisassociateAssociatedBudgetRuleForSPCampaignsResponse } from "../types.ts";
import type { GetSPBudgetRulesForAdvertiserParams, CreateBudgetRulesForSPCampaignParams, UpdateBudgetRulesForSPCampaignParams, GetBudgetRuleByRuleIdForSPCampaignsParams, GetCampaignsAssociatedWithSPBudgetRuleParams, PostBulkBudgetRulesAssociationForSPParams, PostBulkBudgetRulesDisAssociationForSPParams, ListAssociatedBudgetRulesForSPCampaignsParams, CreateAssociatedBudgetRulesForSPCampaignParams, DeleteDisassociateAssociatedBudgetRuleForSPCampaignParams } from "../params.ts";

/** BudgetRules — 10 endpoints */
export function createBudgetrulesClient(api: AmazonAdsApiClient) {
  return {
    /** Get all budget rules created by an advertiser */
    async getSPBudgetRulesForAdvertiser(params: GetSPBudgetRulesForAdvertiserParams): Promise<GetSPBudgetRulesForAdvertiserResponseEndpoint> {
      const query = params;
      const envelope = await api.get<GetSPBudgetRulesForAdvertiserResponseEndpoint>(`/sp/budgetRules`, query);
      return envelope;
    },

    /** Creates one or more budget rules. */
    async createBudgetRulesForSPCampaign(params: CreateBudgetRulesForSPCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/budgetRules`, rest);
      return envelope;
    },

    /** Updates one or more budget rules. */
    async updateBudgetRulesForSPCampaign(params: UpdateBudgetRulesForSPCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sp/budgetRules`, rest);
      return envelope;
    },

    /** Gets a budget rule specified by identifier. */
    async getBudgetRuleByRuleIdForSPCampaigns(params: GetBudgetRuleByRuleIdForSPCampaignsParams): Promise<GetBudgetRuleByRuleIdForSPCampaignsResponse> {
      const { budgetRuleId, ...query } = params;
      const envelope = await api.get<GetBudgetRuleByRuleIdForSPCampaignsResponse>(`/sp/budgetRules/${budgetRuleId}`, query);
      return envelope;
    },

    /** Gets all the campaigns associated with a budget rule */
    async getCampaignsAssociatedWithSPBudgetRule(params: GetCampaignsAssociatedWithSPBudgetRuleParams): Promise<GetCampaignsAssociatedWithSPBudgetRuleResponse> {
      const { budgetRuleId, ...query } = params;
      const envelope = await api.get<GetCampaignsAssociatedWithSPBudgetRuleResponse>(`/sp/budgetRules/${budgetRuleId}/campaigns`, query);
      return envelope;
    },

    /** Associates budget rules to one or more campaigns. */
    async postBulkBudgetRulesAssociationForSP(params: PostBulkBudgetRulesAssociationForSPParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/budgetRulesAssociation`, rest);
      return envelope;
    },

    /** DisAssociates budget rules from one or more campaigns */
    async postBulkBudgetRulesDisAssociationForSP(params: PostBulkBudgetRulesDisAssociationForSPParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sp/budgetRulesAssociation/delete`, rest);
      return envelope;
    },

    /** Gets a list of budget rules associated to a campaign specified by identifier. */
    async listAssociatedBudgetRulesForSPCampaigns(params: ListAssociatedBudgetRulesForSPCampaignsParams): Promise<ListAssociatedBudgetRulesForSPCampaignsResponse> {
      const { campaignId, ...query } = params;
      const envelope = await api.get<ListAssociatedBudgetRulesForSPCampaignsResponse>(`/sp/campaigns/${campaignId}/budgetRules`, query);
      return envelope;
    },

    /** Associates one or more budget rules to a campaign specified by identifer. */
    async createAssociatedBudgetRulesForSPCampaign(params: CreateAssociatedBudgetRulesForSPCampaignParams): Promise<unknown> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<unknown>(`/sp/campaigns/${campaignId}/budgetRules`, rest);
      return envelope;
    },

    /** Disassociates a budget rule specified by identifier from a campaign specified by identifier. */
    async deleteDisassociateAssociatedBudgetRuleForSPCampaign(params: DeleteDisassociateAssociatedBudgetRuleForSPCampaignParams): Promise<DisassociateAssociatedBudgetRuleForSPCampaignsResponse> {
      const { campaignId, budgetRuleId } = params;
      const envelope = await api.delete<DisassociateAssociatedBudgetRuleForSPCampaignsResponse>(`/sp/campaigns/${campaignId}/budgetRules/${budgetRuleId}`);
      return envelope;
    },
  };
}
