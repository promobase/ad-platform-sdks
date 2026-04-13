import type { ListingGroupFilterDimension, ListingGroupFilterDimensionPath, ListingGroupFilterListingSource, ListingGroupFilterType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AssetGroupListingGroupFilter. Do not edit by hand.
export interface AssetGroupListingGroupFilter {
  resourceName?: string;
  assetGroup?: string;
  id?: string;
  type?: ListingGroupFilterType;
  listingSource?: ListingGroupFilterListingSource;
  caseValue?: ListingGroupFilterDimension;
  parentListingGroupFilter?: string;
  path?: ListingGroupFilterDimensionPath;
}
