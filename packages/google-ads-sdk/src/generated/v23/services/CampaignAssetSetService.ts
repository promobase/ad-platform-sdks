import type { MutateCampaignAssetSetsRequest, MutateCampaignAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignAssetSetService. Do not edit by hand.
export const campaignAssetSetService = {
  mutateCampaignAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetSetsRequest, "customerId">): Promise<MutateCampaignAssetSetsResponse> {
    return client.post<MutateCampaignAssetSetsResponse>(`/v23/customers/${customerId}/campaignAssetSets:mutate`, body);
  }
};
