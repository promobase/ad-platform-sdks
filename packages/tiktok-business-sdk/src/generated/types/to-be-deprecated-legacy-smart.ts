// Auto-generated types for (To be deprecated) Legacy Smart+ — do not edit

export interface CampaignSpcQuotaGetParams {}


export interface CampaignSpcQuotaGetResponse {}


export interface CampaignSpcCreateParams {
  advertiser_id: string;
  operation_status?: string;
  objective_type: string;
  spc_type?: string;
  web_all_in_one_catalog_status?: string;
  app_promotion_type?: string;
  virtual_objective_type?: string;
  sales_destination?: string;
  campaign_type?: string;
  campaign_app_profile_page_state?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  campaign_name: string;
  special_industries?: string[];
  product_source?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  promotion_type: string;
  app_id?: string;
  promotion_website_type?: string;
  promotion_target_type?: string;
  optimization_goal: string;
  pixel_id?: string;
  optimization_event?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  vbo_window?: string;
  click_attribution_window?: string;
  engaged_view_attribution_window?: string;
  view_attribution_window?: string;
  attribution_event_count?: string;
  billing_event: string;
  location_ids: string[];
  languages?: string[];
  gender?: string;
  spc_audience_age?: string;
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  placement_type?: string;
  placements?: string[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget: number;
  schedule_type: string;
  schedule_start_time: string;
  schedule_end_time?: string;
  dayparting?: string;
  identity_type?: string;
  identity_id?: string;
  media_info_list: {
  media_info: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: string;
  tiktok_item_id?: string;
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: string;
  catalog_creative_toggle?: boolean;
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: string;
  call_to_action_list?: {
  call_to_action?: string;
}[];
  product_info?: {
  promo_info_list?: {
  discount_type?: string;
  discount_value?: number;
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: string;
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  card_list?: {
  card_id?: string;
}[];
  automatic_add_on_enabled?: boolean;
  page_list?: {
  page_id?: string;
}[];
  deeplink?: string;
  deeplink_type?: string;
  landing_page_urls?: {
  landing_page_url?: string;
  video_id?: string;
  tiktok_item_id?: string;
}[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
}


export interface CampaignSpcCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  operation_status?: string;
  campaign_secondary_status?: string;
  is_smart_performance_campaign?: boolean;
  objective_type?: string;
  spc_type?: string;
  web_all_in_one_catalog_status?: string;
  app_promotion_type?: string;
  virtual_objective_type?: string;
  sales_destination?: string;
  campaign_type?: string;
  campaign_app_profile_page_state?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: string;
  campaign_name?: string;
  special_industries?: string[];
  adgroup_secondary_status?: string;
  product_source?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  promotion_type?: string;
  app_id?: string;
  app_type?: string;
  promotion_website_type?: string;
  promotion_target_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  optimization_event?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: string;
  vbo_window?: string;
  click_attribution_window?: string;
  engaged_view_attribution_window?: string;
  view_attribution_window?: string;
  attribution_event_count?: string;
  billing_event?: string;
  location_ids?: string[];
  languages?: string[];
  gender?: string;
  spc_audience_age?: string;
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  placement_type?: string;
  placements?: string[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: string;
  category_exclusion_ids?: string[];
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  scheduled_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  skip_learning_phase?: boolean;
  identity_id?: string;
  identity_type?: string;
  app_download_url?: string;
  app_name?: string;
  media_info_list?: {
  media_info?: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: string;
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: string;
  catalog_creative_toggle?: boolean;
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: string;
  call_to_action_list?: {
  call_to_action?: string;
}[];
  product_info?: {
  promo_info_list?: {
  discount_type?: string;
  discount_value?: string;
  discount_currency?: string;
  minimum_purchase_type?: string;
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  card_list?: {
  card_id?: string;
}[];
  automatic_add_on_enabled?: boolean;
  page_list?: {
  page_id?: string;
}[];
  deeplink?: string;
  deeplink_type?: string;
  landing_page_urls?: {
  landing_page_url?: string;
  video_id?: string;
  tiktok_item_id?: string;
}[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
  create_time?: string;
  modify_time?: string;
};
}


export interface CampaignSpcUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_name?: string;
  special_industries?: string[];
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  bid_price?: number;
  conversion_bid_price?: number;
  roas_bid?: number;
  location_ids?: string[];
  languages?: string[];
  gender?: string;
  spc_audience_age?: string;
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  budget_auto_adjust_strategy?: string;
  budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  identity_id?: string;
  media_info_list?: {
  media_info?: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: string;
  tiktok_item_id?: string;
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: string;
  catalog_creative_toggle?: boolean;
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: string;
  call_to_action_list?: {
  call_to_action?: string;
}[];
  product_info?: {
  promo_info_list?: {
  discount_type?: string;
  discount_value?: number;
  discount_currency?: string;
  promo_code?: string;
  minimum_purchase_type?: string;
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  card_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  deeplink_type?: string;
  deeplink?: string;
  landing_page_urls?: {
  landing_page_url?: string;
  video_id?: string;
  tiktok_item_id?: string;
}[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}


export interface CampaignSpcUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  operation_status?: string;
  campaign_secondary_status?: string;
  is_smart_performance_campaign?: boolean;
  objective_type?: string;
  spc_type?: string;
  web_all_in_one_catalog_status?: string;
  app_promotion_type?: string;
  virtual_objective_type?: string;
  sales_destination?: string;
  campaign_type?: string;
  campaign_app_profile_page_state?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: string;
  campaign_name?: string;
  special_industries?: string[];
  adgroup_secondary_status?: string;
  product_source?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  promotion_type?: string;
  app_id?: string;
  app_type?: string;
  promotion_website_type?: string;
  promotion_target_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  optimization_event?: string;
  app_config?: {
  app_id?: string;
}[];
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  bid_type?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  deep_bid_type?: string;
  roas_bid?: number;
  incentive_offer_type?: string;
  vbo_window?: string;
  click_attribution_window?: string;
  engaged_view_attribution_window?: string;
  view_attribution_window?: string;
  attribution_event_count?: string;
  billing_event?: string;
  location_ids?: string[];
  languages?: string[];
  gender?: string;
  spc_audience_age?: string;
  exclude_age_under_eighteen?: boolean;
  excluded_audience_ids?: string[];
  placement_type?: string;
  placements?: string[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: string;
  category_exclusion_ids?: string[];
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  scheduled_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  skip_learning_phase?: boolean;
  identity_id?: string;
  identity_type?: string;
  app_download_url?: string;
  app_name?: string;
  media_info_list?: {
  media_info?: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  aigc_disclosure_type?: string;
  tiktok_item_id?: string;
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  dark_post_status?: string;
  catalog_creative_toggle?: boolean;
  title_list?: {
  title?: string;
}[];
  call_to_action_id?: string;
  call_to_action_list?: {
  call_to_action?: string;
}[];
  product_info?: {
  promo_info_list?: {
  discount_type?: string;
  discount_value?: string;
  discount_currency?: string;
  minimum_purchase_type?: string;
  minimum_purchase_value?: number;
  minimum_purchase_currency?: string;
  valid_start_time?: string;
  valid_end_time?: string;
}[];
};
  card_list?: {
  card_id?: string;
}[];
  automatic_add_on_enabled?: boolean;
  page_list?: {
  page_id?: string;
}[];
  deeplink?: string;
  deeplink_type?: string;
  landing_page_urls?: {
  landing_page_url?: string;
  video_id?: string;
  tiktok_item_id?: string;
}[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  disclaimer_info?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  tracking_app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
  create_time?: string;
  modify_time?: string;
};
}


export interface CampaignSpcMaterialStatusUpdateParams {}


export interface CampaignSpcMaterialStatusUpdateResponse {}

