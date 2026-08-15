// @generated
// fingerprint: sha256:c45b905fa4d6047b0cb8f37978f1c2bfe61857b0d493ccaa0a5005c4e8ecd121
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ContentLabelInfo, CriterionType, IpBlockInfo, MobileAppCategoryInfo, MobileApplicationInfo, NegativeKeywordListInfo, PlacementInfo, PlacementListInfo, YouTubeChannelInfo, YouTubeVideoInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomerNegativeCriterion. Do not edit by hand.
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
