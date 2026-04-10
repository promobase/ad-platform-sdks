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
  advertiser_id: string;
  preview_type: string;
  objective_type: string;
  is_smart_performance_campaign?: boolean;
  placement?: string;
  tiktok_subplacement?: string;
  preview_format?: string;
  shopping_ads_type?: string;
  product_source?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  showcase_products?: {
  item_group_id?: string;
  store_id?: string;
}[];
  promotion_type?: string;
  identity_id: string;
  identity_type: string;
  identity_authorized_bc_id?: string;
  ad_format: string;
  video_id?: string;
  image_ids?: string[];
  end_card_cta?: string[];
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
  product_specific_type?: string;
  item_group_ids?: string[];
  product_set_id?: string;
  sku_ids?: string[];
  vehicle_ids?: string[];
  auto_disclaimer_types?: string[];
  catalog_authorized_bc_id?: string;
  dynamic_format?: string;
  vertical_video_strategy?: string;
  shopping_ads_video_package_id?: string;
  shopping_ads_fallback_type?: string;
  dynamic_destination?: string;
  instant_product_page_used?: boolean;
}


export interface CreativeAdsPreviewCreateResponse {
  code?: number;
  message?: string;
  data?: string;
  preview_link?: string;
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
  layout: string;
  style: string;
  music_id?: string;
  duration?: number;
  frame?: {
  frame_type?: string;
  material_type?: string;
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
  param_type?: string;
  language?: string;
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
  flaw_types?: string[];
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
  status?: string;
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

