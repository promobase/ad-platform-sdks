import type { MutateCampaignCustomizersRequest, MutateCampaignCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignCustomizerService. Do not edit by hand.
export const campaignCustomizerService = {
  mutateCampaignCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCampaignCustomizersRequest, "customerId">): Promise<MutateCampaignCustomizersResponse> {
    return client.post<MutateCampaignCustomizersResponse>(`/v25/customers/${customerId}/campaignCustomizers:mutate`, body);
  }
};
