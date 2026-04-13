import type { MutateCampaignSharedSetsRequest, MutateCampaignSharedSetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignSharedSetService. Do not edit by hand.
export const campaignSharedSetService = {
  mutateCampaignSharedSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignSharedSetsRequest, "customerId">): Promise<MutateCampaignSharedSetsResponse> {
    return client.post<MutateCampaignSharedSetsResponse>(`/v23/customers/${customerId}/campaignSharedSets:mutate`, body);
  }
};
