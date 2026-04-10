import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { AlbumFields } from "./album.ts";
import type { CoverPhotoFields } from "./cover-photo.ts";
import type { EventFields } from "./event.ts";
import type { LiveVideoFields } from "./live-video.ts";
import type { LocationFields } from "./location.ts";
import type { PhotoFields } from "./photo.ts";
import type { PostFields } from "./post.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";
import type { UserFields } from "./user.ts";

export interface GroupFields {
  archived: boolean;
  cover: CoverPhotoFields;
  created_time: string;
  description: string;
  email: string;
  icon: string;
  id: string;
  install: Record<string, unknown>;
  link: string;
  member_count: number;
  member_request_count: number;
  name: string;
  parent: Record<string, unknown>;
  permissions: string[];
  privacy: string;
  purpose: string;
  subdomain: string;
  updated_time: string;
  venue: LocationFields;
}

export interface GroupDeleteAdminsParams {
  uid: number;
  [key: string]: unknown;
}

export interface GroupCreateAdminsParams {
  uid: number;
  [key: string]: unknown;
}

export interface GroupListFeedParams {
  include_hidden?: boolean;
  q?: string;
  show_expired?: boolean;
  since?: string;
  until?: string;
  with?: string;
  [key: string]: unknown;
}

export interface GroupCreateFeedParams {
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

export interface GroupCreateGroupsParams {
  admin?: number;
  description?: string;
  group_icon_id?: string;
  group_type?: string;
  join_setting?: string;
  name: string;
  parent_id?: string;
  post_permissions?: string;
  post_requires_admin_approval?: boolean;
  privacy?: string;
  ref?: string;
  [key: string]: unknown;
}

export interface GroupListLiveVideosParams {
  broadcast_status?: string[];
  source?: string;
  [key: string]: unknown;
}

export interface GroupCreateLiveVideosParams {
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

export interface GroupDeleteMembersParams {
  email?: string;
  member?: number;
  [key: string]: unknown;
}

export interface GroupCreateMembersParams {
  email?: string;
  from?: number;
  member?: number;
  rate?: number;
  source?: string;
  [key: string]: unknown;
}

export interface GroupCreatePhotosParams {
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

export interface GroupListPictureParams {
  height?: number;
  redirect?: boolean;
  type?: string;
  width?: number;
  [key: string]: unknown;
}

export interface GroupListVideosParams {
  type?: string;
  [key: string]: unknown;
}

export interface GroupCreateVideosParams {
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
  referenced_sticker_id?: string;
  replace_video_id?: string;
  scheduled_publish_time?: number;
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

export interface GroupUpdateParams {
  cover?: string;
  cover_url?: string;
  description?: string;
  focus_x?: number;
  focus_y?: number;
  group_icon?: string;
  is_official_group?: boolean;
  join_setting?: string;
  name?: string;
  no_feed_story?: boolean;
  offset_y?: number;
  post_permissions?: string;
  post_requires_admin_approval?: boolean;
  privacy?: string;
  purpose?: string;
  update_view_time?: boolean;
  [key: string]: unknown;
}

export function groupNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as GroupFields,
    get: <F extends (keyof GroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<GroupFields, F[number]>>(`${id}`, opts),
    update: (params: GroupUpdateParams) =>
      client.post<GroupFields>(`${id}`, params as Record<string, unknown>),
    admins: {
      __path: `${id}/admins`,
      __brand: undefined as unknown as GroupFields,
      create: (params: GroupCreateAdminsParams) =>
        client.post<GroupFields>(`${id}/admins`, params as Record<string, unknown>),
      delete: (params: GroupDeleteAdminsParams) =>
        client.delete(`${id}/admins`, params as Record<string, unknown> ?? {}),
    },
    albums: <F extends (keyof AlbumFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AlbumFields, F[number]>>(client, `${id}/albums`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    docs: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/docs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    events: <F extends (keyof EventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<EventFields, F[number]>>(client, `${id}/events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    feed: {
      __path: `${id}/feed`,
      __brand: undefined as unknown as PostFields,
      list: <F extends (keyof PostFields)[]>(opts: { fields: F; params?: GroupListFeedParams }) =>
        new Cursor<Pick<PostFields, F[number]>>(client, `${id}/feed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: GroupCreateFeedParams) =>
        client.post<PostFields>(`${id}/feed`, params as Record<string, unknown>),
    },
    files: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/files`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    groups: {
      __path: `${id}/groups`,
      __brand: undefined as unknown as GroupFields,
      list: <F extends (keyof GroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<GroupFields, F[number]>>(client, `${id}/groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: GroupCreateGroupsParams) =>
        client.post<GroupFields>(`${id}/groups`, params as Record<string, unknown>),
    },
    liveVideos: {
      __path: `${id}/live_videos`,
      __brand: undefined as unknown as LiveVideoFields,
      list: <F extends (keyof LiveVideoFields)[]>(opts: { fields: F; params?: GroupListLiveVideosParams }) =>
        new Cursor<Pick<LiveVideoFields, F[number]>>(client, `${id}/live_videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: GroupCreateLiveVideosParams) =>
        client.post<LiveVideoFields>(`${id}/live_videos`, params as Record<string, unknown>),
    },
    members: {
      __path: `${id}/members`,
      __brand: undefined as unknown as GroupFields,
      create: (params: GroupCreateMembersParams) =>
        client.post<GroupFields>(`${id}/members`, params as Record<string, unknown>),
      delete: (params: GroupDeleteMembersParams) =>
        client.delete(`${id}/members`, params as Record<string, unknown> ?? {}),
    },
    optedInMembers: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<UserFields, F[number]>>(client, `${id}/opted_in_members`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createPhoto: (params: GroupCreatePhotosParams) =>
      client.post<PhotoFields>(`${id}/photos`, params as Record<string, unknown>),
    picture: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: GroupListPictureParams }) =>
      new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    videos: {
      __path: `${id}/videos`,
      __brand: undefined as unknown as AdVideoFields,
      list: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: GroupListVideosParams }) =>
        new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: GroupCreateVideosParams) =>
        client.post<AdVideoFields>(`${id}/videos`, params as Record<string, unknown>),
    },
  };
}

