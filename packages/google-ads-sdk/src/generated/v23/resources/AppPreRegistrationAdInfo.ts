import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AppPreRegistrationAdInfo. Do not edit by hand.
export interface AppPreRegistrationAdInfo {
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  images?: AdImageAsset[];
  youtubeVideos?: AdVideoAsset[];
}
