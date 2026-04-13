import type { MutateConversionGoalCampaignConfigsRequest, MutateConversionGoalCampaignConfigsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionGoalCampaignConfigService. Do not edit by hand.
export const conversionGoalCampaignConfigService = {
  mutateConversionGoalCampaignConfigs(client: HttpClient, customerId: string, body: Omit<MutateConversionGoalCampaignConfigsRequest, "customerId">): Promise<MutateConversionGoalCampaignConfigsResponse> {
    return client.post<MutateConversionGoalCampaignConfigsResponse>(`/v23/customers/${customerId}/conversionGoalCampaignConfigs:mutate`, body);
  }
};
