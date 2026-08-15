// @generated
// fingerprint: sha256:7bdb70b152e52d27acc5aaf905afbcbedd571f0bbb36d6e0e40677faf7428bdc
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeDimension, AudienceSegmentDimension, GenderDimension, HouseholdIncomeDimension, ParentalStatusDimension } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AudienceDimension. Do not edit by hand.
export interface AudienceDimension {
  age?: AgeDimension;
  gender?: GenderDimension;
  householdIncome?: HouseholdIncomeDimension;
  parentalStatus?: ParentalStatusDimension;
  audienceSegments?: AudienceSegmentDimension;
}
