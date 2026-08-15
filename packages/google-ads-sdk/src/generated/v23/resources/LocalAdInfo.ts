// @generated
// fingerprint: sha256:4fa42df2be1f0aa78c67109703d0dc746cbe47ec5eea331579611e487b7e8ce8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdImageAsset, AdTextAsset, AdVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LocalAdInfo. Do not edit by hand.
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
