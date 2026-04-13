import type { AssetFieldType, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusDetails, AssetLinkPrimaryStatusReason, AssetLinkStatus, AssetSource, PolicySummary } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AssetGroupAsset. Do not edit by hand.
export interface AssetGroupAsset {
  resourceName?: string;
  assetGroup?: string;
  asset?: string;
  fieldType?: AssetFieldType;
  status?: AssetLinkStatus;
  primaryStatus?: AssetLinkPrimaryStatus;
  primaryStatusReasons?: AssetLinkPrimaryStatusReason[];
  primaryStatusDetails?: AssetLinkPrimaryStatusDetails[];
  policySummary?: PolicySummary;
  source?: AssetSource;
}
