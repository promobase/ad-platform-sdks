// @generated
// fingerprint: sha256:cc502ffd837a1593e8ae99fe6673178719035150e611d9a0d1c1c050bd19805b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeRangeInfo, AudienceInsightsLineup, GenderInfo, IncomeRangeInfo, InsightsAudienceAttributeGroup, LocationInfo, ParentalStatusInfo, UserListInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.InsightsAudience. Do not edit by hand.
export interface InsightsAudience {
  countryLocations?: LocationInfo[];
  subCountryLocations?: LocationInfo[];
  gender?: GenderInfo;
  ageRanges?: AgeRangeInfo[];
  parentalStatus?: ParentalStatusInfo;
  incomeRanges?: IncomeRangeInfo[];
  lineups?: AudienceInsightsLineup[];
  userList?: UserListInfo;
  topicAudienceCombinations?: InsightsAudienceAttributeGroup[];
}
