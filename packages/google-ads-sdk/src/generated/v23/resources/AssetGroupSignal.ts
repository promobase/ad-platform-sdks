// @generated
// fingerprint: sha256:db232cbe604b4fea3a7bd40f2736a0aa267582cc46046338541b3e8a4d8841f9
// DO NOT EDIT: generated file; changes will be overwritten.
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
