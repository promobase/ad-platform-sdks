// @generated
// fingerprint: sha256:bb94f8589c5dee8d507d4fa32e1eb8af1d7c4e14cced7b52139bf2f2eda7f21a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupsRequest, MutateAssetGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupService. Do not edit by hand.
export const assetGroupService = {
  mutateAssetGroups(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupsRequest, "customerId">): Promise<MutateAssetGroupsResponse> {
    return client.post<MutateAssetGroupsResponse>(`/v23/customers/${customerId}/assetGroups:mutate`, body);
  }
};
