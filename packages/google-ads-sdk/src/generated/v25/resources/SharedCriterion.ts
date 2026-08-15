// @generated
// fingerprint: sha256:21aa38d0543086f7d0a29c5872899accae2d28542e1e814f91c9f7051601a3cd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BrandInfo, CriterionType, KeywordInfo, MobileAppCategoryInfo, MobileApplicationInfo, PlacementInfo, RetailFilter, VerticalAdsItemGroupRuleInfo, WebpageInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.SharedCriterion. Do not edit by hand.
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
  retailFilter?: RetailFilter;
}
