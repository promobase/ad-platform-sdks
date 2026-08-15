// @generated
// fingerprint: sha256:5549bd4523d564466ff71e4dab6f808811027ac90882ce3f02eac4e60f628734
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, UserInterestTaxonomyType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ListPlannableUserInterestsRequest. Do not edit by hand.
export interface ListPlannableUserInterestsRequest {
  customerId?: string;
  userInterestTaxonomyTypes?: UserInterestTaxonomyType[];
  nameQuery?: string;
  pathQuery?: string;
  reachApplicationInfo?: AdditionalApplicationInfo;
}
