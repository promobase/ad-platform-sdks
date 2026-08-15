// @generated
// fingerprint: sha256:e6d1ac341b74e0a8a07168243fa4cab0863f76c74c740227d2270ad589781376
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdImageAsset, AdTextAsset, AdVideoAsset, DisplayAdFormatSetting, ResponsiveDisplayAdControlSpec } from "../index.ts";

// Generated from google.ads.googleads.v25.common.ResponsiveDisplayAdInfo. Do not edit by hand.
export interface ResponsiveDisplayAdInfo {
  marketingImages?: AdImageAsset[];
  squareMarketingImages?: AdImageAsset[];
  logoImages?: AdImageAsset[];
  squareLogoImages?: AdImageAsset[];
  headlines?: AdTextAsset[];
  longHeadline?: AdTextAsset;
  descriptions?: AdTextAsset[];
  youtubeVideos?: AdVideoAsset[];
  businessName?: string;
  mainColor?: string;
  accentColor?: string;
  allowFlexibleColor?: boolean;
  callToActionText?: string;
  pricePrefix?: string;
  promoText?: string;
  formatSetting?: DisplayAdFormatSetting;
  controlSpec?: ResponsiveDisplayAdControlSpec;
}
