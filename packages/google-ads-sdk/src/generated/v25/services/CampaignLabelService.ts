// @generated
// fingerprint: sha256:1f0c9286ff01b17c2f6669ff3231ee151668d3f68e9448ec57b631a9c51cf704
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignLabelsRequest, MutateCampaignLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignLabelService. Do not edit by hand.
export const campaignLabelService = {
  mutateCampaignLabels(client: HttpClient, customerId: string, body: Omit<MutateCampaignLabelsRequest, "customerId">): Promise<MutateCampaignLabelsResponse> {
    return client.post<MutateCampaignLabelsResponse>(`/v25/customers/${customerId}/campaignLabels:mutate`, body);
  }
};
