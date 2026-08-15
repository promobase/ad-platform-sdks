// @generated
// fingerprint: sha256:0d454a54016b1ca287e40ac32a37c2df5910902bd98b0d9266029632e8e92c12
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAdAssetPolicySummary, AssetFieldType, AssetPerformanceLabel, AssetSource, ServedAssetFieldType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupAdAssetView. Do not edit by hand.
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
