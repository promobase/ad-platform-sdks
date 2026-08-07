import type { ApiClient } from "@mosaic/sdk-runtime";
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

