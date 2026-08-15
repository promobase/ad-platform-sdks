// @generated
// fingerprint: sha256:15f18dda281d62058f1d144fe94f0f454d395f93379866c1fefc4ac3c56dd0d9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionGoalCampaignConfigsRequest, MutateConversionGoalCampaignConfigsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionGoalCampaignConfigService. Do not edit by hand.
export const conversionGoalCampaignConfigService = {
  mutateConversionGoalCampaignConfigs(client: HttpClient, customerId: string, body: Omit<MutateConversionGoalCampaignConfigsRequest, "customerId">): Promise<MutateConversionGoalCampaignConfigsResponse> {
    return client.post<MutateConversionGoalCampaignConfigsResponse>(`/v25/customers/${customerId}/conversionGoalCampaignConfigs:mutate`, body);
  }
};
