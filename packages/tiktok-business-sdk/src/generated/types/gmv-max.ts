// Auto-generated types for GMV Max — do not edit

export interface GmvMaxCampaignGetParams {}


export interface GmvMaxCampaignGetResponse {}


export interface CampaignGmvMaxInfoParams {}


export interface CampaignGmvMaxInfoResponse {}


export interface CampaignGmvMaxCreateParams {}


export interface CampaignGmvMaxCreateResponse {}


export interface CampaignGmvMaxUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  roas_bid?: number;
  budget?: number;
  promotion_days?: {
  is_enabled?: "true" | "false";
  auto_schedule_enabled?: "true" | "false";
  custom_schedule_list?: ("false" | "true")[];
  roas_bid_multiplier?: number;
  budget_increase_percentage?: number;
  increase_limit?: number;
};
  auto_budget?: {
  auto_budget_enabled?: "true" | "false";
  budget_increase_percentage?: number;
  increase_limit?: number;
};
  auto_budget_enabled?: "true" | "false";
  item_group_ids?: ("PRODUCT" | "CUSTOMIZED_PRODUCTS" | "GMV_MAX" | "AVAILABLE" | "UNOCCUPIED")[];
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_end_time?: "SCHEDULE_START_END" | "SCHEDULE_FROM_NOW";
  accelerate_testing_for_new_videos?: "AUTO_SELECTION" | "ON" | "OFF";
  affiliate_posts_enabled?: "PRODUCT" | "AUTO_SELECTION" | "true" | "false";
  item_list?: ("PRODUCT" | "CUSTOM_SELECTION")[];
  custom_anchor_video_list?: ("PRODUCT" | "CUSTOM_SELECTION" | "AUTO_SELECTION")[];
  campaign_name?: string;
}


export interface CampaignGmvMaxUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  operation_status?: "DISABLE" | "ENABLE";
  campaign_id?: string;
  campaign_name?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  shopping_ads_type?: "PRODUCT" | "LIVE";
  product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
  item_group_ids?: ("PRODUCT" | "CUSTOMIZED_PRODUCTS")[];
  optimization_goal?: string;
  roi_protection_enabled?: "true" | "false";
  deep_bid_type?: string;
  roas_bid?: number;
  budget?: number;
  promotion_days?: {
  is_enabled?: "true" | "false";
  auto_schedule_enabled?: "true" | "false";
  custom_schedule_list?: {
  start_time?: string;
  end_time?: string;
}[];
  roas_bid_multiplier?: number;
  adjusted_roas_bid?: number;
  budget_increase_percentage?: number;
  increase_limit?: number;
  current_budget?: number;
  next_increase?: number;
  remained_times?: number;
  maximum_budget?: number;
  estimated_gross_revenue_increase?: string;
};
  auto_budget?: {
  auto_budget_enabled?: "true" | "false";
  budget_increase_percentage?: number;
  increase_limit?: number;
  current_budget?: number;
  next_increase?: number;
  remained_times?: number;
  maximum_budget?: number;
};
  auto_budget_enabled?: "true" | "false";
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  location_ids?: string[];
  age_groups?: string[];
  product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION" | "UNSET";
  accelerate_testing_for_new_videos?: "ON" | "OFF";
  identity_list?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
}[];
  affiliate_posts_enabled?: "true" | "false";
  item_list?: {
  item_id?: string;
  text?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
  profile_image?: string;
  user_name?: string;
};
  video_info?: {
  video_id?: string;
  video_cover_url?: string;
  preview_url?: string;
  height?: number;
  width?: number;
  bit_rate?: number;
  duration?: number;
  size?: number;
  signature?: string;
  format?: string;
  definition?: string;
  fps?: number;
};
}[];
  campaign_custom_anchor_video_id?: string;
  custom_anchor_video_list?: {
  item_id?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
}[];
};
}


export interface GmvMaxBidRecommendParams {}


export interface GmvMaxBidRecommendResponse {}


export interface CampaignGmvMaxSessionCreateParams {}


export interface CampaignGmvMaxSessionCreateResponse {}


export interface CampaignGmvMaxSessionUpdateParams {}


export interface CampaignGmvMaxSessionUpdateResponse {}


export interface CampaignGmvMaxSessionListParams {}


export interface CampaignGmvMaxSessionListResponse {}


export interface CampaignGmvMaxSessionGetParams {}


export interface CampaignGmvMaxSessionGetResponse {}


export interface CampaignGmvMaxSessionDeleteParams {}


export interface CampaignGmvMaxSessionDeleteResponse {}


export interface GmvMaxStoreListParams {}


export interface GmvMaxStoreListResponse {}


export interface GmvMaxStoreShopAdUsageCheckParams {}


export interface GmvMaxStoreShopAdUsageCheckResponse {}


export interface GmvMaxIdentityGetParams {}


export interface GmvMaxIdentityGetResponse {}


export interface GmvMaxOccupiedCustomShopAdsListParams {}


export interface GmvMaxOccupiedCustomShopAdsListResponse {}


export interface GmvMaxVideoGetParams {}


export interface GmvMaxVideoGetResponse {}


export interface GmvMaxCustomAnchorVideoListGetParams {}


export interface GmvMaxCustomAnchorVideoListGetResponse {}


export interface CampaignGmvMaxCreativeUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  action: "REMOVE" | "ADD" | "EXCLUDED";
  item_list: {
  item_id: "REMOVE" | "ADD";
  spu_id_list?: string[];
}[];
}


export interface CampaignGmvMaxCreativeUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface GmvMaxExclusiveAuthorizationGetParams {}


export interface GmvMaxExclusiveAuthorizationGetResponse {}


export interface GmvMaxExclusiveAuthorizationCreateParams {}


export interface GmvMaxExclusiveAuthorizationCreateResponse {}

