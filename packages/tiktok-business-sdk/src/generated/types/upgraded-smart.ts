// Auto-generated types for Upgraded Smart+ — do not edit

export interface SmartPlusCampaignGetParams {
  advertiser_id: string;
  fields?: string[];
  page?: number;
  page_size?: number;
  filtering?: {
  campaign_ids?: string[];
  campaign_name?: string;
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  sales_destination?: string;
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
};
}


export interface SmartPlusCampaignGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: string;
  sales_destination?: string;
  campaign_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: string;
  campaign_app_profile_page_state?: string;
  catalog_enabled?: boolean;
  catalog_type?: string;
  campaign_name?: string;
  special_industries?: string[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  operation_status?: string;
  secondary_status?: string;
  smart_plus_adgroup_mode?: string;
  postback_window_mode?: string;
  po_number?: string;
  is_promotional_campaign?: boolean;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface SmartPlusCampaignCreateParams {
  advertiser_id: string;
  request_id: string;
  operation_status?: string;
  objective_type: string;
  app_promotion_type?: string;
  sales_destination?: string;
  catalog_enabled?: boolean;
  catalog_type?: string;
  campaign_type?: string;
  is_promotional_campaign?: boolean;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  campaign_app_profile_page_state?: string;
  disable_skan_campaign?: boolean;
  campaign_name: string;
  special_industries?: string[];
  budget_optimize_on?: boolean;
  budget_mode?: boolean;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  postback_window_mode?: string;
  po_number?: string;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
}


export interface SmartPlusCampaignCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: string;
  sales_destination?: string;
  campaign_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: string;
  campaign_app_profile_page_state?: string;
  catalog_enabled?: boolean;
  catalog_type?: string;
  campaign_name?: string;
  special_industries?: string[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  operation_status?: string;
  secondary_status?: string;
  smart_plus_adgroup_mode?: string;
  postback_window_mode?: string;
  po_number?: string;
  is_promotional_campaign?: boolean;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
};
}


export interface SmartPlusCampaignUpdateParams {
  advertiser_id: string;
  campaign_id: string;
  campaign_name?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  po_number?: string;
}


export interface SmartPlusCampaignUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  create_time?: string;
  modify_time?: string;
  objective_type?: string;
  app_promotion_type?: string;
  sales_destination?: string;
  campaign_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  is_advanced_dedicated_campaign?: boolean;
  disable_skan_campaign?: boolean;
  bid_align_type?: string;
  campaign_app_profile_page_state?: string;
  catalog_enabled?: boolean;
  catalog_type?: string;
  campaign_name?: string;
  special_industries?: string[];
  budget_optimize_on?: boolean;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  operation_status?: string;
  secondary_status?: string;
  smart_plus_adgroup_mode?: string;
  postback_window_mode?: string;
  po_number?: string;
  is_promotional_campaign?: boolean;
  rta_id?: string;
  rta_bid_enabled?: boolean;
  rta_product_selection_enabled?: boolean;
};
}


export interface SmartPlusCampaignStatusUpdateParams {
  advertiser_id: string;
  campaign_ids: string[];
  operation_status: string;
  postback_window_mode?: string;
}


export interface SmartPlusCampaignStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  campaign_list?: {
  campaign_id?: string;
  status?: string;
  postback_window_mode?: string;
}[];
  error_list?: {
  campaign_id?: string;
  error_message?: string;
}[];
};
}


export interface SmartPlusAdgroupGetParams {
  advertiser_id: string;
  fields?: string[];
  filtering?: {
  campaign_ids?: string[];
  adgroup_ids?: string[];
  adgroup_name?: string;
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  sales_destination?: string;
  promotion_type?: string;
  optimization_goal?: string;
};
  page?: number;
  page_size?: number;
}


export interface SmartPlusAdgroupGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  promotion_website_type?: string;
  promotion_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  messaging_app_type?: string;
  zalo_id_type?: string;
  messaging_app_account_id?: string;
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
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
  pacing?: string;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  min_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  app_targeting_type?: string;
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: string;
  languages?: string[];
  operating_systems?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  audience_ids?: string[];
  shopping_ads_retargeting_type?: string;
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: string;
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: string;
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: string;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: string;
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  smart_audience_enabled?: boolean;
  spending_power?: string;
  household_income?: string[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: string;
  category_exclusion_ids?: string[];
};
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: string[];
  placements?: string[];
  search_result_enabled?: boolean;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface SmartPlusAdgroupCreateParams {
  advertiser_id: string;
  request_id: string;
  campaign_id: string;
  operation_status?: string;
  adgroup_name: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type: string;
  promotion_target_type?: string;
  optimization_goal: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  messaging_app_type?: string;
  zalo_id_type?: string;
  messaging_app_account_id?: string;
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  bid_type: string;
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
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec: {
  app_targeting_type?: string;
  location_ids?: string[];
  zipcode_ids?: string[];
  languages?: string[];
  operating_systems?: string[];
  spc_audience_age?: string;
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  audience_ids?: string[];
  shopping_ads_retargeting_type?: string;
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: string;
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: string;
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: string;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: string;
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  smart_audience_enabled?: boolean;
  spending_power?: string;
  household_income?: string[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
};
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  min_budget?: number;
  schedule_type: string;
  schedule_start_time: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: string;
  placements?: string[];
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
}


export interface SmartPlusAdgroupCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  promotion_website_type?: string;
  promotion_target_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  messaging_app_type?: string;
  zalo_id_type?: string;
  messaging_app_account_id?: string;
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
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
  pacing?: string;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  min_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  app_targeting_type?: string;
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: string;
  languages?: string[];
  operating_systems?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  audience_ids?: string[];
  shopping_ads_retargeting_type?: string;
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: string;
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: string;
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: string;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: string;
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  smart_audience_enabled?: boolean;
  spending_power?: string;
  household_income?: string[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: string;
  category_exclusion_ids?: string[];
};
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: string[];
  placements?: string[];
  search_result_enabled?: boolean;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
};
}


export interface SmartPlusAdgroupUpdateParams {
  advertiser_id: string;
  adgroup_id: string;
  adgroup_name?: string;
  bid_price?: number;
  conversion_bid_price?: number;
  roas_bid?: number;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  dayparting?: string;
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: string;
  languages?: string[];
  operating_systems?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  audience_ids?: string[];
  shopping_ads_retargeting_type?: string;
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: string;
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: string;
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: string;
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: string;
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  smart_audience_enabled?: boolean;
  spending_power?: string;
  household_income?: string[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
};
  budget_auto_adjust_strategy?: string;
  budget?: number;
}


export interface SmartPlusAdgroupUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  promotion_type?: string;
  app_id?: string;
  gaming_ad_compliance_agreement?: string;
  promotion_website_type?: string;
  promotion_target_type?: string;
  optimization_goal?: string;
  pixel_id?: string;
  app_config?: {
  app_id?: string;
}[];
  minis_id?: string;
  optimization_event?: string;
  custom_conversion_id?: string;
  deep_funnel_optimization_status?: string;
  deep_funnel_event_source?: string;
  deep_funnel_event_source_id?: string;
  deep_funnel_optimization_event?: string;
  identity_id?: string;
  identity_type?: string;
  identity_authorized_bc_id?: string;
  messaging_app_type?: string;
  zalo_id_type?: string;
  messaging_app_account_id?: string;
  message_event_set_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
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
  pacing?: string;
  budget_mode?: string;
  budget_auto_adjust_strategy?: string;
  budget?: number;
  current_budget?: number;
  min_budget?: number;
  schedule_type?: string;
  schedule_start_time?: string;
  schedule_end_time?: string;
  movie_premiere_date?: string;
  dayparting?: string;
  targeting_optimization_mode?: string;
  suggestion_audience_enabled?: boolean;
  targeting_spec?: {
  app_targeting_type?: string;
  location_ids?: string[];
  zipcode_ids?: string[];
  spc_audience_age?: string;
  languages?: string[];
  operating_systems?: string[];
  excluded_audience_ids?: string[];
  age_groups?: string[];
  gender?: string;
  audience_ids?: string[];
  shopping_ads_retargeting_type?: string;
  shopping_ads_retargeting_actions_days?: number;
  included_custom_actions?: {
  code?: string;
  days?: number;
}[];
  excluded_custom_actions?: {
  code?: string;
  days?: number;
}[];
  shopping_ads_retargeting_custom_audience_relation?: string;
  included_pangle_audience_package_ids?: string[];
  excluded_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  purchase_intention_keyword_ids?: string[];
  actions?: {
  action_scene?: string;
  action_period?: number;
  video_user_actions?: string[];
  action_category_ids?: string[];
}[];
  smart_interest_behavior_enabled?: boolean;
  smart_audience_enabled?: boolean;
  spending_power?: string;
  household_income?: string[];
  min_android_version?: string;
  min_ios_version?: string;
  device_model_ids?: string[];
  network_types?: string[];
  carrier_ids?: string[];
  isp_ids?: string[];
  device_price_ranges?: number[];
  saved_audience_id?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: string;
  category_exclusion_ids?: string[];
};
  is_hfss?: boolean;
  is_lhf_compliance?: boolean;
  placement_type?: string[];
  placements?: string[];
  search_result_enabled?: boolean;
  comment_disabled?: boolean;
  share_disabled?: boolean;
  video_download_disabled?: boolean;
  skip_learning_phase?: boolean;
  create_time?: string;
  modify_time?: string;
};
}


export interface SmartPlusAdgroupStatusUpdateParams {
  advertiser_id: string;
  adgroup_ids: string[];
  operation_status: string;
}


export interface SmartPlusAdgroupStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  adgroup_list?: {
  adgroup_id?: string;
  status?: string;
}[];
  error_list?: {
  adgroup_id?: string;
  error_message?: string;
}[];
};
}


export interface SmartPlusAdgroupBudgetUpdateParams {
  advertiser_id: string;
  budget?: {
  adgroup_id?: string;
  budget?: number;
}[];
  scheduled_budget?: {
  adgroup_id?: string;
  scheduled_budget?: number;
}[];
}


export interface SmartPlusAdgroupBudgetUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface SmartPlusAdGetParams {
  advertiser_id: string;
  fields?: string[];
  filtering?: {
  campaign_ids?: string[];
  adgroup_ids?: string[];
  smart_plus_ad_ids?: string[];
  primary_status?: string;
  secondary_status?: string;
  objective_type?: string;
  sales_destination?: string;
  optimization_goal?: string;
  creation_filter_start_time?: string;
  creation_filter_end_time?: string;
  modified_after?: string;
};
  page?: number;
  page_size?: number;
}


export interface SmartPlusAdGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: string;
  secondary_status?: string;
  create_time?: string;
  modify_time?: string;
  creative_list?: {
  ad_material_id?: string;
  material_operation_status?: string;
  creative_info?: {
  ad_format?: string;
  material_name?: string;
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
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  disclaimer?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
  creative_auto_enhancement_strategy_list?: string[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: string;
  product_display_field_list?: string[];
  auto_disclaimer_types?: string[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: string[];
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
  product_info_enabled?: string;
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
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


export interface SmartPlusAdCreateParams {
  advertiser_id: string;
  adgroup_id: string;
  ad_name?: string;
  operation_status?: string;
  creative_list: {
  creative_info: {
  ad_format: string;
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
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: Record<string, unknown>;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  disclaimer?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
  creative_auto_enhancement_strategy_list?: string[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: string;
  product_display_field_list?: string[];
  auto_disclaimer_types?: string[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: string[];
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
  product_info_enabled?: string;
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
};
}


export interface SmartPlusAdCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: string;
  secondary_status?: string;
  create_time?: string;
  modify_time?: string;
  creative_list?: {
  ad_material_id?: string;
  material_operation_status?: string;
  creative_info?: {
  ad_format?: string;
  material_name?: string;
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
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  disclaimer?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
  creative_auto_enhancement_strategy_list?: string[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: string;
  product_display_field_list?: string[];
  auto_disclaimer_types?: string[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: string[];
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
  product_info_enabled?: string;
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
};
};
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SmartPlusAdUpdateParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  ad_name?: string;
  creative_list?: {
  creative_info?: {
  ad_format?: string;
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
  ad_text_list?: {
  ad_text?: string;
}[];
  call_to_action_list?: {
  call_to_action?: Record<string, unknown>;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  disclaimer?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
  creative_auto_enhancement_strategy_list?: string[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: string;
  auto_disclaimer_types?: string[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: string[];
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
  product_info_enabled?: string;
  call_to_action_id?: string;
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
};
};
}


export interface SmartPlusAdUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  advertiser_id?: string;
  campaign_id?: string;
  campaign_name?: string;
  adgroup_id?: string;
  adgroup_name?: string;
  smart_plus_ad_id?: string;
  ad_name?: string;
  operation_status?: string;
  secondary_status?: string;
  create_time?: string;
  modify_time?: string;
  creative_list?: {
  ad_material_id?: string;
  material_operation_status?: string;
  creative_info?: {
  ad_format?: string;
  material_name?: string;
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
  ad_text_list?: {
  ad_text?: string;
}[];
  auto_message_list?: {
  auto_message_id?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  interactive_add_on_list?: {
  card_id?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  landing_page_url_list?: {
  landing_page_url?: string;
}[];
  custom_product_page_list?: {
  custom_product_page_url?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  disclaimer?: {
  disclaimer_type?: string;
  disclaimer_text?: {
  text?: string;
};
  disclaimer_clickable_texts?: {
  text?: string;
  url?: string;
}[];
};
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  dark_post_status?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
  creative_auto_add_toggle?: boolean;
  creative_auto_enhancement_strategy_list?: string[];
  deeplink_utm_params?: {
  key?: string;
  value?: string;
}[];
  end_card_cta?: string;
  product_display_field_list?: string[];
  auto_disclaimer_types?: string[];
  utm_params?: {
  key?: string;
  value?: string;
}[];
  fallback_type?: string;
  product_info?: {
  product_titles?: string[];
  product_image_list?: {
  web_uri?: string;
}[];
  selling_points?: string[];
  catalog_tag_list?: string[];
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
  product_info_enabled?: string;
  call_to_action_id?: string;
  phone_info?: {
  phone_region_code?: string;
  phone_region_calling_code?: string;
  phone_number?: string;
};
  tracking_info?: {
  impression_tracking_url?: string;
  click_tracking_url?: string;
  tracking_app_id?: string;
  tracking_pixel_id?: string;
  tracking_offline_event_set_ids?: string[];
  tracking_message_event_set_id?: string;
  app_tracking_info_list?: {
  app_type?: string;
  app_id?: string;
  impression_tracking_url?: string;
  click_tracking_url?: string;
}[];
};
};
};
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SmartPlusAdStatusUpdateParams {
  advertiser_id: string;
  smart_plus_ad_ids: string[];
  operation_status: string;
}


export interface SmartPlusAdStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  smart_plus_ad_ids?: string[];
  status?: string;
};
}


export interface SmartPlusAdMaterialStatusUpdateParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  ad_material_ids: string[];
  operation_status: string;
}


export interface SmartPlusAdMaterialStatusUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  smart_plus_ad_id?: string[];
  ad_material_ids?: string[];
  material_status?: string;
};
}


export interface SmartPlusAdPreviewParams {
  advertiser_id: string;
  preview_type: string;
  catalog_enabled?: boolean;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  creative_list: {
  creative_info: {
  video_info?: {
  video_id?: string;
};
  image_info?: {
  web_uri?: string;
}[];
  music_info?: {
  music_id?: string;
};
  tiktok_item_id?: string;
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
};
}[];
  ad_text_list?: {
  ad_text?: string;
}[];
  call_to_action_list?: {
  call_to_action?: Record<string, unknown>;
}[];
  ad_configuration?: {
  identity_type?: string;
  identity_id?: string;
  identity_authorized_bc_id?: string;
  product_specific_type?: string;
  product_set_id?: string;
  product_ids?: string[];
  catalog_creative_toggle?: boolean;
  catalog_creative_info?: {
  catalog_media_settings?: string[];
  catalog_template_video_id?: string;
};
};
}


export interface SmartPlusAdPreviewResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  preview_link?: string;
  iframe?: string;
};
}


export interface SmartPlusAdReviewInfoParams {
  advertiser_id: string;
  smart_plus_ad_ids: string[];
  lang?: string;
  extra_info_setting?: {
  include_reject_info?: boolean;
  include_violation_frame?: boolean;
};
}


export interface SmartPlusAdReviewInfoResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  smart_plus_ad_review_infos?: {
  smart_plus_ad_id?: string;
  review_status?: string;
  passed_locations?: string[];
  appeal_status?: string;
  appeal_reject_reasons?: string[];
  reject_info?: {
  reasons?: string[];
  suggestion?: string;
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  content_type?: string;
  text_content?: string;
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  carousel_music_info?: {
  music_id?: string;
};
};
  violation_frames?: {
  type?: string;
  video_id?: string;
  web_url_list?: string[];
  violation_frame_material_type?: string;
}[];
  specification?: string;
  video_violation_frames?: {
  web_url?: string;
  hover_periods?: string[];
  thumbnail_periods?: string[];
}[];
}[];
}[];
  material_review_infos?: {
  ad_material_id?: string;
  smart_plus_ad_id?: string;
  review_status?: string;
  passed_locations?: string[];
  reject_info?: {
  reasons?: string[];
  suggestion?: string;
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  content_type?: string;
  text_content?: string;
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  carousel_music_info?: {
  music_id?: string;
};
};
  violation_frames?: {
  type?: string;
  video_id?: string;
  web_url_list?: string[];
  violation_frame_material_type?: string;
}[];
  specification?: string;
  video_violation_frames?: {
  web_url?: string;
  hover_periods?: string[];
  thumbnail_periods?: string[];
}[];
}[];
}[];
};
}


export interface SmartPlusMaterialReviewInfoParams {
  advertiser_id: string;
  ad_material_ids: string[];
  lang?: string;
  extra_info_setting?: {
  include_reject_info?: boolean;
  include_violation_frame?: boolean;
};
}


export interface SmartPlusMaterialReviewInfoResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  material_review_infos?: {
  ad_material_id?: string;
  smart_plus_ad_id?: string;
  passed_locations?: string[];
  review_status?: string;
  reject_info?: {
  reasons?: string[];
  suggestion?: string;
  forbidden_ages?: string[];
  forbidden_locations?: string[];
  forbidden_placements?: string[];
  content_info?: {
  content_type?: string;
  text_content?: string;
  image_content?: {
  image_id?: string;
};
  video_content?: {
  video_id?: string;
};
  carousel_music_info?: {
  music_id?: string;
};
};
  violation_frames?: {
  type?: string;
  video_id?: string;
  web_url_list?: string[];
  violation_frame_material_type?: string;
}[];
  specification?: string;
  video_violation_frames?: {
  web_url?: string;
  hover_periods?: string[];
  thumbnail_periods?: string[];
}[];
}[];
}[];
};
}


export interface SmartPlusAdAppealParams {
  advertiser_id: string;
  smart_plus_ad_id: string;
  appeal_reason?: string;
  attachment_list?: string[];
}


export interface SmartPlusAdAppealResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}

