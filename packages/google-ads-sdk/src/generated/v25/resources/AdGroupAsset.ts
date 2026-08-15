// @generated
// fingerprint: sha256:7b14772e03fffdc3150609b839bc881238fd1471bedbb9cef32143250f225a7a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetFieldType, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusDetails, AssetLinkPrimaryStatusReason, AssetLinkStatus, AssetSource } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupAsset. Do not edit by hand.
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
