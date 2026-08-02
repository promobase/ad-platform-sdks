import type { AssetGroupSignalApprovalStatus, AudienceInfo, LocalServiceIdInfo, SearchThemeInfo, VerticalAdsItemGroupRuleListInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AssetGroupSignal. Do not edit by hand.
export interface AssetGroupSignal {
  resourceName?: string;
  assetGroup?: string;
  approvalStatus?: AssetGroupSignalApprovalStatus;
  disapprovalReasons?: string[];
  audience?: AudienceInfo;
  searchTheme?: SearchThemeInfo;
  localServicesId?: LocalServiceIdInfo;
  verticalAdsItemGroupRuleList?: VerticalAdsItemGroupRuleListInfo;
}
