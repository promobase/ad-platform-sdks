// @generated
// fingerprint: sha256:c15105752ac4c1fa9697de0bb892b829b4d5f97c8aa47dc74bfcd2a02a2810a8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetFieldType, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusDetails, AssetLinkPrimaryStatusReason, AssetLinkStatus, AssetSource } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CampaignAsset. Do not edit by hand.
export interface CampaignAsset {
  resourceName?: string;
  campaign?: string;
  asset?: string;
  fieldType?: AssetFieldType;
  source?: AssetSource;
  status?: AssetLinkStatus;
  primaryStatus?: AssetLinkPrimaryStatus;
  primaryStatusDetails?: AssetLinkPrimaryStatusDetails[];
  primaryStatusReasons?: AssetLinkPrimaryStatusReason[];
}
