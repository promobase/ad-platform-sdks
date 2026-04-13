import type { DisplayAdFormatSetting } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LegacyResponsiveDisplayAdInfo. Do not edit by hand.
export interface LegacyResponsiveDisplayAdInfo {
  shortHeadline?: string;
  longHeadline?: string;
  description?: string;
  businessName?: string;
  allowFlexibleColor?: boolean;
  accentColor?: string;
  mainColor?: string;
  callToActionText?: string;
  logoImage?: string;
  squareLogoImage?: string;
  marketingImage?: string;
  squareMarketingImage?: string;
  formatSetting?: DisplayAdFormatSetting;
  pricePrefix?: string;
  promoText?: string;
}
