import type { MutateAssetGroupsRequest, MutateAssetGroupsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupService. Do not edit by hand.
export const assetGroupService = {
  mutateAssetGroups(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupsRequest, "customerId">): Promise<MutateAssetGroupsResponse> {
    return client.post<MutateAssetGroupsResponse>(`/v23/customers/${customerId}/assetGroups:mutate`, body);
  }
};
