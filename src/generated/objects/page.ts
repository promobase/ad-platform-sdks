import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdSetFields } from "./ad-set.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { AdsEligibilityFields } from "./ads-eligibility.ts";
import type { AlbumFields } from "./album.ts";
import type { ApplicationFields } from "./application.ts";
import type { ArAdsDataContainerFields } from "./ar-ads-data-container.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { BusinessFields } from "./business.ts";
import type { BusinessProjectFields } from "./business-project.ts";
import type { CTXOptimizationEligibilityFields } from "./ctx-optimization-eligibility.ts";
import type { CTXPartnerAppWelcomeMessageFlowFields } from "./ctx-partner-app-welcome-message-flow.ts";
import type { CanvasFields } from "./canvas.ts";
import type { CanvasBodyElementFields } from "./canvas-body-element.ts";
import type { ChatPluginFields } from "./chat-plugin.ts";
import type { CommerceMerchantSettingsFields } from "./commerce-merchant-settings.ts";
import type { CommerceMerchantSettingsSetupStatusFields } from "./commerce-merchant-settings-setup-status.ts";
import type { CommerceOrderFields } from "./commerce-order.ts";
import type { CommerceOrderTransactionDetailFields } from "./commerce-order-transaction-detail.ts";
import type { CommercePayoutFields } from "./commerce-payout.ts";
import type { CopyrightAttributionInsightsFields } from "./copyright-attribution-insights.ts";
import type { CoverPhotoFields } from "./cover-photo.ts";
import type { CustomUserSettingsFields } from "./custom-user-settings.ts";
import type { DatasetFields } from "./dataset.ts";
import type { EngagementFields } from "./engagement.ts";
import type { EventFields } from "./event.ts";
import type { FantasyGameFields } from "./fantasy-game.ts";
import type { HasLeadAccessFields } from "./has-lead-access.ts";
import type { IGUserFields } from "./ig-user.ts";
import type { ImageCopyrightFields } from "./image-copyright.ts";
import type { InsightsResultFields } from "./insights-result.ts";
import type { LeadgenFormFields } from "./leadgen-form.ts";
import type { LiveVideoFields } from "./live-video.ts";
import type { LocationFields } from "./location.ts";
import type { MailingAddressFields } from "./mailing-address.ts";
import type { MediaFingerprintFields } from "./media-fingerprint.ts";
import type { MessagingFeatureReviewFields } from "./messaging-feature-review.ts";
import type { MessagingFeatureStatusFields } from "./messaging-feature-status.ts";
import type { MessengerAdsPartialAutomatedStepListFields } from "./messenger-ads-partial-automated-step-list.ts";
import type { MessengerBusinessTemplateFields } from "./messenger-business-template.ts";
import type { MessengerCallPermissionsFields } from "./messenger-call-permissions.ts";
import type { MessengerCallSettingsFields } from "./messenger-call-settings.ts";
import type { MessengerProfileFields } from "./messenger-profile.ts";
import type { PageCallToActionFields } from "./page-call-to-action.ts";
import type { PageCategoryFields } from "./page-category.ts";
import type { PageParkingFields } from "./page-parking.ts";
import type { PagePaymentOptionsFields } from "./page-payment-options.ts";
import type { PagePostFields } from "./page-post.ts";
import type { PagePostExperimentFields } from "./page-post-experiment.ts";
import type { PageRestaurantServicesFields } from "./page-restaurant-services.ts";
import type { PageRestaurantSpecialtiesFields } from "./page-restaurant-specialties.ts";
import type { PageSettingsFields } from "./page-settings.ts";
import type { PageStartInfoFields } from "./page-start-info.ts";
import type { PageThreadOwnerFields } from "./page-thread-owner.ts";
import type { PageUserMessageThreadLabelFields } from "./page-user-message-thread-label.ts";
import type { PersonaFields } from "./persona.ts";
import type { PhotoFields } from "./photo.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProfileFields } from "./profile.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";
import type { RTBDynamicPostFields } from "./rtb-dynamic-post.ts";
import type { RecommendationFields } from "./recommendation.ts";
import type { ShopFields } from "./shop.ts";
import type { StatusFields } from "./status.ts";
import type { StoreLocationFields } from "./store-location.ts";
import type { StoriesFields } from "./stories.ts";
import type { TabFields } from "./tab.ts";
import type { TargetingFields } from "./targeting.ts";
import type { UnifiedThreadFields } from "./unified-thread.ts";
import type { UserFields } from "./user.ts";
import type { UserPageOneTimeOptInTokenSettingsFields } from "./user-page-one-time-opt-in-token-settings.ts";
import type { VideoCopyrightFields } from "./video-copyright.ts";
import type { VideoCopyrightMatchFields } from "./video-copyright-match.ts";
import type { VideoCopyrightRuleFields } from "./video-copyright-rule.ts";
import type { VideoListFields } from "./video-list.ts";
import type { VoipInfoFields } from "./voip-info.ts";

export interface PageFields {
  about: string;
  access_token: string;
  ad_campaign: AdSetFields;
  affiliation: string;
  app_id: string;
  artists_we_like: string;
  attire: string;
  available_promo_offer_ids: Record<string, Record<string, string>[]>[];
  awards: string;
  band_interests: string;
  band_members: string;
  best_page: PageFields;
  bio: string;
  birthday: string;
  booking_agent: string;
  breaking_news_usage: Record<string, unknown>;
  built: string;
  business: Record<string, unknown>;
  can_checkin: boolean;
  can_post: boolean;
  category: string;
  category_list: PageCategoryFields[];
  checkins: number;
  company_overview: string;
  connected_instagram_account: IGUserFields;
  connected_page_backed_instagram_account: IGUserFields;
  contact_address: MailingAddressFields;
  copyright_attribution_insights: CopyrightAttributionInsightsFields;
  copyright_whitelisted_ig_partners: string[];
  country_page_likes: number;
  cover: CoverPhotoFields;
  culinary_team: string;
  current_location: string;
  delivery_and_pickup_option_info: string[];
  description: string;
  description_html: string;
  differently_open_offerings: Record<string, boolean>[];
  directed_by: string;
  display_subtext: string;
  displayed_message_response_time: string;
  does_viewer_have_page_permission_link_ig: boolean;
  emails: string[];
  engagement: EngagementFields;
  fan_count: number;
  featured_video: AdVideoFields;
  features: string;
  followers_count: number;
  food_styles: string[];
  founded: string;
  general_info: string;
  general_manager: string;
  genre: string;
  global_brand_page_name: string;
  global_brand_root_id: string;
  has_added_app: boolean;
  has_lead_access: HasLeadAccessFields;
  has_transitioned_to_new_page_experience: boolean;
  has_whatsapp_business_number: boolean;
  has_whatsapp_number: boolean;
  hometown: string;
  hours: Record<string, string>;
  id: string;
  impressum: string;
  influences: string;
  instagram_business_account: IGUserFields;
  is_always_open: boolean;
  is_calling_eligible: boolean;
  is_chain: boolean;
  is_community_page: boolean;
  is_eligible_for_branded_content: boolean;
  is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web: boolean;
  is_messenger_bot_get_started_enabled: boolean;
  is_messenger_platform_bot: boolean;
  is_owned: boolean;
  is_permanently_closed: boolean;
  is_published: boolean;
  is_unclaimed: boolean;
  is_verified: boolean;
  is_webhooks_subscribed: boolean;
  keywords: Record<string, unknown>;
  leadgen_tos_acceptance_time: string;
  leadgen_tos_accepted: boolean;
  leadgen_tos_accepting_user: UserFields;
  link: string;
  location: LocationFields;
  members: string;
  merchant_id: string;
  merchant_review_status: string;
  messaging_feature_status: MessagingFeatureStatusFields;
  messenger_ads_default_icebreakers: string[];
  messenger_ads_default_quick_replies: string[];
  messenger_ads_quick_replies_type: string;
  mini_shop_storefront: ShopFields;
  mission: string;
  mpg: string;
  name: string;
  name_with_location_descriptor: string;
  network: string;
  new_like_count: number;
  offer_eligible: boolean;
  overall_star_rating: number;
  owner_business: BusinessFields;
  page_token: string;
  parent_page: PageFields;
  parking: PageParkingFields;
  payment_options: PagePaymentOptionsFields;
  personal_info: string;
  personal_interests: string;
  pharma_safety_info: string;
  phone: string;
  pickup_options: string[];
  place_type: string;
  plot_outline: string;
  preferred_audience: TargetingFields;
  press_contact: string;
  price_range: string;
  priority_hours: Record<string, string>[];
  privacy_info_url: string;
  produced_by: string;
  products: string;
  promotion_eligible: boolean;
  promotion_ineligible_reason: string;
  public_transit: string;
  rating_count: number;
  recipient: string;
  record_label: string;
  release_date: string;
  restaurant_services: PageRestaurantServicesFields;
  restaurant_specialties: PageRestaurantSpecialtiesFields;
  schedule: string;
  screenplay_by: string;
  season: string;
  single_line_address: string;
  starring: string;
  start_info: PageStartInfoFields;
  store_code: string;
  store_location_descriptor: string;
  store_number: number;
  studio: string;
  supports_donate_button_in_live_video: boolean;
  talking_about_count: number;
  temporary_status: string;
  unread_message_count: number;
  unread_notif_count: number;
  unseen_message_count: number;
  user_access_expire_time: string;
  username: string;
  verification_status: string;
  voip_info: VoipInfoFields;
  website: string;
  were_here_count: number;
  whatsapp_number: string;
  written_by: string;
}

export interface PageCreateAbTestsParams {
  control_video_id: string;
  description: string;
  duration: number;
  experiment_video_ids: string[];
  name: string;
  optimization_goal: string;
  scheduled_experiment_timestamp?: number;
  [key: string]: unknown;
}

export interface PageListAdsEligibilityParams {
  ads_account_id?: string;
  [key: string]: unknown;
}

export interface PageListAdsPostsParams {
  exclude_dynamic_ads?: boolean;
  include_inline_create?: boolean;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface PageDeleteAgenciesParams {
  business: string;
  [key: string]: unknown;
}

export interface PageCreateAgenciesParams {
  business: string;
  permitted_tasks?: string[];
  [key: string]: unknown;
}

export interface PageDeleteAssignedUsersParams {
  user: number;
  [key: string]: unknown;
}

export interface PageListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface PageCreateAssignedUsersParams {
  tasks?: string[];
  user: number;
  [key: string]: unknown;
}

export interface PageDeleteBlockedParams {
  asid?: string;
  psid?: number;
  uid?: number;
  user?: number;
  [key: string]: unknown;
}

export interface PageListBlockedParams {
  uid?: number;
  user?: number;
  [key: string]: unknown;
}

export interface PageCreateBlockedParams {
  asid?: string[];
  psid?: number[];
  uid?: string[];
  user?: string[];
  [key: string]: unknown;
}

export interface PageCreateBusinessMessagingFeatureStatusParams {
  features: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface PageListBusinessprojectsParams {
  business?: string;
  [key: string]: unknown;
}

export interface PageCreateCallMetricsParams {
  audio_stats: Record<string, unknown>;
  call_ended_time: string;
  call_id: string;
  end_call_reason: string;
  end_call_subreason?: string;
  first_audio_packet_received_time: string;
  first_video_packet_received_time?: string;
  platform: string;
  video_stats?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageCreateCallsParams {
  action: string;
  call_id?: string;
  from_version?: number;
  platform?: string;
  session?: Record<string, unknown>;
  to?: string;
  to_version?: number;
  tracks?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface PageCreateCanvasElementsParams {
  canvas_button?: Record<string, unknown>;
  canvas_carousel?: Record<string, unknown>;
  canvas_existing_post?: Record<string, unknown>;
  canvas_footer?: Record<string, unknown>;
  canvas_header?: Record<string, unknown>;
  canvas_lead_form?: Record<string, unknown>;
  canvas_photo?: Record<string, unknown>;
  canvas_product_list?: Record<string, unknown>;
  canvas_product_set?: Record<string, unknown>;
  canvas_store_locator?: Record<string, unknown>;
  canvas_template_video?: Record<string, unknown>;
  canvas_text?: Record<string, unknown>;
  canvas_video?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageListCanvasesParams {
  is_hidden?: boolean;
  is_published?: boolean;
  [key: string]: unknown;
}

export interface PageCreateCanvasesParams {
  background_color?: string;
  body_element_ids?: string[];
  enable_swipe_to_open?: boolean;
  hero_asset_facebook_post_id?: string;
  hero_asset_instagram_media_id?: string;
  is_hidden?: boolean;
  is_published?: boolean;
  name?: string;
  source_template_id?: string;
  [key: string]: unknown;
}

export interface PageListCommerceOrdersParams {
  filters?: string[];
  state?: string[];
  updated_after?: string;
  updated_before?: string;
  [key: string]: unknown;
}

export interface PageListCommercePayoutsParams {
  end_time?: string;
  start_time?: string;
  [key: string]: unknown;
}

export interface PageListCommerceTransactionsParams {
  end_time?: string;
  payout_reference_id?: string;
  start_time?: string;
  [key: string]: unknown;
}

export interface PageListConversationsParams {
  folder?: string;
  platform?: string;
  tags?: string[];
  user_id?: string;
  [key: string]: unknown;
}

export interface PageCreateCopyrightManualClaimsParams {
  action?: string;
  action_reason?: string;
  countries?: Record<string, unknown>;
  match_content_type: string;
  matched_asset_id: string;
  reference_asset_id: string;
  selected_segments?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface PageCreateCustomLabelsParams {
  name?: string;
  page_label_name: string;
  [key: string]: unknown;
}

export interface PageDeleteCustomUserSettingsParams {
  params: string[];
  psid: string;
  [key: string]: unknown;
}

export interface PageListCustomUserSettingsParams {
  psid: string;
  [key: string]: unknown;
}

export interface PageCreateCustomUserSettingsParams {
  persistent_menu?: Record<string, unknown>[];
  psid: string;
  [key: string]: unknown;
}

export interface PageCreateDatasetParams {
  dataset_name?: string;
  [key: string]: unknown;
}

export interface PageListEventsParams {
  event_state_filter?: string[];
  include_canceled?: boolean;
  time_filter?: string;
  type?: string;
  [key: string]: unknown;
}

export interface PageCreateExtendThreadControlParams {
  duration?: number;
  recipient: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageListFeedParams {
  include_hidden?: boolean;
  limit?: number;
  show_expired?: boolean;
  with?: string;
  [key: string]: unknown;
}

export interface PageCreateFeedParams {
  actions?: Record<string, unknown>;
  album_id?: string;
  android_key_hash?: string;
  application_id?: string;
  asked_fun_fact_prompt_id?: number;
  asset3d_id?: string;
  associated_id?: string;
  attach_place_suggestion?: boolean;
  attached_media?: Record<string, unknown>[];
  audience_exp?: boolean;
  backdated_time?: string;
  backdated_time_granularity?: string;
  breaking_news?: boolean;
  breaking_news_expiration?: number;
  call_to_action?: Record<string, unknown>;
  caption?: string;
  child_attachments?: Record<string, unknown>[];
  client_mutation_id?: string;
  composer_entry_picker?: string;
  composer_entry_point?: string;
  composer_entry_time?: number;
  composer_session_events_log?: string;
  composer_session_id?: string;
  composer_source_surface?: string;
  composer_type?: string;
  connection_class?: string;
  content_attachment?: string;
  coordinates?: Record<string, unknown>;
  cta_link?: string;
  cta_type?: string;
  description?: string;
  direct_share_status?: number;
  enforce_link_ownership?: boolean;
  expanded_height?: number;
  expanded_width?: number;
  feed_targeting?: Record<string, unknown>;
  formatting?: string;
  fun_fact_prompt_id?: string;
  fun_fact_toastee_id?: number;
  height?: number;
  home_checkin_city_id?: Record<string, unknown>;
  image_crops?: Record<string, unknown>;
  implicit_with_tags?: number[];
  instant_game_entry_point_data?: string;
  ios_bundle_id?: string;
  is_backout_draft?: boolean;
  is_boost_intended?: boolean;
  is_explicit_location?: boolean;
  is_explicit_share?: boolean;
  is_group_linking_post?: boolean;
  is_photo_container?: boolean;
  link?: string;
  location_source_id?: string;
  manual_privacy?: boolean;
  message?: string;
  multi_share_end_card?: boolean;
  multi_share_optimized?: boolean;
  name?: string;
  nectar_module?: string;
  object_attachment?: string;
  og_action_type_id?: string;
  og_hide_object_attachment?: boolean;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_set_profile_badge?: boolean;
  og_suggestion_mechanism?: string;
  page_recommendation?: string;
  picture?: string;
  place?: Record<string, unknown>;
  place_attachment_setting?: string;
  place_list?: string;
  place_list_data?: unknown[];
  post_surfaces_blacklist?: string[];
  posting_to_redspace?: string;
  privacy?: string;
  prompt_id?: string;
  prompt_tracking_string?: string;
  properties?: Record<string, unknown>;
  proxied_app_id?: string;
  publish_event_id?: number;
  published?: boolean;
  quote?: string;
  ref?: string[];
  referenceable_image_ids?: string[];
  referral_id?: string;
  scheduled_publish_time?: string;
  source?: string;
  sponsor_id?: string;
  sponsor_relationship?: number;
  suggested_place_id?: Record<string, unknown>;
  tags?: number[];
  target_surface?: string;
  targeting?: Record<string, unknown>;
  text_format_metadata?: string;
  text_format_preset_id?: string;
  text_only_place?: string;
  thumbnail?: File | Blob | ReadableStream;
  time_since_original_post?: number;
  title?: string;
  tracking_info?: string;
  unpublished_content_type?: string;
  user_selected_tags?: boolean;
  video_start_time_ms?: number;
  viewer_coordinates?: Record<string, unknown>;
  width?: number;
  [key: string]: unknown;
}

export interface PageCreateImageCopyrightsParams {
  artist?: string;
  attribution_link?: string;
  creator?: string;
  custom_id?: string;
  description?: string;
  filename: string;
  geo_ownership: string[];
  original_content_creation_date?: number;
  reference_photo: string;
  title?: string;
  [key: string]: unknown;
}

export interface PageListInsightsParams {
  breakdown?: Record<string, unknown>[];
  date_preset?: string;
  metric?: Record<string, unknown>[];
  period?: string;
  show_description_from_api_doc?: boolean;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface PageCreateLeadgenFormsParams {
  allow_organic_lead_retrieval?: boolean;
  block_display_for_non_targeted_viewer?: boolean;
  context_card?: Record<string, unknown>;
  cover_photo?: File | Blob | ReadableStream;
  custom_disclaimer?: Record<string, unknown>;
  follow_up_action_url?: string;
  is_for_canvas?: boolean;
  is_optimized_for_quality?: boolean;
  is_phone_sms_verify_enabled?: boolean;
  locale?: string;
  name: string;
  privacy_policy?: Record<string, unknown>;
  question_page_custom_headline?: string;
  questions: Record<string, unknown>[];
  should_enforce_work_email?: boolean;
  thank_you_page?: Record<string, unknown>;
  tracking_parameters?: Record<string, unknown>;
  upload_gated_file?: File | Blob | ReadableStream;
  [key: string]: unknown;
}

export interface PageListLikesParams {
  target_id?: string;
  [key: string]: unknown;
}

export interface PageListLiveVideosParams {
  broadcast_status?: string[];
  source?: string;
  [key: string]: unknown;
}

export interface PageCreateLiveVideosParams {
  content_tags?: string[];
  crossposting_actions?: Record<string, unknown>[];
  custom_labels?: string[];
  description?: string;
  enable_backup_ingest?: boolean;
  encoding_settings?: string;
  event_params?: Record<string, unknown>;
  fisheye_video_cropped?: boolean;
  front_z_rotation?: number;
  game_show?: Record<string, unknown>;
  is_audio_only?: boolean;
  is_spherical?: boolean;
  original_fov?: number;
  privacy?: string;
  projection?: string;
  published?: boolean;
  schedule_custom_profile_image?: File | Blob | ReadableStream;
  spatial_audio_format?: string;
  status?: string;
  stereoscopic_mode?: string;
  stop_on_delete_stream?: boolean;
  stream_type?: string;
  targeting?: Record<string, unknown>;
  title?: string;
  [key: string]: unknown;
}

export interface PageDeleteLocationsParams {
  location_page_ids: string[];
  store_numbers: number[];
  [key: string]: unknown;
}

export interface PageCreateLocationsParams {
  always_open?: boolean;
  delivery_and_pickup_option_info?: string[];
  differently_open_offerings?: Record<string, unknown>;
  hours?: Record<string, unknown>;
  ignore_warnings?: boolean;
  location?: Record<string, unknown>;
  location_page_id?: string;
  old_store_number?: number;
  page_username?: string;
  permanently_closed?: boolean;
  phone?: string;
  pickup_options?: string[];
  place_topics?: string[];
  price_range?: string;
  recommendation_action?: string;
  recommendation_ds?: string;
  recommendation_store_id?: number;
  store_code?: string;
  store_location_descriptor?: string;
  store_name?: string;
  store_number: number;
  temporary_status?: string;
  type?: string;
  website?: string;
  [key: string]: unknown;
}

export interface PageListMediaFingerprintsParams {
  universal_content_id?: string;
  [key: string]: unknown;
}

export interface PageCreateMediaFingerprintsParams {
  fingerprint_content_type: string;
  metadata: unknown[];
  source: string;
  title: string;
  universal_content_id?: string;
  [key: string]: unknown;
}

export interface PageCreateMessageAttachmentsParams {
  message: Record<string, unknown>;
  platform?: string;
  [key: string]: unknown;
}

export interface PageDeleteMessageTemplatesParams {
  name: string;
  template_id?: string;
  [key: string]: unknown;
}

export interface PageListMessageTemplatesParams {
  category?: string[];
  content?: string;
  language?: string[];
  name?: string;
  name_or_content?: string;
  status?: string[];
  [key: string]: unknown;
}

export interface PageCreateMessageTemplatesParams {
  category: string;
  components?: Record<string, unknown>[];
  language: string;
  library_template_button_inputs?: Record<string, unknown>[];
  library_template_name?: string;
  name: string;
  parameter_format?: string;
  [key: string]: unknown;
}

export interface PageCreateMessagesParams {
  folder?: string;
  message?: Record<string, unknown>;
  messaging_type?: string;
  notification_type?: string;
  payload?: string;
  persona_id?: string;
  recipient: Record<string, unknown>;
  reply_to?: Record<string, unknown>;
  sender_action?: string;
  suggestion_action?: string;
  tag?: Record<string, unknown>;
  thread_control?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageListMessengerCallPermissionsParams {
  psid: string;
  [key: string]: unknown;
}

export interface PageCreateMessengerCallSettingsParams {
  audio_enabled?: boolean;
  call_hours?: Record<string, unknown>;
  call_routing?: Record<string, unknown>;
  icon_enabled?: boolean;
  video_enabled?: boolean;
  [key: string]: unknown;
}

export interface PageCreateMessengerLeadFormsParams {
  account_id?: number;
  block_send_api?: boolean;
  exit_keyphrases?: string;
  handover_app_id?: number;
  handover_summary?: boolean;
  privacy_url?: string;
  reminder_text?: string;
  step_list: Record<string, unknown>[];
  stop_question_message?: string;
  template_name?: string;
  tracking_parameters?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageDeleteMessengerProfileParams {
  fields: string[];
  platform?: string;
  [key: string]: unknown;
}

export interface PageListMessengerProfileParams {
  platform?: string;
  [key: string]: unknown;
}

export interface PageCreateMessengerProfileParams {
  account_linking_url?: string;
  commands?: Record<string, unknown>[];
  description?: Record<string, unknown>[];
  get_started?: Record<string, unknown>;
  ice_breakers?: Record<string, unknown>[];
  persistent_menu?: Record<string, unknown>[];
  platform?: string;
  whitelisted_domains?: string[];
  [key: string]: unknown;
}

export interface PageCreateModerateConversationsParams {
  actions: string[];
  user_ids: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface PageCreateNlpConfigsParams {
  api_version?: Record<string, unknown>;
  custom_token?: string;
  model?: string;
  n_best?: number;
  nlp_enabled?: boolean;
  other_language_support?: Record<string, unknown>;
  verbose?: boolean;
  [key: string]: unknown;
}

export interface PageListNotificationMessageTokensParams {
  custom_audience_ids?: string[];
  do_not_return_duplicates?: boolean;
  [key: string]: unknown;
}

export interface PageCreateNotificationMessagesDevSupportParams {
  developer_action: string;
  recipient: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageCreatePageWhatsappNumberVerificationParams {
  verification_code?: string;
  whatsapp_number: string;
  [key: string]: unknown;
}

export interface PageCreatePassThreadControlParams {
  metadata?: string;
  recipient: Record<string, unknown>;
  target_app_id?: string;
  [key: string]: unknown;
}

export interface PageCreatePersonasParams {
  name: string;
  profile_picture_url: string;
  [key: string]: unknown;
}

export interface PageCreatePhotoStoriesParams {
  photo_id?: string;
  [key: string]: unknown;
}

export interface PageListPhotosParams {
  biz_tag_id?: number;
  business_id?: string;
  type?: string;
  [key: string]: unknown;
}

export interface PageCreatePhotosParams {
  aid?: string;
  allow_spherical_photo?: boolean;
  alt_text_custom?: string;
  android_key_hash?: string;
  application_id?: string;
  attempt?: number;
  audience_exp?: boolean;
  backdated_time?: string;
  backdated_time_granularity?: string;
  caption?: string;
  composer_session_id?: string;
  direct_share_status?: number;
  feed_targeting?: Record<string, unknown>;
  filter_type?: number;
  full_res_is_coming_later?: boolean;
  initial_view_heading_override_degrees?: number;
  initial_view_pitch_override_degrees?: number;
  initial_view_vertical_fov_override_degrees?: number;
  ios_bundle_id?: string;
  is_explicit_location?: boolean;
  is_explicit_place?: boolean;
  location_source_id?: string;
  manual_privacy?: boolean;
  message?: string;
  name?: string;
  nectar_module?: string;
  no_story?: boolean;
  offline_id?: number;
  og_action_type_id?: string;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_set_profile_badge?: boolean;
  og_suggestion_mechanism?: string;
  parent_media_id?: number;
  place?: Record<string, unknown>;
  privacy?: string;
  profile_id?: number;
  provenance_info?: Record<string, unknown>;
  proxied_app_id?: string;
  published?: boolean;
  qn?: string;
  scheduled_publish_time?: number;
  spherical_metadata?: Record<string, unknown>;
  sponsor_id?: string;
  sponsor_relationship?: number;
  tags?: Record<string, unknown>[];
  target_id?: number;
  targeting?: Record<string, unknown>;
  temporary?: boolean;
  time_since_original_post?: number;
  uid?: number;
  unpublished_content_type?: string;
  url?: string;
  user_selected_tags?: boolean;
  vault_image_id?: string;
  [key: string]: unknown;
}

export interface PageListPictureParams {
  height?: number;
  redirect?: boolean;
  type?: string;
  width?: number;
  [key: string]: unknown;
}

export interface PageCreatePictureParams {
  android_key_hash?: string;
  burn_media_effect?: boolean;
  caption?: string;
  composer_session_id?: string;
  frame_entrypoint?: string;
  has_umg?: boolean;
  height?: number;
  ios_bundle_id?: string;
  media_effect_ids?: number[];
  media_effect_source_object_id?: number;
  msqrd_mask_id?: string;
  photo?: string;
  picture?: string;
  profile_pic_method?: string;
  profile_pic_source?: string;
  proxied_app_id?: number;
  qn?: string;
  reuse?: boolean;
  scaled_crop_rect?: Record<string, unknown>;
  set_profile_photo_shield?: string;
  sticker_id?: number;
  sticker_source_object_id?: number;
  suppress_stories?: boolean;
  width?: number;
  x?: number;
  y?: number;
  [key: string]: unknown;
}

export interface PageListPostsParams {
  include_hidden?: boolean;
  limit?: number;
  q?: string;
  show_expired?: boolean;
  with?: string;
  [key: string]: unknown;
}

export interface PageListPublishedPostsParams {
  include_hidden?: boolean;
  limit?: number;
  show_expired?: boolean;
  with?: string;
  [key: string]: unknown;
}

export interface PageCreateReleaseThreadControlParams {
  recipient: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageCreateRequestThreadControlParams {
  metadata?: string;
  recipient: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageListRolesParams {
  include_deactivated?: boolean;
  uid?: number;
  [key: string]: unknown;
}

export interface PageListSecondaryReceiversParams {
  platform?: string;
  [key: string]: unknown;
}

export interface PageCreateSettingsParams {
  option?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageCreateSpaceParticipantsParams {
  recipient: Record<string, unknown>;
  space_name: string;
  [key: string]: unknown;
}

export interface PageListStoriesParams {
  since?: string;
  status?: string[];
  until?: string;
  [key: string]: unknown;
}

export interface PageCreateSubscribedAppsParams {
  subscribed_fields: string[];
  [key: string]: unknown;
}

export interface PageListTabsParams {
  tab?: string[];
  [key: string]: unknown;
}

export interface PageCreateTakeThreadControlParams {
  metadata?: string;
  recipient: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PageListThreadOwnerParams {
  recipient: string;
  [key: string]: unknown;
}

export interface PageListThreadsParams {
  folder?: string;
  platform?: string;
  tags?: string[];
  user_id?: string;
  [key: string]: unknown;
}

export interface PageCreateUnlinkAccountsParams {
  psid: string;
  [key: string]: unknown;
}

export interface PageListVideoCopyrightRulesParams {
  selected_rule_id?: string;
  source?: string;
  [key: string]: unknown;
}

export interface PageCreateVideoCopyrightRulesParams {
  condition_groups: Record<string, unknown>[];
  name: string;
  [key: string]: unknown;
}

export interface PageCreateVideoCopyrightsParams {
  attribution_id?: string;
  content_category?: string;
  copyright_content_id: string;
  excluded_ownership_countries?: string[];
  excluded_ownership_segments?: Record<string, unknown>[];
  is_reference_disabled?: boolean;
  is_reference_video?: boolean;
  monitoring_type?: string;
  ownership_countries?: string[];
  rule_id?: string;
  tags?: string[];
  whitelisted_ids?: string[];
  whitelisted_ig_user_ids?: string[];
  [key: string]: unknown;
}

export interface PageListVideoReelsParams {
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface PageCreateVideoReelsParams {
  description?: string;
  feed_targeting?: Record<string, unknown>;
  place?: string;
  scheduled_publish_time?: string;
  targeting?: Record<string, unknown>;
  title?: string;
  upload_phase: string;
  video_id?: string;
  video_state?: string;
  [key: string]: unknown;
}

export interface PageCreateVideoStoriesParams {
  description?: string;
  feed_targeting?: Record<string, unknown>;
  place?: string;
  scheduled_publish_time?: string;
  targeting?: Record<string, unknown>;
  title?: string;
  upload_phase: string;
  video_id?: string;
  video_state?: string;
  [key: string]: unknown;
}

export interface PageListVideosParams {
  type?: string;
  [key: string]: unknown;
}

export interface PageCreateVideosParams {
  ad_breaks?: unknown[];
  application_id?: string;
  asked_fun_fact_prompt_id?: number;
  audio_story_wave_animation_handle?: string;
  backdated_post?: unknown[];
  call_to_action?: Record<string, unknown>;
  composer_entry_picker?: string;
  composer_entry_point?: string;
  composer_entry_time?: number;
  composer_session_events_log?: string;
  composer_session_id?: string;
  composer_source_surface?: string;
  composer_type?: string;
  container_type?: string;
  content_category?: string;
  content_tags?: string[];
  creative_tools?: string;
  crossposted_video_id?: string;
  custom_labels?: string[];
  description?: string;
  direct_share_status?: number;
  edit_description_spec?: Record<string, unknown>;
  embeddable?: boolean;
  end_offset?: number;
  expiration?: Record<string, unknown>;
  fbuploader_video_file_chunk?: string;
  feed_targeting?: Record<string, unknown>;
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
  is_explicit_share?: boolean;
  is_group_linking_post?: boolean;
  is_partnership_ad?: boolean;
  is_voice_clip?: boolean;
  location_source_id?: string;
  manual_privacy?: boolean;
  multilingual_data?: Record<string, unknown>[];
  no_story?: boolean;
  og_action_type_id?: string;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_suggestion_mechanism?: string;
  original_fov?: number;
  original_projection_type?: string;
  partnership_ad_ad_code?: string;
  publish_event_id?: number;
  published?: boolean;
  reference_only?: boolean;
  referenced_sticker_id?: string;
  replace_video_id?: string;
  scheduled_publish_time?: number;
  secret?: boolean;
  slideshow_spec?: Record<string, unknown>;
  social_actions?: boolean;
  source?: string;
  source_instagram_media_id?: string;
  specified_dialect?: string;
  spherical?: boolean;
  sponsor_id?: string;
  sponsor_relationship?: number;
  start_offset?: number;
  swap_mode?: string;
  targeting?: Record<string, unknown>;
  text_format_metadata?: string;
  thumb?: File | Blob | ReadableStream;
  time_since_original_post?: number;
  title?: string;
  transcode_setting_properties?: string;
  universal_video_id?: string;
  unpublished_content_type?: string;
  upload_phase?: string;
  upload_session_id?: string;
  upload_setting_properties?: string;
  video_asset_id?: string;
  video_file_chunk?: string;
  video_id_original?: string;
  video_start_time_ms?: number;
  waterfall_id?: string;
  [key: string]: unknown;
}

export interface PageListVisitorPostsParams {
  include_hidden?: boolean;
  limit?: number;
  show_expired?: boolean;
  with?: string;
  [key: string]: unknown;
}

export interface PageDeleteWelcomeMessageFlowsParams {
  flow_id: string;
  [key: string]: unknown;
}

export interface PageListWelcomeMessageFlowsParams {
  app_id?: string;
  flow_id?: string;
  [key: string]: unknown;
}

export interface PageCreateWelcomeMessageFlowsParams {
  eligible_platforms?: string[];
  flow_id?: string;
  name?: string;
  welcome_message_flow?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface PageUpdateParams {
  about?: string;
  accept_crossposting_handshake?: Record<string, unknown>[];
  allow_spherical_photo?: boolean;
  attire?: string;
  begin_crossposting_handshake?: Record<string, unknown>[];
  bio?: string;
  category_list?: string[];
  company_overview?: string;
  contact_address?: Record<string, unknown>;
  cover?: string;
  culinary_team?: string;
  delivery_and_pickup_option_info?: string[];
  description?: string;
  differently_open_offerings?: Record<string, unknown>;
  directed_by?: string;
  displayed_message_response_time?: string;
  emails?: string[];
  focus_x?: number;
  focus_y?: number;
  food_styles?: string[];
  gen_ai_provenance_type?: string;
  general_info?: string;
  general_manager?: string;
  genre?: string;
  hours?: Record<string, unknown>;
  ignore_coordinate_warnings?: boolean;
  impressum?: string;
  is_always_open?: boolean;
  is_permanently_closed?: boolean;
  is_published?: boolean;
  is_webhooks_subscribed?: boolean;
  location?: Record<string, unknown>;
  menu?: string;
  mission?: string;
  no_feed_story?: boolean;
  no_notification?: boolean;
  offset_x?: number;
  offset_y?: number;
  parking?: Record<string, unknown>;
  payment_options?: Record<string, unknown>;
  phone?: string;
  pickup_options?: string[];
  plot_outline?: string;
  price_range?: string;
  priority_hours?: Record<string, unknown>;
  public_transit?: string;
  restaurant_services?: Record<string, unknown>;
  restaurant_specialties?: Record<string, unknown>;
  scrape?: boolean;
  service_details?: string;
  spherical_metadata?: Record<string, unknown>;
  start_info?: Record<string, unknown>;
  store_location_descriptor?: string;
  temporary_status?: string;
  website?: string;
  zoom_scale_x?: number;
  zoom_scale_y?: number;
  [key: string]: unknown;
}

export function pageNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageFields, F[number]>>(`${id}`, opts),
    update: (params: PageUpdateParams) =>
      client.post<PageFields>(`${id}`, params as Record<string, unknown>),
    abTests: {
      list: <F extends (keyof PagePostExperimentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PagePostExperimentFields, F[number]>>(client, `${id}/ab_tests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateAbTestsParams) =>
        client.post<PagePostExperimentFields>(`${id}/ab_tests`, params as Record<string, unknown>),
    },
    adsEligibility: <F extends (keyof AdsEligibilityFields)[]>(opts: { fields: F; params?: PageListAdsEligibilityParams }) =>
      new Cursor<Pick<AdsEligibilityFields, F[number]>>(client, `${id}/ads_eligibility`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adsPosts: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: PageListAdsPostsParams }) =>
      new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/ads_posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    agencies: {
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateAgenciesParams) =>
        client.post<PageFields>(`${id}/agencies`, params as Record<string, unknown>),
      delete: (params: PageDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    albums: <F extends (keyof AlbumFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AlbumFields, F[number]>>(client, `${id}/albums`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    arExperience: <F extends (keyof ArAdsDataContainerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ArAdsDataContainerFields, F[number]>>(client, `${id}/ar_experience`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedUsers: {
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: PageListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateAssignedUsersParams) =>
        client.post<PageFields>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: PageDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
    blocked: {
      list: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: PageListBlockedParams }) =>
        new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/blocked`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateBlockedParams) =>
        client.post<Record<string, unknown>>(`${id}/blocked`, params as Record<string, unknown>),
      delete: (params: PageDeleteBlockedParams) =>
        client.delete(`${id}/blocked`, params as Record<string, unknown> ?? {}),
    },
    createBusinessMessagingFeatureStatu: (params: PageCreateBusinessMessagingFeatureStatusParams) =>
      client.post<PageFields>(`${id}/business_messaging_feature_status`, params as Record<string, unknown>),
    businessprojects: <F extends (keyof BusinessProjectFields)[]>(opts: { fields: F; params?: PageListBusinessprojectsParams }) =>
      new Cursor<Pick<BusinessProjectFields, F[number]>>(client, `${id}/businessprojects`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createCallMetric: (params: PageCreateCallMetricsParams) =>
      client.post<Record<string, unknown>>(`${id}/call_metrics`, params as Record<string, unknown>),
    callToActions: <F extends (keyof PageCallToActionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageCallToActionFields, F[number]>>(client, `${id}/call_to_actions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createCall: (params: PageCreateCallsParams) =>
      client.post<Record<string, unknown>>(`${id}/calls`, params as Record<string, unknown>),
    canvasElements: {
      list: <F extends (keyof CanvasBodyElementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<CanvasBodyElementFields, F[number]>>(client, `${id}/canvas_elements`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateCanvasElementsParams) =>
        client.post<CanvasBodyElementFields>(`${id}/canvas_elements`, params as Record<string, unknown>),
    },
    canvases: {
      list: <F extends (keyof CanvasFields)[]>(opts: { fields: F; params?: PageListCanvasesParams }) =>
        new Cursor<Pick<CanvasFields, F[number]>>(client, `${id}/canvases`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateCanvasesParams) =>
        client.post<CanvasFields>(`${id}/canvases`, params as Record<string, unknown>),
    },
    chatPlugin: <F extends (keyof ChatPluginFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ChatPluginFields, F[number]>>(client, `${id}/chat_plugin`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    commerceMerchantSettings: <F extends (keyof CommerceMerchantSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CommerceMerchantSettingsFields, F[number]>>(client, `${id}/commerce_merchant_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    commerceOrders: <F extends (keyof CommerceOrderFields)[]>(opts: { fields: F; params?: PageListCommerceOrdersParams }) =>
      new Cursor<Pick<CommerceOrderFields, F[number]>>(client, `${id}/commerce_orders`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    commercePayouts: <F extends (keyof CommercePayoutFields)[]>(opts: { fields: F; params?: PageListCommercePayoutsParams }) =>
      new Cursor<Pick<CommercePayoutFields, F[number]>>(client, `${id}/commerce_payouts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    commerceTransactions: <F extends (keyof CommerceOrderTransactionDetailFields)[]>(opts: { fields: F; params?: PageListCommerceTransactionsParams }) =>
      new Cursor<Pick<CommerceOrderTransactionDetailFields, F[number]>>(client, `${id}/commerce_transactions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    conversations: <F extends (keyof UnifiedThreadFields)[]>(opts: { fields: F; params?: PageListConversationsParams }) =>
      new Cursor<Pick<UnifiedThreadFields, F[number]>>(client, `${id}/conversations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createCopyrightManualClaim: (params: PageCreateCopyrightManualClaimsParams) =>
      client.post<VideoCopyrightMatchFields>(`${id}/copyright_manual_claims`, params as Record<string, unknown>),
    crosspostWhitelistedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/crosspost_whitelisted_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    ctxOptimizationEligibility: <F extends (keyof CTXOptimizationEligibilityFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CTXOptimizationEligibilityFields, F[number]>>(client, `${id}/ctx_optimization_eligibility`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    customLabels: {
      list: <F extends (keyof PageUserMessageThreadLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageUserMessageThreadLabelFields, F[number]>>(client, `${id}/custom_labels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateCustomLabelsParams) =>
        client.post<PageUserMessageThreadLabelFields>(`${id}/custom_labels`, params as Record<string, unknown>),
    },
    customUserSettings: {
      list: <F extends (keyof CustomUserSettingsFields)[]>(opts: { fields: F; params?: PageListCustomUserSettingsParams }) =>
        new Cursor<Pick<CustomUserSettingsFields, F[number]>>(client, `${id}/custom_user_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateCustomUserSettingsParams) =>
        client.post<PageFields>(`${id}/custom_user_settings`, params as Record<string, unknown>),
      delete: (params: PageDeleteCustomUserSettingsParams) =>
        client.delete(`${id}/custom_user_settings`, params as Record<string, unknown> ?? {}),
    },
    dataset: {
      list: <F extends (keyof DatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<DatasetFields, F[number]>>(client, `${id}/dataset`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateDatasetParams) =>
        client.post<DatasetFields>(`${id}/dataset`, params as Record<string, unknown>),
    },
    events: <F extends (keyof EventFields)[]>(opts: { fields: F; params?: PageListEventsParams }) =>
      new Cursor<Pick<EventFields, F[number]>>(client, `${id}/events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createExtendThreadControl: (params: PageCreateExtendThreadControlParams) =>
      client.post<PageFields>(`${id}/extend_thread_control`, params as Record<string, unknown>),
    fantasyGames: <F extends (keyof FantasyGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<FantasyGameFields, F[number]>>(client, `${id}/fantasy_games`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    feed: {
      list: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: PageListFeedParams }) =>
        new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/feed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateFeedParams) =>
        client.post<PageFields>(`${id}/feed`, params as Record<string, unknown>),
    },
    globalBrandChildren: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/global_brand_children`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    imageCopyrights: {
      list: <F extends (keyof ImageCopyrightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ImageCopyrightFields, F[number]>>(client, `${id}/image_copyrights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateImageCopyrightsParams) =>
        client.post<ImageCopyrightFields>(`${id}/image_copyrights`, params as Record<string, unknown>),
    },
    indexedVideos: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/indexed_videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: PageListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    instagramAccounts: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    leadgenForms: {
      list: <F extends (keyof LeadgenFormFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<LeadgenFormFields, F[number]>>(client, `${id}/leadgen_forms`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateLeadgenFormsParams) =>
        client.post<LeadgenFormFields>(`${id}/leadgen_forms`, params as Record<string, unknown>),
    },
    likes: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: PageListLikesParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    liveVideos: {
      list: <F extends (keyof LiveVideoFields)[]>(opts: { fields: F; params?: PageListLiveVideosParams }) =>
        new Cursor<Pick<LiveVideoFields, F[number]>>(client, `${id}/live_videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateLiveVideosParams) =>
        client.post<LiveVideoFields>(`${id}/live_videos`, params as Record<string, unknown>),
    },
    locations: {
      list: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageFields, F[number]>>(client, `${id}/locations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateLocationsParams) =>
        client.post<PageFields>(`${id}/locations`, params as Record<string, unknown>),
      delete: (params: PageDeleteLocationsParams) =>
        client.delete(`${id}/locations`, params as Record<string, unknown> ?? {}),
    },
    mediaFingerprints: {
      list: <F extends (keyof MediaFingerprintFields)[]>(opts: { fields: F; params?: PageListMediaFingerprintsParams }) =>
        new Cursor<Pick<MediaFingerprintFields, F[number]>>(client, `${id}/media_fingerprints`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateMediaFingerprintsParams) =>
        client.post<MediaFingerprintFields>(`${id}/media_fingerprints`, params as Record<string, unknown>),
    },
    createMessageAttachment: (params: PageCreateMessageAttachmentsParams) =>
      client.post<Record<string, unknown>>(`${id}/message_attachments`, params as Record<string, unknown>),
    messageTemplates: {
      list: <F extends (keyof MessengerBusinessTemplateFields)[]>(opts: { fields: F; params?: PageListMessageTemplatesParams }) =>
        new Cursor<Pick<MessengerBusinessTemplateFields, F[number]>>(client, `${id}/message_templates`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateMessageTemplatesParams) =>
        client.post<PageFields>(`${id}/message_templates`, params as Record<string, unknown>),
      delete: (params: PageDeleteMessageTemplatesParams) =>
        client.delete(`${id}/message_templates`, params as Record<string, unknown> ?? {}),
    },
    createMessage: (params: PageCreateMessagesParams) =>
      client.post<PageFields>(`${id}/messages`, params as Record<string, unknown>),
    messagingFeatureReview: <F extends (keyof MessagingFeatureReviewFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<MessagingFeatureReviewFields, F[number]>>(client, `${id}/messaging_feature_review`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    messengerCallPermissions: <F extends (keyof MessengerCallPermissionsFields)[]>(opts: { fields: F; params?: PageListMessengerCallPermissionsParams }) =>
      new Cursor<Pick<MessengerCallPermissionsFields, F[number]>>(client, `${id}/messenger_call_permissions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    messengerCallSettings: {
      list: <F extends (keyof MessengerCallSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<MessengerCallSettingsFields, F[number]>>(client, `${id}/messenger_call_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateMessengerCallSettingsParams) =>
        client.post<PageFields>(`${id}/messenger_call_settings`, params as Record<string, unknown>),
    },
    messengerLeadForms: {
      list: <F extends (keyof MessengerAdsPartialAutomatedStepListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<MessengerAdsPartialAutomatedStepListFields, F[number]>>(client, `${id}/messenger_lead_forms`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateMessengerLeadFormsParams) =>
        client.post<PageFields>(`${id}/messenger_lead_forms`, params as Record<string, unknown>),
    },
    messengerProfile: {
      list: <F extends (keyof MessengerProfileFields)[]>(opts: { fields: F; params?: PageListMessengerProfileParams }) =>
        new Cursor<Pick<MessengerProfileFields, F[number]>>(client, `${id}/messenger_profile`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateMessengerProfileParams) =>
        client.post<PageFields>(`${id}/messenger_profile`, params as Record<string, unknown>),
      delete: (params: PageDeleteMessengerProfileParams) =>
        client.delete(`${id}/messenger_profile`, params as Record<string, unknown> ?? {}),
    },
    createModerateConversation: (params: PageCreateModerateConversationsParams) =>
      client.post<PageFields>(`${id}/moderate_conversations`, params as Record<string, unknown>),
    createNlpConfig: (params: PageCreateNlpConfigsParams) =>
      client.post<PageFields>(`${id}/nlp_configs`, params as Record<string, unknown>),
    notificationMessageTokens: <F extends (keyof UserPageOneTimeOptInTokenSettingsFields)[]>(opts: { fields: F; params?: PageListNotificationMessageTokensParams }) =>
      new Cursor<Pick<UserPageOneTimeOptInTokenSettingsFields, F[number]>>(client, `${id}/notification_message_tokens`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createNotificationMessagesDevSupport: (params: PageCreateNotificationMessagesDevSupportParams) =>
      client.post<PageFields>(`${id}/notification_messages_dev_support`, params as Record<string, unknown>),
    pageBackedInstagramAccounts: {
      list: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<IGUserFields, F[number]>>(client, `${id}/page_backed_instagram_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: Record<string, unknown>) =>
        client.post<IGUserFields>(`${id}/page_backed_instagram_accounts`, params as Record<string, unknown>),
    },
    createPageWhatsappNumberVerification: (params: PageCreatePageWhatsappNumberVerificationParams) =>
      client.post<PageFields>(`${id}/page_whatsapp_number_verification`, params as Record<string, unknown>),
    createPassThreadControl: (params: PageCreatePassThreadControlParams) =>
      client.post<PageFields>(`${id}/pass_thread_control`, params as Record<string, unknown>),
    personas: {
      list: <F extends (keyof PersonaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PersonaFields, F[number]>>(client, `${id}/personas`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreatePersonasParams) =>
        client.post<PersonaFields>(`${id}/personas`, params as Record<string, unknown>),
    },
    createPhotoStory: (params: PageCreatePhotoStoriesParams) =>
      client.post<PageFields>(`${id}/photo_stories`, params as Record<string, unknown>),
    photos: {
      list: <F extends (keyof PhotoFields)[]>(opts: { fields: F; params?: PageListPhotosParams }) =>
        new Cursor<Pick<PhotoFields, F[number]>>(client, `${id}/photos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreatePhotosParams) =>
        client.post<PhotoFields>(`${id}/photos`, params as Record<string, unknown>),
    },
    picture: {
      list: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: PageListPictureParams }) =>
        new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreatePictureParams) =>
        client.post<ProfilePictureSourceFields>(`${id}/picture`, params as Record<string, unknown>),
    },
    posts: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: PageListPostsParams }) =>
      new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    productCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    publishedPosts: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: PageListPublishedPostsParams }) =>
      new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/published_posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    ratings: <F extends (keyof RecommendationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<RecommendationFields, F[number]>>(client, `${id}/ratings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createReleaseThreadControl: (params: PageCreateReleaseThreadControlParams) =>
      client.post<PageFields>(`${id}/release_thread_control`, params as Record<string, unknown>),
    createRequestThreadControl: (params: PageCreateRequestThreadControlParams) =>
      client.post<PageFields>(`${id}/request_thread_control`, params as Record<string, unknown>),
    roles: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: PageListRolesParams }) =>
      new Cursor<Pick<UserFields, F[number]>>(client, `${id}/roles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    rtbDynamicPosts: <F extends (keyof RTBDynamicPostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<RTBDynamicPostFields, F[number]>>(client, `${id}/rtb_dynamic_posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    scheduledPosts: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/scheduled_posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    secondaryReceivers: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: PageListSecondaryReceiversParams }) =>
      new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/secondary_receivers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    settings: {
      list: <F extends (keyof PageSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageSettingsFields, F[number]>>(client, `${id}/settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateSettingsParams) =>
        client.post<PageFields>(`${id}/settings`, params as Record<string, unknown>),
    },
    shopSetupStatus: <F extends (keyof CommerceMerchantSettingsSetupStatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CommerceMerchantSettingsSetupStatusFields, F[number]>>(client, `${id}/shop_setup_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    spaceParticipants: {
      list: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PageFields, F[number]>>(client, `${id}/space_participants`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateSpaceParticipantsParams) =>
        client.post<PageFields>(`${id}/space_participants`, params as Record<string, unknown>),
    },
    storeLocations: <F extends (keyof StoreLocationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<StoreLocationFields, F[number]>>(client, `${id}/store_locations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    stories: <F extends (keyof StoriesFields)[]>(opts: { fields: F; params?: PageListStoriesParams }) =>
      new Cursor<Pick<StoriesFields, F[number]>>(client, `${id}/stories`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    subscribedApps: {
      list: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/subscribed_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateSubscribedAppsParams) =>
        client.post<PageFields>(`${id}/subscribed_apps`, params as Record<string, unknown>),
      delete: (params?: Record<string, unknown>) =>
        client.delete(`${id}/subscribed_apps`, params as Record<string, unknown> ?? {}),
    },
    tabs: <F extends (keyof TabFields)[]>(opts: { fields: F; params?: PageListTabsParams }) =>
      new Cursor<Pick<TabFields, F[number]>>(client, `${id}/tabs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    tagged: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/tagged`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createTakeThreadControl: (params: PageCreateTakeThreadControlParams) =>
      client.post<PageFields>(`${id}/take_thread_control`, params as Record<string, unknown>),
    threadOwner: <F extends (keyof PageThreadOwnerFields)[]>(opts: { fields: F; params?: PageListThreadOwnerParams }) =>
      new Cursor<Pick<PageThreadOwnerFields, F[number]>>(client, `${id}/thread_owner`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    threads: <F extends (keyof UnifiedThreadFields)[]>(opts: { fields: F; params?: PageListThreadsParams }) =>
      new Cursor<Pick<UnifiedThreadFields, F[number]>>(client, `${id}/threads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createUnlinkAccount: (params: PageCreateUnlinkAccountsParams) =>
      client.post<PageFields>(`${id}/unlink_accounts`, params as Record<string, unknown>),
    videoCopyrightRules: {
      list: <F extends (keyof VideoCopyrightRuleFields)[]>(opts: { fields: F; params?: PageListVideoCopyrightRulesParams }) =>
        new Cursor<Pick<VideoCopyrightRuleFields, F[number]>>(client, `${id}/video_copyright_rules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateVideoCopyrightRulesParams) =>
        client.post<VideoCopyrightRuleFields>(`${id}/video_copyright_rules`, params as Record<string, unknown>),
    },
    createVideoCopyright: (params: PageCreateVideoCopyrightsParams) =>
      client.post<VideoCopyrightFields>(`${id}/video_copyrights`, params as Record<string, unknown>),
    videoLists: <F extends (keyof VideoListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<VideoListFields, F[number]>>(client, `${id}/video_lists`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    videoReels: {
      list: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: PageListVideoReelsParams }) =>
        new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/video_reels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateVideoReelsParams) =>
        client.post<AdVideoFields>(`${id}/video_reels`, params as Record<string, unknown>),
    },
    createVideoStory: (params: PageCreateVideoStoriesParams) =>
      client.post<Record<string, unknown>>(`${id}/video_stories`, params as Record<string, unknown>),
    videos: {
      list: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: PageListVideosParams }) =>
        new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateVideosParams) =>
        client.post<AdVideoFields>(`${id}/videos`, params as Record<string, unknown>),
    },
    visitorPosts: <F extends (keyof PagePostFields)[]>(opts: { fields: F; params?: PageListVisitorPostsParams }) =>
      new Cursor<Pick<PagePostFields, F[number]>>(client, `${id}/visitor_posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    welcomeMessageFlows: {
      list: <F extends (keyof CTXPartnerAppWelcomeMessageFlowFields)[]>(opts: { fields: F; params?: PageListWelcomeMessageFlowsParams }) =>
        new Cursor<Pick<CTXPartnerAppWelcomeMessageFlowFields, F[number]>>(client, `${id}/welcome_message_flows`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: PageCreateWelcomeMessageFlowsParams) =>
        client.post<Record<string, unknown>>(`${id}/welcome_message_flows`, params as Record<string, unknown>),
      delete: (params: PageDeleteWelcomeMessageFlowsParams) =>
        client.delete(`${id}/welcome_message_flows`, params as Record<string, unknown> ?? {}),
    },
  };
}

