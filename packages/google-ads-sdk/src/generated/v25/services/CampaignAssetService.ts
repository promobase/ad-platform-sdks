// @generated
// fingerprint: sha256:a276e9b9af82d75011e021cde8ab6aa8b201f7368b2cc2e4d991342c82bb6d2f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignAssetsRequest, MutateCampaignAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignAssetService. Do not edit by hand.
export const campaignAssetService = {
  mutateCampaignAssets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetsRequest, "customerId">): Promise<MutateCampaignAssetsResponse> {
    return client.post<MutateCampaignAssetsResponse>(`/v25/customers/${customerId}/campaignAssets:mutate`, body);
  }
};
