// @generated
// fingerprint: sha256:0e202ced8255ea218e5734013f3c04bef94fa442a6a70495f021cb0a7e2d1bbf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignAssetsRequest, MutateCampaignAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignAssetService. Do not edit by hand.
export const campaignAssetService = {
  mutateCampaignAssets(client: HttpClient, customerId: string, body: Omit<MutateCampaignAssetsRequest, "customerId">): Promise<MutateCampaignAssetsResponse> {
    return client.post<MutateCampaignAssetsResponse>(`/v23/customers/${customerId}/campaignAssets:mutate`, body);
  }
};
