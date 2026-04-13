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
