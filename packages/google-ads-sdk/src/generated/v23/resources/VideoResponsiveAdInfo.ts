import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.VideoResponsiveAdInfo. Do not edit by hand.
export interface VideoResponsiveAdInfo {
  headlines?: AdTextAsset[];
  longHeadlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  callToActions?: AdTextAsset[];
  videos?: AdVideoAsset[];
  businessName?: AdTextAsset;
  logoImages?: AdImageAsset[];
  companionBanners?: AdImageAsset[];
  breadcrumb1?: string;
  breadcrumb2?: string;
}
