// @generated
// fingerprint: sha256:0998468f121419777af2d3e131119c987764508d73daff2b564ee590d3ceb7b1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdAppDeepLinkAsset, AdImageAsset, AdMediaBundleAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AppAdInfo. Do not edit by hand.
export interface AppAdInfo {
  mandatoryAdText?: AdTextAsset;
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  images?: AdImageAsset[];
  youtubeVideos?: AdVideoAsset[];
  html5MediaBundles?: AdMediaBundleAsset[];
  appDeepLink?: AdAppDeepLinkAsset;
}
