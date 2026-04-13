import type { MutateCampaignAssetsRequest, MutateCampaignAssetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignAssetService. Do not edit by hand.
export const campaignAssetService = {
  mutateCampaignAssets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetsRequest, "customerId">): Promise<MutateCampaignAssetsResponse> {
    return client.post<MutateCampaignAssetsResponse>(`/v23/customers/${customerId}/campaignAssets:mutate`, body);
  }
};
