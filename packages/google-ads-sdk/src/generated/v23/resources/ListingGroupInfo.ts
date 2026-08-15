// @generated
// fingerprint: sha256:fc11a450f205b055bebe1feca640df76cdcf8e2ae430aa0e0629267eac84a41d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListingDimensionInfo, ListingDimensionPath, ListingGroupType } from "../index.ts";

// Generated from google.ads.googleads.v23.common.ListingGroupInfo. Do not edit by hand.
export interface ListingGroupInfo {
  type?: ListingGroupType;
  caseValue?: ListingDimensionInfo;
  parentAdGroupCriterion?: string;
  path?: ListingDimensionPath;
}
