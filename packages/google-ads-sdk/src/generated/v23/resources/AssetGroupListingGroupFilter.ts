// @generated
// fingerprint: sha256:130578cb47a45ce7e5de1d3d7df06f7cebfc0e145dfdc56e3fae07761a31db7d
// DO NOT EDIT: generated file; changes will be overwritten.
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
