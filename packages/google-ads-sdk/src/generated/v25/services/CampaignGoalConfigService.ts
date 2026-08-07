import type { MutateCampaignGoalConfigsRequest, MutateCampaignGoalConfigsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignGoalConfigService. Do not edit by hand.
export const campaignGoalConfigService = {
  mutateCampaignGoalConfigs(client: HttpClient, customerId: string, body: Omit<MutateCampaignGoalConfigsRequest, "customerId">): Promise<MutateCampaignGoalConfigsResponse> {
    return client.post<MutateCampaignGoalConfigsResponse>(`/v25/customers/${customerId}/CampaignGoalConfigs:mutate`, body);
  }
};
