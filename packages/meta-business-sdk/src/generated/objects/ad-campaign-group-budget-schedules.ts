// @generated
// fingerprint: sha256:e7c904c120a0b5eadd81b2922fb7554a0b31ccfc7b0da1a70362c4b7d2965d27
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdCampaignGroupBudgetSchedulesPostFields } from "./ad-campaign-group-budget-schedules-post.ts";

export interface AdCampaignGroupBudgetSchedulesFields {
}

export function adCampaignGroupBudgetSchedulesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdCampaignGroupBudgetSchedulesFields,
    createBudgetSchedule: (params: Record<string, unknown>) =>
      client.post<AdCampaignGroupBudgetSchedulesPostFields>(`${id}/budget_schedules`, params as Record<string, unknown>),
  };
}

