// @generated
// fingerprint: sha256:35b6fe01677fb453eeb18929b8c7e0d4ce4cda0617390c51b220cc169e63fb32
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListingGroupFilterDimension, ListingGroupFilterDimensionPath, ListingGroupFilterListingSource, ListingGroupFilterType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AssetGroupListingGroupFilter. Do not edit by hand.
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
