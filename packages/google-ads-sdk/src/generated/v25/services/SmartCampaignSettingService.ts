// @generated
// fingerprint: sha256:51465a84e1f35fc9d45ad4f8fac8f730a0a9cf8749caa51468fca7d5f4e9b95c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GetSmartCampaignStatusRequest, GetSmartCampaignStatusResponse, MutateSmartCampaignSettingsRequest, MutateSmartCampaignSettingsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.SmartCampaignSettingService. Do not edit by hand.
export const smartCampaignSettingService = {
  getSmartCampaignStatus(client: HttpClient, resourceName: string): Promise<GetSmartCampaignStatusResponse> {
    return client.get<GetSmartCampaignStatusResponse>(`/v25/${resourceName}:getSmartCampaignStatus`);
  },

  mutateSmartCampaignSettings(client: HttpClient, customerId: string, body: Omit<MutateSmartCampaignSettingsRequest, "customerId">): Promise<MutateSmartCampaignSettingsResponse> {
    return client.post<MutateSmartCampaignSettingsResponse>(`/v25/customers/${customerId}/smartCampaignSettings:mutate`, body);
  }
};
