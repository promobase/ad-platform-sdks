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
