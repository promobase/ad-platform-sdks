// @generated
// fingerprint: sha256:1e3c3fcfee8b80cc5bd9c917882cfcd8d094d508b531d25b959f8e04ee5dca6a
// DO NOT EDIT: generated file; changes will be overwritten.
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
