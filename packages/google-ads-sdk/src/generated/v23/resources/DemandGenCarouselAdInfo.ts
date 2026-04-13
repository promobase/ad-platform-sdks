import type { AdDemandGenCarouselCardAsset, AdImageAsset, AdTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.DemandGenCarouselAdInfo. Do not edit by hand.
export interface DemandGenCarouselAdInfo {
  businessName?: string;
  logoImage?: AdImageAsset;
  headline?: AdTextAsset;
  description?: AdTextAsset;
  callToActionText?: string;
  carouselCards?: AdDemandGenCarouselCardAsset[];
}
