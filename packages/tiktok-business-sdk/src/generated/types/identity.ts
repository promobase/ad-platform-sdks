// @generated
// fingerprint: sha256:55952104adf20fbbd65089aa804d4649eb7a6dbcf77f91b979a5b083634767c2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Identity — do not edit

export interface IdentityCreateParams {
  advertiser_id: string;
  display_name: string;
  image_uri?: string;
}


export interface IdentityCreateResponse {
  identity_id?: string;
}


export interface IdentityDeleteParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: string;
}


export interface IdentityDeleteResponse {}


export interface IdentityGetParams {
  advertiser_id: string;
  identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  filtering?: {
  keyword?: string;
};
  page?: number;
  page_size?: number;
}


export interface IdentityGetResponse {
  identity_list?: {
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  ads_only_mode?: boolean;
  username?: string;
  is_gpppa?: boolean;
  can_push_video?: boolean;
  can_pull_video?: boolean;
  can_use_live_ads?: boolean;
  can_manage_message?: boolean;
  display_name?: string;
  available_status?: "AVAILABLE" | "NO_VALID_BIND_ACCOUNT" | "SCOPE_UNAVAILABLE" | "NOT_BUSINESS_ACCOUNT";
  profile_image?: string;
}[];
  page_info?: {
  page?: number;
  total_page?: number;
  total_number?: number;
  page_size?: number;
};
}


export interface IdentityInfoParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
}


export interface IdentityInfoResponse {
  identity_info?: {
  identity_id?: string;
  identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  ads_only_mode?: boolean;
  username?: string;
  is_gpppa?: boolean;
  can_push_video?: boolean;
  can_pull_video?: boolean;
  can_use_live_ads?: boolean;
  can_manage_message?: boolean;
  display_name?: string;
  profile_image_url?: string;
  available_status?: "AVAILABLE" | "NO_VALID_BIND_ACCOUNT" | "SCOPE_UNAVAILABLE" | "IS_PRIVATE_ACCOUNT" | "NOT_BUSINESS_ACCOUNT";
};
}


export interface IdentityVideoGetParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  item_type?: "VIDEO" | "CAROUSEL";
  keyword?: string;
  exclude_adsonly?: boolean;
  cursor?: number;
  count?: number;
}


export interface IdentityVideoGetResponse {
  cursor?: string;
  has_more?: boolean;
  video_list?: {
  item_type?: "VIDEO" | "CAROUSEL";
  item_id?: string;
  status?: "ITEM_STATUS_HESITATE_RECOMMEND" | "STATUS_ONLY_FRIEND_SEE" | "ITEM_STATUS_ONLY_AUTHOR_SEE";
  text?: string;
  auth_info?: {
  ad_auth_status?: string;
  auth_end_time?: string;
  auth_start_time?: string;
  invite_start_time?: string;
};
  anchor_list?: {
  anchor_id?: string;
  title?: string;
  status?: "CHECK_ING" | "CHECK_FAILED" | "CHECK_SUCCESS";
  url?: string;
  product_regions?: string[];
};
  video_info?: {
  bit_rate?: number;
  duration?: number;
  size?: number;
  height?: number;
  width?: number;
  poster_url?: string;
  signature?: string;
  url?: string;
  format?: string;
};
  carousel_info?: {
  image_info?: {
  image_id?: string;
  image_url?: string;
  image_height?: number;
  image_width?: number;
}[];
  music_info?: {
  music_id?: string;
  music_url?: string;
  music_duration?: number;
};
};
}[];
}


export interface IdentityLiveGetParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  cursor?: number;
}


export interface IdentityLiveGetResponse {
  cursor?: string;
  has_more?: boolean;
  live_list?: {
  live_id?: string;
  finish_timestamp?: string;
}[];
}


export interface IdentityMusicAuthorizationParams {
  advertiser_id: string;
  item_id: string;
  identity_id: string;
  identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  locations: string[];
  start_time: string;
  end_time: string;
}


export interface IdentityMusicAuthorizationResponse {
  music_authorization?: {
  item_id?: string;
  music_status?: "WITHOUT_SONG_ID" | "AUTHORIZATION_MISSING" | "WITH_FULL_AUTHORIZATION";
  authorization_infos?: {
  music_id?: string;
  author?: string;
  title?: string;
  labels?: string[];
  lyricist?: string;
  composer?: string;
  publisher?: string;
  authorization_type?: "NOT_AUTHORIZED" | "AUTHORIZED";
}[];
}[];
}


export interface IdentityVideoInfoParams {
  advertiser_id: string;
  identity_type: "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_id: string;
  identity_authorized_bc_id?: string;
  item_id?: string;
  item_ids?: string[];
}


export interface IdentityVideoInfoResponse {
  video_detail?: {
  item_type?: "VIDEO" | "CAROUSEL";
  item_id?: string;
  status?: "ITEM_STATUS_HESITATE_RECOMMEND" | "STATUS_ONLY_FRIEND_SEE" | "ITEM_STATUS_ONLY_AUTHOR_SEE";
  text?: string;
  anchor_list?: {
  anchor_id?: string;
  title?: string;
  status?: "CHECKING" | "CHECK_FAILED" | "CHECK_SUCCESS";
  url?: string;
  product_regions?: string[];
}[];
  auth_info?: {
  ad_auth_status?: string;
  auth_start_time?: string;
  auth_end_time?: string;
  invite_start_time_stamp?: string;
};
  video_info?: {
  bit_rate?: number;
  duration?: number;
  size?: number;
  height?: number;
  width?: number;
  poster_url?: string;
  signature?: string;
  url?: string;
};
  carousel_info?: {
  image_info?: {
  image_id?: string;
  image_url?: string;
  image_height?: number;
  image_width?: number;
}[];
  music_info?: {
  music_id?: string;
  music_url?: string;
  music_duration?: number;
};
};
};
  video_details?: {
  item_type?: "VIDEO" | "CAROUSEL";
  item_id?: string;
  status?: "ITEM_STATUS_HESITATE_RECOMMEND" | "ITEM_STATUS_ONLY_AUTHOR_SEE" | "STATUS_ONLY_FRIEND_SEE";
  text?: string;
  auth_info?: {
  ad_auth_status?: string;
  auth_start_time?: string;
  auth_end_time?: string;
  invite_start_time_stamp?: string;
};
  video_info?: {
  bit_rate?: number;
  duration?: number;
  size?: number;
  height?: number;
  width?: number;
  poster_url?: string;
  signature?: string;
  url?: string;
};
  carousel_info?: {
  image_info?: {
  image_id?: string;
  image_url?: string;
  image_height?: number;
  image_width?: number;
}[];
  music_info?: {
  music_id?: string;
  music_url?: string;
  music_duration?: number;
};
};
}[];
}
