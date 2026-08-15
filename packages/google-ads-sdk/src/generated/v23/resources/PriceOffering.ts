// @generated
// fingerprint: sha256:5d847b28ea63b6b3dbc21d5c649ed540c889531da622db2084ace819274ab600
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Money, PriceExtensionPriceUnit } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PriceOffering. Do not edit by hand.
export interface PriceOffering {
  header?: string;
  description?: string;
  price?: Money;
  unit?: PriceExtensionPriceUnit;
  finalUrl?: string;
  finalMobileUrl?: string;
}
