// Auto-generated types for Creative Tools — do not edit

export interface CreativeStatusGetParams {
  advertiser_id: string;
  task_id: string;
}


export interface CreativeStatusGetResponse {
  status?: string;
  video_ids?: string;
  error_msg?: string;
  extra_info?: Record<string, unknown>;
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
}


export interface CreativeAdsPreviewCreateParams {
  advertiser_id: string;
  preview_type: string;
  objective_type: string;
  is_smart_performance_campaign?: boolean;
  placement?: string;
  tiktok_subplacement?: "LEMON8" | "UNSET";
  preview_format?: string;
  shopping_ads_type?: "VIDEO" | "LIVE" | "PRODUCT_SHOPPING_ADS";
  product_source?: "STORE" | "SHOWCASE";
  store_id?: string;
  store_authorized_bc_id?: string;
  showcase_products?: {
  item_group_id?: string;
  store_id?: string;
}[];
  promotion_type?: "APP_ANDROID" | "APP_IOS" | "WEBSITE" | "LEAD_GENERATION" | "LEAD_GEN_CLICK_TO_TT_DIRECT_MESSAGE" | "LEAD_GEN_CLICK_TO_SOCIAL_MEDIA_APP_MESSAGE" | "LEAD_GEN_CLICK_TO_CALL";
  identity_id: string;
  identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  ad_format: string;
  video_id?: string;
  image_ids?: string[];
  end_card_cta?: "SEARCH_INVENTORY" | "LEARN_MORE" | "SHOP_NOW" | "SIGN_UP" | "CONTACT_US" | "BOOK_NOW" | "READ_MORE" | "VIEW_MORE" | "ORDER_NOW";
  music_id?: string;
  tiktok_item_id?: string;
  carousel_image_index?: number;
  ad_text?: string;
  call_to_action?: string;
  call_to_action_id?: string;
  card_id?: string;
  landing_page_url?: string;
  page_id?: string;
  catalog_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  item_group_ids?: string[];
  product_set_id?: string;
  sku_ids?: string[];
  hotel_ids?: string[];
  flight_ids?: string[];
  destination_ids?: string[];
  vehicle_ids?: string[];
  auto_disclaimer_types?: ("EMISSION" | "DISCOUNT")[];
  catalog_authorized_bc_id?: string;
  dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  vertical_video_strategy?: "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "LIVE_STREAM" | "UNSET" | "DYNAMIC_CREATIVE";
  shopping_ads_video_template_id?: string;
  shopping_ads_fallback_type?: "DEFAULT" | "CUSTOM" | "SHOPPING_ADS";
  dynamic_destination?: "DLP" | "UNSET";
  instant_product_page_used?: boolean;
}


export interface CreativeAdsPreviewCreateResponse {
  preview_link?: string;
  iframe?: string;
  tips?: string[];
  placement?: string;
  messages?: string[];
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
  task_id?: string;
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
  task_id?: string;
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


export interface CreativeSmartVideoCreateResponse {}


export interface CreativeAssetShareParams {
  advertiser_id: string;
  asset_type?: "VIDEO" | "IMAGE" | "MUSIC";
  material_ids: string[];
  shared_advertiser_ids: string[];
}


export interface CreativeAssetShareResponse {
  failed_infos?: {
  key?: string;
  value?: string[];
};
}


export interface CreativeAssetDeleteParams {
  advertiser_id: string;
  video_ids?: string[];
  image_ids?: string[];
}


export interface CreativeAssetDeleteResponse {
  failed_video_ids?: string[];
  failed_image_ids?: string[];
}


export interface CreativeSmartTextGenerateParams {
  advertiser_id: string;
  adgroup_id: string;
  param_type?: "RECOMMENDED" | "CUSTOMIZED";
  language?: "EN" | "JA" | "RU" | "VI";
  industry_id?: string;
  keywords?: string[];
  limit?: number;
}


export interface CreativeSmartTextGenerateResponse {
  generate_id?: string;
  industry_id?: string;
  language?: "EN" | "JA" | "RU" | "VI";
  texts?: string[];
}


export interface CreativeCtaRecommendParams {
  advertiser_id: string;
  new_version?: boolean;
  asset_type?: string;
  content_type?: "APP_DOWNLOAD" | "LANDING_PAGE" | "OTHER" | "MESSAGE" | "SOCIAL_MEDIA_APP_MESSAGE" | "PHONE_CALL";
  objective_type?: string;
  promotion_type?: string;
  language?: string;
  app_id?: string;
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE" | "PLACEMENT_GLOBAL_APP_BUNDLE")[];
  region_codes?: string[];
  optimization_goal?: string;
  ad_texts?: string[];
  landing_page_url?: string;
}


export interface CreativeCtaRecommendResponse {
  recommend_assets?: {
  asset_ids?: string[];
  asset_content?: string;
}[];
}


export interface VideoFixTaskCreateParams {
  advertiser_id: string;
  tasks?: {
  video_id: string;
  auto_bind_enabled?: boolean;
}[];
}


export interface VideoFixTaskCreateResponse {
  tasks?: {
  video_id?: string;
  fix_task_id?: string;
  flaw_types?: ("LOW_RESOLUTION" | "ILLEGAL_VIDEO_SIZE" | "NO_BGM" | "BLACK_EDGE" | "ILLEGAL_DURATION")[];
}[];
}


export interface VideoFixTaskGetParams {
  task_id: string;
  advertiser_id: string;
}


export interface VideoFixTaskGetResponse {
  status?: "PROCESSING" | "FAILED" | "SUCCESS";
  error_msg?: string;
  videos?: {
  video_id?: string;
  video_url?: string;
}[];
}


export interface CreativeFatigueGetParams {
  advertiser_id: string;
  ad_id: string;
  filtering: {
  start_date: string;
  end_date: string;
};
  page?: number;
  page_size?: number;
}


export interface CreativeFatigueGetResponse {
  list?: {
  adgroup_id?: string;
  ad_id?: string;
  date?: string;
  metrics?: {
  has_fatigue?: boolean;
  fatigue_index?: number;
  dnu?: number;
  dnu_ratio?: number;
  spend?: number;
  cost_per_conversion?: number;
  skan_cost_per_conversion?: number;
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
