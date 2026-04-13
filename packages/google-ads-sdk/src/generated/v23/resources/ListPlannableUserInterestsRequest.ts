import type { AdditionalApplicationInfo, UserInterestTaxonomyType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ListPlannableUserInterestsRequest. Do not edit by hand.
export interface ListPlannableUserInterestsRequest {
  customerId?: string;
  userInterestTaxonomyTypes?: UserInterestTaxonomyType[];
  nameQuery?: string;
  pathQuery?: string;
  reachApplicationInfo?: AdditionalApplicationInfo;
}
