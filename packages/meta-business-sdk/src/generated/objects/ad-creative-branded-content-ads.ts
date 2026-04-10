import type { AdCreativeBrandedContentAdsPartnersFields } from "./ad-creative-branded-content-ads-partners.ts";

export interface AdCreativeBrandedContentAdsFields {
  acting_business_id: string;
  ad_format: number;
  automated_adgroup_creation: boolean;
  content_search_input: string;
  creator_ad_permission_type: string;
  deliver_dynamic_partner_content: boolean;
  facebook_boost_post_access_token: string;
  instagram_boost_post_access_token: string;
  is_mca_internal: boolean;
  parent_source_facebook_post_id: string;
  parent_source_instagram_media_id: string;
  partners: AdCreativeBrandedContentAdsPartnersFields[];
  product_set_partner_selection_status: string;
  promoted_page_id: string;
  testimonial: string;
  testimonial_locale: string;
  ui_version: number;
}

