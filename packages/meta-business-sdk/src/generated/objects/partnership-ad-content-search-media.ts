// @generated
// fingerprint: sha256:83ea66b399f4d9380d18667de749ef770561795a4c25683e2d5ae8bd28865b39
// DO NOT EDIT: generated file; changes will be overwritten.
import type { FBPageAndInstagramAccountFields } from "./fb-page-and-instagram-account.ts";
import type { IGMediaFields } from "./ig-media.ts";

export interface PartnershipAdContentSearchMediaFields {
  fb_ad_code_sponsor_count: number;
  fb_ad_code_sponsors: FBPageAndInstagramAccountFields[];
  ig_ad_code_sponsor_count: number;
  ig_ad_code_sponsors: FBPageAndInstagramAccountFields[];
  ig_media: IGMediaFields;
  ig_media_has_product_tags: boolean;
  is_ad_code_eligible_for_boosting_by_two_sponsors: boolean;
  is_ad_code_entry: boolean;
}

