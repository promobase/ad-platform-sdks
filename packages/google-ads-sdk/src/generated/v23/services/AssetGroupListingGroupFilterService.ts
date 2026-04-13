import type { MutateAssetGroupListingGroupFiltersRequest, MutateAssetGroupListingGroupFiltersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupListingGroupFilterService. Do not edit by hand.
export const assetGroupListingGroupFilterService = {
  mutateAssetGroupListingGroupFilters(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupListingGroupFiltersRequest, "customerId">): Promise<MutateAssetGroupListingGroupFiltersResponse> {
    return client.post<MutateAssetGroupListingGroupFiltersResponse>(`/v23/customers/${customerId}/assetGroupListingGroupFilters:mutate`, body);
  }
};
