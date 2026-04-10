// Auto-generated types for Ads — do not edit

export interface AdGetParams {
  advertiser_id: string;
  fields?: string[];
  exclude_field_types_in_response?: string[];
  filtering?: {
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  ad_ids_v2?: string[];
  campaign_ids?: string[];
  campaign_system_origins?: ("PROMOTE" | "TT_ADS_PLATFORM")[];
  adgroup_ids?: string[];
  ad_ids?: string[];
  primary_status?: string;
  secondary_status?: string;
  objective_type?: "WEB_CONVERSIONS" | "CONVERSIONS";
  buying_types?: ("AUCTION" | "RESERVATION_RF" | "RESERVATION_TOP_VIEW")[];
  optimization_goal?: string;
  creative_material_mode?: "CUSTOM" | "DYNAMIC" | "SMART_CREATIVE";
  destination?: "APP" | "APP_ANDROID" | "APP_IOS" | "TIKTOK_INSTANT_PAGE" | "WEBSITE" | "SOCIAL_MEDIA_APP" | "PHONE_CALL";
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
  campaign_automation_type?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS" | "UPGRADED_SMART_PLUS_CREATIVE";
  campaign_system_origin?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_id?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS_CREATIVE";
  ad_id_v2?: "MANUAL" | "SMART_PLUS" | "UPGRADED_SMART_PLUS";
  ad_name?: string;
  create_time?: string;
  modify_time?: string;
  identity_id?: string;
  identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  catalog_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  item_group_ids?: string[];
  product_set_id?: string;
  sku_ids?: string[];
  vehicle_ids?: string[];
  showcase_products?: {
  item_group_id?: string;
  store_id?: string;
  catalog_id?: string;
}[];
  ad_format?: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM";
  dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  video_id?: string;
  image_ids?: string[];
  carousel_image_index?: number;
  end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  auto_disclaimer_types?: ("EMISSION" | "DISCOUNT")[];
  product_display_field_list?: ("DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE")[];
  music_id?: string;
  tiktok_item_id?: string;
  promotional_music_disabled?: "true" | "false";
  item_duet_status?: "ENABLE" | "DISABLE" | "false";
  item_stitch_status?: "ENABLE" | "DISABLE" | "false";
  dark_post_status?: "ON" | "OFF";
  branded_content_disabled?: "false" | "true";
  shopping_ads_video_package_id?: string;
  ad_text?: string;
  ad_texts?: string[];
  call_to_action?: string;
  call_to_action_id?: string;
  card_id?: string;
  landing_page_url?: string;
  utm_params?: ("PRODUCT_SALES" | "VIDEO" | "CATALOG" | "WEBSITE" | "APP_ANDROID" | "APP_IOS" | "LEAD_GENERATION" | "EXTERNAL_WEBSITE" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "APP_PREREGISTRATION" | "WEB_CONVERSIONS" | "RF_REACH" | "true" | "false")[];
  page_id?: number;
  cpp_url?: string;
  tiktok_page_category?: "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  creative_auto_enhancement_strategy_list?: ("VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  deeplink_format_type?: "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK" | "NONE";
  shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  dynamic_destination?: "DLP" | "UNSET";
  auto_message_id?: string;
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY";
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
  viewability_postbid_partner?: "UNSET" | "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  viewability_vast_url?: string;
  brand_safety_postbid_partner?: "UNSET" | "DOUBLE_VERIFY" | "IAS" | "ZEFR";
  brand_safety_vast_url?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  playable_url?: string;
  operation_status?: "ENABLE" | "DISABLE" | "FROZEN";
  secondary_status?: string;
  creative_type?: "SHOP_PDP" | "SHOP_PLP" | "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PSA" | "CUSTOM_INSTANT_PAGE" | "APP_PREREGISTRATION" | "TIKTOK_NATIVE_PAGE" | "AUTO_INVENTORY_INSTANT_PAGE" | "LEAD_GENERATION" | "true";
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

