import type { MutateCampaignLabelsRequest, MutateCampaignLabelsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignLabelService. Do not edit by hand.
export const campaignLabelService = {
  mutateCampaignLabels(client: HttpClient, customerId: string, body: Omit<MutateCampaignLabelsRequest, "customerId">): Promise<MutateCampaignLabelsResponse> {
    return client.post<MutateCampaignLabelsResponse>(`/v23/customers/${customerId}/campaignLabels:mutate`, body);
  }
};
