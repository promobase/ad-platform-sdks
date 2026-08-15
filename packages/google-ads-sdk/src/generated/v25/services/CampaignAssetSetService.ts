// @generated
// fingerprint: sha256:22a69765a569ac5af6281ba9d2be8a30237ba758f9d904cd31f6a66bfe14ac4d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignAssetSetsRequest, MutateCampaignAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignAssetSetService. Do not edit by hand.
export const campaignAssetSetService = {
  mutateCampaignAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetSetsRequest, "customerId">): Promise<MutateCampaignAssetSetsResponse> {
    return client.post<MutateCampaignAssetSetsResponse>(`/v25/customers/${customerId}/campaignAssetSets:mutate`, body);
  }
};
