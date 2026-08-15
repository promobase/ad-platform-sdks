// @generated
// fingerprint: sha256:03a2696eaf75d2de2c66a42bec42bd95482f340ec2031158eafefcfa469974fd
// DO NOT EDIT: generated file; changes will be overwritten.
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
