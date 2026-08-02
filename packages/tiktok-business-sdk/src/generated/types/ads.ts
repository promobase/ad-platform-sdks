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


export interface AdCreateParams {
  advertiser_id: string;
  adgroup_id: string;
  creatives: {
  ad_name: string;
  identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_id: string;
  identity_authorized_bc_id?: string;
  catalog_id?: string;
  product_specific_type?: "VIDEO" | "CATALOG" | "PRODUCT_SHOPPING_ADS" | "STORE" | "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "SHOWCASE" | "LIVE";
  item_group_ids?: ("VIDEO" | "CATALOG" | "PRODUCT_SET" | "PRODUCT_SHOPPING_ADS" | "STORE" | "CUSTOMIZED_PRODUCTS")[];
  product_set_id?: "VIDEO" | "CATALOG" | "PRODUCT_SET";
  sku_ids?: ("VIDEO" | "CATALOG" | "CUSTOMIZED_PRODUCTS")[];
  vehicle_ids?: ("LEAD_GENERATION" | "CUSTOMIZED_PRODUCTS" | "true")[];
  showcase_products?: {
  item_group_id?: string;
  store_id?: string;
  catalog_id?: string;
}[];
  ad_format: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM" | "DYNAMIC_CREATIVE";
  dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  video_id?: "SINGLE_VIDEO" | "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "SINGLE_IMAGE" | "CAROUSEL_ADS" | "UPLOAD_BY_VIDEO_ID";
  image_ids?: ("SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "SINGLE_IMAGE" | "true")[];
  carousel_image_index?: number;
  end_card_cta?: "LEAD_GENERATION" | "CATALOG_CAROUSEL" | "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "true";
  product_display_field_list?: ("LEAD_GENERATION" | "CATALOG_CAROUSEL" | "DEALER_NAME" | "MAKE" | "MODEL" | "YEAR" | "MILEAGE" | "PRICE" | "SALE_PRICE" | "EXTERIOR_COLOR" | "TRIM" | "ADDRESS_CITY" | "VEHICLE_STATE" | "true")[];
  auto_disclaimer_types?: ("LEAD_GENERATION" | "CATALOG_CAROUSEL" | "EMISSION" | "DISCOUNT" | "true")[];
  music_id?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  tiktok_item_id?: "AUTH_CODE" | "BC_AUTH_TT" | "CUSTOMIZED_USER";
  promotional_music_disabled?: "true" | "false";
  item_duet_status?: "ENABLE" | "DISABLE" | "false";
  item_stitch_status?: "ENABLE" | "DISABLE" | "false";
  dark_post_status?: "ON" | "OFF";
  shopping_ads_video_package_id?: string;
  ad_text?: string;
  ad_texts?: string[];
  call_to_action?: "SHORT_VIDEO_LIVE" | "WATCH_LIVE";
  call_to_action_id?: string;
  card_id?: string;
  landing_page_url?: string;
  utm_params?: ("PRODUCT_SALES" | "VIDEO" | "CATALOG" | "WEBSITE" | "APP_ANDROID" | "APP_IOS" | "LEAD_GENERATION" | "EXTERNAL_WEBSITE" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "APP_PREREGISTRATION" | "WEB_CONVERSIONS" | "RF_REACH" | "SHOPPING_ADS" | "CUSTOM" | "true" | "false")[];
  page_id?: number;
  cpp_url?: string;
  tiktok_page_category?: "PAGE_VISIT" | "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  phone_region_code?: "LEAD_GEN_CLICK_TO_CALL" | "US";
  phone_region_calling_code?: string;
  phone_number?: string;
  creative_auto_enhancement_strategy_list?: ("VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK" | "IOS14_CAMPAIGN";
  deeplink_format_type?: "TRAFFIC" | "DESTINATION_VISIT" | "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK";
  shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS" | "VIDEO" | "CATALOG" | "SINGLE_VIDEO" | "CATALOG_CAROUSEL";
  deeplink_utm_params?: ("VIDEO" | "CATALOG" | "WEBSITE" | "APP_ANDROID" | "APP_IOS" | "SHOPPING_ADS" | "CUSTOM")[];
  shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS" | "VIDEO" | "CATALOG" | "SINGLE_VIDEO" | "CATALOG_CAROUSEL";
  fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  dynamic_destination?: "DLP" | "UNSET" | "APP_ANDROID" | "APP_IOS" | "VIDEO" | "CATALOG" | "WEBSITE" | "CLICK" | "TRAFFIC_LANDING_PAGE_VIEW";
  instant_product_page_used?: "DLP" | "UNSET" | "true";
  page_image_index?: number;
  auto_message_id?: string;
  aigc_disclosure_type?: "CUSTOMIZED_USER" | "SELF_DISCLOSURE" | "NOT_DECLARED";
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "LEAD_GENERATION" | "RF_REACH";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
  tracking_pixel_id?: "REACH" | "VIDEO_VIEWS" | "TRAFFIC" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "APP_PROMOTION" | "PRODUCT_SALES" | "ENGAGEMENT" | "RF_REACH";
  tracking_app_id?: "REACH" | "VIDEO_VIEWS" | "TRAFFIC" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "APP_PROMOTION" | "PRODUCT_SALES" | "ENGAGEMENT" | "RF_REACH";
  tracking_offline_event_set_ids?: ("REACH" | "VIDEO_VIEWS" | "TRAFFIC" | "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "ENGAGEMENT" | "PRODUCT_SALES" | "VIDEO" | "CATALOG")[];
  tracking_message_event_set_id?: "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "CLICK" | "MESSENGER" | "WHATSAPP";
  viewability_postbid_partner?: "MOAT" | "DOUBLE_VERIFY" | "IAS" | "ZEFR" | "LIVE_SHOPPING";
  viewability_vast_url?: "IAS" | "LIVE_SHOPPING";
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR" | "NO_BRAND_SAFETY" | "LIVE_SHOPPING";
  brand_safety_vast_url?: "IAS" | "LIVE_SHOPPING";
  impression_tracking_url?: string;
  click_tracking_url?: string;
  playable_url?: string;
  operation_status?: "ENABLE" | "DISABLE";
  creative_type?: "LIVE" | "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PRODUCT_SHOPPING_ADS" | "PSA" | "APP_PREREGISTRATION" | "TIKTOK_NATIVE_PAGE" | "CUSTOM_INSTANT_PAGE" | "LEAD_GENERATION" | "AUTO_INVENTORY_INSTANT_PAGE" | "true";
  video_view_tracking_url?: string;
  app_name?: string;
  display_name?: string;
  avatar_icon_web_uri?: string;
  creative_authorized?: boolean;
  schedule_id?: "SEQUENCE" | "false";
}[];
}


export interface AdCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  ad_ids?: string[];
  creatives?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  ad_id?: string;
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
  branded_content_disabled?: boolean;
  shopping_ads_video_package_id?: string;
  ad_text?: string;
  ad_texts?: string;
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
  tiktok_page_category?: "PROFILE_PAGE" | "OTHER_TIKTOK_PAGE" | "TIKTOK_INSTANT_PAGE";
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
  creative_auto_enhancement_strategy_list?: ("VIDEO_QUALITY" | "MUSIC_REFRESH" | "IMAGE_QUALITY" | "IMAGE_RESIZE")[];
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
  deeplink_format_type?: "UNIVERSAL_OR_APP_LINK" | "SCHEME_LINK" | "NONE";
  shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS";
  shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
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
  vast_moat_enabled?: "MOAT" | "false";
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
  profile_image_url?: string;
  creative_authorized?: boolean;
  is_aco?: "true" | "false";
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


export interface AdUpdateParams {
  advertiser_id: string;
  adgroup_id: string;
  patch_update?: boolean;
  creatives: {
  ad_id: string;
  ad_name?: string;
  identity_id?: "CUSTOMIZED_USER" | "true";
  identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "true";
  identity_authorized_bc_id?: string;
  product_specific_type?: "VIDEO" | "CATALOG" | "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  item_group_ids?: string[];
  product_set_id?: string;
  sku_ids?: ("CUSTOMIZED_PRODUCTS" | "AVAILABLE" | "CATALOG_CAROUSEL")[];
  ad_format?: "SINGLE_IMAGE" | "SINGLE_VIDEO" | "LIVE_CONTENT" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "true";
  vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "CATALOG_UPLOADED_VIDEOS" | "LIVE_STREAM" | "DYNAMIC_CREATIVE";
  dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  video_id?: "SINGLE_VIDEO" | "CUSTOMIZED_USER" | "TT_USER" | "BC_AUTH_TT" | "SINGLE_IMAGE" | "CAROUSEL_ADS" | "UPLOAD_BY_VIDEO_ID";
  image_ids?: ("SINGLE_VIDEO" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "SINGLE_IMAGE" | "true")[];
  carousel_image_index?: number;
  end_card_cta?: "LEAD_GENERATION" | "CATALOG_CAROUSEL" | "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "true";
  music_id?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  tiktok_item_id?: "AUTH_CODE" | "BC_AUTH_TT" | "CUSTOMIZED_USER";
  promotional_music_disabled?: "true" | "false";
  item_duet_status?: "ENABLE" | "DISABLE" | "false";
  item_stitch_status?: "ENABLE" | "DISABLE" | "false";
  dark_post_status?: "ON" | "OFF";
  shopping_ads_video_package_id?: string;
  ad_text?: string;
  ad_texts?: string[];
  call_to_action?: "SHORT_VIDEO_LIVE" | "WATCH_LIVE";
  call_to_action_id?: string;
  card_id?: string;
  landing_page_url?: string;
  utm_params?: ("PRODUCT_SALES" | "VIDEO" | "CATALOG" | "WEBSITE" | "APP_ANDROID" | "APP_IOS" | "LEAD_GENERATION" | "EXTERNAL_WEBSITE" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "APP_PREREGISTRATION" | "WEB_CONVERSIONS" | "RF_REACH" | "SHOPPING_ADS" | "CUSTOM" | "true" | "false")[];
  page_id?: number;
  cpp_url?: string;
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK" | "IOS14_CAMPAIGN";
  shopping_ads_deeplink_type?: "NONE" | "CUSTOM" | "SHOPPING_ADS" | "VIDEO" | "CATALOG" | "SINGLE_VIDEO" | "CATALOG_CAROUSEL";
  deeplink_utm_params?: ("VIDEO" | "CATALOG" | "WEBSITE" | "APP_ANDROID" | "APP_IOS" | "SHOPPING_ADS" | "CUSTOM")[];
  shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS" | "VIDEO" | "CATALOG" | "SINGLE_VIDEO" | "CATALOG_CAROUSEL";
  fallback_type?: "APP_INSTALL" | "WEBSITE" | "UNSET";
  dynamic_destination?: "VIDEO" | "CATALOG" | "WEBSITE" | "CONVERSION" | "VALUE" | "DLP" | "UNSET";
  instant_product_page_used?: "DLP" | "UNSET" | "true";
  page_image_index?: number;
  aigc_disclosure_type?: "CUSTOMIZED_USER" | "SELF_DISCLOSURE" | "NOT_DECLARED";
  disclaimer_type?: "TEXT_LINK" | "TEXT_ONLY" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "LEAD_GENERATION" | "RF_REACH";
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
  tracking_pixel_id?: "REACH" | "VIDEO_VIEWS" | "TRAFFIC" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "APP_PROMOTION" | "PRODUCT_SALES" | "ENGAGEMENT" | "RF_REACH";
  tracking_app_id?: "REACH" | "VIDEO_VIEWS" | "TRAFFIC" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "APP_PROMOTION" | "PRODUCT_SALES" | "ENGAGEMENT" | "RF_REACH";
  tracking_offline_event_set_ids?: ("REACH" | "VIDEO_VIEWS" | "TRAFFIC" | "LEAD_GENERATION" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "ENGAGEMENT" | "PRODUCT_SALES" | "VIDEO" | "CATALOG")[];
  vast_moat_enabled?: "MOAT" | "false";
  viewability_postbid_partner?: "MOAT" | "DOUBLE_VERIFY" | "IAS" | "LIVE_SHOPPING";
  viewability_vast_url?: "IAS" | "LIVE_SHOPPING";
  brand_safety_postbid_partner?: "DOUBLE_VERIFY" | "IAS" | "ZEFR" | "NO_BRAND_SAFETY" | "LIVE_SHOPPING";
  brand_safety_vast_url?: "IAS" | "LIVE_SHOPPING";
  impression_tracking_url?: string;
  click_tracking_url?: string;
  video_view_tracking_url?: string;
  playable_url?: string;
  creative_type?: "LIVE" | "SHORT_VIDEO_LIVE" | "DIRECT_LIVE" | "PRODUCT_SHOPPING_ADS" | "PSA" | "APP_PREREGISTRATION" | "TIKTOK_NATIVE_PAGE" | "CUSTOM_INSTANT_PAGE" | "LEAD_GENERATION" | "AUTO_INVENTORY_INSTANT_PAGE" | "true";
  app_name?: string;
  display_name?: string;
  avatar_icon_web_uri?: string;
  creative_authorized?: boolean;
}[];
}


export interface AdUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  ad_ids?: string[];
  creatives?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  ad_id?: string;
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
  branded_content_disabled?: boolean;
  shopping_ads_video_package_id?: string;
  ad_text?: string;
  ad_texts?: string;
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
  profile_image_url?: string;
  creative_authorized?: boolean;
  is_aco?: "true" | "false";
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


export interface AdStatusUpdateParams {
  ad_ids?: string[];
  aco_ad_ids?: ("ENABLE" | "DISABLE")[];
  advertiser_id: string;
  operation_status: "DELETE" | "ENABLE";
}


export interface AdStatusUpdateResponse {
  code?: number;
  message?: string;
  data?: {
  ad_ids?: string[];
  aco_ad_ids?: string[];
  status?: "DELETE" | "DISABLE" | "ENABLE";
};
  request_id?: string;
}

