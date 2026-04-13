import type { MutateCampaignBidModifiersRequest, MutateCampaignBidModifiersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignBidModifierService. Do not edit by hand.
export const campaignBidModifierService = {
  mutateCampaignBidModifiers(client: HttpClient, customerId: string, body: Omit<MutateCampaignBidModifiersRequest, "customerId">): Promise<MutateCampaignBidModifiersResponse> {
    return client.post<MutateCampaignBidModifiersResponse>(`/v23/customers/${customerId}/campaignBidModifiers:mutate`, body);
  }
};
