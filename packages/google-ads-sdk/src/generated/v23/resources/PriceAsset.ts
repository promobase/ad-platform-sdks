import type { PriceExtensionPriceQualifier, PriceExtensionType, PriceOffering } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PriceAsset. Do not edit by hand.
export interface PriceAsset {
  type?: PriceExtensionType;
  priceQualifier?: PriceExtensionPriceQualifier;
  languageCode?: string;
  priceOfferings?: PriceOffering[];
}
