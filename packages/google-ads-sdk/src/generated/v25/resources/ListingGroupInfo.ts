// @generated
// fingerprint: sha256:99d984a7a1a3f5d17f8afe080bb8f9ae8c90bbfd0de4e92e7e511e635db6986e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ListingDimensionInfo, ListingDimensionPath, ListingGroupType } from "../index.ts";

// Generated from google.ads.googleads.v25.common.ListingGroupInfo. Do not edit by hand.
export interface ListingGroupInfo {
  type?: ListingGroupType;
  caseValue?: ListingDimensionInfo;
  parentAdGroupCriterion?: string;
  path?: ListingDimensionPath;
}
