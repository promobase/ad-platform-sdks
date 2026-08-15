// @generated
// fingerprint: sha256:02a0cbb998e05d02f279eb9689d3d670edd677b1fae1305d91e5119dbea284b1
// DO NOT EDIT: generated file; changes will be overwritten.
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
