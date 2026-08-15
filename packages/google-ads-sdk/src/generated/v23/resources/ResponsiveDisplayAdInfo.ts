// @generated
// fingerprint: sha256:144293cc7409cd8d35f24d5e625fb2d00cb283a962740d9fce3a04905854f083
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdImageAsset, AdTextAsset, AdVideoAsset, DisplayAdFormatSetting, ResponsiveDisplayAdControlSpec } from "../index.ts";

// Generated from google.ads.googleads.v23.common.ResponsiveDisplayAdInfo. Do not edit by hand.
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
