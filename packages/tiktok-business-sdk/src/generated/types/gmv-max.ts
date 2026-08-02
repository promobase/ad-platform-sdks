// Auto-generated types for GMV Max — do not edit

export interface GmvMaxCampaignGetParams {}


export interface GmvMaxCampaignGetResponse {}


export interface CampaignGmvMaxInfoParams {}


export interface CampaignGmvMaxInfoResponse {}


export interface CampaignGmvMaxCreateParams {}


export interface CampaignGmvMaxCreateResponse {}


export interface CampaignGmvMaxUpdateParams {}


export interface CampaignGmvMaxUpdateResponse {}


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


export interface GmvMaxCreationCustomAnchorVideoListCreateParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  custom_anchor_video_list: ("PRODUCT" | "AUTO_SELECTION")[];
}


export interface GmvMaxCreationCustomAnchorVideoListCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
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
};
}


export interface GmvMaxCreationCustomAnchorVideoListGetParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  creative_source: string;
  spu_id_list?: ("GMV_MAX" | "AVAILABLE" | "UNOCCUPIED")[];
  sort_field?: "GMV" | "POST_TIME" | "VIDEO_VIEWS" | "VIDEO_LIKES" | "CLICK_THROUGH_RATE" | "PRODUCT_CLICKS";
  sort_type?: "ASC" | "DESC";
  keyword?: string;
  need_auth_code_video?: "AUTH_CODE" | "true" | "false";
  identity_list?: ("TT_USER" | "BC_AUTH_TT" | "TTS_TT" | "true" | "false")[];
  campaign_id?: string;
  page?: number;
  page_size?: number;
}


export interface GmvMaxCreationCustomAnchorVideoListGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  item_list?: {
  item_id?: string;
  text?: string;
  spu_id_list?: string[];
  can_change_anchor?: "true" | "false";
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


export interface GmvMaxCreationCustomAnchorVideoListDeleteResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface GmvMaxCreationShopVideoVideoAnchorsParams {
  advertiser_id: string;
  store_id: string;
  store_authorized_bc_id: string;
  item_ids: string[];
  campaign_id?: string;
}


export interface GmvMaxCreationShopVideoVideoAnchorsResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  video_list?: {
  item_id?: string;
  product_list?: {
  spu_id?: string;
  title?: string;
  picture?: string;
  anchor_source?: "CUSTOM" | "ORGANIC";
};
};
};
}


export interface GmvMaxExclusiveAuthorizationGetParams {}


export interface GmvMaxExclusiveAuthorizationGetResponse {}


export interface GmvMaxExclusiveAuthorizationCreateParams {}


export interface GmvMaxExclusiveAuthorizationCreateResponse {}

