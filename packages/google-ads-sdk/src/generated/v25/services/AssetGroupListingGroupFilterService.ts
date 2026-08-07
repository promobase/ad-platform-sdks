import type { MutateAssetGroupListingGroupFiltersRequest, MutateAssetGroupListingGroupFiltersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupListingGroupFilterService. Do not edit by hand.
export const assetGroupListingGroupFilterService = {
  mutateAssetGroupListingGroupFilters(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupListingGroupFiltersRequest, "customerId">): Promise<MutateAssetGroupListingGroupFiltersResponse> {
    return client.post<MutateAssetGroupListingGroupFiltersResponse>(`/v25/customers/${customerId}/assetGroupListingGroupFilters:mutate`, body);
  }
};
