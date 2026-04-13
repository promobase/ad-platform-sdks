import type { MutateCampaignBudgetsRequest, MutateCampaignBudgetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignBudgetService. Do not edit by hand.
export const campaignBudgetService = {
  mutateCampaignBudgets(client: HttpClient, customerId: string, body: Omit<MutateCampaignBudgetsRequest, "customerId">): Promise<MutateCampaignBudgetsResponse> {
    return client.post<MutateCampaignBudgetsResponse>(`/v23/customers/${customerId}/campaignBudgets:mutate`, body);
  }
};
