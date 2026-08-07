import type { MutateCampaignBudgetsRequest, MutateCampaignBudgetsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignBudgetService. Do not edit by hand.
export const campaignBudgetService = {
  mutateCampaignBudgets(client: HttpClient, customerId: string, body: Omit<MutateCampaignBudgetsRequest, "customerId">): Promise<MutateCampaignBudgetsResponse> {
    return client.post<MutateCampaignBudgetsResponse>(`/v25/customers/${customerId}/campaignBudgets:mutate`, body);
  }
};
