// @generated
// fingerprint: sha256:090a680e568fe57660f2cbacdc6a02eedbb4c628c54d8efbb537e2185108ad20
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.VideoResponsiveAdInfo. Do not edit by hand.
export interface VideoResponsiveAdInfo {
  headlines?: AdTextAsset[];
  longHeadlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  callToActions?: AdTextAsset[];
  videos?: AdVideoAsset[];
  businessName?: AdTextAsset;
  logoImages?: AdImageAsset[];
  companionBanners?: AdImageAsset[];
  breadcrumb1?: string;
  breadcrumb2?: string;
}
