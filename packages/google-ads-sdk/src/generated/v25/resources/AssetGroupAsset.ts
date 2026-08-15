// @generated
// fingerprint: sha256:13b868f3c83e20c342c095bc8c524f7dd8ca21f20f89e7e130fcdd7208ebbb99
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetFieldType, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusDetails, AssetLinkPrimaryStatusReason, AssetLinkStatus, AssetSource, PolicySummary } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AssetGroupAsset. Do not edit by hand.
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
