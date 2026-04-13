import type { ConfigureCampaignLifecycleGoalsRequest, ConfigureCampaignLifecycleGoalsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignLifecycleGoalService. Do not edit by hand.
export const campaignLifecycleGoalService = {
  configureCampaignLifecycleGoals(client: HttpClient, customerId: string, body: Omit<ConfigureCampaignLifecycleGoalsRequest, "customerId">): Promise<ConfigureCampaignLifecycleGoalsResponse> {
    return client.post<ConfigureCampaignLifecycleGoalsResponse>(`/v23/customers/${customerId}/campaignLifecycleGoal:configureCampaignLifecycleGoals`, body);
  }
};
