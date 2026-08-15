// @generated
// fingerprint: sha256:4e52d90feb9026f08297247de109b9520c75d3ae978750c5e57c7a740a69565b
// DO NOT EDIT: generated file; changes will be overwritten.
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
