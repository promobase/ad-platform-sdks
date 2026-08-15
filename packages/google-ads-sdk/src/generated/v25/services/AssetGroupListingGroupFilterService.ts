// @generated
// fingerprint: sha256:e335d45818ca29318a60dac659712081039077dbd6ee8bfc11763dd04d8a3518
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupListingGroupFiltersRequest, MutateAssetGroupListingGroupFiltersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupListingGroupFilterService. Do not edit by hand.
export const assetGroupListingGroupFilterService = {
  mutateAssetGroupListingGroupFilters(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupListingGroupFiltersRequest, "customerId">): Promise<MutateAssetGroupListingGroupFiltersResponse> {
    return client.post<MutateAssetGroupListingGroupFiltersResponse>(`/v25/customers/${customerId}/assetGroupListingGroupFilters:mutate`, body);
  }
};
