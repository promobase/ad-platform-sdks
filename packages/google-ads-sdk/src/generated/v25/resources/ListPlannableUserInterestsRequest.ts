// @generated
// fingerprint: sha256:ced3a1cdb33a79168ad1f8a35d87c2364023742f601b63d2df80bd812fd4380d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, UserInterestTaxonomyType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ListPlannableUserInterestsRequest. Do not edit by hand.
export interface ListPlannableUserInterestsRequest {
  customerId?: string;
  userInterestTaxonomyTypes?: UserInterestTaxonomyType[];
  nameQuery?: string;
  pathQuery?: string;
  reachApplicationInfo?: AdditionalApplicationInfo;
}
