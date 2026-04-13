import type { AdGroupAdAssetPolicySummary, AssetFieldType, AssetPerformanceLabel, AssetSource, ServedAssetFieldType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupAdAssetView. Do not edit by hand.
export interface AdGroupAdAssetView {
  resourceName?: string;
  adGroupAd?: string;
  asset?: string;
  fieldType?: AssetFieldType;
  enabled?: boolean;
  policySummary?: AdGroupAdAssetPolicySummary;
  performanceLabel?: AssetPerformanceLabel;
  pinnedField?: ServedAssetFieldType;
  source?: AssetSource;
}
