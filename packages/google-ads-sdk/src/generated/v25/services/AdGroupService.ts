// @generated
// fingerprint: sha256:a4a8bf0c958a0649a9fe60eda4f67da7dc133c2453a3fb5e4a7c6c3c68a79187
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupsRequest, MutateAdGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupService. Do not edit by hand.
export const adGroupService = {
  mutateAdGroups(client: HttpClient, customerId: string, body: Omit<MutateAdGroupsRequest, "customerId">): Promise<MutateAdGroupsResponse> {
    return client.post<MutateAdGroupsResponse>(`/v25/customers/${customerId}/adGroups:mutate`, body);
  }
};
