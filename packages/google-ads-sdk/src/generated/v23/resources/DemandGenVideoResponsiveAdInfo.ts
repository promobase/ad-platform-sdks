import type { AdCallToActionAsset, AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.DemandGenVideoResponsiveAdInfo. Do not edit by hand.
export interface DemandGenVideoResponsiveAdInfo {
  headlines?: AdTextAsset[];
  longHeadlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  videos?: AdVideoAsset[];
  logoImages?: AdImageAsset[];
  companionBanners?: AdImageAsset[];
  breadcrumb1?: string;
  breadcrumb2?: string;
  businessName?: AdTextAsset;
  callToActions?: AdCallToActionAsset[];
}
