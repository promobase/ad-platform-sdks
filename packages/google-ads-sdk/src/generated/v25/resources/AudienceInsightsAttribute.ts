// @generated
// fingerprint: sha256:953cd994109fbdcf3c10bab39b5e61cc5dbe9fa58a6768c4752339175ce4424a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AgeRangeInfo, AudienceInsightsCategory, AudienceInsightsEntity, AudienceInsightsLineup, DeviceInfo, GenderInfo, IncomeRangeInfo, LocationInfo, ParentalStatusInfo, UserInterestInfo, UserListInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AudienceInsightsAttribute. Do not edit by hand.
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
