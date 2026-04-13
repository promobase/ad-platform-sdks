import type { AdAssetPolicySummary, AssetPerformanceLabel, ServedAssetFieldType } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AdTextAsset. Do not edit by hand.
export interface AdTextAsset {
  text?: string;
  pinnedField?: ServedAssetFieldType;
  assetPerformanceLabel?: AssetPerformanceLabel;
  policySummaryInfo?: AdAssetPolicySummary;
}
