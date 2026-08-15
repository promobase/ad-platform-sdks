// @generated
// fingerprint: sha256:2e682ca9ecce0af7050a5c08685f985676b7fddfe8ecb730e7ce76809a2823af
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PriceExtensionPriceQualifier, PriceExtensionType, PriceOffering } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PriceAsset. Do not edit by hand.
export interface PriceAsset {
  type?: PriceExtensionType;
  priceQualifier?: PriceExtensionPriceQualifier;
  languageCode?: string;
  priceOfferings?: PriceOffering[];
}
