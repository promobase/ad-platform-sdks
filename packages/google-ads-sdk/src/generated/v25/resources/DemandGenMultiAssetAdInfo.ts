import type { AdImageAsset, AdTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.common.DemandGenMultiAssetAdInfo. Do not edit by hand.
export interface DemandGenMultiAssetAdInfo {
  marketingImages?: AdImageAsset[];
  squareMarketingImages?: AdImageAsset[];
  portraitMarketingImages?: AdImageAsset[];
  tallPortraitMarketingImages?: AdImageAsset[];
  logoImages?: AdImageAsset[];
  classicDisplayImages?: AdImageAsset[];
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  businessName?: string;
  callToActionText?: string;
}
