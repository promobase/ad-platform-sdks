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
  is_enabled?: boolean;
  auto_schedule_enabled?: boolean;
  custom_schedule_list?: {
  start_date?: string;
  end_date?: string;
}[];
  roas_bid_multiplier?: number;
  budget_increase_percentage?: number;
  increase_limit?: number;
};
  auto_budget?: {
  auto_budget_enabled?: boolean;
  budget_increase_percentage?: number;
  increase_limit?: number;
};
  auto_budget_enabled?: boolean;
  item_group_ids?: string[];
  schedule_type?: string;
  schedule_end_time?: string;
  accelerate_testing_for_new_videos?: string;
  affiliate_posts_enabled?: boolean;
  item_list?: {
  item_id?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
  video_info?: {
  video_id?: string;
};
}[];
  custom_anchor_video_list?: {
  item_id?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
}[];
  campaign_name?: string;
}


export interface CampaignGmvMaxUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  operation_status?: string;
  campaign_id?: string;
  campaign_name?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  shopping_ads_type?: string;
  product_specific_type?: string;
  item_group_ids?: string[];
  optimization_goal?: string;
  roi_protection_enabled?: boolean;
  deep_bid_type?: string;
  roas_bid?: number;
  budget?: number;
  promotion_days?: {
  is_enabled?: boolean;
  auto_schedule_enabled?: boolean;
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
  auto_budget_enabled?: boolean;
  budget_increase_percentage?: number;
  increase_limit?: number;
  current_budget?: number;
  next_increase?: number;
  remained_times?: number;
  maximum_budget?: number;
};
  auto_budget_enabled?: boolean;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  placements?: string[];
  location_ids?: string[];
  age_groups?: string[];
  product_video_specific_type?: string;
  accelerate_testing_for_new_videos?: string;
  identity_list?: {
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
}[];
  affiliate_posts_enabled?: boolean;
  item_list?: {
  item_id?: string;
  text?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: string;
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
  identity_type?: string;
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
  action: string;
  item_list: {
  item_id: string;
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

