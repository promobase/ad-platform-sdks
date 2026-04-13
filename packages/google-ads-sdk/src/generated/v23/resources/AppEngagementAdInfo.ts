import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AppEngagementAdInfo. Do not edit by hand.
export interface AppEngagementAdInfo {
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  images?: AdImageAsset[];
  videos?: AdVideoAsset[];
}
