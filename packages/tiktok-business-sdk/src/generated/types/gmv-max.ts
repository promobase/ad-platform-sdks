// Auto-generated types for GMV Max — do not edit

export interface GmvMaxCampaignGetParams {
  advertiser_id: string;
  fields?: string[];
  filtering: {
  gmv_max_promotion_types: ("PRODUCT_GMV_MAX" | "LIVE_GMV_MAX")[];
  store_ids?: string[];
  campaign_ids?: string[];
  campaign_name?: string;
  primary_status?: "STATUS_DELIVERY_OK" | "STATUS_DISABLE" | "STATUS_DELETE";
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
};
  page?: number;
  page_size?: number;
}


export interface GmvMaxCampaignGetResponse {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  operation_status?: "ENABLE" | "DISABLE";
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  secondary_status?: string;
  roi_protection_compensation_status?: "IN_EFFECT" | "NOT_ELIGIBLE";
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CampaignGmvMaxInfoParams {
  advertiser_id: string;
  campaign_id: string;
}


export interface CampaignGmvMaxInfoResponse {
  advertiser_id?: string;
  operation_status?: "DISABLE" | "ENABLE";
  campaign_id?: string;
  campaign_name?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  shopping_ads_type?: "PRODUCT" | "LIVE";
  product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
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
  affiliate_posts_enabled?: boolean;
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
}


export interface CampaignGmvMaxCreateParams {
  request_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  advertiser_id: string;
  shopping_ads_type: "PRODUCT" | "LIVE";
  product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS";
  item_group_ids?: string[];
  optimization_goal: string;
  deep_bid_type: string;
  roas_bid?: number;
  budget: number;
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
  schedule_type: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time: string;
  schedule_end_time?: string;
  product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION";
  identity_list?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
}[];
  affiliate_posts_enabled?: boolean;
  item_list?: {
  item_id?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
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
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
}[];
  campaign_name: string;
}


export interface CampaignGmvMaxCreateResponse {
  advertiser_id?: string;
  operation_status?: "DISABLE" | "ENABLE";
  campaign_id?: string;
  campaign_name?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  shopping_ads_type?: "PRODUCT" | "LIVE";
  product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
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
  start_date?: string;
  end_date?: string;
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
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  location_ids?: string[];
  age_groups?: string[];
  product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION" | "UNSET";
  identity_list?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
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
}


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
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_end_time?: string;
  affiliate_posts_enabled?: boolean;
  item_list?: {
  item_id?: string;
  spu_id_list?: string[];
  identity_info?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
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
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
}[];
  campaign_name?: string;
}


export interface CampaignGmvMaxUpdateResponse {
  advertiser_id?: string;
  operation_status?: "DISABLE" | "ENABLE";
  campaign_id?: string;
  campaign_name?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  shopping_ads_type?: "PRODUCT" | "LIVE";
  product_specific_type?: "ALL" | "CUSTOMIZED_PRODUCTS" | "UNSET";
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
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  placements?: ("PLACEMENT_TIKTOK" | "PLACEMENT_PANGLE")[];
  location_ids?: string[];
  age_groups?: string[];
  product_video_specific_type?: "AUTO_SELECTION" | "CUSTOM_SELECTION" | "UNSET";
  identity_list?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
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
}


export interface GmvMaxBidRecommendParams {
  advertiser_id: string;
  store_id: string;
  shopping_ads_type: "PRODUCT" | "LIVE";
  optimization_goal: string;
  item_group_ids?: string[];
  identity_id?: string;
}


export interface GmvMaxBidRecommendResponse {
  roas_bid?: number;
  budget?: number;
}


export interface CampaignGmvMaxSessionCreateParams {
  advertiser_id: string;
  campaign_id: string;
  store_id: string;
  session: {
  bid_type: string;
  product_list: {
  spu_id: string;
}[];
  budget: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
};
}


export interface CampaignGmvMaxSessionCreateResponse {
  session_id?: string;
}


export interface CampaignGmvMaxSessionUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  store_id: string;
  session_id: string;
  session: {
  budget?: number;
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
};
}


export interface CampaignGmvMaxSessionUpdateResponse {}


export interface CampaignGmvMaxSessionListParams {
  advertiser_id: string;
  campaign_id: string;
}


export interface CampaignGmvMaxSessionListResponse {
  session_list?: {
  campaign_id?: string;
  bid_type?: "NO_BID" | "CREATIVE_NO_BID";
  session_id?: string;
  budget?: number;
  product_list?: {
  spu_id?: string;
}[];
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
}[];
}


export interface CampaignGmvMaxSessionGetParams {
  advertiser_id: string;
  session_ids: string[];
}


export interface CampaignGmvMaxSessionGetResponse {
  session_list?: {
  campaign_id?: string;
  bid_type?: "NO_BID" | "CREATIVE_NO_BID";
  session_id?: string;
  budget?: number;
  product_list?: {
  spu_id?: string;
}[];
  schedule_type?: "SCHEDULE_FROM_NOW" | "SCHEDULE_START_END";
  schedule_start_time?: string;
  schedule_end_time?: string;
  item_id?: string;
}[];
}


export interface CampaignGmvMaxSessionDeleteParams {
  advertiser_id: string;
  session_id: string;
}


export interface CampaignGmvMaxSessionDeleteResponse {}


export interface GmvMaxStoreListParams {
  advertiser_id: string;
}


export interface GmvMaxStoreListResponse {
  store_list?: {
  store_id?: string;
  is_gmv_max_available?: boolean;
  store_authorized_bc_id?: string;
  is_owner_bc?: boolean;
  store_authorized_bc_info?: {
  bc_id?: string;
  bc_profile_image?: string;
  bc_name?: string;
  user_role?: "ADMIN" | "STANDARD";
};
  thumbnail_url?: string;
  store_name?: string;
  store_code?: string;
  targeting_region_codes?: string[];
  store_status?: "ACTIVE" | "INACTIVE" | "NEW_CREATE";
  store_role?: "AD_PROMOTION" | "MANAGER" | "UNSET";
  exclusive_authorized_advertiser_info?: {
  advertiser_id?: string;
  advertiser_name?: string;
  advertiser_status?: "STATUS_ENABLE" | "STATUS_CONFIRM_FAIL" | "STATUS_PENDING_CONFIRM" | "STATUS_LIMIT" | "STATUS_CONTRACT_PENDING" | "STATUS_DISABLE" | "STATUS_PENDING_CONFIRM_MODIFY" | "STATUS_PENDING_VERIFIED" | "STATUS_SELF_SERVICE_UNAUDITED" | "STATUS_WAIT_FOR_BPM_AUDIT" | "STATUS_CONFIRM_FAIL_END" | "STATUS_CONFIRM_MODIFY_FAIL";
};
}[];
}


export interface GmvMaxStoreShopAdUsageCheckParams {
  advertiser_id: string;
  store_id: string;
}


export interface GmvMaxStoreShopAdUsageCheckResponse {
  promote_all_products_allowed?: boolean;
  is_running_custom_shop_ads?: boolean;
}


export interface GmvMaxIdentityGetParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
}


export interface GmvMaxIdentityGetResponse {
  identity_list?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
  profile_image?: string;
  display_name?: string;
  user_name?: string;
  is_running_custom_shop_ads?: boolean;
  product_gmv_max_available?: boolean;
  live_gmv_max_available?: boolean;
  unavailable_reason?: "OCCUPIED" | "UNAUTHORIZED";
}[];
}


export interface GmvMaxOccupiedCustomShopAdsListParams {
  advertiser_id: string;
  store_id: string;
  occupied_asset_type: "IDENTITY_TT_USER" | "TT_USER" | "IDENTITY_BC_AUTH_TT" | "BC_AUTH_TT" | "IDENTITY_TTS_TT" | "TTS_TT" | "SPU";
  asset_ids: string[];
}


export interface GmvMaxOccupiedCustomShopAdsListResponse {
  occupied_custom_shop_ads?: {
  advertiser_id?: string;
  campaign_id?: string;
  adgroup_id?: string;
  ad_id?: string;
  create_time?: string;
}[];
}


export interface GmvMaxVideoGetParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  spu_id_list?: string[];
  custom_posts_eligible?: boolean;
  sort_field?: "GMV" | "POST_TIME" | "VIDEO_VIEWS" | "VIDEO_LIKES" | "CLICK_THROUGH_RATE" | "PRODUCT_CLICKS";
  sort_type?: "ASC" | "DESC";
  keyword?: string;
  need_auth_code_video?: boolean;
  identity_list?: {
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
}[];
  page?: number;
  page_size?: number;
}


export interface GmvMaxVideoGetResponse {
  item_list?: {
  item_id?: string;
  text?: string;
  spu_id_list?: string[];
  can_change_anchor?: boolean;
  identity_info?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
  profile_image?: string;
  display_name?: string;
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
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface GmvMaxCustomAnchorVideoListGetParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_custom_anchor_video_id: string;
  custom_anchor_video_list: {
  item_id: string;
  identity_info: {
  identity_id: string;
  identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
  spu_id_list?: string[];
}[];
}


export interface GmvMaxCustomAnchorVideoListGetResponse {
  custom_anchor_video_list?: {
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
}


export interface CampaignGmvMaxCreativeUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  action: "REMOVE" | "ADD" | "EXCLUDED";
  item_list: {
  item_id: string;
  spu_id_list?: string[];
}[];
}


export interface CampaignGmvMaxCreativeUpdateResponse {}


export interface GmvMaxCreationCustomAnchorVideoListCreateParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  custom_anchor_video_list: {
  item_id: string;
  identity_info: {
  identity_id: string;
  identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
};
  spu_id_list: string[];
}[];
}


export interface GmvMaxCreationCustomAnchorVideoListCreateResponse {
  failure_list?: {
  item_id?: Record<string, unknown>[];
  identity_info?: string[];
  identity_id?: Record<string, unknown>;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
  spu_id_list?: string;
  reason?: "IDENTITY_NO_PERMISSION" | "INVALID_PARAMETER" | "AUTH_CODE_CAN_NOT_CHANGE_ANCHOR" | "ITEM_NOT_FOUND" | "NATIVE_ANCHOR_EXISTS";
  error_message?: string;
};
}


export interface GmvMaxCreationCustomAnchorVideoListGetParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  creative_source: string;
  spu_id_list?: string[];
  sort_field?: "GMV" | "POST_TIME" | "VIDEO_VIEWS" | "VIDEO_LIKES" | "CLICK_THROUGH_RATE" | "PRODUCT_CLICKS";
  sort_type?: "ASC" | "DESC";
  keyword?: string;
  need_auth_code_video?: boolean;
  identity_list?: {
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
}[];
  campaign_id?: string;
  page?: number;
  page_size?: number;
}


export interface GmvMaxCreationCustomAnchorVideoListGetResponse {
  item_list?: {
  item_id?: string;
  text?: string;
  spu_id_list?: string[];
  can_change_anchor?: boolean;
  identity_info?: {
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT" | "TTS_TT";
  identity_authorized_bc_id?: string;
  identity_authorized_shop_id?: string;
  store_id?: string;
  profile_image?: string;
  display_name?: string;
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
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface GmvMaxCreationCustomAnchorVideoListDeleteParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  custom_anchor_video_list: {
  item_id: string;
  spu_id_list: string[];
}[];
  campaign_id?: string;
}


export interface GmvMaxCreationCustomAnchorVideoListDeleteResponse {}


export interface GmvMaxCreationShopVideoVideoAnchorsParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  item_ids: string[];
  campaign_id?: string;
}


export interface GmvMaxCreationShopVideoVideoAnchorsResponse {
  video_list?: {
  item_id?: string;
  product_list?: {
  spu_id?: string;
  title?: string;
  picture?: string;
  anchor_source?: "CUSTOM" | "ORGANIC";
};
};
}


export interface GmvMaxExclusiveAuthorizationGetParams {
  store_id: string;
  store_authorized_bc_id: string;
  advertiser_id: string;
}


export interface GmvMaxExclusiveAuthorizationGetResponse {
  store_id?: string;
  advertiser_id?: string;
  authorization_status?: "EFFECTIVE" | "INEFFECTIVE" | "UNAUTHORIZED";
  advertiser_name?: string;
  advertiser_status?: "STATUS_ENABLE" | "STATUS_CONFIRM_FAIL" | "STATUS_PENDING_CONFIRM" | "STATUS_LIMIT" | "STATUS_CONTRACT_PENDING" | "STATUS_DISABLE" | "STATUS_PENDING_CONFIRM_MODIFY" | "STATUS_PENDING_VERIFIED" | "STATUS_SELF_SERVICE_UNAUDITED" | "STATUS_WAIT_FOR_BPM_AUDIT" | "STATUS_CONFIRM_FAIL_END" | "STATUS_CONFIRM_MODIFY_FAIL";
  identity_id?: string;
}


export interface GmvMaxExclusiveAuthorizationCreateParams {
  store_id: string;
  store_authorized_bc_id: string;
  advertiser_id: string;
}


export interface GmvMaxExclusiveAuthorizationCreateResponse {}
