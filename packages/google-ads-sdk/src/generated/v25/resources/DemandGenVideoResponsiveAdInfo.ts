// @generated
// fingerprint: sha256:d8aec31b9348037bae4427cea9362a3f43b091c54e38270a30c5a9d62f66f073
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdCallToActionAsset, AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.common.DemandGenVideoResponsiveAdInfo. Do not edit by hand.
export interface DemandGenVideoResponsiveAdInfo {
  headlines?: AdTextAsset[];
  longHeadlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  videos?: AdVideoAsset[];
  logoImages?: AdImageAsset[];
  companionBanners?: AdImageAsset[];
  breadcrumb1?: string;
  breadcrumb2?: string;
  businessName?: AdTextAsset;
  callToActions?: AdCallToActionAsset[];
}
