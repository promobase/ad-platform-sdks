// @generated
// fingerprint: sha256:ccb7293b17da0275e98f977ec3acf6600d64ee59cf7d53799a13c43c6b68831a
// DO NOT EDIT: generated file; changes will be overwritten.
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
