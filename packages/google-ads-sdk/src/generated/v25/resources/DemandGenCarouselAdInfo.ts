// @generated
// fingerprint: sha256:2345b29c969154920659a35ca4415d7bfbb21b487049339eeceeebd5e1243358
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdDemandGenCarouselCardAsset, AdImageAsset, AdTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.common.DemandGenCarouselAdInfo. Do not edit by hand.
export interface DemandGenCarouselAdInfo {
  businessName?: string;
  logoImage?: AdImageAsset;
  headline?: AdTextAsset;
  description?: AdTextAsset;
  callToActionText?: string;
  carouselCards?: AdDemandGenCarouselCardAsset[];
}
