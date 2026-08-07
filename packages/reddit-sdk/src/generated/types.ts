// Auto-generated types for the Reddit Ads API v3 — do not edit

export interface Account {

  /** Account ID (e.g., `t2_abc123`) */
  id?: string;

  name?: string;

  attribution_type?: string;

  click_attribution_window?: string;

  view_attribution_window?: string;

  currency?: string;

  status?: string;

  time_zone_id?: string;

  created_at?: string;
}

export interface AccountUpdate {

  attribution_type?: string;

  click_attribution_window?: string;

  view_attribution_window?: string;
}

export type ActionSource = string;

export interface Ad {

  id?: string;

  account_id?: string;

  campaign_id?: string;

  ad_group_id?: string;

  name?: string;

  configured_status?: ConfiguredStatus;

  effective_status?: AdEffectiveStatus;

  /** Reddit post ID (for promoted posts) */
  post_id?: string;

  click_url?: string;

  click_url_query_parameters?: string;

  preview_expiry?: string;

  delivery_status?: string;

  created_at?: string;
}

export interface AdCreate {

  ad_group_id: string;

  name: string;

  configured_status: ConfiguredStatus;

  post_id?: string;

  click_url: string;

  click_url_query_parameters?: string;

  call_to_action?: CallToAction;
}

export type AdEffectiveStatus = string;

export interface AdGroup {

  id?: string;

  account_id?: string;

  campaign_id?: string;

  name?: string;

  configured_status?: ConfiguredStatus;

  effective_status?: CampaignEffectiveStatus;

  bid_strategy?: BidStrategy;

  /** Bid amount in microcurrency */
  bid_value?: number;

  goal_type?: GoalType;

  optimization_goal?: OptimizationGoal;

  /** Pixel ID for conversion tracking (added Oct 2025) */
  conversion_pixel_id?: string;

  start_time?: string;

  end_time?: string;

  delivery_status?: string;

  targeting?: Targeting;

  created_at?: string;
}

export interface AdGroupCreate {

  campaign_id: string;

  name: string;

  configured_status: ConfiguredStatus;

  bid_strategy: BidStrategy;

  bid_value?: number;

  goal_type: GoalType;

  optimization_goal?: OptimizationGoal;

  conversion_pixel_id?: string;

  start_time: string;

  end_time?: string;

  targeting: Targeting;
}

export interface AdGroupUpdate {

  name?: string;

  configured_status?: ConfiguredStatus;

  bid_strategy?: BidStrategy;

  bid_value?: number;

  goal_type?: GoalType;

  optimization_goal?: OptimizationGoal;

  conversion_pixel_id?: string;

  start_time?: string;

  end_time?: string;

  targeting?: Targeting;
}

export interface AdUpdate {

  name?: string;

  configured_status?: ConfiguredStatus;

  click_url?: string;

  click_url_query_parameters?: string;

  call_to_action?: CallToAction;
}

export interface ApiResponse_Account {

  data?: Account;
}

export interface ApiResponse_AccountList {

  data?: Account[];
}

export interface ApiResponse_Ad {

  data?: Ad;
}

export interface ApiResponse_AdGroup {

  data?: AdGroup;
}

export interface ApiResponse_AdGroupList {

  data?: AdGroup[];
}

export interface ApiResponse_AdList {

  data?: Ad[];
}

export interface ApiResponse_BidSuggestion {

  data?: BidSuggestion;
}

export interface ApiResponse_Campaign {

  data?: Campaign;
}

export interface ApiResponse_CampaignList {

  data?: Campaign[];
}

export interface ApiResponse_CustomAudience {

  data?: CustomAudience;
}

export interface ApiResponse_CustomAudienceList {

  data?: CustomAudience[];
}

export interface ApiResponse_FundingInstrumentList {

  data?: FundingInstrument[];
}

export interface ApiResponse_GeolocationValidation {

  data?: {

  };
}

export interface ApiResponse_PixelLastFired {

  data?: {
    last_fired_at?: string;
  };
}

export interface ApiResponse_PixelList {

  data?: Pixel[];
}

export interface ApiResponse_Report {

  data?: ReportRow[];
}

export interface ApiResponse_SavedAudience {

  data?: SavedAudience;
}

export interface ApiResponse_SavedAudienceList {

  data?: SavedAudience[];
}

export interface ApiResponse_StructuredPost {

  data?: StructuredPost;
}

export interface ApiResponse_StructuredPostList {

  data?: StructuredPost[];
}

export interface ApiResponse_Success {

  data?: {
    message?: string;
  };
}

export interface ApiResponse_TargetingOptions {

  data?: {

  }[];
}

export interface ApiResponse_User {

  data?: User;
}

export type AudienceUserAction = string;

export type BidStrategy = string;

export interface BidSuggestion {

  suggested_bid?: number;

  min_bid?: number;

  max_bid?: number;
}

export interface BidSuggestionRequest {

  targeting?: Targeting;

  objective?: CampaignObjective;

  goal_type?: GoalType;
}

export type CallToAction = string;

export interface Campaign {

  id?: string;

  account_id?: string;

  name?: string;

  objective?: CampaignObjective;

  configured_status?: ConfiguredStatus;

  effective_status?: CampaignEffectiveStatus;

  funding_instrument_id?: string;

  /** Lifetime budget cap in microcurrency */
  spend_cap?: number;

  goal_type?: GoalType;

  /** Required for app campaigns (set at campaign level since May 2025) */
  app_id?: string;

  is_processing?: boolean;

  /** Invoice label (added Dec 2025) */
  invoice_label?: string;

  /** Delivery status (added Nov 2025) */
  delivery_status?: string;

  start_time?: string;

  end_time?: string;

  created_at?: string;
}

export interface CampaignCreate {

  name: string;

  objective: CampaignObjective;

  configured_status: ConfiguredStatus;

  /** Required since Jul 2024 */
  funding_instrument_id: string;

  spend_cap?: number;

  goal_type?: GoalType;

  app_id?: string;

  start_time?: string;

  end_time?: string;

  invoice_label?: string;
}

export type CampaignEffectiveStatus = string;

export type CampaignObjective = string;

export interface CampaignUpdate {

  name?: string;

  configured_status?: ConfiguredStatus;

  spend_cap?: number;

  goal_type?: GoalType;

  start_time?: string;

  end_time?: string;

  invoice_label?: string;
}

export type ConfiguredStatus = string;

export interface ConversionEvent {

  /** Event timestamp in milliseconds since epoch */
  event_at: number;

  action_source: ActionSource;

  /** Reddit click ID (`rdt_cid` value) */
  click_id?: string;

  type: ConversionEventType;

  user?: ConversionUser;

  metadata?: ConversionMetadata;
}

export interface ConversionEventsRequest {

  events: ConversionEvent[];
}

export interface ConversionEventsResponse {

  data?: {
    message?: string;
  };
}

export interface ConversionEventType {

  tracking_type: TrackingType;

  /** Required when tracking_type is CUSTOM */
  custom_event_name?: string;
}

export interface ConversionMetadata {

  item_count?: number;

  currency?: string;

  value?: number;

  value_decimal?: number;

  /** Unique ID for deduplication (recommended) */
  conversion_id?: string;

  products?: {
    id?: string;
    name?: string;
    category?: string;
  }[];
}

export interface ConversionUser {

  ip_address?: string;

  user_agent?: string;

  screen_dimensions?: {
    width?: number;
    height?: number;
  };

  /** Reddit pixel UUID */
  uuid?: string;

  /** SHA-256 hashed email (lowercase, dots removed, plus-addressing removed) */
  email?: string;

  /** SHA-256 hashed phone number */
  phone_number?: string;

  /** SHA-256 hashed external identifier */
  external_id?: string;

  /** IDFA (raw uppercase hex or SHA-256 hashed) */
  idfa?: string;

  /** AAID (raw lowercase hex or SHA-256 hashed) */
  aaid?: string;

  opt_out?: boolean;

  data_processing_options?: {
    modes?: string[];
    country?: string;
    region?: string;
  };
}

export interface CustomAudience {

  /** Audience ID (e.g., `ca.xxxxxxxxxxx`) */
  id?: string;

  name?: string;

  type?: string;

  delivery_status?: string;

  matched_user_count?: number;

  created_at?: string;
}

export interface CustomAudienceCreate {

  name: string;

  /** e.g., CUSTOMER_LIST */
  type: string;
}

export interface CustomAudienceUsersUpdate {

  users: {
    identifier_type: IdentifierType;
    identifier: string;
  }[];

  action: AudienceUserAction;
}

export interface FundingInstrument {

  id?: string;

  type?: string;

  status?: string;
}

export interface Geolocation {

  country?: string;

  region?: string;

  city?: string;

  dma?: string;

  postal_code?: string;
}

export interface GeolocationValidateRequest {

  geolocations?: Geolocation[];
}

export type GoalType = string;

export type IdentifierType = string;

export type OptimizationGoal = string;

export interface Pixel {

  id?: string;

  name?: string;

  status?: string;
}

export type ReportLevel = string;

export interface ReportRequest {

  /** Start date (YYYY-MM-DD) */
  start_date: string;

  /** End date (YYYY-MM-DD) */
  end_date: string;

  level: ReportLevel;

  /** Metrics to include. Available metrics:
- Core: impressions, reach, clicks, spend, ecpm, ctr, cpc
- Video: video_started, video_watched_3_seconds, video_watched_5_seconds,
  video_watched_25_percent, video_watched_50_percent, video_watched_75_percent,
  video_watched_100_percent, video_watched_6_seconds_rate, video_watched_15_seconds_rate
- Engagement: comments_page_views, comment_upvotes, comment_downvotes, viewer_comments
- Conversions: conversion_roas, total_items, total_value, avg_value,
  click_through_conversion_attribution_window_day/week/month,
  view_through_conversion_attribution_window_day/week/month
 */
  metrics: string[];

  /** Breakdown dimensions. Available:
date, HOUR, country, region, community, placement, device_os,
gender, interest, keyword, carousel_card, gallery_item
 */
  breakdowns?: string[];
}

export type ReportRow = Record<string, unknown>;

export interface SavedAudience {

  id?: string;

  name?: string;

  targeting?: Targeting;
}

export interface StructuredPost {

  id?: string;

  account_id?: string;

  created_at?: string;
}

export type StructuredPostCreate = Record<string, unknown>;

export interface Targeting {

  geolocations?: Geolocation[];

  /** Subreddit names (e.g., `r/technology`) */
  communities?: string[];

  interests?: string[];

  keywords?: string[];

  devices?: string[];

  carriers?: string[];

  os?: string[];

  /** Enable targeting expansion */
  expansion?: boolean;

  gender?: string;

  /** e.g., 18-24, 25-34, 35-44, 45-54, 55-64, 65+ */
  age_groups?: string[];

  custom_audience_ids?: string[];

  saved_audience_id?: string;

  excluded_communities?: string[];

  excluded_custom_audience_ids?: string[];
}

export type TrackingType = string;

export interface User {

  id?: string;

  name?: string;
}
