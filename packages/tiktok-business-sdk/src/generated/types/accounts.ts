// @generated
// fingerprint: sha256:a26e526ca75b4dc15b8a1e792d776f71e81ba09851c2933461f7ccf4afc13d93
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Accounts — do not edit

export interface TtUserTokenInfoGetParams {
  app_id: string;
  access_token: string;
}


export interface TtUserTokenInfoGetResponse {
  app_id?: string;
  scope?: string;
  creator_id?: string;
}


export interface BusinessGetParams {
  business_id: string;
  start_date?: string;
  end_date?: string;
  fields?: string[];
}


export interface BusinessGetResponse {
  is_business_account?: boolean;
  profile_image?: string;
  username?: string;
  profile_deep_link?: string;
  display_name?: string;
  bio_description?: string;
  is_verified?: boolean;
  following_count?: number;
  followers_count?: number;
  total_likes?: number;
  videos_count?: number;
  metrics?: {
  date?: string;
  video_views?: number;
  unique_video_views?: number;
  profile_views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  phone_number_clicks?: number;
  lead_submissions?: number;
  app_download_clicks?: number;
  bio_link_clicks?: number;
  email_clicks?: number;
  address_clicks?: number;
  daily_total_followers?: number;
  daily_new_followers?: number;
  daily_lost_followers?: number;
  followers_count?: number;
  audience_activity?: {
  hour?: string;
  count?: number;
}[];
  engaged_audience?: number;
}[];
  audience_ages?: {
  age?: string;
  percentage?: number;
}[];
  audience_genders?: {
  gender?: string;
  percentage?: number;
}[];
  audience_countries?: {
  country?: string;
  percentage?: number;
}[];
  audience_cities?: {
  city_name?: string;
  percentage?: number;
}[];
}


export interface BusinessVideoListParams {
  business_id: string;
  fields?: string[];
  filters?: {
  video_ids?: string[];
  ad_post_only?: boolean;
};
  cursor?: number;
  max_count?: number;
}


export interface BusinessVideoListResponse {
  videos?: {
  item_id?: string;
  media_type?: "VIDEO" | "PHOTO";
  is_ad?: boolean;
  thumbnail_url?: string;
  share_url?: string;
  embed_url?: string;
  caption?: string;
  video_duration?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  favorites?: number;
  create_time?: string;
  reach?: number;
  video_views?: number;
  total_time_watched?: number;
  average_time_watched?: number;
  full_video_watched_rate?: number;
  new_followers?: number;
  profile_views?: number;
  website_clicks?: number;
  phone_number_clicks?: number;
  lead_submissions?: number;
  app_download_clicks?: number;
  email_clicks?: number;
  address_clicks?: number;
  video_view_retention?: {
  second?: string;
  percentage?: number;
}[];
  impression_sources?: {
  impression_source?: string;
  percentage?: number;
}[];
  audience_genders?: {
  gender?: string;
  percentage?: number;
}[];
  audience_countries?: {
  country?: string;
  percentage?: number;
}[];
  audience_cities?: {
  city_name?: string;
  percentage?: number;
}[];
  audience_types?: {
  type?: "NEW_VIEWER" | "RETURN_VIEWER" | "FOLLOWER_PERCENT" | "NON_FOLLOWER_PERCENT";
  percentage?: number;
}[];
  engagement_likes?: {
  second?: string;
  percentage?: number;
}[];
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface BusinessBenchmarkParams {
  business_id: string;
  business_category: string;
}


export interface BusinessBenchmarkResponse {
  business_category?: string;
  average_likes?: number;
  average_comments?: number;
  average_shares?: number;
  average_video_count?: number;
  average_follower_count?: number;
  average_follower_growth?: number;
  average_engagement_rate?: number;
  average_video_views?: number;
}


export interface BusinessVideoSettingsParams {
  business_id: string;
}


export interface BusinessVideoSettingsResponse {
  privacy_level_options?: string[];
  comment_disabled?: boolean;
  duet_disabled?: boolean;
  stitch_disabled?: boolean;
  max_video_post_duration_sec?: number;
}


export interface BusinessCommentListParams {
  business_id: string;
  video_id: string;
  comment_ids?: string[];
  include_replies?: boolean;
  status?: string;
  sort_field?: string;
  sort_order?: string;
  cursor?: number;
  max_count?: number;
}


export interface BusinessCommentListResponse {
  comments?: {
  comment_id?: string;
  video_id?: string;
  user_id?: string;
  unique_identifier?: string;
  create_time?: string;
  text?: string;
  likes?: number;
  replies?: number;
  owner?: boolean;
  liked?: boolean;
  pinned?: boolean;
  status?: string;
  username?: string;
  display_name?: string;
  profile_image?: string;
  parent_comment_id?: string;
  reply_list?: {
  video_id?: number;
  comment_id?: number;
  create_time?: string;
  text?: string;
  status?: "HIDDEN" | "PUBLIC";
  liked?: boolean;
  likes?: number;
  owner?: boolean;
  user_id?: string;
  unique_identifier?: string;
  username?: string;
  display_name?: string;
  profile_image?: string;
  parent_comment_id?: string;
}[];
  image_url?: string;
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface BusinessCommentReplyListParams {
  business_id: string;
  video_id: string;
  comment_id: string;
  status?: "PUBLIC" | "ALL";
  sort_field?: string;
  sort_order?: string;
  cursor?: number;
  max_count?: number;
}


export interface BusinessCommentReplyListResponse {
  comments?: {
  comment_id?: string;
  parent_comment_id?: string;
  video_id?: string;
  user_id?: string;
  unique_identifier?: string;
  create_time?: string;
  text?: string;
  likes?: number;
  replies?: number;
  owner?: boolean;
  liked?: boolean;
  pinned?: boolean;
  status?: string;
  username?: string;
  display_name?: string;
  profile_image?: string;
  image_url?: string;
}[];
  cursor?: number;
  has_more?: boolean;
}


export interface BusinessCommentCreateParams {
  business_id: string;
  video_id: string;
  text?: string;
  image_uri?: string;
  image_width?: number;
  image_height?: number;
}


export interface BusinessCommentCreateResponse {
  comment_id?: string;
  video_id?: string;
  user_id?: string;
  unique_identifier?: string;
  create_time?: string;
  text?: string;
  image_url?: string;
}


export interface BusinessCommentImageUploadParams {
  image_file: File | Blob;
}


export interface BusinessCommentImageUploadResponse {
  image_uri?: string;
  width?: number;
  height?: number;
}


export interface BusinessCommentReplyCreateParams {
  business_id: string;
  video_id: string;
  comment_id: string;
  reply_image_url?: string;
  text?: string;
  image_uri?: string;
  image_width?: number;
  image_height?: number;
}


export interface BusinessCommentReplyCreateResponse {
  comment_id?: string;
  parent_comment_id?: string;
  video_id?: string;
  user_id?: string;
  unique_identifier?: string;
  create_time?: string;
  text?: string;
  image_url?: string;
}


export interface BusinessCommentLikeParams {
  business_id: string;
  comment_id: string;
  action: "LIKE" | "UNLIKE";
}


export interface BusinessCommentLikeResponse {}


export interface BusinessCommentHideParams {
  business_id: string;
  comment_id: string;
  video_id: string;
  action: "HIDE" | "UNHIDE";
}


export interface BusinessCommentHideResponse {}


export interface BusinessCommentDeleteParams {
  business_id: string;
  comment_id: string;
}


export interface BusinessCommentDeleteResponse {}


export interface BusinessVideoPublishParams {
  business_id: string;
  video_url: string;
  custom_thumbnail_url?: string;
  post_info: {
  caption?: string;
  is_brand_organic: boolean;
  is_branded_content: boolean;
  tto_invite_link?: string;
  disable_comment?: boolean;
  disable_duet?: boolean;
  disable_stitch?: boolean;
  thumbnail_offset?: number;
  is_ai_generated?: boolean;
  upload_to_draft?: boolean;
  location_id?: string;
  location_name?: string;
  is_ads_only?: boolean;
  music_sound_info?: {
  music_sound_id?: Record<string, unknown>;
  music_sound_volume?: number;
  music_sound_start?: number;
  music_sound_end?: number;
  video_original_sound_volume?: number;
};
};
}


export interface BusinessVideoPublishResponse {
  share_id?: string;
}


export interface BusinessPhotoPublishParams {
  business_id: string;
  photo_images: string[];
  photo_cover_index?: number;
  post_info: {
  privacy_level: "PUBLIC_TO_EVERYONE" | "MUTUAL_FOLLOW_FRIENDS" | "FOLLOWER_OF_CREATOR" | "SELF_ONLY";
  title?: string;
  caption?: string;
  auto_add_music?: boolean;
  is_brand_organic: boolean;
  is_branded_content: boolean;
  is_draft?: boolean;
  disable_comment?: boolean;
  music_sound_info?: {
  music_sound_id?: string;
};
  location_id?: string;
  location_name?: string;
};
}


export interface BusinessPhotoPublishResponse {
  share_id?: string;
}


export interface BusinessPublishStatusParams {
  business_id: string;
  publish_id: string;
}


export interface BusinessPublishStatusResponse {
  status?: "PROCESSING_DOWNLOAD" | "PUBLISH_COMPLETE" | "FAILED" | "SEND_TO_USER_INBOX";
  post_ids?: string[];
  reason?: string;
}


export interface BusinessHashtagSuggestionParams {
  business_id: string;
  keyword: string;
  language?: string;
}


export interface BusinessHashtagSuggestionResponse {
  suggestions?: {
  name?: string;
  view_count?: number;
}[];
}


export interface BusinessPublishLocationParams {
  business_id: string;
  search_query: string;
}


export interface BusinessPublishLocationResponse {
  locations?: {
  location_name?: string;
  location_id?: string;
  location_address?: string;
}[];
}


export interface BusinessPostAuthorizeSettingParams {
  business_id: string;
  item_id: string;
  is_ad_promotable: boolean;
  authorization_days?: number;
}


export interface BusinessPostAuthorizeSettingResponse {
  item_id?: string;
  auth_code?: string;
  auth_code_start_time?: string;
  auth_code_end_time?: string;
  authorization_days?: number;
}


export interface BusinessPostAuthorizeParams {
  business_id: string;
  item_id: string;
  authorization_days?: number;
}


export interface BusinessPostAuthorizeResponse {
  item_id?: string;
  auth_code?: string;
  auth_code_start_time?: string;
  auth_code_end_time?: string;
  authorization_days?: number;
}


export interface BusinessPostAuthorizeStatusParams {
  business_id: string;
  item_id: string;
}


export interface BusinessPostAuthorizeStatusResponse {
  item_id?: string;
  auth_code?: string;
  auth_code_start_time?: string;
  auth_code_end_time?: string;
  authorization_days?: number;
  auth_code_status?: "NOT_USED" | "IN_USE" | "EXPIRED";
}


export interface BusinessPostAuthorizeDeleteParams {
  business_id: string;
  item_id: string;
}


export interface BusinessPostAuthorizeDeleteResponse {
  item_id?: string;
  auth_code_status?: string;
}


export interface BusinessPropertyAddParams {
  app_id: string;
  secret: string;
  url_property_meta: {
  property_type: number;
  url: string;
};
}


export interface BusinessPropertyAddResponse {
  url_property_info?: {
  property_type?: number;
  url?: string;
  property_status?: number;
  signature?: string;
  file_name?: string;
};
}


export interface BusinessPropertyVerifyParams {
  app_id: string;
  secret: string;
  url_property_meta: {
  property_type: number;
  url: string;
};
}


export interface BusinessPropertyVerifyResponse {
  url_property_info?: {
  property_type?: number;
  url?: string;
  property_status?: number;
  signature?: string;
  file_name?: string;
};
}


export interface BusinessPropertyDeleteParams {
  app_id: string;
  secret: string;
  url_property_meta: {
  property_type: number;
  url: string;
};
}


export interface BusinessPropertyDeleteResponse {}


export interface BusinessPropertyListParams {
  app_id: string;
  secret: string;
}


export interface BusinessPropertyListResponse {
  url_property_info_list?: {
  property_type?: number;
  url?: string;
  property_status?: number;
  signature?: string;
  file_name?: string;
};
}


export interface BusinessWebhookUpdateParams {
  app_id: string;
  secret: string;
  event_type: "VIDEO" | "COMMENT";
  callback_url: string;
  item_list?: string[];
}


export interface BusinessWebhookUpdateResponse {
  app_id?: string;
  event_type?: "VIDEO" | "COMMENT";
  callback_url?: string;
  item_list?: string[];
}


export interface BusinessWebhookListParams {
  app_id: string;
  secret: string;
  event_type: "VIDEO" | "COMMENT";
}


export interface BusinessWebhookListResponse {
  app_id?: string;
  event_type?: "VIDEO" | "COMMENT";
  callback_url?: string;
  item_list?: string[];
}


export interface BusinessWebhookDeleteParams {
  app_id: string;
  secret: string;
  event_type: "VIDEO" | "COMMENT";
  item_list?: string[];
}


export interface BusinessWebhookDeleteResponse {
  app_id?: string;
  event_type?: "VIDEO" | "COMMENT";
  item_list?: string[];
}
