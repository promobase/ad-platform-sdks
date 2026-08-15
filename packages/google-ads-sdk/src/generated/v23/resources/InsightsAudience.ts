// @generated
// fingerprint: sha256:79b34e9aaeedcb8259effa695505dd26a1d1434fb692cbbeccf80bfd4f193351
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeRangeInfo, AudienceInsightsLineup, GenderInfo, IncomeRangeInfo, InsightsAudienceAttributeGroup, LocationInfo, ParentalStatusInfo, UserListInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.InsightsAudience. Do not edit by hand.
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
