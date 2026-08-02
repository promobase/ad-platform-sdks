import type { ListingDimensionInfo, ListingDimensionPath, ListingGroupType } from "../index.ts";

// Generated from google.ads.googleads.v25.common.ListingGroupInfo. Do not edit by hand.
export interface ListingGroupInfo {
  type?: ListingGroupType;
  caseValue?: ListingDimensionInfo;
  parentAdGroupCriterion?: string;
  path?: ListingDimensionPath;
}
