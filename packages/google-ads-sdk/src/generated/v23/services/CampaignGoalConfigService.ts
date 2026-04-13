import type { MutateCampaignGoalConfigsRequest, MutateCampaignGoalConfigsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignGoalConfigService. Do not edit by hand.
export const campaignGoalConfigService = {
  mutateCampaignGoalConfigs(client: HttpClient, customerId: string, body: Omit<MutateCampaignGoalConfigsRequest, "customerId">): Promise<MutateCampaignGoalConfigsResponse> {
    return client.post<MutateCampaignGoalConfigsResponse>(`/v23/customers/${customerId}/CampaignGoalConfigs:mutate`, body);
  }
};
