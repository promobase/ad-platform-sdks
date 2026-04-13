import type { RemoveCampaignAutomaticallyCreatedAssetRequest, RemoveCampaignAutomaticallyCreatedAssetResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AutomaticallyCreatedAssetRemovalService. Do not edit by hand.
export const automaticallyCreatedAssetRemovalService = {
  removeCampaignAutomaticallyCreatedAsset(client: HttpClient, customerId: string, body: Omit<RemoveCampaignAutomaticallyCreatedAssetRequest, "customerId">): Promise<RemoveCampaignAutomaticallyCreatedAssetResponse> {
    return client.post<RemoveCampaignAutomaticallyCreatedAssetResponse>(`/v23/customers/${customerId}:removeCampaignAutomaticallyCreatedAsset`, body);
  }
};
