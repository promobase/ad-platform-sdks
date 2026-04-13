import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LocalAdInfo. Do not edit by hand.
export interface LocalAdInfo {
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  callToActions?: AdTextAsset[];
  marketingImages?: AdImageAsset[];
  logoImages?: AdImageAsset[];
  videos?: AdVideoAsset[];
  path1?: string;
  path2?: string;
}
