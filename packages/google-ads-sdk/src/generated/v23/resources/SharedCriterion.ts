import type { BrandInfo, CriterionType, KeywordInfo, MobileAppCategoryInfo, MobileApplicationInfo, PlacementInfo, VerticalAdsItemGroupRuleInfo, WebpageInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.SharedCriterion. Do not edit by hand.
export interface SharedCriterion {
  resourceName?: string;
  sharedSet?: string;
  criterionId?: string;
  type?: CriterionType;
  negative?: boolean;
  keyword?: KeywordInfo;
  youtubeVideo?: YouTubeVideoInfo;
  youtubeChannel?: YouTubeChannelInfo;
  placement?: PlacementInfo;
  mobileAppCategory?: MobileAppCategoryInfo;
  mobileApplication?: MobileApplicationInfo;
  brand?: BrandInfo;
  webpage?: WebpageInfo;
  verticalAdsItemGroupRule?: VerticalAdsItemGroupRuleInfo;
}
