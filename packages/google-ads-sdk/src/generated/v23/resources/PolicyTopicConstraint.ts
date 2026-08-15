// @generated
// fingerprint: sha256:85cb1e6b8fb49bb4ac288ebc86f89d751bb5c88ad74f983007b2c7e159d3d3e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CountryConstraintList, ResellerConstraint } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicyTopicConstraint. Do not edit by hand.
export interface PolicyTopicConstraint {
  countryConstraintList?: CountryConstraintList;
  resellerConstraint?: ResellerConstraint;
  certificateMissingInCountryList?: CountryConstraintList;
  certificateDomainMismatchInCountryList?: CountryConstraintList;
}
