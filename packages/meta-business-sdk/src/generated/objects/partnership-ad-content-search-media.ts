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

