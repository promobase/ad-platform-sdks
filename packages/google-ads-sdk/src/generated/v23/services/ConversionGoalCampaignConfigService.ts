// @generated
// fingerprint: sha256:41ee879a9e211e0a51178f9d09ccdef8258ad2a58ac9733bcd951ccd841496ce
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionGoalCampaignConfigsRequest, MutateConversionGoalCampaignConfigsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionGoalCampaignConfigService. Do not edit by hand.
export const conversionGoalCampaignConfigService = {
  mutateConversionGoalCampaignConfigs(client: HttpClient, customerId: string, body: Omit<MutateConversionGoalCampaignConfigsRequest, "customerId">): Promise<MutateConversionGoalCampaignConfigsResponse> {
    return client.post<MutateConversionGoalCampaignConfigsResponse>(`/v23/customers/${customerId}/conversionGoalCampaignConfigs:mutate`, body);
  }
};
