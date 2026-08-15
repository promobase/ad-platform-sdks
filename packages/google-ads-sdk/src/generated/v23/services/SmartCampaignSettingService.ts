// @generated
// fingerprint: sha256:5cdd9ecf91274386c9669c26304983f181baf556fa9431df444485c93efec0e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GetSmartCampaignStatusRequest, GetSmartCampaignStatusResponse, MutateSmartCampaignSettingsRequest, MutateSmartCampaignSettingsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.SmartCampaignSettingService. Do not edit by hand.
export const smartCampaignSettingService = {
  getSmartCampaignStatus(client: HttpClient, resourceName: string): Promise<GetSmartCampaignStatusResponse> {
    return client.get<GetSmartCampaignStatusResponse>(`/v23/${resourceName}:getSmartCampaignStatus`);
  },

  mutateSmartCampaignSettings(client: HttpClient, customerId: string, body: Omit<MutateSmartCampaignSettingsRequest, "customerId">): Promise<MutateSmartCampaignSettingsResponse> {
    return client.post<MutateSmartCampaignSettingsResponse>(`/v23/customers/${customerId}/smartCampaignSettings:mutate`, body);
  }
};
