// @generated
// fingerprint: sha256:d7717d0f4bae04e21eb09d69f71b535144ad5230d6529e2b15af165aa844bdb0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ContentLabelInfo, CriterionType, IpBlockInfo, MobileAppCategoryInfo, MobileApplicationInfo, NegativeKeywordListInfo, PlacementInfo, PlacementListInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerNegativeCriterion. Do not edit by hand.
export interface CustomerNegativeCriterion {
  resourceName?: string;
  id?: string;
  type?: CriterionType;
  contentLabel?: ContentLabelInfo;
  mobileApplication?: MobileApplicationInfo;
  mobileAppCategory?: MobileAppCategoryInfo;
  placement?: PlacementInfo;
  youtubeVideo?: YouTubeVideoInfo;
  youtubeChannel?: YouTubeChannelInfo;
  negativeKeywordList?: NegativeKeywordListInfo;
  ipBlock?: IpBlockInfo;
  placementList?: PlacementListInfo;
}
