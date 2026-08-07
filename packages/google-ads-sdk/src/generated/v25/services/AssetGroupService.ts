import type { MutateAssetGroupsRequest, MutateAssetGroupsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupService. Do not edit by hand.
export const assetGroupService = {
  mutateAssetGroups(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupsRequest, "customerId">): Promise<MutateAssetGroupsResponse> {
    return client.post<MutateAssetGroupsResponse>(`/v25/customers/${customerId}/assetGroups:mutate`, body);
  }
};
