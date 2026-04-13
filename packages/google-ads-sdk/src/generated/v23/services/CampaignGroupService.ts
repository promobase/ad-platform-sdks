import type { MutateCampaignGroupsRequest, MutateCampaignGroupsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CampaignGroupService. Do not edit by hand.
export const campaignGroupService = {
  mutateCampaignGroups(client: HttpClient, customerId: string, body: Omit<MutateCampaignGroupsRequest, "customerId">): Promise<MutateCampaignGroupsResponse> {
    return client.post<MutateCampaignGroupsResponse>(`/v23/customers/${customerId}/campaignGroups:mutate`, body);
  }
};
