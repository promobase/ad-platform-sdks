import type { MutateCampaignAssetsRequest, MutateCampaignAssetsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignAssetService. Do not edit by hand.
export const campaignAssetService = {
  mutateCampaignAssets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetsRequest, "customerId">): Promise<MutateCampaignAssetsResponse> {
    return client.post<MutateCampaignAssetsResponse>(`/v25/customers/${customerId}/campaignAssets:mutate`, body);
  }
};
