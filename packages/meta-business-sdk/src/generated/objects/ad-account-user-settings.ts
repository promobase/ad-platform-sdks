import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";
import type { UserFields } from "./user.ts";

export interface AdAccountUserSettingsFields {
  acf_should_opt_out_video_adjustments: boolean;
  aco_sticky_settings: Record<string, string>[];
  actions_quick_view_created: boolean;
  active_ads_quick_view_created: boolean;
  ad_account: AdAccountFields;
  ad_object_export_format: string;
  ads_manager_footer_row_toast_impressions: number;
  auto_review_video_caption: boolean;
  budget_optimization_quick_view_created: boolean;
  campaign_overview_columns: string[];
  column_suggestion_status: string;
  conditional_formatting_rules: string[];
  default_account_overview_agegender_metrics: string[];
  default_account_overview_location_metrics: string[];
  default_account_overview_metrics: string[];
  default_account_overview_time_metrics: string[];
  default_builtin_column_preset: string;
  default_nam_time_range: string;
  draft_mode_enabled: boolean;
  export_deleted_items_with_delivery: boolean;
  export_summary_row: boolean;
  had_delivery_quick_view_created: boolean;
  has_seen_groups_column_flexing_experience: boolean;
  has_seen_instagram_column_flexing_experience: boolean;
  has_seen_leads_column_flexing_experience: boolean;
  has_seen_shops_ads_metrics_onboarding_tour: boolean;
  has_seen_shops_column_flexing_experience: boolean;
  has_used_quick_views_panel: boolean;
  hidden_optimization_tips: Record<string, boolean>[];
  high_performing_quick_view_created: boolean;
  id: string;
  is_3p_auth_setting_set: boolean;
  is_ads_manager_footer_row_preference_set: boolean;
  is_ads_manager_footer_row_shown: boolean;
  last_used_columns: Record<string, unknown>;
  last_used_pe_filters: Record<string, unknown>[];
  last_used_website_urls: string[];
  outlier_preferences: Record<string, unknown>;
  pinned_ad_object_ids: string[];
  rb_export_format: string;
  rb_export_raw_data: boolean;
  rb_export_summary_row: boolean;
  recently_used_quick_views: string[];
  saip_advertiser_setup_optimisation_guidance_overall_state: string;
  saip_advertiser_setup_optimisation_guidance_state: Record<string, string>[];
  shops_ads_metrics_onboarding_tour_close_count: number;
  shops_ads_metrics_onboarding_tour_last_action_time: string;
  should_default_image_auto_crop: boolean;
  should_default_image_auto_crop_for_tail: boolean;
  should_default_image_auto_crop_optimization: boolean;
  should_default_image_dof_toggle: boolean;
  should_default_image_lpp_ads_to_square: boolean;
  should_default_instagram_profile_card_optimization: boolean;
  should_default_text_swapping_optimization: boolean;
  should_logout_of_3p_sourcing: boolean;
  should_show_shops_ads_metrics_onboarding_tour: boolean;
  show_archived_data: boolean;
  syd_campaign_trends_activemetric: string;
  syd_campaign_trends_attribution: string;
  syd_campaign_trends_metrics: string[];
  syd_campaign_trends_objective: string;
  syd_campaign_trends_time_range: string;
  syd_landing_page_opt_in_status: string;
  text_gen_persona_opt_in_type: string;
  text_variations_hl_opt_in_out_ts: string;
  text_variations_hl_opt_in_type: string;
  text_variations_opt_in_out_ts: string;
  text_variations_opt_in_type: string;
  user: UserFields;
  value_optimized_qv_created: boolean;
  value_qv_nux_impressions: number;
  value_suggested_column_status: string;
}

export function adAccountUserSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdAccountUserSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdAccountUserSettingsFields, F[number]>>(`${id}`, opts),
  };
}

