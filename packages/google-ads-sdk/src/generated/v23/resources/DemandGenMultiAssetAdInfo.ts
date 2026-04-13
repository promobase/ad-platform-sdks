import type { AdImageAsset, AdTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.DemandGenMultiAssetAdInfo. Do not edit by hand.
export interface DemandGenMultiAssetAdInfo {
  marketingImages?: AdImageAsset[];
  squareMarketingImages?: AdImageAsset[];
  portraitMarketingImages?: AdImageAsset[];
  tallPortraitMarketingImages?: AdImageAsset[];
  logoImages?: AdImageAsset[];
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  businessName?: string;
  callToActionText?: string;
}
