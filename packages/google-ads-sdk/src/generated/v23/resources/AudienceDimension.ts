// @generated
// fingerprint: sha256:bbf20933b3ced48dd10c48379a83fa8bc0c77f4b62ca278fefc12d924a1cefc4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeDimension, AudienceSegmentDimension, GenderDimension, HouseholdIncomeDimension, ParentalStatusDimension } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AudienceDimension. Do not edit by hand.
export interface AudienceDimension {
  age?: AgeDimension;
  gender?: GenderDimension;
  householdIncome?: HouseholdIncomeDimension;
  parentalStatus?: ParentalStatusDimension;
  audienceSegments?: AudienceSegmentDimension;
}
