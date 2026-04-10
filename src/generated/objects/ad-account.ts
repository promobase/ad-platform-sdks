import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdFields } from "./ad.ts";
import type { AdAccountAdRulesHistoryFields } from "./ad-account-ad-rules-history.ts";
import type { AdAccountAdVolumeFields } from "./ad-account-ad-volume.ts";
import type { AdAccountBusinessConstraintsFields } from "./ad-account-business-constraints.ts";
import type { AdAccountDeliveryEstimateFields } from "./ad-account-delivery-estimate.ts";
import type { AdAccountDsaRecommendationsFields } from "./ad-account-dsa-recommendations.ts";
import type { AdAccountIosFourteenCampaignLimitsFields } from "./ad-account-ios-fourteen-campaign-limits.ts";
import type { AdAccountMarketingMessagesSettingsFields } from "./ad-account-marketing-messages-settings.ts";
import type { AdAccountMatchedSearchApplicationsEdgeDataFields } from "./ad-account-matched-search-applications-edge-data.ts";
import type { AdAccountMaxBidFields } from "./ad-account-max-bid.ts";
import type { AdAccountPromotableObjectsFields } from "./ad-account-promotable-objects.ts";
import type { AdAccountReachEstimateFields } from "./ad-account-reach-estimate.ts";
import type { AdAccountRecommendationsFields } from "./ad-account-recommendations.ts";
import type { AdAccountSubscribedAppsFields } from "./ad-account-subscribed-apps.ts";
import type { AdAccountTargetingUnifiedFields } from "./ad-account-targeting-unified.ts";
import type { AdAccountTrackingDataFields } from "./ad-account-tracking-data.ts";
import type { AdAccountUserFields } from "./ad-account-user.ts";
import type { AdActivityFields } from "./ad-activity.ts";
import type { AdAsyncRequestSetFields } from "./ad-async-request-set.ts";
import type { AdCreativeFields } from "./ad-creative.ts";
import type { AdCreativeObjectStorySpecFields } from "./ad-creative-object-story-spec.ts";
import type { AdImageFields } from "./ad-image.ts";
import type { AdLabelFields } from "./ad-label.ts";
import type { AdPlacePageSetFields } from "./ad-place-page-set.ts";
import type { AdPreviewFields } from "./ad-preview.ts";
import type { AdReportRunFields } from "./ad-report-run.ts";
import type { AdRuleFields } from "./ad-rule.ts";
import type { AdSavedKeywordsFields } from "./ad-saved-keywords.ts";
import type { AdSetFields } from "./ad-set.ts";
import type { AdStudyFields } from "./ad-study.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { AdsConversionGoalFields } from "./ads-conversion-goal.ts";
import type { AdsInsightsFields } from "./ads-insights.ts";
import type { AdsMcmeConversionFields } from "./ads-mcme-conversion.ts";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { AdsReportBuilderMMMReportFields } from "./ads-report-builder-mmm-report.ts";
import type { AdsReportBuilderMMMReportSchedulerFields } from "./ads-report-builder-mmm-report-scheduler.ts";
import type { AdsValueAdjustmentRuleCollectionFields } from "./ads-value-adjustment-rule-collection.ts";
import type { AgencyClientDeclarationFields } from "./agency-client-declaration.ts";
import type { ApplicationFields } from "./application.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { AsyncRequestFields } from "./async-request.ts";
import type { AttributionSpecFields } from "./attribution-spec.ts";
import type { AudienceFunnelFields } from "./audience-funnel.ts";
import type { BroadTargetingCategoriesFields } from "./broad-targeting-categories.ts";
import type { BusinessFields } from "./business.ts";
import type { BusinessOwnedObjectOnBehalfOfRequestFields } from "./business-owned-object-on-behalf-of-request.ts";
import type { BusinessProjectFields } from "./business-project.ts";
import type { CRMAddressFields } from "./crm-address.ts";
import type { CampaignFields } from "./campaign.ts";
import type { CloudGameFields } from "./cloud-game.ts";
import type { CustomAudienceFields } from "./custom-audience.ts";
import type { CustomAudienceGroupFields } from "./custom-audience-group.ts";
import type { CustomAudiencesTOSFields } from "./custom-audiences-tos.ts";
import type { CustomConversionFields } from "./custom-conversion.ts";
import type { DeliveryCheckFields } from "./delivery-check.ts";
import type { ExtendedCreditInvoiceGroupFields } from "./extended-credit-invoice-group.ts";
import type { FundingSourceDetailsFields } from "./funding-source-details.ts";
import type { GroupFields } from "./group.ts";
import type { IGUserFields } from "./ig-user.ts";
import type { MessageDeliveryEstimateFields } from "./message-delivery-estimate.ts";
import type { MinimumBudgetFields } from "./minimum-budget.ts";
import type { PageFields } from "./page.ts";
import type { PlayableContentFields } from "./playable-content.ts";
import type { PublisherBlockListFields } from "./publisher-block-list.ts";
import type { ReachFrequencyPredictionFields } from "./reach-frequency-prediction.ts";
import type { ReachFrequencySpecFields } from "./reach-frequency-spec.ts";
import type { SavedAudienceFields } from "./saved-audience.ts";
import type { TargetingFields } from "./targeting.ts";
import type { TargetingSentenceLineFields } from "./targeting-sentence-line.ts";

export interface AdAccountFields {
  account_id: string;
  account_status: number;
  ad_account_promotable_objects: AdAccountPromotableObjectsFields;
  age: number;
  agency_client_declaration: AgencyClientDeclarationFields;
  all_capabilities: string[];
  amount_spent: string;
  attribution_spec: AttributionSpecFields[];
  balance: string;
  brand_safety_content_filter_levels: string[];
  business: BusinessFields;
  business_city: string;
  business_country_code: string;
  business_name: string;
  business_state: string;
  business_street: string;
  business_street2: string;
  business_zip: string;
  capabilities: string[];
  created_time: string;
  currency: string;
  custom_audience_info: CustomAudienceGroupFields;
  default_dsa_beneficiary: string;
  default_dsa_payor: string;
  disable_reason: number;
  end_advertiser: string;
  end_advertiser_name: string;
  existing_customers: string[];
  expired_funding_source_details: FundingSourceDetailsFields;
  extended_credit_invoice_group: ExtendedCreditInvoiceGroupFields;
  failed_delivery_checks: DeliveryCheckFields[];
  fb_entity: number;
  funding_source: string;
  funding_source_details: FundingSourceDetailsFields;
  has_migrated_permissions: boolean;
  has_page_authorized_adaccount: boolean;
  id: string;
  io_number: string;
  is_attribution_spec_system_default: boolean;
  is_ba_skip_delayed_eligible: boolean;
  is_direct_deals_enabled: boolean;
  is_in_3ds_authorization_enabled_market: boolean;
  is_notifications_enabled: boolean;
  is_personal: number;
  is_prepay_account: boolean;
  is_tax_id_required: boolean;
  liable_address: CRMAddressFields;
  line_numbers: number[];
  marketing_messages_settings: AdAccountMarketingMessagesSettingsFields;
  media_agency: string;
  min_campaign_group_spend_cap: string;
  min_daily_budget: number;
  name: string;
  offsite_clo_signal_status: number;
  offsite_pixels_tos_accepted: boolean;
  opportunity_score: number;
  owner: string;
  owner_business: BusinessFields;
  partner: string;
  rf_spec: ReachFrequencySpecFields;
  send_bill_to_address: CRMAddressFields;
  show_checkout_experience: boolean;
  sold_to_address: CRMAddressFields;
  spend_cap: string;
  tax_id: string;
  tax_id_status: number;
  tax_id_type: string;
  timezone_id: number;
  timezone_name: string;
  timezone_offset_hours_utc: number;
  tos_accepted: Record<string, number>;
  user_access_expire_time: string;
  user_tasks: string[];
  user_tos_accepted: Record<string, number>;
  viewable_business: BusinessFields;
}

export interface AdAccountCreateAccountControlsParams {
  audience_controls: Record<string, unknown>;
  placement_controls?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountListActivitiesParams {
  add_children?: boolean;
  after?: string;
  business_id?: string;
  category?: string;
  data_source?: string;
  extra_oids?: string[];
  limit?: number;
  oid?: string;
  since?: string;
  uid?: number;
  until?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAdPlacePageSetsParams {
  location_types?: string[];
  name: string;
  parent_page: string;
  targeted_area_type?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAdPlacePageSetsAsyncParams {
  location_types?: string[];
  name: string;
  parent_page: string;
  targeted_area_type?: string;
  [key: string]: unknown;
}

export interface AdAccountListAdSavedKeywordsParams {
  fields?: string[];
  [key: string]: unknown;
}

export interface AdAccountCreateAdcreativesParams {
  actor_id?: number;
  ad_disclaimer_spec?: Record<string, unknown>;
  adlabels?: Record<string, unknown>[];
  applink_treatment?: string;
  asset_feed_spec?: Record<string, unknown>;
  authorization_category?: string;
  body?: string;
  branded_content?: Record<string, unknown>;
  branded_content_sponsor_page_id?: string;
  bundle_folder_id?: string;
  call_to_action?: Record<string, unknown>;
  categorization_criteria?: string;
  category_media_source?: string;
  contextual_multi_ads?: Record<string, unknown>;
  creative_sourcing_spec?: Record<string, unknown>;
  degrees_of_freedom_spec?: Record<string, unknown>;
  destination_set_id?: string;
  destination_spec?: Record<string, unknown>;
  dynamic_ad_voice?: string;
  enable_launch_instant_app?: boolean;
  execution_options?: string[];
  existing_post_title?: string;
  facebook_branded_content?: Record<string, unknown>;
  format_transformation_spec?: Record<string, unknown>[];
  image_crops?: Record<string, unknown>;
  image_file?: string;
  image_hash?: string;
  image_url?: string;
  instagram_branded_content?: Record<string, unknown>;
  instagram_permalink_url?: string;
  instagram_user_id?: string;
  interactive_components_spec?: Record<string, unknown>;
  is_dco_internal?: boolean;
  link_og_id?: string;
  link_url?: string;
  marketing_message_structured_spec?: Record<string, unknown>;
  media_sourcing_spec?: Record<string, unknown>;
  name?: string;
  object_id?: number;
  object_story_id?: string;
  object_story_spec?: AdCreativeObjectStorySpecFields;
  object_type?: string;
  object_url?: string;
  omnichannel_link_spec?: Record<string, unknown>;
  page_welcome_message?: string;
  place_page_set_id?: string;
  platform_customizations?: Record<string, unknown>;
  playable_asset_id?: string;
  portrait_customizations?: Record<string, unknown>;
  product_set_id?: string;
  product_suggestion_settings?: Record<string, unknown>;
  recommender_settings?: Record<string, unknown>;
  regional_regulation_disclaimer_spec?: Record<string, unknown>;
  source_facebook_post_id?: string;
  source_instagram_media_id?: string;
  template_url?: string;
  template_url_spec?: string;
  thumbnail_url?: string;
  title?: string;
  url_tags?: string;
  use_page_actor_override?: boolean;
  [key: string]: unknown;
}

export interface AdAccountListAdcreativesbylabelsParams {
  ad_label_ids: string[];
  operator?: string;
  [key: string]: unknown;
}

export interface AdAccountDeleteAdimagesParams {
  hash: string;
  image_id?: string;
  [key: string]: unknown;
}

export interface AdAccountListAdimagesParams {
  biz_tag_id?: number;
  business_id?: string;
  hashes?: string[];
  minheight?: number;
  minwidth?: number;
  name?: string;
  selected_hashes?: string[];
  [key: string]: unknown;
}

export interface AdAccountCreateAdimagesParams {
  bytes?: string;
  copy_from?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountCreateAdlabelsParams {
  name: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAdplayablesParams {
  app_id?: string;
  name: string;
  session_id?: string;
  source?: File | Blob | ReadableStream;
  source_url?: string;
  source_zip?: File | Blob | ReadableStream;
  [key: string]: unknown;
}

export interface AdAccountListAdrulesHistoryParams {
  action?: string;
  evaluation_type?: string;
  hide_no_changes?: boolean;
  object_id?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAdrulesLibraryParams {
  account_id?: string;
  evaluation_spec: Record<string, unknown>;
  execution_spec: Record<string, unknown>;
  name: string;
  schedule_spec?: Record<string, unknown>;
  status?: string;
  ui_creation_source?: string;
  [key: string]: unknown;
}

export interface AdAccountListAdsParams {
  date_preset?: string;
  effective_status?: string[];
  time_range?: Record<string, unknown>;
  updated_since?: number;
  [key: string]: unknown;
}

export interface AdAccountCreateAdsParams {
  ad_schedule_end_time?: string;
  ad_schedule_start_time?: string;
  adlabels?: Record<string, unknown>[];
  adset_id?: number;
  adset_spec?: AdSetFields;
  audience_id?: string;
  bid_amount?: number;
  conversion_domain?: string;
  creative: AdCreativeFields;
  creative_asset_groups_spec?: Record<string, unknown>;
  date_format?: string;
  display_sequence?: number;
  draft_adgroup_id?: string;
  engagement_audience?: boolean;
  execution_options?: string[];
  include_demolink_hashes?: boolean;
  name: string;
  priority?: number;
  source_ad_id?: string;
  status?: string;
  tracking_specs?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountListAdsReportingMmmReportsParams {
  filtering?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface AdAccountListAdsVolumeParams {
  page_id?: string;
  recommendation_type?: string;
  show_breakdown_by_actor?: boolean;
  [key: string]: unknown;
}

export interface AdAccountListAdsbylabelsParams {
  ad_label_ids: string[];
  operator?: string;
  [key: string]: unknown;
}

export interface AdAccountListAdsetsParams {
  date_preset?: string;
  effective_status?: string[];
  is_completed?: boolean;
  time_range?: Record<string, unknown>;
  updated_since?: number;
  [key: string]: unknown;
}

export interface AdAccountCreateAdsetsParams {
  adlabels?: Record<string, unknown>[];
  adset_schedule?: Record<string, unknown>[];
  attribution_spec?: Record<string, unknown>[];
  automatic_manual_state?: string;
  bid_adjustments?: Record<string, unknown>;
  bid_amount?: number;
  bid_constraints?: Record<string, Record<string, unknown>>;
  bid_strategy?: string;
  billing_event?: string;
  budget_schedule_specs?: Record<string, unknown>[];
  budget_source?: string;
  budget_split_set_id?: string;
  campaign_attribution?: Record<string, unknown>;
  campaign_id?: string;
  campaign_spec?: Record<string, unknown>;
  creative_sequence?: string[];
  creative_sequence_repetition_pattern?: string;
  daily_budget?: number;
  daily_imps?: number;
  daily_min_spend_target?: number;
  daily_spend_cap?: number;
  date_format?: string;
  destination_type?: string;
  dsa_beneficiary?: string;
  dsa_payor?: string;
  end_time?: string;
  execution_options?: string[];
  existing_customer_budget_percentage?: number;
  frequency_control_specs?: Record<string, unknown>[];
  full_funnel_exploration_mode?: string;
  is_ba_skip_delayed_eligible?: boolean;
  is_budget_schedule_enabled?: boolean;
  is_dynamic_creative?: boolean;
  is_incremental_attribution_enabled?: boolean;
  is_sac_cfca_terms_certified?: boolean;
  lifetime_budget?: number;
  lifetime_imps?: number;
  lifetime_min_spend_target?: number;
  lifetime_spend_cap?: number;
  line_number?: number;
  max_budget_spend_percentage?: number;
  min_budget_spend_percentage?: number;
  multi_event_conversion_attribution_window_seconds?: number;
  multi_optimization_goal_weight?: string;
  name: string;
  optimization_goal?: string;
  optimization_sub_event?: string;
  pacing_type?: string[];
  placement_soft_opt_out?: Record<string, unknown>;
  promoted_object?: Record<string, unknown>;
  rb_prediction_id?: string;
  regional_regulated_categories?: string[];
  regional_regulation_identities?: Record<string, unknown>;
  rf_prediction_id?: string;
  source_adset_id?: string;
  start_time?: string;
  status?: string;
  targeting?: TargetingFields;
  time_based_ad_rotation_id_blocks?: number[][];
  time_based_ad_rotation_intervals?: number[];
  time_start?: string;
  time_stop?: string;
  topline_id?: string;
  trending_topics_spec?: Record<string, unknown>;
  tune_for_category?: string;
  value_rule_set_id?: string;
  value_rules_applied?: boolean;
  [key: string]: unknown;
}

export interface AdAccountListAdsetsbylabelsParams {
  ad_label_ids: string[];
  operator?: string;
  [key: string]: unknown;
}

export interface AdAccountListAdspixelsParams {
  sort_by?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAdspixelsParams {
  name?: string;
  [key: string]: unknown;
}

export interface AdAccountListAdvertisableApplicationsParams {
  app_id?: string;
  business_id?: string;
  [key: string]: unknown;
}

export interface AdAccountDeleteAdvideosParams {
  video_id: string;
  [key: string]: unknown;
}

export interface AdAccountListAdvideosParams {
  max_aspect_ratio?: number;
  maxheight?: number;
  maxlength?: number;
  maxwidth?: number;
  min_aspect_ratio?: number;
  minheight?: number;
  minlength?: number;
  minwidth?: number;
  title?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAdvideosParams {
  application_id?: string;
  asked_fun_fact_prompt_id?: number;
  audio_story_wave_animation_handle?: string;
  chunk_session_id?: string;
  composer_entry_picker?: string;
  composer_entry_point?: string;
  composer_entry_time?: number;
  composer_session_events_log?: string;
  composer_session_id?: string;
  composer_source_surface?: string;
  composer_type?: string;
  container_type?: string;
  content_category?: string;
  creative_tools?: string;
  description?: string;
  edit_description_spec?: Record<string, unknown>;
  embeddable?: boolean;
  end_offset?: number;
  fbuploader_video_file_chunk?: string;
  file_size?: number;
  file_url?: string;
  fisheye_video_cropped?: boolean;
  formatting?: string;
  fov?: number;
  front_z_rotation?: number;
  fun_fact_prompt_id?: string;
  fun_fact_toastee_id?: number;
  guide?: number[][];
  guide_enabled?: boolean;
  initial_heading?: number;
  initial_pitch?: number;
  instant_game_entry_point_data?: string;
  is_boost_intended?: boolean;
  is_group_linking_post?: boolean;
  is_partnership_ad?: boolean;
  is_voice_clip?: boolean;
  location_source_id?: string;
  name?: string;
  og_action_type_id?: string;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_suggestion_mechanism?: string;
  original_fov?: number;
  original_projection_type?: string;
  partnership_ad_ad_code?: string;
  publish_event_id?: number;
  referenced_sticker_id?: string;
  replace_video_id?: string;
  slideshow_spec?: Record<string, unknown>;
  source?: string;
  source_instagram_media_id?: string;
  spherical?: boolean;
  start_offset?: number;
  swap_mode?: string;
  text_format_metadata?: string;
  thumb?: File | Blob | ReadableStream;
  time_since_original_post?: number;
  title?: string;
  transcode_setting_properties?: string;
  unpublished_content_type?: string;
  upload_phase?: string;
  upload_session_id?: string;
  upload_setting_properties?: string;
  video_file_chunk?: string;
  video_id_original?: string;
  video_start_time_ms?: number;
  waterfall_id?: string;
  [key: string]: unknown;
}

export interface AdAccountDeleteAgenciesParams {
  business: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAgenciesParams {
  business: string;
  permitted_tasks?: string[];
  [key: string]: unknown;
}

export interface AdAccountDeleteAssignedUsersParams {
  user: number;
  [key: string]: unknown;
}

export interface AdAccountListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface AdAccountCreateAssignedUsersParams {
  tasks?: string[];
  user: number;
  [key: string]: unknown;
}

export interface AdAccountCreateAsyncBatchRequestsParams {
  adbatch: Record<string, unknown>[];
  name: string;
  [key: string]: unknown;
}

export interface AdAccountListAsyncRequestsParams {
  status?: string;
  type?: string;
  [key: string]: unknown;
}

export interface AdAccountListAsyncadcreativesParams {
  is_completed?: boolean;
  [key: string]: unknown;
}

export interface AdAccountCreateAsyncadcreativesParams {
  creative_spec: AdCreativeFields;
  name: string;
  notification_mode?: string;
  notification_uri?: string;
  [key: string]: unknown;
}

export interface AdAccountListAsyncadrequestsetsParams {
  is_completed?: boolean;
  [key: string]: unknown;
}

export interface AdAccountCreateAsyncadrequestsetsParams {
  ad_specs: Record<string, unknown>[];
  name: string;
  notification_mode?: string;
  notification_uri?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateBlockListDraftsParams {
  publisher_urls_file: File | Blob | ReadableStream;
  [key: string]: unknown;
}

export interface AdAccountCreateBrandSafetyContentFilterLevelsParams {
  brand_safety_content_filter_levels: string[];
  business_id?: string;
  [key: string]: unknown;
}

export interface AdAccountListBroadtargetingcategoriesParams {
  custom_categories_only?: boolean;
  [key: string]: unknown;
}

export interface AdAccountListBusinessprojectsParams {
  business?: string;
  [key: string]: unknown;
}

export interface AdAccountDeleteCampaignsParams {
  before_date?: string;
  delete_offset?: number;
  delete_strategy: string;
  object_count?: number;
  [key: string]: unknown;
}

export interface AdAccountListCampaignsParams {
  date_preset?: string;
  effective_status?: string[];
  is_completed?: boolean;
  time_range?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountCreateCampaignsParams {
  adlabels?: Record<string, unknown>[];
  bid_strategy?: string;
  budget_schedule_specs?: Record<string, unknown>[];
  buying_type?: string;
  daily_budget?: number;
  execution_options?: string[];
  is_adset_budget_sharing_enabled?: boolean;
  is_budget_schedule_enabled?: boolean;
  is_direct_send_campaign?: boolean;
  is_message_campaign?: boolean;
  is_skadnetwork_attribution?: boolean;
  iterative_split_test_configs?: Record<string, unknown>[];
  lifetime_budget?: number;
  name?: string;
  objective?: string;
  pacing_type?: string[];
  promoted_object?: Record<string, unknown>;
  smart_promotion_type?: string;
  source_campaign_id?: string;
  special_ad_categories: string[];
  special_ad_category_country?: string[];
  spend_cap?: number;
  start_time?: string;
  status?: string;
  stop_time?: string;
  topline_id?: string;
  [key: string]: unknown;
}

export interface AdAccountListCampaignsbylabelsParams {
  ad_label_ids: string[];
  operator?: string;
  [key: string]: unknown;
}

export interface AdAccountListConnectedInstagramAccountsWithIabpParams {
  business_id?: string;
  [key: string]: unknown;
}

export interface AdAccountListCustomaudiencesParams {
  business_id?: string;
  fetch_primary_audience?: boolean;
  fields?: string[];
  filtering?: Record<string, unknown>[];
  pixel_id?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateCustomaudiencesParams {
  allowed_domains?: string[];
  associated_audience_id?: number;
  claim_objective?: string;
  content_type?: string;
  countries?: string;
  creation_params?: Record<string, unknown>;
  customer_file_source?: string;
  dataset_id?: string;
  description?: string;
  enable_fetch_or_create?: boolean;
  event_source_group?: string;
  event_sources?: Record<string, unknown>[];
  exclusions?: Record<string, unknown>[];
  facebook_page_id?: string;
  inclusionOperator?: string;
  inclusions?: Record<string, unknown>[];
  is_snapshot?: boolean;
  is_value_based?: boolean;
  list_of_accounts?: number[];
  lookalike_spec?: string;
  marketing_message_channels?: Record<string, unknown>;
  name?: string;
  opt_out_link?: string;
  origin_audience_id?: string;
  parent_audience_id?: number;
  partner_reference_key?: string;
  pixel_id?: string;
  prefill?: boolean;
  product_set_id?: string;
  regulated_audience_spec?: string;
  retention_days?: number;
  rev_share_policy_id?: number;
  rule?: string;
  rule_aggregation?: string;
  subscription_info?: string[];
  subtype?: string;
  usage_restriction?: string;
  use_for_products?: string[];
  use_in_campaigns?: boolean;
  video_group_ids?: string[];
  whats_app_business_phone_number_id?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateCustomaudiencestosParams {
  business_id?: string;
  tos_id: string;
  [key: string]: unknown;
}

export interface AdAccountCreateCustomconversionsParams {
  action_source_type?: string;
  advanced_rule?: string;
  custom_event_type?: string;
  default_conversion_value?: number;
  description?: string;
  event_source_id?: string;
  name: string;
  rule?: string;
  [key: string]: unknown;
}

export interface AdAccountListDeliveryEstimateParams {
  optimization_goal: string;
  promoted_object?: Record<string, unknown>;
  targeting_spec: TargetingFields;
  [key: string]: unknown;
}

export interface AdAccountListDeprecatedtargetingadsetsParams {
  type?: string;
  [key: string]: unknown;
}

export interface AdAccountListGeneratepreviewsParams {
  ad_format: string;
  creative: AdCreativeFields;
  creative_feature?: string;
  dynamic_asset_label?: string;
  dynamic_creative_spec?: Record<string, unknown>;
  dynamic_customization?: Record<string, unknown>;
  end_date?: string;
  height?: number;
  locale?: string;
  message?: Record<string, unknown>;
  place_page_id?: number;
  post?: Record<string, unknown>;
  product_item_ids?: string[];
  render_type?: string;
  start_date?: string;
  width?: number;
  [key: string]: unknown;
}

export interface AdAccountListInsightsParams {
  action_attribution_windows?: string[];
  action_breakdowns?: string[];
  action_report_time?: string;
  breakdowns?: string[];
  date_preset?: string;
  default_summary?: boolean;
  export_columns?: string[];
  export_format?: string;
  export_name?: string;
  fields?: string[];
  filtering?: Record<string, unknown>[];
  graph_cache?: boolean;
  level?: string;
  limit?: number;
  product_id_limit?: number;
  sort?: string[];
  summary?: string[];
  summary_action_breakdowns?: string[];
  time_increment?: string;
  time_range?: Record<string, unknown>;
  time_ranges?: Record<string, unknown>[];
  use_account_attribution_setting?: boolean;
  use_unified_attribution_setting?: boolean;
  [key: string]: unknown;
}

export interface AdAccountCreateInsightsParams {
  action_attribution_windows?: string[];
  action_breakdowns?: string[];
  action_report_time?: string;
  breakdowns?: string[];
  date_preset?: string;
  default_summary?: boolean;
  export_columns?: string[];
  export_format?: string;
  export_name?: string;
  fields?: string[];
  filtering?: Record<string, unknown>[];
  graph_cache?: boolean;
  level?: string;
  limit?: number;
  product_id_limit?: number;
  sort?: string[];
  summary?: string[];
  summary_action_breakdowns?: string[];
  time_increment?: string;
  time_range?: Record<string, unknown>;
  time_ranges?: Record<string, unknown>[];
  use_account_attribution_setting?: boolean;
  use_unified_attribution_setting?: boolean;
  [key: string]: unknown;
}

export interface AdAccountListIosFourteenCampaignLimitsParams {
  app_id: string;
  [key: string]: unknown;
}

export interface AdAccountListMatchedSearchApplicationsParams {
  allow_incomplete_app?: boolean;
  app_store: string;
  app_store_country?: string;
  business_id?: string;
  is_skadnetwork_search?: boolean;
  only_apps_with_permission?: boolean;
  query_term: string;
  stores_to_filter?: string[];
  [key: string]: unknown;
}

export interface AdAccountCreateMessageCampaignParams {
  bid_amount?: number;
  daily_budget?: number;
  lifetime_budget?: number;
  name: string;
  page_id: string;
  [key: string]: unknown;
}

export interface AdAccountListMessageDeliveryEstimateParams {
  bid_amount?: number;
  daily_budget?: number;
  is_direct_send_campaign?: boolean;
  lifetime_budget?: number;
  lifetime_in_days?: number;
  optimization_goal?: string;
  pacing_type?: string;
  promoted_object: Record<string, unknown>;
  targeting_spec: TargetingFields;
  [key: string]: unknown;
}

export interface AdAccountCreateMessagesParams {
  message?: Record<string, unknown>;
  message_id: number;
  messenger_delivery_data: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountListMinimumBudgetsParams {
  bid_amount?: number;
  [key: string]: unknown;
}

export interface AdAccountListOnbehalfRequestsParams {
  status?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateProductAudiencesParams {
  allowed_domains?: string[];
  associated_audience_id?: number;
  claim_objective?: string;
  content_type?: string;
  creation_params?: Record<string, unknown>;
  description?: string;
  enable_fetch_or_create?: boolean;
  event_source_group?: string;
  event_sources?: Record<string, unknown>[];
  exclusions?: Record<string, unknown>[];
  inclusionOperator?: string;
  inclusions?: Record<string, unknown>[];
  is_snapshot?: boolean;
  is_value_based?: boolean;
  name: string;
  opt_out_link?: string;
  parent_audience_id?: number;
  product_set_id: string;
  rev_share_policy_id?: number;
  subtype?: string;
  [key: string]: unknown;
}

export interface AdAccountCreatePublisherBlockListsParams {
  name?: string;
  [key: string]: unknown;
}

export interface AdAccountListReachestimateParams {
  adgroup_ids?: string[];
  caller_id?: string;
  concepts?: string;
  creative_action_spec?: string;
  is_debug?: boolean;
  object_store_url?: string;
  targeting_spec: TargetingFields;
  [key: string]: unknown;
}

export interface AdAccountCreateReachfrequencypredictionsParams {
  action?: string;
  ad_formats?: Record<string, unknown>[];
  auction_entry_option_index?: number;
  budget?: number;
  buying_type?: string;
  campaign_group_id?: string;
  day_parting_schedule?: Record<string, unknown>[];
  deal_id?: string;
  destination_id?: number;
  destination_ids?: string[];
  end_time?: number;
  exceptions?: boolean;
  existing_campaign_id?: string;
  expiration_time?: number;
  frequency_cap?: number;
  grp_buying?: boolean;
  impression?: number;
  instream_packages?: string[];
  interval_frequency_cap_reset_period?: number;
  is_balanced_frequency?: boolean;
  is_bonus_media?: boolean;
  is_conversion_goal?: boolean;
  is_full_view?: boolean;
  is_higher_average_frequency?: boolean;
  is_reach_and_frequency_io_buying?: boolean;
  is_reserved_buying?: boolean;
  num_curve_points?: number;
  objective?: string;
  optimization_goal?: string;
  prediction_mode?: number;
  reach?: number;
  rf_prediction_id?: string;
  rf_prediction_id_to_release?: string;
  rf_prediction_id_to_share?: string;
  start_time?: number;
  stop_time?: number;
  story_event_type?: number;
  target_cpm?: number;
  target_frequency?: number;
  target_frequency_reset_period?: number;
  target_spec?: TargetingFields;
  trending_topics_spec?: Record<string, unknown>;
  video_view_length_constraint?: number;
  [key: string]: unknown;
}

export interface AdAccountCreateRecommendationsParams {
  asc_fragmentation_parameters?: Record<string, unknown>;
  autoflow_parameters?: Record<string, unknown>;
  extra_data?: Record<string, unknown>;
  fragmentation_parameters?: Record<string, unknown>;
  music_parameters?: Record<string, unknown>;
  recommendation_signature: string;
  scale_good_campaign_parameters?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountListSavedAudiencesParams {
  business_id?: string;
  fields?: string[];
  filtering?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface AdAccountDeleteSubscribedAppsParams {
  app_id?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateSubscribedAppsParams {
  app_id?: string;
  [key: string]: unknown;
}

export interface AdAccountListTargetingbrowseParams {
  excluded_category?: string;
  include_nodes?: boolean;
  is_exclusion?: boolean;
  limit_type?: string;
  regulated_categories?: string[];
  regulated_countries?: string[];
  whitelisted_types?: string[];
  [key: string]: unknown;
}

export interface AdAccountListTargetingsearchParams {
  allow_only_fat_head_interests?: boolean;
  app_store?: string;
  countries?: string[];
  is_account_level_brand_safety_exclusion?: boolean;
  is_account_level_employer_exclusion?: boolean;
  is_exclusion?: boolean;
  limit_type?: string;
  objective?: string;
  promoted_object?: Record<string, unknown>;
  q: string;
  regulated_categories?: string[];
  regulated_countries?: string[];
  session_id?: number;
  targeting_list?: Record<string, unknown>[];
  whitelisted_types?: string[];
  [key: string]: unknown;
}

export interface AdAccountListTargetingsentencelinesParams {
  discard_ages?: boolean;
  discard_placements?: boolean;
  hide_targeting_spec_from_return?: boolean;
  targeting_spec: TargetingFields;
  [key: string]: unknown;
}

export interface AdAccountListTargetingsuggestionsParams {
  app_store?: string;
  countries?: string[];
  limit_type?: string;
  mode?: string;
  objective?: string;
  objects?: Record<string, unknown>;
  regulated_categories?: string[];
  regulated_countries?: string[];
  session_id?: number;
  targeting_list?: Record<string, unknown>[];
  whitelisted_types?: string[];
  [key: string]: unknown;
}

export interface AdAccountListTargetingvalidationParams {
  id_list?: number[];
  is_exclusion?: boolean;
  name_list?: string[];
  targeting_list?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface AdAccountCreateTrackingParams {
  tracking_specs: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountDeleteUsersofanyaudienceParams {
  namespace?: string;
  payload?: Record<string, unknown>;
  session?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountListValueRuleSetParams {
  product_type?: string;
  status?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateValueRuleSetParams {
  name: string;
  product_type?: string;
  rules: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface AdAccountCreateValueRuleSetTranslationParams {
  source?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface AdAccountListVideoAdsParams {
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface AdAccountCreateVideoAdsParams {
  description?: string;
  privacy?: string;
  title?: string;
  upload_phase: string;
  video_id?: string;
  video_state?: string;
  [key: string]: unknown;
}

export interface AdAccountUpdateParams {
  agency_client_declaration?: Record<string, unknown>;
  attribution_spec?: Record<string, unknown>[];
  business_info?: Record<string, unknown>;
  currency?: string;
  custom_audience_info?: Record<string, unknown>;
  default_dsa_beneficiary?: string;
  default_dsa_payor?: string;
  end_advertiser?: string;
  existing_customers?: string[];
  is_ba_skip_delayed_eligible?: boolean;
  is_notifications_enabled?: boolean;
  media_agency?: string;
  name?: string;
  partner?: string;
  spend_cap?: number;
  spend_cap_action?: string;
  timezone_id?: number;
  tos_accepted?: Record<string, unknown>;
  [key: string]: unknown;
}

export function adAccountNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdAccountFields, F[number]>>(`${id}`, opts),
    update: (params: AdAccountUpdateParams) =>
      client.post<AdAccountFields>(`${id}`, params as Record<string, unknown>),
    accountControls: {
      list: <F extends (keyof AdAccountBusinessConstraintsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountBusinessConstraintsFields, F[number]>>(client, `${id}/account_controls`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAccountControlsParams) =>
        client.post<AdAccountBusinessConstraintsFields>(`${id}/account_controls`, params as Record<string, unknown>),
    },
    activities: <F extends (keyof AdActivityFields)[]>(opts: { fields: F; params?: AdAccountListActivitiesParams }) =>
      new Cursor<Pick<AdActivityFields, F[number]>>(client, `${id}/activities`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adPlacePageSets: {
      list: <F extends (keyof AdPlacePageSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdPlacePageSetFields, F[number]>>(client, `${id}/ad_place_page_sets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdPlacePageSetsParams) =>
        client.post<AdPlacePageSetFields>(`${id}/ad_place_page_sets`, params as Record<string, unknown>),
    },
    createAdPlacePageSetsAsync: (params: AdAccountCreateAdPlacePageSetsAsyncParams) =>
      client.post<AdPlacePageSetFields>(`${id}/ad_place_page_sets_async`, params as Record<string, unknown>),
    adSavedKeywords: <F extends (keyof AdSavedKeywordsFields)[]>(opts: { fields: F; params?: AdAccountListAdSavedKeywordsParams }) =>
      new Cursor<Pick<AdSavedKeywordsFields, F[number]>>(client, `${id}/ad_saved_keywords`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adStudies: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdStudyFields, F[number]>>(client, `${id}/ad_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adcloudplayables: <F extends (keyof CloudGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CloudGameFields, F[number]>>(client, `${id}/adcloudplayables`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adcreatives: {
      list: <F extends (keyof AdCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdCreativeFields, F[number]>>(client, `${id}/adcreatives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdcreativesParams) =>
        client.post<AdCreativeFields>(`${id}/adcreatives`, params as Record<string, unknown>),
    },
    adcreativesbylabels: <F extends (keyof AdCreativeFields)[]>(opts: { fields: F; params?: AdAccountListAdcreativesbylabelsParams }) =>
      new Cursor<Pick<AdCreativeFields, F[number]>>(client, `${id}/adcreativesbylabels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adimages: {
      list: <F extends (keyof AdImageFields)[]>(opts: { fields: F; params?: AdAccountListAdimagesParams }) =>
        new Cursor<Pick<AdImageFields, F[number]>>(client, `${id}/adimages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdimagesParams) =>
        client.post<AdImageFields>(`${id}/adimages`, params as Record<string, unknown>),
      delete: (params: AdAccountDeleteAdimagesParams) =>
        client.delete(`${id}/adimages`, params as Record<string, unknown> ?? {}),
    },
    adlabels: {
      list: <F extends (keyof AdLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdLabelFields, F[number]>>(client, `${id}/adlabels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdlabelsParams) =>
        client.post<AdLabelFields>(`${id}/adlabels`, params as Record<string, unknown>),
    },
    adplayables: {
      list: <F extends (keyof PlayableContentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PlayableContentFields, F[number]>>(client, `${id}/adplayables`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdplayablesParams) =>
        client.post<PlayableContentFields>(`${id}/adplayables`, params as Record<string, unknown>),
    },
    adrulesHistory: <F extends (keyof AdAccountAdRulesHistoryFields)[]>(opts: { fields: F; params?: AdAccountListAdrulesHistoryParams }) =>
      new Cursor<Pick<AdAccountAdRulesHistoryFields, F[number]>>(client, `${id}/adrules_history`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adrulesLibrary: {
      list: <F extends (keyof AdRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdRuleFields, F[number]>>(client, `${id}/adrules_library`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdrulesLibraryParams) =>
        client.post<AdRuleFields>(`${id}/adrules_library`, params as Record<string, unknown>),
    },
    ads: {
      list: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: AdAccountListAdsParams }) =>
        new Cursor<Pick<AdFields, F[number]>>(client, `${id}/ads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdsParams) =>
        client.post<AdFields>(`${id}/ads`, params as Record<string, unknown>),
    },
    adsReportingMmmReports: <F extends (keyof AdsReportBuilderMMMReportFields)[]>(opts: { fields: F; params?: AdAccountListAdsReportingMmmReportsParams }) =>
      new Cursor<Pick<AdsReportBuilderMMMReportFields, F[number]>>(client, `${id}/ads_reporting_mmm_reports`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adsReportingMmmSchedulers: <F extends (keyof AdsReportBuilderMMMReportSchedulerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsReportBuilderMMMReportSchedulerFields, F[number]>>(client, `${id}/ads_reporting_mmm_schedulers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adsVolume: <F extends (keyof AdAccountAdVolumeFields)[]>(opts: { fields: F; params?: AdAccountListAdsVolumeParams }) =>
      new Cursor<Pick<AdAccountAdVolumeFields, F[number]>>(client, `${id}/ads_volume`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adsbylabels: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: AdAccountListAdsbylabelsParams }) =>
      new Cursor<Pick<AdFields, F[number]>>(client, `${id}/adsbylabels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adsets: {
      list: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: AdAccountListAdsetsParams }) =>
        new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/adsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdsetsParams) =>
        client.post<AdSetFields>(`${id}/adsets`, params as Record<string, unknown>),
    },
    adsetsbylabels: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: AdAccountListAdsetsbylabelsParams }) =>
      new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/adsetsbylabels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adspixels: {
      list: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: AdAccountListAdspixelsParams }) =>
        new Cursor<Pick<AdsPixelFields, F[number]>>(client, `${id}/adspixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdspixelsParams) =>
        client.post<AdsPixelFields>(`${id}/adspixels`, params as Record<string, unknown>),
    },
    advertisableApplications: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: AdAccountListAdvertisableApplicationsParams }) =>
      new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/advertisable_applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    advideos: {
      list: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: AdAccountListAdvideosParams }) =>
        new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/advideos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAdvideosParams) =>
        client.post<AdVideoFields>(`${id}/advideos`, params as Record<string, unknown>),
      delete: (params: AdAccountDeleteAdvideosParams) =>
        client.delete(`${id}/advideos`, params as Record<string, unknown> ?? {}),
    },
    affectedadsets: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/affectedadsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    agencies: {
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAgenciesParams) =>
        client.post<AdAccountFields>(`${id}/agencies`, params as Record<string, unknown>),
      delete: (params: AdAccountDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    applications: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedUsers: {
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: AdAccountListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAssignedUsersParams) =>
        client.post<AdAccountFields>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: AdAccountDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
    createAsyncBatchRequest: (params: AdAccountCreateAsyncBatchRequestsParams) =>
      client.post<CampaignFields>(`${id}/async_batch_requests`, params as Record<string, unknown>),
    asyncRequests: <F extends (keyof AsyncRequestFields)[]>(opts: { fields: F; params?: AdAccountListAsyncRequestsParams }) =>
      new Cursor<Pick<AsyncRequestFields, F[number]>>(client, `${id}/async_requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    asyncadcreatives: {
      list: <F extends (keyof AdAsyncRequestSetFields)[]>(opts: { fields: F; params?: AdAccountListAsyncadcreativesParams }) =>
        new Cursor<Pick<AdAsyncRequestSetFields, F[number]>>(client, `${id}/asyncadcreatives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAsyncadcreativesParams) =>
        client.post<AdAsyncRequestSetFields>(`${id}/asyncadcreatives`, params as Record<string, unknown>),
    },
    asyncadrequestsets: {
      list: <F extends (keyof AdAsyncRequestSetFields)[]>(opts: { fields: F; params?: AdAccountListAsyncadrequestsetsParams }) =>
        new Cursor<Pick<AdAsyncRequestSetFields, F[number]>>(client, `${id}/asyncadrequestsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateAsyncadrequestsetsParams) =>
        client.post<AdAsyncRequestSetFields>(`${id}/asyncadrequestsets`, params as Record<string, unknown>),
    },
    audienceFunnel: <F extends (keyof AudienceFunnelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AudienceFunnelFields, F[number]>>(client, `${id}/audience_funnel`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createBlockListDraft: (params: AdAccountCreateBlockListDraftsParams) =>
      client.post<AdAccountFields>(`${id}/block_list_drafts`, params as Record<string, unknown>),
    createBrandSafetyContentFilterLevel: (params: AdAccountCreateBrandSafetyContentFilterLevelsParams) =>
      client.post<AdAccountFields>(`${id}/brand_safety_content_filter_levels`, params as Record<string, unknown>),
    broadtargetingcategories: <F extends (keyof BroadTargetingCategoriesFields)[]>(opts: { fields: F; params?: AdAccountListBroadtargetingcategoriesParams }) =>
      new Cursor<Pick<BroadTargetingCategoriesFields, F[number]>>(client, `${id}/broadtargetingcategories`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    businessprojects: <F extends (keyof BusinessProjectFields)[]>(opts: { fields: F; params?: AdAccountListBusinessprojectsParams }) =>
      new Cursor<Pick<BusinessProjectFields, F[number]>>(client, `${id}/businessprojects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    campaigns: {
      list: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: AdAccountListCampaignsParams }) =>
        new Cursor<Pick<CampaignFields, F[number]>>(client, `${id}/campaigns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateCampaignsParams) =>
        client.post<CampaignFields>(`${id}/campaigns`, params as Record<string, unknown>),
      delete: (params: AdAccountDeleteCampaignsParams) =>
        client.delete(`${id}/campaigns`, params as Record<string, unknown> ?? {}),
    },
    campaignsbylabels: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: AdAccountListCampaignsbylabelsParams }) =>
      new Cursor<Pick<CampaignFields, F[number]>>(client, `${id}/campaignsbylabels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    connectedInstagramAccounts: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/connected_instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    connectedInstagramAccountsWithIabp: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: AdAccountListConnectedInstagramAccountsWithIabpParams }) =>
      new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/connected_instagram_accounts_with_iabp`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    conversionGoals: <F extends (keyof AdsConversionGoalFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsConversionGoalFields, F[number]>>(client, `${id}/conversion_goals`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    customaudiences: {
      list: <F extends (keyof CustomAudienceFields)[]>(opts: { fields: F; params?: AdAccountListCustomaudiencesParams }) =>
        new Cursor<Pick<CustomAudienceFields, F[number]>>(client, `${id}/customaudiences`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateCustomaudiencesParams) =>
        client.post<CustomAudienceFields>(`${id}/customaudiences`, params as Record<string, unknown>),
    },
    customaudiencestos: {
      list: <F extends (keyof CustomAudiencesTOSFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<CustomAudiencesTOSFields, F[number]>>(client, `${id}/customaudiencestos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateCustomaudiencestosParams) =>
        client.post<AdAccountFields>(`${id}/customaudiencestos`, params as Record<string, unknown>),
    },
    customconversions: {
      list: <F extends (keyof CustomConversionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<CustomConversionFields, F[number]>>(client, `${id}/customconversions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateCustomconversionsParams) =>
        client.post<CustomConversionFields>(`${id}/customconversions`, params as Record<string, unknown>),
    },
    deliveryEstimate: <F extends (keyof AdAccountDeliveryEstimateFields)[]>(opts: { fields: F; params?: AdAccountListDeliveryEstimateParams }) =>
      new Cursor<Pick<AdAccountDeliveryEstimateFields, F[number]>>(client, `${id}/delivery_estimate`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    deprecatedtargetingadsets: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: AdAccountListDeprecatedtargetingadsetsParams }) =>
      new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/deprecatedtargetingadsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    dsaRecommendations: <F extends (keyof AdAccountDsaRecommendationsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountDsaRecommendationsFields, F[number]>>(client, `${id}/dsa_recommendations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    generatepreviews: <F extends (keyof AdPreviewFields)[]>(opts: { fields: F; params?: AdAccountListGeneratepreviewsParams }) =>
      new Cursor<Pick<AdPreviewFields, F[number]>>(client, `${id}/generatepreviews`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    impactingAdStudies: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdStudyFields, F[number]>>(client, `${id}/impacting_ad_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    insights: {
      list: <F extends (keyof AdsInsightsFields)[]>(opts: { fields: F; params?: AdAccountListInsightsParams }) =>
        new Cursor<Pick<AdsInsightsFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateInsightsParams) =>
        client.post<AdReportRunFields>(`${id}/insights`, params as Record<string, unknown>),
    },
    instagramAccounts: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    iosFourteenCampaignLimits: <F extends (keyof AdAccountIosFourteenCampaignLimitsFields)[]>(opts: { fields: F; params?: AdAccountListIosFourteenCampaignLimitsParams }) =>
      new Cursor<Pick<AdAccountIosFourteenCampaignLimitsFields, F[number]>>(client, `${id}/ios_fourteen_campaign_limits`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    matchedSearchApplications: <F extends (keyof AdAccountMatchedSearchApplicationsEdgeDataFields)[]>(opts: { fields: F; params?: AdAccountListMatchedSearchApplicationsParams }) =>
      new Cursor<Pick<AdAccountMatchedSearchApplicationsEdgeDataFields, F[number]>>(client, `${id}/matched_search_applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    maxBid: <F extends (keyof AdAccountMaxBidFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountMaxBidFields, F[number]>>(client, `${id}/max_bid`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    mcmeconversions: <F extends (keyof AdsMcmeConversionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsMcmeConversionFields, F[number]>>(client, `${id}/mcmeconversions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createMessageCampaign: (params: AdAccountCreateMessageCampaignParams) =>
      client.post<Record<string, unknown>>(`${id}/message_campaign`, params as Record<string, unknown>),
    messageDeliveryEstimate: <F extends (keyof MessageDeliveryEstimateFields)[]>(opts: { fields: F; params?: AdAccountListMessageDeliveryEstimateParams }) =>
      new Cursor<Pick<MessageDeliveryEstimateFields, F[number]>>(client, `${id}/message_delivery_estimate`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createMessage: (params: AdAccountCreateMessagesParams) =>
      client.post<Record<string, unknown>>(`${id}/messages`, params as Record<string, unknown>),
    minimumBudgets: <F extends (keyof MinimumBudgetFields)[]>(opts: { fields: F; params?: AdAccountListMinimumBudgetsParams }) =>
      new Cursor<Pick<MinimumBudgetFields, F[number]>>(client, `${id}/minimum_budgets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    onbehalfRequests: <F extends (keyof BusinessOwnedObjectOnBehalfOfRequestFields)[]>(opts: { fields: F; params?: AdAccountListOnbehalfRequestsParams }) =>
      new Cursor<Pick<BusinessOwnedObjectOnBehalfOfRequestFields, F[number]>>(client, `${id}/onbehalf_requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createProductAudience: (params: AdAccountCreateProductAudiencesParams) =>
      client.post<CustomAudienceFields>(`${id}/product_audiences`, params as Record<string, unknown>),
    promotePages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/promote_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    publisherBlockLists: {
      list: <F extends (keyof PublisherBlockListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PublisherBlockListFields, F[number]>>(client, `${id}/publisher_block_lists`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreatePublisherBlockListsParams) =>
        client.post<PublisherBlockListFields>(`${id}/publisher_block_lists`, params as Record<string, unknown>),
    },
    reachestimate: <F extends (keyof AdAccountReachEstimateFields)[]>(opts: { fields: F; params?: AdAccountListReachestimateParams }) =>
      new Cursor<Pick<AdAccountReachEstimateFields, F[number]>>(client, `${id}/reachestimate`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    reachfrequencypredictions: {
      list: <F extends (keyof ReachFrequencyPredictionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ReachFrequencyPredictionFields, F[number]>>(client, `${id}/reachfrequencypredictions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateReachfrequencypredictionsParams) =>
        client.post<ReachFrequencyPredictionFields>(`${id}/reachfrequencypredictions`, params as Record<string, unknown>),
    },
    recommendations: {
      list: <F extends (keyof AdAccountRecommendationsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountRecommendationsFields, F[number]>>(client, `${id}/recommendations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateRecommendationsParams) =>
        client.post<AdAccountRecommendationsFields>(`${id}/recommendations`, params as Record<string, unknown>),
    },
    savedAudiences: <F extends (keyof SavedAudienceFields)[]>(opts: { fields: F; params?: AdAccountListSavedAudiencesParams }) =>
      new Cursor<Pick<SavedAudienceFields, F[number]>>(client, `${id}/saved_audiences`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    subscribedApps: {
      list: <F extends (keyof AdAccountSubscribedAppsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountSubscribedAppsFields, F[number]>>(client, `${id}/subscribed_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateSubscribedAppsParams) =>
        client.post<AdAccountSubscribedAppsFields>(`${id}/subscribed_apps`, params as Record<string, unknown>),
      delete: (params: AdAccountDeleteSubscribedAppsParams) =>
        client.delete(`${id}/subscribed_apps`, params as Record<string, unknown> ?? {}),
    },
    targetingbrowse: <F extends (keyof AdAccountTargetingUnifiedFields)[]>(opts: { fields: F; params?: AdAccountListTargetingbrowseParams }) =>
      new Cursor<Pick<AdAccountTargetingUnifiedFields, F[number]>>(client, `${id}/targetingbrowse`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    targetingsearch: <F extends (keyof AdAccountTargetingUnifiedFields)[]>(opts: { fields: F; params?: AdAccountListTargetingsearchParams }) =>
      new Cursor<Pick<AdAccountTargetingUnifiedFields, F[number]>>(client, `${id}/targetingsearch`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    targetingsentencelines: <F extends (keyof TargetingSentenceLineFields)[]>(opts: { fields: F; params?: AdAccountListTargetingsentencelinesParams }) =>
      new Cursor<Pick<TargetingSentenceLineFields, F[number]>>(client, `${id}/targetingsentencelines`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    targetingsuggestions: <F extends (keyof AdAccountTargetingUnifiedFields)[]>(opts: { fields: F; params?: AdAccountListTargetingsuggestionsParams }) =>
      new Cursor<Pick<AdAccountTargetingUnifiedFields, F[number]>>(client, `${id}/targetingsuggestions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    targetingvalidation: <F extends (keyof AdAccountTargetingUnifiedFields)[]>(opts: { fields: F; params?: AdAccountListTargetingvalidationParams }) =>
      new Cursor<Pick<AdAccountTargetingUnifiedFields, F[number]>>(client, `${id}/targetingvalidation`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    tracking: {
      list: <F extends (keyof AdAccountTrackingDataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountTrackingDataFields, F[number]>>(client, `${id}/tracking`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateTrackingParams) =>
        client.post<AdAccountFields>(`${id}/tracking`, params as Record<string, unknown>),
    },
    users: <F extends (keyof AdAccountUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountUserFields, F[number]>>(client, `${id}/users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    deleteUsersofanyaudience: (params: AdAccountDeleteUsersofanyaudienceParams) =>
      client.delete(`${id}/usersofanyaudience`, params as Record<string, unknown> ?? {}),
    valueRuleSet: {
      list: <F extends (keyof AdsValueAdjustmentRuleCollectionFields)[]>(opts: { fields: F; params?: AdAccountListValueRuleSetParams }) =>
        new Cursor<Pick<AdsValueAdjustmentRuleCollectionFields, F[number]>>(client, `${id}/value_rule_set`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateValueRuleSetParams) =>
        client.post<AdsValueAdjustmentRuleCollectionFields>(`${id}/value_rule_set`, params as Record<string, unknown>),
    },
    createValueRuleSetTranslation: (params: AdAccountCreateValueRuleSetTranslationParams) =>
      client.post<Record<string, unknown>>(`${id}/value_rule_set_translation`, params as Record<string, unknown>),
    videoAds: {
      list: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: AdAccountListVideoAdsParams }) =>
        new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/video_ads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdAccountCreateVideoAdsParams) =>
        client.post<AdVideoFields>(`${id}/video_ads`, params as Record<string, unknown>),
    },
  };
}

