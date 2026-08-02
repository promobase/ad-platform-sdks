import type { RemoveCampaignAutomaticallyCreatedAssetRequest, RemoveCampaignAutomaticallyCreatedAssetResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AutomaticallyCreatedAssetRemovalService. Do not edit by hand.
export const automaticallyCreatedAssetRemovalService = {
  removeCampaignAutomaticallyCreatedAsset(client: HttpClient, customerId: string, body: Omit<RemoveCampaignAutomaticallyCreatedAssetRequest, "customerId">): Promise<RemoveCampaignAutomaticallyCreatedAssetResponse> {
    return client.post<RemoveCampaignAutomaticallyCreatedAssetResponse>(`/v25/customers/${customerId}:removeCampaignAutomaticallyCreatedAsset`, body);
  }
};
