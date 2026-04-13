import type { AssetFieldType, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusDetails, AssetLinkPrimaryStatusReason, AssetLinkStatus, AssetSource } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerAsset. Do not edit by hand.
export interface CustomerAsset {
  resourceName?: string;
  asset?: string;
  fieldType?: AssetFieldType;
  source?: AssetSource;
  status?: AssetLinkStatus;
  primaryStatus?: AssetLinkPrimaryStatus;
  primaryStatusDetails?: AssetLinkPrimaryStatusDetails[];
  primaryStatusReasons?: AssetLinkPrimaryStatusReason[];
}
