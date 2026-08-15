// @generated
// fingerprint: sha256:510654b6d2be9c42cb1a6c6a14df78b0cb00efb9e74d4e0e013479dc1ef9dc16
// DO NOT EDIT: generated file; changes will be overwritten.
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
