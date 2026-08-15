// @generated
// fingerprint: sha256:e4ac229475a33bb6d9ef8ef5c04d671cf2303dc016b28074922848286f8ff5ee
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupListingGroupFiltersRequest, MutateAssetGroupListingGroupFiltersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupListingGroupFilterService. Do not edit by hand.
export const assetGroupListingGroupFilterService = {
  mutateAssetGroupListingGroupFilters(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupListingGroupFiltersRequest, "customerId">): Promise<MutateAssetGroupListingGroupFiltersResponse> {
    return client.post<MutateAssetGroupListingGroupFiltersResponse>(`/v23/customers/${customerId}/assetGroupListingGroupFilters:mutate`, body);
  }
};
