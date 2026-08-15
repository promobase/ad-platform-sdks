// @generated
// fingerprint: sha256:cd3ce5f749bc49cddb8211b029467666056bb5bbd7b591860a9932897ce48575
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionApprovalStatus, AdGroupCriterionPrimaryStatus, AdGroupCriterionPrimaryStatusReason, AdGroupCriterionStatus, AgeRangeInfo, AppPaymentModelInfo, AudienceInfo, BiddingSource, BrandListInfo, CombinedAudienceInfo, CriterionSystemServingStatus, CriterionType, CustomAffinityInfo, CustomAudienceInfo, CustomIntentInfo, CustomParameter, ExtendedDemographicInfo, GenderInfo, IncomeRangeInfo, KeywordInfo, LanguageInfo, LifeEventInfo, ListingGroupInfo, LocationInfo, MobileAppCategoryInfo, MobileApplicationInfo, ParentalStatusInfo, PlacementInfo, PositionEstimates, QualityInfo, RetailFilterBundle, TopicInfo, UserInterestInfo, UserListInfo, VerticalAdsItemGroupRuleListInfo, VideoLineupInfo, WebpageInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupCriterion. Do not edit by hand.
export interface AdGroupCriterion {
  resourceName?: string;
  criterionId?: string;
  displayName?: string;
  status?: AdGroupCriterionStatus;
  qualityInfo?: QualityInfo;
  adGroup?: string;
  type?: CriterionType;
  negative?: boolean;
  systemServingStatus?: CriterionSystemServingStatus;
  approvalStatus?: AdGroupCriterionApprovalStatus;
  disapprovalReasons?: string[];
  labels?: string[];
  bidModifier?: number;
  cpcBidMicros?: string;
  cpmBidMicros?: string;
  cpvBidMicros?: string;
  percentCpcBidMicros?: string;
  effectiveCpcBidMicros?: string;
  effectiveCpmBidMicros?: string;
  effectiveCpvBidMicros?: string;
  effectivePercentCpcBidMicros?: string;
  effectiveCpcBidSource?: BiddingSource;
  effectiveCpmBidSource?: BiddingSource;
  effectiveCpvBidSource?: BiddingSource;
  effectivePercentCpcBidSource?: BiddingSource;
  positionEstimates?: PositionEstimates;
  finalUrls?: string[];
  finalMobileUrls?: string[];
  finalUrlSuffix?: string;
  trackingUrlTemplate?: string;
  urlCustomParameters?: CustomParameter[];
  primaryStatus?: AdGroupCriterionPrimaryStatus;
  primaryStatusReasons?: AdGroupCriterionPrimaryStatusReason[];
  keyword?: KeywordInfo;
  placement?: PlacementInfo;
  mobileAppCategory?: MobileAppCategoryInfo;
  mobileApplication?: MobileApplicationInfo;
  listingGroup?: ListingGroupInfo;
  ageRange?: AgeRangeInfo;
  gender?: GenderInfo;
  incomeRange?: IncomeRangeInfo;
  parentalStatus?: ParentalStatusInfo;
  userList?: UserListInfo;
  youtubeVideo?: YouTubeVideoInfo;
  youtubeChannel?: YouTubeChannelInfo;
  topic?: TopicInfo;
  userInterest?: UserInterestInfo;
  webpage?: WebpageInfo;
  appPaymentModel?: AppPaymentModelInfo;
  customAffinity?: CustomAffinityInfo;
  customIntent?: CustomIntentInfo;
  customAudience?: CustomAudienceInfo;
  combinedAudience?: CombinedAudienceInfo;
  audience?: AudienceInfo;
  location?: LocationInfo;
  language?: LanguageInfo;
  lifeEvent?: LifeEventInfo;
  videoLineup?: VideoLineupInfo;
  extendedDemographic?: ExtendedDemographicInfo;
  brandList?: BrandListInfo;
  verticalAdsItemGroupRuleList?: VerticalAdsItemGroupRuleListInfo;
  retailFilterBundle?: RetailFilterBundle;
}
