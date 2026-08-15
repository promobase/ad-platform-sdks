// @generated
// fingerprint: sha256:e963d50fc4d05c23932ef8fa8427c34cde9edffeb065d8305d8c0157aa3eee41
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.common.LocalAdInfo. Do not edit by hand.
export interface LocalAdInfo {
  headlines?: AdTextAsset[];
  descriptions?: AdTextAsset[];
  callToActions?: AdTextAsset[];
  marketingImages?: AdImageAsset[];
  logoImages?: AdImageAsset[];
  videos?: AdVideoAsset[];
  path1?: string;
  path2?: string;
}
