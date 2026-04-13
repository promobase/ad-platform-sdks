import type { MutateAdGroupsRequest, MutateAdGroupsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupService. Do not edit by hand.
export const adGroupService = {
  mutateAdGroups(client: HttpClient, customerId: string, body: Omit<MutateAdGroupsRequest, "customerId">): Promise<MutateAdGroupsResponse> {
    return client.post<MutateAdGroupsResponse>(`/v23/customers/${customerId}/adGroups:mutate`, body);
  }
};
