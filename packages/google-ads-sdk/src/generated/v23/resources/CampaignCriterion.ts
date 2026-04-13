import type { AdScheduleInfo, AgeRangeInfo, BrandListInfo, CampaignCriterionStatus, CarrierInfo, CombinedAudienceInfo, ContentLabelInfo, CriterionType, CustomAffinityInfo, CustomAudienceInfo, DeviceInfo, ExtendedDemographicInfo, GenderInfo, IncomeRangeInfo, IpBlockInfo, KeywordInfo, KeywordThemeInfo, LanguageInfo, LifeEventInfo, ListingScopeInfo, LocalServiceIdInfo, LocationGroupInfo, LocationInfo, MobileAppCategoryInfo, MobileApplicationInfo, MobileDeviceInfo, OperatingSystemVersionInfo, ParentalStatusInfo, PlacementInfo, ProximityInfo, TopicInfo, UserInterestInfo, UserListInfo, VideoLineupInfo, WebpageInfo, WebpageListInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignCriterion. Do not edit by hand.
export interface CampaignCriterion {
  resourceName?: string;
  campaign?: string;
  criterionId?: string;
  displayName?: string;
  bidModifier?: number;
  negative?: boolean;
  type?: CriterionType;
  status?: CampaignCriterionStatus;
  keyword?: KeywordInfo;
  placement?: PlacementInfo;
  mobileAppCategory?: MobileAppCategoryInfo;
  mobileApplication?: MobileApplicationInfo;
  location?: LocationInfo;
  device?: DeviceInfo;
  adSchedule?: AdScheduleInfo;
  ageRange?: AgeRangeInfo;
  gender?: GenderInfo;
  incomeRange?: IncomeRangeInfo;
  parentalStatus?: ParentalStatusInfo;
  userList?: UserListInfo;
  youtubeVideo?: YouTubeVideoInfo;
  youtubeChannel?: YouTubeChannelInfo;
  proximity?: ProximityInfo;
  topic?: TopicInfo;
  listingScope?: ListingScopeInfo;
  language?: LanguageInfo;
  ipBlock?: IpBlockInfo;
  contentLabel?: ContentLabelInfo;
  carrier?: CarrierInfo;
  userInterest?: UserInterestInfo;
  webpage?: WebpageInfo;
  operatingSystemVersion?: OperatingSystemVersionInfo;
  mobileDevice?: MobileDeviceInfo;
  locationGroup?: LocationGroupInfo;
  customAffinity?: CustomAffinityInfo;
  customAudience?: CustomAudienceInfo;
  combinedAudience?: CombinedAudienceInfo;
  keywordTheme?: KeywordThemeInfo;
  localServiceId?: LocalServiceIdInfo;
  brandList?: BrandListInfo;
  lifeEvent?: LifeEventInfo;
  webpageList?: WebpageListInfo;
  videoLineup?: VideoLineupInfo;
  extendedDemographic?: ExtendedDemographicInfo;
}
