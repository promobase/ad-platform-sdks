// @generated
// fingerprint: sha256:58b84e05b0658436ea8483b563cfbe55832a3e8ee08e7843b10c97adb52e2c67
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignAssetSetsRequest, MutateCampaignAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignAssetSetService. Do not edit by hand.
export const campaignAssetSetService = {
  mutateCampaignAssetSets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetSetsRequest, "customerId">): Promise<MutateCampaignAssetSetsResponse> {
    return client.post<MutateCampaignAssetSetsResponse>(`/v23/customers/${customerId}/campaignAssetSets:mutate`, body);
  }
};
