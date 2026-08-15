// @generated
// fingerprint: sha256:b09cd68cdf345bcf519e7aa0bb460c2ab853cb5c3e8ae29470a1f8ebb7e12266
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.common.VideoResponsiveAdInfo. Do not edit by hand.
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
