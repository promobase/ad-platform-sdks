import type { AdCallToActionAsset, AdImageAsset, AdTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.DemandGenProductAdInfo. Do not edit by hand.
export interface DemandGenProductAdInfo {
  headline?: AdTextAsset;
  description?: AdTextAsset;
  logoImage?: AdImageAsset;
  breadcrumb1?: string;
  breadcrumb2?: string;
  businessName?: AdTextAsset;
  callToAction?: AdCallToActionAsset;
}
