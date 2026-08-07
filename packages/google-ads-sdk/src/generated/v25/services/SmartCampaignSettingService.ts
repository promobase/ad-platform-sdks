import type { GetSmartCampaignStatusRequest, GetSmartCampaignStatusResponse, MutateSmartCampaignSettingsRequest, MutateSmartCampaignSettingsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.SmartCampaignSettingService. Do not edit by hand.
export const smartCampaignSettingService = {
  getSmartCampaignStatus(client: HttpClient, resourceName: string): Promise<GetSmartCampaignStatusResponse> {
    return client.get<GetSmartCampaignStatusResponse>(`/v25/${resourceName}:getSmartCampaignStatus`);
  },

  mutateSmartCampaignSettings(client: HttpClient, customerId: string, body: Omit<MutateSmartCampaignSettingsRequest, "customerId">): Promise<MutateSmartCampaignSettingsResponse> {
    return client.post<MutateSmartCampaignSettingsResponse>(`/v25/customers/${customerId}/smartCampaignSettings:mutate`, body);
  }
};
