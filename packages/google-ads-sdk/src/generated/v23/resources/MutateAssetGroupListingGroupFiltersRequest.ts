// @generated
// fingerprint: sha256:7069b38d0047c4ca341a99b9375c6516133ec67349a4e7342dfb6a58aff1fa53
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetGroupListingGroupFilterOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetGroupListingGroupFiltersRequest. Do not edit by hand.
export interface MutateAssetGroupListingGroupFiltersRequest {
  customerId?: string;
  operations?: AssetGroupListingGroupFilterOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
