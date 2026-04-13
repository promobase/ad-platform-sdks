import type { AgeRangeInfo, AudienceInsightsCategory, AudienceInsightsEntity, AudienceInsightsLineup, DeviceInfo, GenderInfo, IncomeRangeInfo, LocationInfo, ParentalStatusInfo, UserInterestInfo, UserListInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AudienceInsightsAttribute. Do not edit by hand.
export interface AudienceInsightsAttribute {
  ageRange?: AgeRangeInfo;
  gender?: GenderInfo;
  location?: LocationInfo;
  userInterest?: UserInterestInfo;
  entity?: AudienceInsightsEntity;
  category?: AudienceInsightsCategory;
  lineup?: AudienceInsightsLineup;
  parentalStatus?: ParentalStatusInfo;
  incomeRange?: IncomeRangeInfo;
  youtubeChannel?: YouTubeChannelInfo;
  youtubeVideo?: YouTubeVideoInfo;
  device?: DeviceInfo;
  userList?: UserListInfo;
}
