import type { AssetGroupSignalApprovalStatus, AudienceInfo, SearchThemeInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AssetGroupSignal. Do not edit by hand.
export interface AssetGroupSignal {
  resourceName?: string;
  assetGroup?: string;
  approvalStatus?: AssetGroupSignalApprovalStatus;
  disapprovalReasons?: string[];
  audience?: AudienceInfo;
  searchTheme?: SearchThemeInfo;
}
