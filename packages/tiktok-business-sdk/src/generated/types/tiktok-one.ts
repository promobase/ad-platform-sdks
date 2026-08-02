// Auto-generated types for TikTok One — do not edit

export interface TtUserOauth2TokenParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  auth_code: string;
  redirect_uri: string;
}


export interface TtUserOauth2TokenResponse {
  access_token?: string;
  token_type?: string;
  scope?: string;
  expires_in?: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  open_id?: string;
}


export interface TtUserTokenInfoGetParams {
  app_id: string;
  access_token: string;
}


export interface TtUserTokenInfoGetResponse {
  app_id?: string;
  scope?: string;
  creator_id?: string;
}


export interface TtoOauth2TcmParams {
  app_id: string;
  secret: string;
}


export interface TtoOauth2TcmResponse {
  tto_tcm_account_ids?: string[];
}


export interface TtoTcmCreatorStatusGetParams {
  tto_tcm_account_id: string;
  handle_names: string[];
}


export interface TtoTcmCreatorStatusGetResponse {
  onboarding_status?: {
  handle_name?: string;
  status?: "IN" | "NOT_IN" | "INVALID";
}[];
}


export interface TtoOauth2InfoParams {
  tto_tcm_account_id: string;
}


export interface TtoOauth2InfoResponse {
  tto_tcm_account_id?: string;
  account_name?: string;
  timezone?: string;
  country?: string;
  business_verification_status?: "NOT_SUBMITTED" | "UNDER_REVIEW" | "NOT_PASSED" | "PASSED" | "EXPIRED";
}


export interface TtoTcmCreatorPublicParams {
  tto_tcm_account_id: string;
  handle_name: string;
}


export interface TtoTcmCreatorPublicResponse {
  handle_name?: string;
  display_name?: string;
  profile_image?: string;
  bio?: string;
  followers_count?: number;
  following_count?: number;
  videos_count?: number;
  likes_count?: number;
  creator_id?: string;
  median_views?: number;
  engagement_rate?: number;
  creator_price?: number;
  currency?: string;
  industry_labels?: {
  label_id?: string;
  label_name?: string;
}[];
  content_labels?: {
  label_id?: string;
  label_name?: string;
}[];
}


export interface TtoTcmCreatorPublicVideoListParams {
  tto_tcm_account_id: string;
  handle_name: string;
  video_ids?: string[];
  cursor?: number;
  limit?: number;
}


export interface TtoTcmCreatorPublicVideoListResponse {
  posts?: {
  display_name?: string;
  video_id?: string;
  thumbnail_url?: string;
  embed_url?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  favorites?: number;
  video_views?: number;
  create_time?: string;
  caption_hashtags?: string[];
  mentioned_accounts?: string[];
  collaboration_status?: "PAID_PARTNERSHIP" | "CREATOR_EARNS_COMMISSION" | "NONE";
}[];
  page_info?: {
  has_more?: boolean;
  cursor?: number;
};
}


export interface TtoCreatorAuthorizedParams {
  creator_id: string;
  fields?: string[];
}


export interface TtoCreatorAuthorizedResponse {
  profile_image?: string;
  handle_name?: string;
  display_name?: string;
  bio?: string;
  following_count?: number;
  followers_count?: number;
  likes_count?: number;
  videos_count?: number;
  creator_rate?: {
  rate?: number;
  currency?: string;
};
  country_code?: string;
  content_labels?: {
  label_id?: number;
  label_name?: string;
}[];
  industry_labels?: {
  label_id?: number;
  label_name?: string;
}[];
  audience_countries?: {
  country?: string;
  percentage?: number;
}[];
  audience_genders?: {
  gender?: string;
  percentage?: number;
}[];
  audience_ages?: {
  age?: string;
  percentage?: number;
}[];
  audience_devices?: {
  device?: "APPLE" | "SAMSUNG" | "XIAOMI" | "OPPO" | "MOTOROLA" | "OTHER";
  percentage?: number;
}[];
  audience_usages?: {
  usage?: string;
  percentage?: number;
}[];
}


export interface TtoCreatorAuthorizedVideoListParams {
  creator_id: string;
  video_ids?: string[];
  limit?: number;
  cursor?: number;
}


export interface TtoCreatorAuthorizedVideoListResponse {
  posts?: {
  video_id?: string;
  display_name?: string;
  thumbnail_url?: string;
  embed_url?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  video_views?: number;
  favorites?: number;
  create_time?: string;
  caption_hashtags?: string[];
  mentioned_accounts?: string[];
  collaboration_status?: "PAID_PARTNERSHIP" | "CREATOR_EARNS_COMMISSION" | "NONE";
}[];
  has_more?: boolean;
  cursor?: number;
}


export interface TtoTcmCategoryLabelParams {
  tto_tcm_account_id: string;
  label_type: "RANKING" | "SEARCH";
}


export interface TtoTcmCategoryLabelResponse {
  industry_labels?: {
  label_id?: string;
  label_name?: string;
}[];
  content_labels?: {
  label_id?: string;
  label_name?: string;
}[];
}


export interface TtoTcmRankParams {
  tto_tcm_account_id: string;
  ranking_type: "BRANDED_CONTENT" | "ORGANIC_CONTENT";
  time_period: "WEEK" | "MONTH";
  time_period_lookback: "ONE" | "TWO" | "THREE" | "MONTH";
  label_id: string;
  country_code: string;
  page?: number;
  page_size?: number;
}


export interface TtoTcmRankResponse {
  creators?: {
  ranking_change?: string;
  profile_image?: string;
  country?: string;
  handle?: string;
  display_name?: string;
  industry_labels?: {
  label_id?: string;
  label_name?: string;
}[];
  content_labels?: {
  label_name?: string;
  label_id?: string;
}[];
  score?: number;
  number_of_followers?: number;
  branded_content_video_views?: number;
  branded_content_engagement_rate?: number;
  total_video_views?: number;
  engagement_rate?: number;
  starting_price?: number;
  starting_price_currency?: string;
  follower_growth?: number;
}[];
  last_updated_at?: string;
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface TtoTcmCreatorDiscoverParams {
  tto_tcm_account_id: string;
  country_codes: string[];
  state_provinces?: string[];
  content_label_ids?: string[];
  industry_label_ids?: string[];
  min_followers?: number;
  max_followers?: number;
  languages?: string[];
  min_creator_price?: number;
  max_creator_price?: number;
  creator_price_currency?: string;
  min_avg_views?: number;
  max_avg_views?: number;
  min_median_views?: number;
  max_median_views?: number;
  min_engagement_rate?: number;
  max_engagement_rate?: number;
  follower_country_codes?: string[];
  follower_gender_ratio?: "FEMALE_50" | "FEMALE_60" | "FEMALE_70" | "MALE_50" | "MALE_60" | "MALE_70";
  follower_age?: string;
  keyword_search?: string;
  sort_field?: "RELEVANCE" | "FOLLOWERS" | "MEDIAN_VIEWS" | "ENGAGEMENT_RATE";
  sort_order?: "ASC" | "DESC";
  page?: number;
  page_size?: number;
}


export interface TtoTcmCreatorDiscoverResponse {
  creators?: {
  handle_name?: string;
  display_name?: string;
  profile_image?: string;
  followers_count?: number;
  following_count?: number;
  likes_count?: number;
  videos_count?: number;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface TtoTcmBrandProfileCreateParams {
  tto_tcm_account_id: string;
  brand_name: string;
  brand_industry_id: string;
  brand_website: string;
  logo_url: string;
  tiktok_account_url?: string;
}


export interface TtoTcmBrandProfileCreateResponse {
  brand_profile_id?: string;
  brand_name?: string;
  brand_industry_id?: string;
  brand_website?: string;
  logo_url?: string;
  tiktok_account_url?: string;
}


export interface TtoTcmBrandProfileGetParams {
  tto_tcm_account_id: string;
  brand_profile_ids?: string[];
  page?: number;
  page_size?: number;
}


export interface TtoTcmBrandProfileGetResponse {
  brands?: {
  brand_profile_id?: string;
  brand_name?: string;
  brand_industry?: string;
  brand_website?: string;
  logo_url?: string;
  tiktok_account_url?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface TtoTcmCampaignCreateParams {
  tto_tcm_account_id: string;
  campaign_type?: string;
  brand_profile_id?: string;
  brand_name?: string;
  campaign_name: string;
  campaign_description?: string;
  anchor_id?: string;
  advertiser_ids?: string[];
  default_spark_ads_requested_authorization_days?: number;
  handle_names: string[];
  send_notification?: boolean;
  campaign_id?: string;
  business_account_handle?: string;
}


export interface TtoTcmCampaignCreateResponse {
  campaign_id?: string;
  brand_name?: string;
  campaign_name?: string;
  handle_names?: string[];
  campaign_description?: string;
  anchor_id?: string;
  advertiser_ids?: string[];
  spark_ads_requested_authorization_days?: number;
  invite_link?: string;
  create_time?: string;
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  brand_profile_id?: string;
  country_codes?: string[];
  failed_handle_names?: string[];
  dm_info?: string;
  business_account_handle?: string;
  dm_allowed?: boolean;
}


export interface TtoTcmCampaignUpdateParams {
  tto_tcm_account_id: string;
  campaign_id: string;
  campaign_type: "CAMPAIGN" | "BRAND_LINK";
  handle_names?: string[];
  send_notification?: boolean;
  advertiser_ids?: string[];
}


export interface TtoTcmCampaignUpdateResponse {
  campaign_id?: string;
  brand_name?: string;
  campaign_name?: string;
  handle_names?: string[];
  campaign_description?: string;
  anchor_id?: string;
  advertiser_ids?: string[];
  spark_ads_requested_authorization_days?: number;
  invite_link?: string;
  create_time?: string;
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  brand_profile_id?: string;
  country_codes?: string[];
  failed_handle_names?: string[];
}


export interface TtoTcmCampaignParams {
  tto_tcm_account_id: string;
  campaign_ids?: string[];
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  page?: number;
  page_size?: number;
}


export interface TtoTcmCampaignResponse {
  campaigns?: {
  campaign_id?: string;
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  brand_profile_id?: string;
  brand_name?: string;
  campaign_name?: string;
  handle_names?: string[];
  campaign_description?: string;
  anchor_id?: string;
  video_ids?: string[];
  advertiser_ids?: string[];
  spark_ads_requested_authorization_days?: number;
  invite_link?: string;
  create_time?: string;
  country_codes?: string[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
  dm_info?: string;
  business_account_handle?: string;
  dm_allowed?: boolean;
}


export interface TtoTcmCampaignLinkParams {
  tto_tcm_account_id: string;
  campaign_id: string;
  video_id: string;
  action: "LINK" | "REVOKE";
}


export interface TtoTcmCampaignLinkResponse {
  video_id?: string;
  status?: "IN_REVIEW" | "REVOKE";
  last_reminded_timestamp?: string;
  number_of_requests?: number;
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
}


export interface TtoTcmCampaignLinkStatusParams {
  tto_tcm_account_id: string;
  campaign_ids?: string[];
  handle_names?: string[];
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  page?: number;
  page_size?: number;
}


export interface TtoTcmCampaignLinkStatusResponse {
  video_infos?: {
  video_id?: string;
  status?: "IN_REVIEW" | "APPROVE" | "REJECTED" | "REVOKE";
  campaign_id?: string;
  last_reminded_timestamp?: string;
  number_of_requests?: number;
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  link_request_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_page?: number;
  total_number?: number;
};
}


export interface TtoTcmReportParams {
  tto_tcm_account_id: string;
  campaign_id: string;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;
}


export interface TtoTcmReportResponse {
  tto_tcm_account_id?: string;
  campaign_id?: string;
  country_code?: string;
  campaign_type?: "CAMPAIGN" | "BRAND_LINK";
  campaign_channel_type?: "STANDARD_CAMPAIGN" | "LITE_CAMPAIGN" | "API_LITE_CAMPAIGN";
  page_info?: {
  page?: number;
  page_size?: number;
  total_page?: number;
  total_number?: number;
};
  videos?: {
  video_info?: {
  create_time?: string;
  embed_url?: string;
  thumbnail_url?: string;
  video_id?: string;
  authorization_code?: string;
};
  reach_organic?: number;
  reach_paid?: number;
  video_completion_rate_organic?: number;
  video_completion_rate_paid?: number;
  average_view_time_organic?: number;
  average_view_time_paid?: number;
  organic_two_seconds_views?: number;
  paid_two_seconds_views?: number;
  organic_six_seconds_views?: number;
  paid_six_seconds_views?: number;
  audience_language_distribution?: {
  language?: string;
  percentage?: number;
}[];
  creator_info?: {
  display_name?: string;
  handle_name?: string;
};
  ad_clicks?: number;
  ad_conversions?: number;
  ad_cost?: number;
  ad_cpa?: number;
  ad_cpc?: number;
  ad_cpm?: number;
  ad_ctr?: number;
  ad_cvr?: number;
  ad_impressions?: number;
  video_views?: number;
  video_views_organic?: number;
  video_views_paid?: number;
  reach?: number;
  engagement_count?: number;
  engagement_rate?: number;
  engagement_rate_organic?: number;
  engagement_rate_paid?: number;
  video_completion_rate?: number;
  likes?: number;
  likes_organic?: number;
  likes_paid?: number;
  comments?: number;
  comments_organic?: number;
  comments_paid?: number;
  shares?: number;
  shares_organic?: number;
  shares_paid?: number;
  favorites?: number;
  favorites_organic?: number;
  favorites_paid?: number;
  total_play_time?: number;
  average_view_time?: number;
  two_seconds_views?: number;
  six_seconds_views?: number;
  video_view_retention?: string;
  video_views_by_source?: {
  for_you?: number;
  hashtag?: number;
  sound?: number;
  personal_profile?: number;
  search?: number;
  following?: number;
  other?: number;
};
  audience_genders_distribution?: {
  gender?: "FEMALE" | "MALE";
  percentage?: number;
}[];
  audience_countries_distribution?: {
  country?: string;
  percentage?: number;
}[];
  audience_age_distribution?: {
  age?: string;
  percentage?: number;
}[];
  audience_device_distribution?: {
  device?: string;
  percentage?: number;
}[];
  audience_locale_distribution?: {
  locale?: string;
  percentage?: number;
}[];
  audience_interest_distribution?: {
  interest_tag?: string;
  percentage?: number;
}[];
  anchor_id?: string;
  anchor_metrics?: {
  anchor_views?: number;
  anchor_clicks?: number;
  anchor_unique_views?: number;
  anchor_unique_clicks?: number;
};
  daily_stats?: {
  date?: string;
  views?: number;
  video_views_organic?: number;
  video_views_paid?: number;
  engagement_rate?: number;
  engagement_rate_organic?: number;
  engagement_rate_paid?: number;
  video_completion_rate?: number;
  likes?: number;
  likes_organic?: number;
  likes_paid?: number;
  comments?: number;
  comments_organic?: number;
  comments_paid?: number;
  shares?: number;
  shares_organic?: number;
  shares_paid?: number;
  favorites?: number;
  favorites_organic?: number;
  favorites_paid?: number;
}[];
}[];
}


export interface TcmTtVideoApplyParams {
  video_id: string;
  tcm_account_id: string;
  authorization_days?: number;
  action?: string;
}


export interface TcmTtVideoApplyResponse {}


export interface TcmTtVideoStatusParams {
  video_id: string;
  tcm_account_id: string;
}


export interface TcmTtVideoStatusResponse {
  video_id?: string;
  auth_status?: "WAITING" | "REJECTED" | "ACCEPTED";
  auth_status_updated_time?: string;
  num_remaining_request?: number;
  requested_authorization_days?: number;
  auth_code?: string;
  auth_code_start_time?: string;
  auth_code_end_time?: string;
  auth_code_status?: "NOT_USED" | "IN_USE" | "EXPIRED" | "DELETED";
}


export interface TtoTcmAnchorCreateParams {
  tto_tcm_account_id: string;
  anchor_type: string;
  anchor_sub_type?: string;
  category_label_id?: number;
  country_code: string;
  call_to_action: {
  landing_page_url?: string;
};
  anchor_title: string;
  anchor_name: string;
  upload_type: "UPLOAD_BY_FILE" | "UPLOAD_BY_URL";
  thumbnail_file?: File | Blob;
  thumbnail_url?: string;
}


export interface TtoTcmAnchorCreateResponse {
  anchor_id?: string;
  status?: string;
  anchor_type?: string;
  anchor_sub_type?: string;
  category_label_id?: number;
  country_code?: string;
  call_to_action?: {
  landing_page_url?: string;
};
  anchor_title?: string;
  anchor_name?: string;
  anchor_sub_title?: string;
  thumbnail_url?: string;
}


export interface TtoTcmAnchorGetParams {
  tto_tcm_account_id: string;
  anchor_ids?: string[];
  page?: number;
  page_size?: number;
}


export interface TtoTcmAnchorGetResponse {
  anchors?: {
  anchor_id?: string;
  status?: "DRAFT" | "CREATED" | "IN_REVIEW" | "APPROVED" | "REJECTED_BY_AUDIT";
  anchor_type?: string;
  anchor_sub_type?: "DESTINATION" | "ECOMMERCE" | "ENTERTAINMENT";
  country_code?: string;
  call_to_action?: {
  landing_page_url?: string;
  ios_download_link?: string;
  ios_deep_link?: string;
  android_download_link?: string;
  android_deep_link?: string;
};
  anchor_title?: string;
  anchor_name?: string;
  anchor_sub_title?: string;
  thumbnail_url?: string;
  coupon_link?: {
  discount?: number;
  coupon_url?: string;
  coupon_code?: string;
};
  pixel_id?: string;
  creator_preview_url?: string;
  advertiser_preview_url?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface TtoTcmAnchorDeleteParams {
  tto_tcm_account_id: string;
  anchor_id: string;
}


export interface TtoTcmAnchorDeleteResponse {}


export interface TtoCreatorCampaignJoinParams {
  creator_id: string;
  tto_invite_link: string;
}


export interface TtoCreatorCampaignJoinResponse {}


export interface TtoCreatorCampaignVideoLinkParams {
  creator_id: string;
  tto_invite_link: string;
  video_id: string;
}


export interface TtoCreatorCampaignVideoLinkResponse {}


export interface TtoCreatorLinkRequestGetParams {
  creator_id: string;
  tto_invite_link: string;
}


export interface TtoCreatorLinkRequestGetResponse {
  campaign_id?: string;
  spark_authorization_days?: number;
  link_requests?: {
  video_id?: string;
  link_request_id?: string;
}[];
}


export interface TtoCreatorLinkRequestConfirmParams {
  creator_id: string;
  link_request_id: string;
  action: "APPROVE" | "REJECT";
}


export interface TtoCreatorLinkRequestConfirmResponse {}
