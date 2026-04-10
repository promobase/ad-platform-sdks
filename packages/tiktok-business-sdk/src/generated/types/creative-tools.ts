// Auto-generated types for Creative Tools — do not edit

export interface CreativeStatusGetParams {
  advertiser_id: string;
  task_id: string;
}


export interface CreativeStatusGetResponse {
  code?: number;
  message?: string;
  data?: {
  status?: string;
  video_ids?: string;
  error_msg?: string;
  extra_info?: Record<string, unknown>;
};
  request_id?: string;
}


export interface CreativeImageEditParams {
  advertiser_id: string;
  image_id: string;
  edit_method?: string;
  width: number;
  height: number;
  image_name?: string;
}


export interface CreativeImageEditResponse {
  code?: number;
  message?: string;
  data?: {
  image_id?: string;
  material_id?: string;
  displayable?: boolean;
  width?: number;
  format?: string;
  image_url?: string;
  height?: number;
  signature?: string;
  size?: number;
  file_name?: string;
  create_time?: string;
  modify_time?: string;
};
  request_id?: string;
}


export interface CreativeAdsPreviewCreateParams {
  advertiser_id: "ADMIN" | "OPERATOR";
  preview_type: string;
  objective_type: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES" | "RF_REACH";
  is_smart_performance_campaign?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "PLACEMENT_PANGLE" | "ALL" | "TRAFFIC" | "REACH" | "VIDEO_VIEWS" | "PRODUCT_SALES" | "false";
  placement?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "PLACEMENT_TIKTOK" | "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE" | "ALL";
  tiktok_subplacement?: "REACH" | "PLACEMENT_TIKTOK" | "LEMON8" | "UNSET";
  preview_format?: "PLACEMENT_TIKTOK" | "IN_FEED" | "SEARCH_RESULTS" | "SEARCH_FEED" | "TIKTOK_LITE" | "PRODUCT_SEARCH" | "PRODUCT_SHOP_CENTER" | "LEMON8" | "IN_FEED_TWO_COLUMNS" | "PLACEMENT_GLOBAL_APP_BUNDLE" | "APP_OPEN" | "REACH" | "VIDEO_VIEWS" | "ENGAGEMENT" | "PLACEMENT_PANGLE";
  shopping_ads_type?: "PRODUCT_SALES" | "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS" | "CATALOG_CAROUSEL";
  product_source?: "STORE" | "SHOWCASE";
  store_id?: "VIDEO" | "STORE" | "PRODUCT_SHOPPING_ADS" | "LIVE" | "TIKTOK_SHOP";
  store_authorized_bc_id?: string;
  showcase_products?: ("VIDEO" | "SHOWCASE")[];
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  identity_id: string;
  identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "CATALOG_CAROUSEL" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "ENGAGEMENT";
  identity_authorized_bc_id?: string;
  ad_format: "SINGLE_VIDEO" | "SINGLE_IMAGE" | "CAROUSEL_ADS" | "REACH" | "WEB_CONVERSIONS" | "APP_PROMOTION" | "LEAD_GENERATION" | "TRAFFIC" | "CATALOG_CAROUSEL" | "LIVE_CONTENT";
  video_id?: "SINGLE_VIDEO" | "SINGLE_IMAGE" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  image_ids?: ("SINGLE_IMAGE" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "true")[];
  end_card_cta?: ("LEAD_GENERATION" | "CATALOG_CAROUSEL" | "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW" | "true")[];
  music_id?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL";
  tiktok_item_id?: "AUTH_CODE" | "BC_AUTH_TT" | "CUSTOMIZED_USER";
  carousel_image_index?: number;
  ad_text?: string;
  call_to_action?: "WATCH_LIVE" | "REACH" | "VIDEO_VIEW" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "SEND_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "CALL_NOW" | "LEAD_GEN_CLICK_TO_CALL" | "PRODUCT_SALES";
  call_to_action_id?: "REACH" | "VIDEO_VIEW" | "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  card_id?: "REACH" | "WEBSITE" | "PLACEMENT_TIKTOK" | "SINGLE_VIDEO" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
  landing_page_url?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "WEBSITE" | "APP_ANDROID" | "APP_IOS";
  page_id?: "APP_PROMOTION" | "WEB_CONVERSIONS" | "TRAFFIC" | "WEBSITE" | "APP_ANDROID" | "APP_IOS" | "CATALOG_CAROUSEL";
  catalog_id?: "CATALOG_CAROUSEL" | "ADMIN" | "AD_PROMOTE";
  product_specific_type?: "CATALOG_CAROUSEL" | "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS" | "PRODUCT_SHOPPING_ADS" | "STORE" | "VIDEO" | "SHOWCASE" | "LIVE";
  item_group_ids?: ("PRODUCT_SET" | "VIDEO" | "STORE" | "PRODUCT_SHOPPING_ADS" | "CUSTOMIZED_PRODUCTS")[];
  product_set_id?: string;
  sku_ids?: string[];
  vehicle_ids?: string[];
  auto_disclaimer_types?: ("LEAD_GENERATION" | "CATALOG_CAROUSEL" | "EMISSION" | "DISCOUNT")[];
  catalog_authorized_bc_id?: string;
  dynamic_format?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "UNSET" | "DYNAMIC_CREATIVE";
  vertical_video_strategy?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "LIVE_STREAM" | "UNSET" | "DYNAMIC_CREATIVE";
  shopping_ads_video_package_id?: string;
  shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS" | "VIDEO" | "CATALOG" | "SINGLE_VIDEO" | "CATALOG_CAROUSEL";
  dynamic_destination?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "DLP" | "UNSET";
  instant_product_page_used?: "CAROUSEL_ADS" | "CATALOG_CAROUSEL" | "DLP" | "UNSET" | "true";
}


export interface CreativeAdsPreviewCreateResponse {
  code?: number;
  message?: string;
  data?: string;
  preview_link?: "ADS_CREATION" | "AD" | "CARD" | "PAGE" | "SINGLE_VIDEO" | "SINGLE_IMAGE";
  iframe?: string;
  tips?: string[];
  placement?: string;
  messages?: string[];
  request_id?: string;
}


export interface CreativeVideoSoundtrackCreateParams {
  advertiser_id: string;
  video_id: string;
  music_ids?: string[];
  video_volume?: number;
  music_volume?: number;
  name_prefix?: string;
  callback_info?: {
  callback_url?: string;
  callback_extra_info?: Record<string, unknown>;
};
}


export interface CreativeVideoSoundtrackCreateResponse {
  code?: number;
  message?: string;
  data?: {
  task_id?: string;
};
  request_id?: string;
}


export interface CreativeQuickOptimizationCreateParams {
  advertiser_id: string;
  video_id: string;
  logo?: string;
  title?: string;
  description?: string;
  callback_info?: {
  callback_url?: string;
  callback_extra_info?: Record<string, unknown>;
};
}


export interface CreativeQuickOptimizationCreateResponse {
  code?: number;
  message?: string;
  data?: {
  task_id?: string;
};
  request_id?: string;
}


export interface CreativeSmartVideoCreateParams {
  advertiser_id: string;
  videos: {
  video_id: string;
  tag?: string;
}[];
  images: {
  image_id: string;
  tag?: string;
}[];
  texts?: {
  text: string;
  tag?: string;
}[];
  layout: "VERTICAL" | "HORIZONTAL";
  style: "PEACEFUL" | "DYNAMIC" | "CUSTOM";
  music_id?: string;
  duration?: number;
  frame?: {
  frame_type?: string;
  material_type?: "VIDEO" | "IMAGE" | "TEMPLATE";
  video_id?: string;
  image_id?: string;
  template_type?: string;
  logo?: string;
  call_to_action?: string;
  slogan?: string;
  brand_name?: string;
}[];
  callback_info?: {
  callback_url?: string;
  callback_extra_info?: Record<string, unknown>;
};
}


export interface CreativeSmartVideoCreateResponse {
  code?: number;
  message?: string;
  data?: string;
  task_id?: string;
  request_id?: string;
}


export interface CreativeAssetShareParams {}


export interface CreativeAssetShareResponse {}


export interface CreativeAssetDeleteParams {}


export interface CreativeAssetDeleteResponse {}


export interface CreativeSmartTextGenerateParams {
  advertiser_id: string;
  adgroup_id: string;
  param_type?: "RECOMMENDED" | "CUSTOMIZED";
  language?: "EN" | "JA" | "RU" | "VI" | "CUSTOMIZED";
  industry_id?: string;
  keywords?: string[];
  limit?: number;
}


export interface CreativeSmartTextGenerateResponse {}


export interface CreativeCtaRecommendParams {}


export interface CreativeCtaRecommendResponse {}


export interface VideoFixTaskCreateParams {
  advertiser_id: string;
  tasks?: {
  video_id: string;
  auto_bind_enabled?: boolean;
}[];
}


export interface VideoFixTaskCreateResponse {
  code?: number;
  message?: string;
  data?: {
  tasks?: {
  video_id?: string;
  fix_task_id?: string;
  flaw_types?: ("LOW_RESOLUTION" | "ILLEGAL_VIDEO_SIZE" | "NO_BGM" | "BLACK_EDGE" | "ILLEGAL_DURATION")[];
}[];
};
  request_id?: string;
}


export interface VideoFixTaskGetParams {
  task_id: string;
  advertiser_id: string;
}


export interface VideoFixTaskGetResponse {
  code?: number;
  message?: string;
  data?: {
  status?: "PROCESSING" | "FAILED" | "SUCCESS";
  error_msg?: string;
  videos?: {
  video_id?: string;
  video_url?: string;
}[];
};
  request_id?: string;
}


export interface CreativeFatigueGetParams {}


export interface CreativeFatigueGetResponse {}

