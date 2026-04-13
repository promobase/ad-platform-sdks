import type { AssetFieldType, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusDetails, AssetLinkPrimaryStatusReason, AssetLinkStatus, AssetSource } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupAsset. Do not edit by hand.
export interface AdGroupAsset {
  resourceName?: string;
  adGroup?: string;
  asset?: string;
  fieldType?: AssetFieldType;
  source?: AssetSource;
  status?: AssetLinkStatus;
  primaryStatus?: AssetLinkPrimaryStatus;
  primaryStatusDetails?: AssetLinkPrimaryStatusDetails[];
  primaryStatusReasons?: AssetLinkPrimaryStatusReason[];
}
