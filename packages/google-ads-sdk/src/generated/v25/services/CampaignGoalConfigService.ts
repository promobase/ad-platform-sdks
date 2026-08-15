// @generated
// fingerprint: sha256:674dfacd36c4b68623d4013cfd6f3e2ab88f992238d1daf445e9cdf355285d09
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignGoalConfigsRequest, MutateCampaignGoalConfigsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CampaignGoalConfigService. Do not edit by hand.
export const campaignGoalConfigService = {
  mutateCampaignGoalConfigs(client: HttpClient, customerId: string, body: Omit<MutateCampaignGoalConfigsRequest, "customerId">): Promise<MutateCampaignGoalConfigsResponse> {
    return client.post<MutateCampaignGoalConfigsResponse>(`/v25/customers/${customerId}/CampaignGoalConfigs:mutate`, body);
  }
};
