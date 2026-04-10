import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CommentFields } from "./comment.ts";
import type { EventFields } from "./event.ts";
import type { PhotoFields } from "./photo.ts";
import type { PlaceFields } from "./place.ts";
import type { ProfileFields } from "./profile.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";

export interface AlbumFields {
  backdated_time: string;
  backdated_time_granularity: string;
  can_backdate: boolean;
  can_upload: boolean;
  count: number;
  cover_photo: PhotoFields;
  created_time: string;
  description: string;
  edit_link: string;
  event: EventFields;
  from: Record<string, unknown>;
  id: string;
  is_user_facing: boolean;
  link: string;
  location: string;
  modified_major: string;
  name: string;
  photo_count: number;
  place: PlaceFields;
  privacy: string;
  type: string;
  updated_time: string;
  video_count: number;
}

export interface AlbumListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export interface AlbumCreateCommentsParams {
  attachment_id?: string;
  attachment_share_url?: string;
  attachment_url?: string;
  comment_privacy_value?: string;
  facepile_mentioned_ids?: string[];
  feedback_source?: string;
  is_offline?: boolean;
  message?: string;
  nectar_module?: string;
  object_id?: string;
  parent_comment_id?: Record<string, unknown>;
  text?: string;
  tracking?: string;
  [key: string]: unknown;
}

export interface AlbumCreateLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  notify?: boolean;
  tracking?: string;
  [key: string]: unknown;
}

export interface AlbumCreatePhotosParams {
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

export interface AlbumListPictureParams {
  redirect?: boolean;
  type?: string;
  [key: string]: unknown;
}

export function albumNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AlbumFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AlbumFields, F[number]>>(`${id}`, opts),
    comments: {
      list: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: AlbumListCommentsParams }) =>
        new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AlbumCreateCommentsParams) =>
        client.post<CommentFields>(`${id}/comments`, params as Record<string, unknown>),
    },
    likes: {
      list: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AlbumCreateLikesParams) =>
        client.post<AlbumFields>(`${id}/likes`, params as Record<string, unknown>),
    },
    photos: {
      list: <F extends (keyof PhotoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PhotoFields, F[number]>>(client, `${id}/photos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AlbumCreatePhotosParams) =>
        client.post<PhotoFields>(`${id}/photos`, params as Record<string, unknown>),
    },
    picture: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: AlbumListPictureParams }) =>
      new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

