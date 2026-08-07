import type { MutateCampaignLabelsRequest, MutateCampaignLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignLabelService. Do not edit by hand.
export const campaignLabelService = {
  mutateCampaignLabels(client: HttpClient, customerId: string, body: Omit<MutateCampaignLabelsRequest, "customerId">): Promise<MutateCampaignLabelsResponse> {
    return client.post<MutateCampaignLabelsResponse>(`/v25/customers/${customerId}/campaignLabels:mutate`, body);
  }
};
