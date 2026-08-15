// @generated
// fingerprint: sha256:41fb48e63171cf24e9fe1034b093fb77c5292819f4a5d57598dc78cf16e5857a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCampaignGoalConfigsRequest, MutateCampaignGoalConfigsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignGoalConfigService. Do not edit by hand.
export const campaignGoalConfigService = {
  mutateCampaignGoalConfigs(client: HttpClient, customerId: string, body: Omit<MutateCampaignGoalConfigsRequest, "customerId">): Promise<MutateCampaignGoalConfigsResponse> {
    return client.post<MutateCampaignGoalConfigsResponse>(`/v23/customers/${customerId}/CampaignGoalConfigs:mutate`, body);
  }
};
