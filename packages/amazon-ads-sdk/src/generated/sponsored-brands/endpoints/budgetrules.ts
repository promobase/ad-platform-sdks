// @generated
// fingerprint: sha256:39f7adff372b5bfe3874c763570cd26501df21575b353b2b7001ebbddd4b322f
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BudgetRules — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetSBBudgetRulesForAdvertiserResponseEndpoint, GetBudgetRuleByRuleIdForSBCampaignsResponse, GetCampaignsAssociatedWithSBBudgetRuleResponse, ListAssociatedBudgetRulesForSBCampaignsResponse, DisassociateAssociatedBudgetRuleForSBCampaignsResponse } from "../types.ts";
import type { GetSBBudgetRulesForAdvertiserParams, CreateBudgetRulesForSBCampaignParams, UpdateBudgetRulesForSBCampaignParams, GetBudgetRuleByRuleIdForSBCampaignsParams, GetCampaignsAssociatedWithSBBudgetRuleParams, ListAssociatedBudgetRulesForSBCampaignsParams, CreateAssociatedBudgetRulesForSBCampaignParams, DeleteDisassociateAssociatedBudgetRuleForSBCampaignParams } from "../params.ts";

/** BudgetRules — 8 endpoints */
export function createBudgetrulesClient(api: AmazonAdsApiClient) {
  return {
    /** Get all budget rules created by an advertiser */
    async getSBBudgetRulesForAdvertiser(params: GetSBBudgetRulesForAdvertiserParams): Promise<GetSBBudgetRulesForAdvertiserResponseEndpoint> {
      const query = params;
      const envelope = await api.get<GetSBBudgetRulesForAdvertiserResponseEndpoint>(`/sb/budgetRules`, query);
      return envelope;
    },

    /** Creates one or more budget rules. */
    async createBudgetRulesForSBCampaign(params: CreateBudgetRulesForSBCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/budgetRules`, rest);
      return envelope;
    },

    /** Update one or more budget rules. */
    async updateBudgetRulesForSBCampaign(params: UpdateBudgetRulesForSBCampaignParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.put<unknown>(`/sb/budgetRules`, rest);
      return envelope;
    },

    /** Gets a budget rule specified by identifier. */
    async getBudgetRuleByRuleIdForSBCampaigns(params: GetBudgetRuleByRuleIdForSBCampaignsParams): Promise<GetBudgetRuleByRuleIdForSBCampaignsResponse> {
      const { budgetRuleId, ...query } = params;
      const envelope = await api.get<GetBudgetRuleByRuleIdForSBCampaignsResponse>(`/sb/budgetRules/${budgetRuleId}`, query);
      return envelope;
    },

    /** Gets all the campaigns associated with a budget rule */
    async getCampaignsAssociatedWithSBBudgetRule(params: GetCampaignsAssociatedWithSBBudgetRuleParams): Promise<GetCampaignsAssociatedWithSBBudgetRuleResponse> {
      const { budgetRuleId, ...query } = params;
      const envelope = await api.get<GetCampaignsAssociatedWithSBBudgetRuleResponse>(`/sb/budgetRules/${budgetRuleId}/campaigns`, query);
      return envelope;
    },

    /** Gets a list of budget rules associated to a campaign specified by identifier. */
    async listAssociatedBudgetRulesForSBCampaigns(params: ListAssociatedBudgetRulesForSBCampaignsParams): Promise<ListAssociatedBudgetRulesForSBCampaignsResponse> {
      const { campaignId, ...query } = params;
      const envelope = await api.get<ListAssociatedBudgetRulesForSBCampaignsResponse>(`/sb/campaigns/${campaignId}/budgetRules`, query);
      return envelope;
    },

    /** Associates one or more budget rules to a campaign specified by identifer. */
    async createAssociatedBudgetRulesForSBCampaign(params: CreateAssociatedBudgetRulesForSBCampaignParams): Promise<unknown> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<unknown>(`/sb/campaigns/${campaignId}/budgetRules`, rest);
      return envelope;
    },

    /** Disassociates a budget rule specified by identifier from a campaign specified by identifier. */
    async deleteDisassociateAssociatedBudgetRuleForSBCampaign(params: DeleteDisassociateAssociatedBudgetRuleForSBCampaignParams): Promise<DisassociateAssociatedBudgetRuleForSBCampaignsResponse> {
      const { campaignId, budgetRuleId } = params;
      const envelope = await api.delete<DisassociateAssociatedBudgetRuleForSBCampaignsResponse>(`/sb/campaigns/${campaignId}/budgetRules/${budgetRuleId}`);
      return envelope;
    },
  };
}
