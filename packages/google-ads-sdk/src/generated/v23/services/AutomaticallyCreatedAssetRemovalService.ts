// @generated
// fingerprint: sha256:e156260613207ba898d77ba8ba051133b44d899478a9736e25817acd8f5fec5b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RemoveCampaignAutomaticallyCreatedAssetRequest, RemoveCampaignAutomaticallyCreatedAssetResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AutomaticallyCreatedAssetRemovalService. Do not edit by hand.
export const automaticallyCreatedAssetRemovalService = {
  removeCampaignAutomaticallyCreatedAsset(client: HttpClient, customerId: string, body: Omit<RemoveCampaignAutomaticallyCreatedAssetRequest, "customerId">): Promise<RemoveCampaignAutomaticallyCreatedAssetResponse> {
    return client.post<RemoveCampaignAutomaticallyCreatedAssetResponse>(`/v23/customers/${customerId}:removeCampaignAutomaticallyCreatedAsset`, body);
  }
};
