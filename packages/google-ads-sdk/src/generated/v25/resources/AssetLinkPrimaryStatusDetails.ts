import type { AssetDisapproved, AssetLinkPrimaryStatus, AssetLinkPrimaryStatusReason } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AssetLinkPrimaryStatusDetails. Do not edit by hand.
export interface AssetLinkPrimaryStatusDetails {
  reason?: AssetLinkPrimaryStatusReason;
  status?: AssetLinkPrimaryStatus;
  assetDisapproved?: AssetDisapproved;
}
