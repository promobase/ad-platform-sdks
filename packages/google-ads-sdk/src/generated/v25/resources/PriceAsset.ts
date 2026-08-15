// @generated
// fingerprint: sha256:2e22b11c96579ecb789b4cda97154a103ec31facdb1900a61dcb7402f4c05aa4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PriceExtensionPriceQualifier, PriceExtensionType, PriceOffering } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PriceAsset. Do not edit by hand.
export interface PriceAsset {
  type?: PriceExtensionType;
  priceQualifier?: PriceExtensionPriceQualifier;
  languageCode?: string;
  priceOfferings?: PriceOffering[];
}
