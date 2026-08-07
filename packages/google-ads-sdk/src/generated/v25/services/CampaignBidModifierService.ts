import type { MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignBidModifierService. Do not edit by hand.
export const campaignBidModifierService = {
  mutateCampaignBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateCampaignBidModifiersRequest, "customerId">): Promise<MutateCampaignBidModifiersResponse> {
    return client.post<MutateCampaignBidModifiersResponse>(`/v25/customers/${customerId}/campaignBidModifiers:mutate`, body);
  }
};
