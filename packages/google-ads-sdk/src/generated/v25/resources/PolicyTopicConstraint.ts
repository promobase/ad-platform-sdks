import type { CountryConstraintList, ResellerConstraint } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PolicyTopicConstraint. Do not edit by hand.
export interface PolicyTopicConstraint {
  countryConstraintList?: CountryConstraintList;
  resellerConstraint?: ResellerConstraint;
  certificateMissingInCountryList?: CountryConstraintList;
  certificateDomainMismatchInCountryList?: CountryConstraintList;
}
