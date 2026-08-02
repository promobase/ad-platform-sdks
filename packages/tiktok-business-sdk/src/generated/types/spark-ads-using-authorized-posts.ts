// Auto-generated types for Spark Ads Using Authorized Posts — do not edit

export interface TtVideoInfoParams {
  advertiser_id: string;
  auth_code: string;
}


export interface TtVideoInfoResponse {
  auth_info?: {
  auth_end_time?: string;
  auth_start_time?: string;
};
  item_info?: {
  auth_code?: string;
  item_id?: string;
  item_type?: "VIDEO" | "CAROUSEL";
  text?: string;
  status?: string;
  carousel_info?: {
  image_info?: {
  image_url?: string;
  image_height?: number;
  image_width?: number;
}[];
  music_info?: {
  music_url?: string;
  music_duration?: number;
};
};
  stitch_original_item_id?: string;
  duet_original_item_id?: string;
  is_multi_duet_stitch?: boolean;
  mentioned_item_ids?: string[];
  anchor_list?: string;
  id?: string;
  title?: string;
  product_regions?: string[];
  url?: string;
  spu_id?: string;
  spu_name?: string;
  store_id?: string;
};
  user_info?: {
  tiktok_name?: string;
  identity_id?: string;
  identity_type?: string;
};
  video_info?: {
  bit_rate?: number;
  duration?: number;
  size?: number;
  width?: number;
  height?: number;
  video_id?: string;
  file_name?: string;
  poster_url?: string;
  preview_url?: string;
  signature?: string;
};
}


export interface TtVideoAuthorizeParams {
  advertiser_id: string;
  auth_code: string;
  original_post_auth_code?: string;
}


export interface TtVideoAuthorizeResponse {}


export interface TtVideoListParams {
  advertiser_id: string;
  item_types?: ("VIDEO" | "CAROUSEL")[];
  keyword?: string;
  page?: number;
  page_size?: number;
}


export interface TtVideoListResponse {
  list?: {
  item_info?: {
  auth_code?: string;
  item_id?: string;
  text?: string;
  status?: string;
  item_type?: "VIDEO" | "CAROUSEL";
  carousel_info?: {
  image_info?: {
  image_url?: string;
  image_height?: number;
  image_width?: number;
}[];
  music_info?: {
  music_url?: string;
  music_duration?: number;
};
};
  anchor_list?: {
  id?: string;
  title?: string;
  status?: "CHECK_ING" | "CHECK_FAILED" | "CHECK_SUCCESS";
  product_regions?: string[];
  url?: string;
  spu_id?: string;
  spu_name?: string;
  store_id?: string;
}[];
};
  video_info?: {
  bit_rate?: number;
  duration?: number;
  size?: number;
  height?: number;
  width?: number;
  poster_url?: string;
  preview_url?: string;
  signature?: string;
};
  user_info?: {
  tiktok_name?: string;
  identity_id?: string;
  identity_type?: string;
};
  auth_info?: {
  invite_start_time?: string;
  auth_start_time?: string;
  ad_auth_status?: string;
  auth_end_time?: string;
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface TtVideoUnbindParams {
  advertiser_id: string;
  item_id: string;
}


export interface TtVideoUnbindResponse {}
