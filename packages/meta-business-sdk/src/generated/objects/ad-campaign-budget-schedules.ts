// @generated
// fingerprint: sha256:926883eeaeb63d17a2abb69e47aecb0cb8da004283b4a41b80a8e2d7e7efefc4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdCampaignBudgetSchedulesPostFields } from "./ad-campaign-budget-schedules-post.ts";

export interface AdCampaignBudgetSchedulesFields {
}

export function adCampaignBudgetSchedulesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdCampaignBudgetSchedulesFields,
    createBudgetSchedule: (params: Record<string, unknown>) =>
      client.post<AdCampaignBudgetSchedulesPostFields>(`${id}/budget_schedules`, params as Record<string, unknown>),
  };
}

