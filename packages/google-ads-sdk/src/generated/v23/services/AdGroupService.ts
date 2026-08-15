// @generated
// fingerprint: sha256:e15afeb94bd3e144f3ff833883ba5abd1d3a7e89af14fec726a2840be8004e75
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupsRequest, MutateAdGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupService. Do not edit by hand.
export const adGroupService = {
  mutateAdGroups(client: HttpClient, customerId: string, body: Omit<MutateAdGroupsRequest, "customerId">): Promise<MutateAdGroupsResponse> {
    return client.post<MutateAdGroupsResponse>(`/v23/customers/${customerId}/adGroups:mutate`, body);
  }
};
