import type { MutateCampaignAssetSetsRequest, MutateCampaignAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignAssetSetService. Do not edit by hand.
export const campaignAssetSetService = {
  mutateCampaignAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetSetsRequest, "customerId">): Promise<MutateCampaignAssetSetsResponse> {
    return client.post<MutateCampaignAssetSetsResponse>(`/v25/customers/${customerId}/campaignAssetSets:mutate`, body);
  }
};
