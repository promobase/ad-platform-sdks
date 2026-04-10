import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdStudyFields } from "./ad-study.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { AgeRangeFields } from "./age-range.ts";
import type { AlbumFields } from "./album.ts";
import type { AppRequestFields } from "./app-request.ts";
import type { AppRequestFormerRecipientFields } from "./app-request-former-recipient.ts";
import type { ApplicationFields } from "./application.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { BusinessUserFields } from "./business-user.ts";
import type { CanvasFields } from "./canvas.ts";
import type { CoverPhotoFields } from "./cover-photo.ts";
import type { CurrencyFields } from "./currency.ts";
import type { EducationExperienceFields } from "./education-experience.ts";
import type { EventFields } from "./event.ts";
import type { ExperienceFields } from "./experience.ts";
import type { FundraiserPersonToCharityFields } from "./fundraiser-person-to-charity.ts";
import type { GroupFields } from "./group.ts";
import type { LiveVideoFields } from "./live-video.ts";
import type { PageFields } from "./page.ts";
import type { PageUserMessageThreadLabelFields } from "./page-user-message-thread-label.ts";
import type { PaymentEnginePaymentFields } from "./payment-engine-payment.ts";
import type { PaymentPricepointsFields } from "./payment-pricepoints.ts";
import type { PhotoFields } from "./photo.ts";
import type { PostFields } from "./post.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";
import type { UnifiedThreadFields } from "./unified-thread.ts";
import type { UserCoverPhotoFields } from "./user-cover-photo.ts";
import type { UserIDForAppFields } from "./user-id-for-app.ts";
import type { UserIDForPageFields } from "./user-id-for-page.ts";
import type { VideoUploadLimitsFields } from "./video-upload-limits.ts";
import type { WhatsAppBusinessAccountFields } from "./whats-app-business-account.ts";

export interface UserFields {
  about: string;
  age_range: AgeRangeFields;
  birthday: string;
  client_business_id: string;
  community: GroupFields;
  cover: UserCoverPhotoFields;
  currency: CurrencyFields;
  education: EducationExperienceFields[];
  email: string;
  favorite_athletes: ExperienceFields[];
  favorite_teams: ExperienceFields[];
  first_name: string;
  gender: string;
  hometown: PageFields;
  id: string;
  inspirational_people: ExperienceFields[];
  install_type: string;
  installed: boolean;
  is_guest_user: boolean;
  is_work_account: boolean;
  languages: ExperienceFields[];
  last_name: string;
  link: string;
  local_news_megaphone_dismiss_status: boolean;
  local_news_subscription_status: boolean;
  locale: string;
  location: PageFields;
  meeting_for: string[];
  middle_name: string;
  name: string;
  name_format: string;
  payment_pricepoints: PaymentPricepointsFields;
  political: string;
  profile_pic: string;
  quotes: string;
  relationship_status: string;
  religion: string;
  shared_login_upgrade_required_by: string;
  short_name: string;
  significant_other: UserFields;
  sports: ExperienceFields[];
  supports_donate_button_in_live_video: boolean;
  third_party_id: string;
  timezone: number;
  token_for_business: string;
  updated_time: string;
  verified: boolean;
  video_upload_limits: VideoUploadLimitsFields;
  website: string;
}

export interface UserCreateAccessTokensParams {
  business_app: string;
  page_id?: string;
  scope?: string[];
  set_token_expires_in_60_days?: boolean;
  [key: string]: unknown;
}

export interface UserListAccountsParams {
  ad_id?: string;
  is_place?: boolean;
  is_promotable?: boolean;
  [key: string]: unknown;
}

export interface UserCreateAccountsParams {
  about?: string;
  address?: string;
  category?: number;
  category_enum?: string;
  category_list?: string[];
  city_id?: string;
  coordinates?: Record<string, unknown>;
  cover_photo?: Record<string, unknown>;
  description?: string;
  ignore_coordinate_warnings?: boolean;
  location?: Record<string, unknown>;
  name: string;
  phone?: string;
  picture?: string;
  website?: string;
  zip?: string;
  [key: string]: unknown;
}

export interface UserCreateAdStudiesParams {
  cells?: Record<string, unknown>[];
  client_business?: string;
  confidence_level?: number;
  cooldown_start_time?: number;
  description?: string;
  end_time?: number;
  name?: string;
  objectives?: Record<string, unknown>[];
  observation_end_time?: number;
  start_time?: number;
  type?: string;
  viewers?: number[];
  [key: string]: unknown;
}

export interface UserCreateApplicationsParams {
  business_app: number;
  [key: string]: unknown;
}

export interface UserListAssignedBusinessAssetGroupsParams {
  contained_asset_id?: string;
  [key: string]: unknown;
}

export interface UserListAssignedPagesParams {
  pages?: number[];
  [key: string]: unknown;
}

export interface UserDeleteBusinessesParams {
  business?: string;
  [key: string]: unknown;
}

export interface UserCreateBusinessesParams {
  child_business_external_id?: string;
  email?: string;
  name: string;
  primary_page?: string;
  sales_rep_email?: string;
  survey_business_type?: string;
  survey_num_assets?: number;
  survey_num_people?: number;
  timezone_id?: string;
  vertical: string;
  [key: string]: unknown;
}

export interface UserListConversationsParams {
  folder?: string;
  platform?: string;
  tags?: string[];
  user_id?: string;
  [key: string]: unknown;
}

export interface UserListEventsParams {
  include_canceled?: boolean;
  type?: string;
  [key: string]: unknown;
}

export interface UserListFeedParams {
  include_hidden?: boolean;
  q?: string;
  show_expired?: boolean;
  since?: string;
  until?: string;
  with?: string;
  [key: string]: unknown;
}

export interface UserCreateFeedParams {
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

export interface UserListFriendsParams {
  uid?: number;
  [key: string]: unknown;
}

export interface UserCreateFundraisersParams {
  charity_id?: string;
  cover_photo?: File | Blob | ReadableStream;
  currency: string;
  description: string;
  end_time: string;
  external_event_name?: string;
  external_event_start_time?: string;
  external_event_uri?: string;
  external_fundraiser_uri?: string;
  external_id: string;
  fundraiser_type: string;
  goal_amount: number;
  name: string;
  page_id?: string;
  [key: string]: unknown;
}

export interface UserListGroupsParams {
  admin_only?: boolean;
  parent?: string;
  [key: string]: unknown;
}

export interface UserListIdsForAppsParams {
  app?: number;
  [key: string]: unknown;
}

export interface UserListIdsForBusinessParams {
  app?: number;
  [key: string]: unknown;
}

export interface UserListIdsForPagesParams {
  page?: number;
  [key: string]: unknown;
}

export interface UserListLikesParams {
  target_id?: string;
  [key: string]: unknown;
}

export interface UserListLiveVideosParams {
  broadcast_status?: string[];
  source?: string;
  [key: string]: unknown;
}

export interface UserCreateLiveVideosParams {
  content_tags?: string[];
  description?: string;
  enable_backup_ingest?: boolean;
  encoding_settings?: string;
  event_params?: Record<string, unknown>;
  fisheye_video_cropped?: boolean;
  front_z_rotation?: number;
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
  title?: string;
  [key: string]: unknown;
}

export interface UserCreateMessengerKidsAccountsUnreadBadgeParams {
  proxied_app_id: number;
  [key: string]: unknown;
}

export interface UserListMusicParams {
  target_id?: string;
  [key: string]: unknown;
}

export interface UserCreateNotificationsParams {
  bot_message_payload_elements?: string;
  filtering?: string[];
  href?: Record<string, unknown>;
  label?: string;
  message?: Record<string, unknown>;
  notif_ids?: string[];
  notification_content_id?: number;
  payload?: string;
  read?: boolean;
  ref?: string;
  schedule_interval?: number;
  seen?: boolean;
  template?: Record<string, unknown>;
  type?: string;
  [key: string]: unknown;
}

export interface UserDeletePermissionsParams {
  permission?: string;
  [key: string]: unknown;
}

export interface UserListPermissionsParams {
  permission?: string;
  status?: string;
  [key: string]: unknown;
}

export interface UserListPhotosParams {
  type?: string;
  [key: string]: unknown;
}

export interface UserCreatePhotosParams {
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
  manual_privacy?: boolean;
  message?: string;
  name?: string;
  no_story?: boolean;
  offline_id?: number;
  og_action_type_id?: string;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_set_profile_badge?: boolean;
  og_suggestion_mechanism?: string;
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
  time_since_original_post?: number;
  uid?: number;
  unpublished_content_type?: string;
  url?: string;
  user_selected_tags?: boolean;
  vault_image_id?: string;
  [key: string]: unknown;
}

export interface UserListPictureParams {
  height?: number;
  redirect?: boolean;
  type?: string;
  width?: number;
  [key: string]: unknown;
}

export interface UserListPostsParams {
  include_hidden?: boolean;
  q?: string;
  show_expired?: boolean;
  since?: string;
  until?: string;
  with?: string;
  [key: string]: unknown;
}

export interface UserListRichMediaDocumentsParams {
  query?: string;
  [key: string]: unknown;
}

export interface UserCreateStagingResourcesParams {
  file?: File | Blob | ReadableStream;
  [key: string]: unknown;
}

export interface UserListVideosParams {
  type?: string;
  [key: string]: unknown;
}

export interface UserCreateVideosParams {
  application_id?: string;
  asked_fun_fact_prompt_id?: number;
  audio_story_wave_animation_handle?: string;
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
  direct_share_status?: number;
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
  is_explicit_share?: boolean;
  is_group_linking_post?: boolean;
  is_partnership_ad?: boolean;
  is_voice_clip?: boolean;
  location_source_id?: string;
  manual_privacy?: boolean;
  no_story?: boolean;
  og_action_type_id?: string;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_suggestion_mechanism?: string;
  original_fov?: number;
  original_projection_type?: string;
  partnership_ad_ad_code?: string;
  privacy?: string;
  publish_event_id?: number;
  referenced_sticker_id?: string;
  replace_video_id?: string;
  slideshow_spec?: Record<string, unknown>;
  source?: string;
  source_instagram_media_id?: string;
  spherical?: boolean;
  sponsor_id?: string;
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

export interface UserUpdateParams {
  emoji_color_pref?: number;
  firstname?: string;
  lastname?: string;
  local_news_megaphone_dismiss_status?: string;
  local_news_subscription_status?: string;
  name?: string;
  password?: string;
  [key: string]: unknown;
}

export function userNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<UserFields, F[number]>>(`${id}`, opts),
    update: (params: UserUpdateParams) =>
      client.post<UserFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    accessTokens: {
      create: (params: UserCreateAccessTokensParams) =>
        client.post<Record<string, unknown>>(`${id}/access_tokens`, params as Record<string, unknown>),
      delete: (params?: Record<string, unknown>) =>
        client.delete(`${id}/access_tokens`, params as Record<string, unknown> ?? {}),
    },
    accounts: {
      list: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: UserListAccountsParams }) =>
        new Cursor<Pick<PageFields, F[number]>>(client, `${id}/accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateAccountsParams) =>
        client.post<PageFields>(`${id}/accounts`, params as Record<string, unknown>),
    },
    adStudies: {
      list: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdStudyFields, F[number]>>(client, `${id}/ad_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateAdStudiesParams) =>
        client.post<AdStudyFields>(`${id}/ad_studies`, params as Record<string, unknown>),
    },
    adaccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    albums: <F extends (keyof AlbumFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AlbumFields, F[number]>>(client, `${id}/albums`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createApplication: (params: UserCreateApplicationsParams) =>
      client.post<UserFields>(`${id}/applications`, params as Record<string, unknown>),
    apprequestformerrecipients: <F extends (keyof AppRequestFormerRecipientFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AppRequestFormerRecipientFields, F[number]>>(client, `${id}/apprequestformerrecipients`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    apprequests: <F extends (keyof AppRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AppRequestFields, F[number]>>(client, `${id}/apprequests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/assigned_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedApplications: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/assigned_applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedBusinessAssetGroups: <F extends (keyof BusinessAssetGroupFields)[]>(opts: { fields: F; params?: UserListAssignedBusinessAssetGroupsParams }) =>
      new Cursor<Pick<BusinessAssetGroupFields, F[number]>>(client, `${id}/assigned_business_asset_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: UserListAssignedPagesParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/assigned_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedProductCatalogs: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/assigned_product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    assignedWhatsappBusinessAccounts: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<WhatsAppBusinessAccountFields, F[number]>>(client, `${id}/assigned_whatsapp_business_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    businessUsers: <F extends (keyof BusinessUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessUserFields, F[number]>>(client, `${id}/business_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    businesses: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/businesses`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateBusinessesParams) =>
        client.post<Record<string, unknown>>(`${id}/businesses`, params as Record<string, unknown>),
      delete: (params: UserDeleteBusinessesParams) =>
        client.delete(`${id}/businesses`, params as Record<string, unknown> ?? {}),
    },
    conversations: <F extends (keyof UnifiedThreadFields)[]>(opts: { fields: F; params?: UserListConversationsParams }) =>
      new Cursor<Pick<UnifiedThreadFields, F[number]>>(client, `${id}/conversations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    customLabels: <F extends (keyof PageUserMessageThreadLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageUserMessageThreadLabelFields, F[number]>>(client, `${id}/custom_labels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    events: <F extends (keyof EventFields)[]>(opts: { fields: F; params?: UserListEventsParams }) =>
      new Cursor<Pick<EventFields, F[number]>>(client, `${id}/events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    feed: {
      list: <F extends (keyof PostFields)[]>(opts: { fields: F; params?: UserListFeedParams }) =>
        new Cursor<Pick<PostFields, F[number]>>(client, `${id}/feed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateFeedParams) =>
        client.post<PostFields>(`${id}/feed`, params as Record<string, unknown>),
    },
    friends: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: UserListFriendsParams }) =>
      new Cursor<Pick<UserFields, F[number]>>(client, `${id}/friends`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    fundraisers: {
      list: <F extends (keyof FundraiserPersonToCharityFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<FundraiserPersonToCharityFields, F[number]>>(client, `${id}/fundraisers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateFundraisersParams) =>
        client.post<FundraiserPersonToCharityFields>(`${id}/fundraisers`, params as Record<string, unknown>),
    },
    groups: <F extends (keyof GroupFields)[]>(opts: { fields: F; params?: UserListGroupsParams }) =>
      new Cursor<Pick<GroupFields, F[number]>>(client, `${id}/groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    idsForApps: <F extends (keyof UserIDForAppFields)[]>(opts: { fields: F; params?: UserListIdsForAppsParams }) =>
      new Cursor<Pick<UserIDForAppFields, F[number]>>(client, `${id}/ids_for_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    idsForBusiness: <F extends (keyof UserIDForAppFields)[]>(opts: { fields: F; params?: UserListIdsForBusinessParams }) =>
      new Cursor<Pick<UserIDForAppFields, F[number]>>(client, `${id}/ids_for_business`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    idsForPages: <F extends (keyof UserIDForPageFields)[]>(opts: { fields: F; params?: UserListIdsForPagesParams }) =>
      new Cursor<Pick<UserIDForPageFields, F[number]>>(client, `${id}/ids_for_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    likes: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: UserListLikesParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    liveVideos: {
      list: <F extends (keyof LiveVideoFields)[]>(opts: { fields: F; params?: UserListLiveVideosParams }) =>
        new Cursor<Pick<LiveVideoFields, F[number]>>(client, `${id}/live_videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateLiveVideosParams) =>
        client.post<LiveVideoFields>(`${id}/live_videos`, params as Record<string, unknown>),
    },
    createMessengerDesktopPerformanceTrace: (params: Record<string, unknown>) =>
      client.post<UserFields>(`${id}/messenger_desktop_performance_traces`, params as Record<string, unknown>),
    createMessengerKidsAccountsUnreadBadge: (params: UserCreateMessengerKidsAccountsUnreadBadgeParams) =>
      client.post<UserFields>(`${id}/messenger_kids_accounts_unread_badge`, params as Record<string, unknown>),
    music: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: UserListMusicParams }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/music`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createNotification: (params: UserCreateNotificationsParams) =>
      client.post<UserFields>(`${id}/notifications`, params as Record<string, unknown>),
    paymentTransactions: <F extends (keyof PaymentEnginePaymentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PaymentEnginePaymentFields, F[number]>>(client, `${id}/payment_transactions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    permissions: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: UserListPermissionsParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/permissions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      delete: (params: UserDeletePermissionsParams) =>
        client.delete(`${id}/permissions`, params as Record<string, unknown> ?? {}),
    },
    personalAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/personal_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    photos: {
      list: <F extends (keyof PhotoFields)[]>(opts: { fields: F; params?: UserListPhotosParams }) =>
        new Cursor<Pick<PhotoFields, F[number]>>(client, `${id}/photos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreatePhotosParams) =>
        client.post<PhotoFields>(`${id}/photos`, params as Record<string, unknown>),
    },
    picture: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: UserListPictureParams }) =>
      new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    posts: <F extends (keyof PostFields)[]>(opts: { fields: F; params?: UserListPostsParams }) =>
      new Cursor<Pick<PostFields, F[number]>>(client, `${id}/posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    richMediaDocuments: <F extends (keyof CanvasFields)[]>(opts: { fields: F; params?: UserListRichMediaDocumentsParams }) =>
      new Cursor<Pick<CanvasFields, F[number]>>(client, `${id}/rich_media_documents`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createStagingResource: (params: UserCreateStagingResourcesParams) =>
      client.post<UserFields>(`${id}/staging_resources`, params as Record<string, unknown>),
    videos: {
      list: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: UserListVideosParams }) =>
        new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: UserCreateVideosParams) =>
        client.post<AdVideoFields>(`${id}/videos`, params as Record<string, unknown>),
    },
  };
}

