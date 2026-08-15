// @generated
// fingerprint: sha256:8f26804cda0aa3d05234dc9e5f2d1274f1a2cbf6e611959036a2c0820c151196
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdCallToActionAsset, AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.DemandGenVideoResponsiveAdInfo. Do not edit by hand.
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
