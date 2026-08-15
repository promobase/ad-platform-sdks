// @generated
// fingerprint: sha256:aea6cd76003a65a852a5ce5ccf30fde14a5c233ec6be7c11cf615be76a941db0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Money, PriceExtensionPriceUnit } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PriceOffering. Do not edit by hand.
export interface PriceOffering {
  header?: string;
  description?: string;
  price?: Money;
  unit?: PriceExtensionPriceUnit;
  finalUrl?: string;
  finalMobileUrl?: string;
}
