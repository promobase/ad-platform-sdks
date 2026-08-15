// @generated
// fingerprint: sha256:1bbaf45ca4c7409a5719da1c44ea607af2b132df6a4eaf84565c3f5e6f0680a9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CountryConstraintList, ResellerConstraint } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PolicyTopicConstraint. Do not edit by hand.
export interface PolicyTopicConstraint {
  countryConstraintList?: CountryConstraintList;
  resellerConstraint?: ResellerConstraint;
  certificateMissingInCountryList?: CountryConstraintList;
  certificateDomainMismatchInCountryList?: CountryConstraintList;
}
