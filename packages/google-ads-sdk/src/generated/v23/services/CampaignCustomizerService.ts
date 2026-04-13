import type { MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignCustomizerService. Do not edit by hand.
export const campaignCustomizerService = {
  mutateCampaignCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCampaignCustomizersRequest, "customerId">): Promise<MutateCampaignCustomizersResponse> {
    return client.post<MutateCampaignCustomizersResponse>(`/v23/customers/${customerId}/campaignCustomizers:mutate`, body);
  }
};
