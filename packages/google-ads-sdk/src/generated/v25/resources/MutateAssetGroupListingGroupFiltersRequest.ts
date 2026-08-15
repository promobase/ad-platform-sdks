// @generated
// fingerprint: sha256:5489b431001faf0286e3768ceb16484638c866112e16b47341ec846eed1726cd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetGroupListingGroupFilterOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetGroupListingGroupFiltersRequest. Do not edit by hand.
export interface MutateAssetGroupListingGroupFiltersRequest {
  customerId?: string;
  operations?: AssetGroupListingGroupFilterOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
