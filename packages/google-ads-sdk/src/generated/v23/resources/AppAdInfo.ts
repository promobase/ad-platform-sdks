import type { AdAppDeepLinkAsset, AdImageAsset, AdMediaBundleAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AppAdInfo. Do not edit by hand.
export interface AppAdInfo {
  mandatoryAdText?: AdTextAsset;
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  images?: AdImageAsset[];
  youtubeVideos?: AdVideoAsset[];
  html5MediaBundles?: AdMediaBundleAsset[];
  appDeepLink?: AdAppDeepLinkAsset;
}
