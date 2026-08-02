import type { AssetGroupListingGroupFilterOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetGroupListingGroupFiltersRequest. Do not edit by hand.
export interface MutateAssetGroupListingGroupFiltersRequest {
  customerId?: string;
  operations?: AssetGroupListingGroupFilterOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
