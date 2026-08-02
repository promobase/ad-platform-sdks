import type { AgeDimension, AudienceSegmentDimension, GenderDimension, HouseholdIncomeDimension, ParentalStatusDimension } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AudienceDimension. Do not edit by hand.
export interface AudienceDimension {
  age?: AgeDimension;
  gender?: GenderDimension;
  householdIncome?: HouseholdIncomeDimension;
  parentalStatus?: ParentalStatusDimension;
  audienceSegments?: AudienceSegmentDimension;
}
