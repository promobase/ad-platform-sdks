// Auto-generated types for Ads — do not edit

export interface AdGetParams {
  advertiser_id: string;
  fields?: string[];
  exclude_field_types_in_response?: string[];
  filtering?: {
  campaign_automation_type?: string;
  ad_ids_v2?: string[];
  campaign_ids?: string[];
  campaign_system_origins?: string[];
  adgroup_ids?: string[];
  ad_ids?: string[];
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  buying_types?: string[];
  optimization_goal?: string;
  creative_material_mode?: string;
  destination?: string;
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
  modified_after?: string;
};
  page?: number;
  page_size?: number;
}


export interface AdGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  campaign_automation_type?: string;
  campaign_system_origin?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_id?: string;
  ad_id_v2?: string;
  ad_name?: string;
  create_time?: string;
  modify_time?: string;
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  catalog_id?: string;
  product_specific_type?: string;
  item_group_ids?: string[];
  product_set_id?: string;
  sku_ids?: string[];
  vehicle_ids?: string[];
  showcase_products?: {
  item_group_id?: string;
  store_id?: string;
  catalog_id?: string;
}[];
  ad_format?: string;
  vertical_video_strategy?: string;
  dynamic_format?: string;
  video_id?: string;
  image_ids?: string[];
  carousel_image_index?: number;
  end_card_cta?: string;
  auto_disclaimer_types?: string[];
  product_display_field_list?: string[];
  music_id?: string;
  tiktok_item_id?: string;
  promotional_music_disabled?: boolean;
  item_duet_status?: string;
  item_stitch_status?: string;
  dark_post_status?: string;
  branded_content_disabled?: boolean;
  shopping_ads_video_package_id?: string;
  ad_text?: string;
  ad_texts?: string[];
  call_to_action?: string;
  call_to_action_id?: string;
  card_id?: string;
  landing_page_url?: string;
  utm_params?: {
  key?: string;
  value?: string;
}[];
  page_id?: number;
  cpp_url?: string;
  tiktok_page_category?: string;
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  creative_auto_enhancement_strategy_list?: string[];
  deeplink?: string;
  deeplink_type?: string;
  deeplink_format_type?: string;
  shopping_ads_deeplink_type?: string;
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  shopping_ads_fallback_type?: string;
  fallback_type?: string;
  dynamic_destination?: string;
  auto_message_id?: string;
  aigc_disclosure_type?: string;
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
  tracking_pixel_id?: number;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  vast_moat_enabled?: boolean;
  viewability_postbid_partner?: string;
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: string;
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  playable_url?: string;
  operation_status?: string;
  secondary_status?: string;
  creative_type?: string;
  app_name?: string;
  display_name?: string;
  avatar_icon_web_uri?: string;
  profile_image_url?: string;
  creative_authorized?: boolean;
  is_aco?: boolean;
  is_new_structure?: boolean;
  optimization_event?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}

