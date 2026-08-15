// @generated
// fingerprint: sha256:362dbd31327b8cfcb7dde88ad11c712396ce7189d5de1c4cbd628f6d905d1a89
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignLabelsRequest, MutateCampaignLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignLabelService. Do not edit by hand.
export const campaignLabelService = {
  mutateCampaignLabels(client: HttpClient, customerId: string, body: Omit<MutateCampaignLabelsRequest, "customerId">): Promise<MutateCampaignLabelsResponse> {
    return client.post<MutateCampaignLabelsResponse>(`/v23/customers/${customerId}/campaignLabels:mutate`, body);
  }
};
