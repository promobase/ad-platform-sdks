// @generated
// fingerprint: sha256:609adcc5e15a72b08c61c9c6b99d2fe968ef86eb1eeeb9607f37e5bdf2a5dfda
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupsRequest, MutateAssetGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupService. Do not edit by hand.
export const assetGroupService = {
  mutateAssetGroups(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupsRequest, "customerId">): Promise<MutateAssetGroupsResponse> {
    return client.post<MutateAssetGroupsResponse>(`/v25/customers/${customerId}/assetGroups:mutate`, body);
  }
};
