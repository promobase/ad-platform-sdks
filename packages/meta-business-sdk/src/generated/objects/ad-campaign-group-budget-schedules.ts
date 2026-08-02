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
