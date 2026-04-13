import type { MutateCampaignConversionGoalsRequest, MutateCampaignConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignConversionGoalService. Do not edit by hand.
export const campaignConversionGoalService = {
  mutateCampaignConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCampaignConversionGoalsRequest, "customerId">): Promise<MutateCampaignConversionGoalsResponse> {
    return client.post<MutateCampaignConversionGoalsResponse>(`/v23/customers/${customerId}/campaignConversionGoals:mutate`, body);
  }
};
