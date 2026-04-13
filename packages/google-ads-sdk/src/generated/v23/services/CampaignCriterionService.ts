import type { MutateCampaignCriteriaRequest, MutateCampaignCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignCriterionService. Do not edit by hand.
export const campaignCriterionService = {
  mutateCampaignCriteria(client: HttpClient, customerId: string, body: Omit<MutateCampaignCriteriaRequest, "customerId">): Promise<MutateCampaignCriteriaResponse> {
    return client.post<MutateCampaignCriteriaResponse>(`/v23/customers/${customerId}/campaignCriteria:mutate`, body);
  }
};
