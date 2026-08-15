// @generated
// fingerprint: sha256:a15a2b4868b00963b295d39cc44a7b8ab29b46fed02c2ebc1977b45b8495c624
// DO NOT EDIT: generated file; changes will be overwritten.
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
