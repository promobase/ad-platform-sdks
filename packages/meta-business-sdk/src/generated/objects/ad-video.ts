import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AudioIsrcFields } from "./audio-isrc.ts";
import type { CommentFields } from "./comment.ts";
import type { EventFields } from "./event.ts";
import type { InsightsResultFields } from "./insights-result.ts";
import type { MusicVideoCopyrightFields } from "./music-video-copyright.ts";
import type { PageFields } from "./page.ts";
import type { PlaceFields } from "./place.ts";
import type { PrivacyFields } from "./privacy.ts";
import type { ProfileFields } from "./profile.ts";
import type { StatusFields } from "./status.ts";
import type { TaggableSubjectFields } from "./taggable-subject.ts";
import type { UserFields } from "./user.ts";
import type { VideoCopyrightFields } from "./video-copyright.ts";
import type { VideoPollFields } from "./video-poll.ts";
import type { VideoStatusFields } from "./video-status.ts";
import type { VideoThumbnailFields } from "./video-thumbnail.ts";

export interface AdVideoFields {
  ad_breaks: number[];
  admin_creator: UserFields;
  audio_isrc: AudioIsrcFields;
  backdated_time: string;
  backdated_time_granularity: string;
  boost_eligibility_info: Record<string, unknown>;
  content_category: string;
  content_tags: string[];
  copyright: VideoCopyrightFields;
  copyright_check_information: Record<string, unknown>;
  copyright_monitoring_status: string;
  created_time: string;
  custom_labels: string[];
  description: string;
  embed_html: Record<string, unknown>;
  embeddable: boolean;
  event: EventFields;
  expiration: Record<string, unknown>;
  format: Record<string, unknown>[];
  from: Record<string, unknown>;
  icon: string;
  id: string;
  is_crosspost_video: boolean;
  is_crossposting_eligible: boolean;
  is_episode: boolean;
  is_instagram_eligible: boolean;
  is_reference_only: boolean;
  length: number;
  live_audience_count: number;
  live_status: string;
  music_video_copyright: MusicVideoCopyrightFields;
  permalink_url: string;
  picture: string;
  place: PlaceFields;
  post_id: string;
  post_views: number;
  premiere_living_room_status: string;
  privacy: PrivacyFields;
  published: boolean;
  scheduled_publish_time: string;
  source: string;
  spherical: boolean;
  status: VideoStatusFields;
  title: string;
  universal_video_id: string;
  updated_time: string;
  views: number;
}

export interface AdVideoCreateCaptionsParams {
  captions_file?: File | Blob | ReadableStream;
  default_locale?: string;
  locales_to_delete?: string[];
  [key: string]: unknown;
}

export interface AdVideoCreateCollaboratorsParams {
  target_id: string;
  [key: string]: unknown;
}

export interface AdVideoListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export interface AdVideoCreateCommentsParams {
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

export interface AdVideoCreateGamingClipCreateParams {
  duration_seconds?: number;
  [key: string]: unknown;
}

export interface AdVideoCreateLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  notify?: boolean;
  tracking?: string;
  [key: string]: unknown;
}

export interface AdVideoCreatePollsParams {
  close_after_voting?: boolean;
  correct_option?: number;
  default_open?: boolean;
  options: string[];
  question: string;
  show_gradient?: boolean;
  show_results?: boolean;
  [key: string]: unknown;
}

export interface AdVideoCreateThumbnailsParams {
  is_preferred?: boolean;
  source: File | Blob | ReadableStream;
  [key: string]: unknown;
}

export interface AdVideoListVideoInsightsParams {
  metric?: Record<string, unknown>[];
  period?: string;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface AdVideoUpdateParams {
  ad_breaks?: unknown[];
  allow_bm_crossposting?: boolean;
  allow_crossposting_for_pages?: Record<string, unknown>[];
  backdated_time?: string;
  backdated_time_granularity?: string;
  call_to_action?: Record<string, unknown>;
  content_category?: string;
  content_tags?: string[];
  custom_labels?: string[];
  description?: string;
  direct_share_status?: number;
  embeddable?: boolean;
  expiration?: Record<string, unknown>;
  expire_now?: boolean;
  increment_play_count?: boolean;
  name?: string;
  preferred_thumbnail_id?: string;
  privacy?: string;
  publish_to_news_feed?: boolean;
  publish_to_videos_tab?: boolean;
  published?: boolean;
  scheduled_publish_time?: number;
  social_actions?: boolean;
  sponsor_id?: string;
  sponsor_relationship?: number;
  tags?: string[];
  target?: string;
  universal_video_id?: string;
  [key: string]: unknown;
}

export function adVideoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdVideoFields, F[number]>>(`${id}`, opts),
    update: (params: AdVideoUpdateParams) =>
      client.post<AdVideoFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    boostAdsList: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/boost_ads_list`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    captions: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/captions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdVideoCreateCaptionsParams) =>
        client.post<AdVideoFields>(`${id}/captions`, params as Record<string, unknown>),
    },
    collaborators: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/collaborators`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdVideoCreateCollaboratorsParams) =>
        client.post<AdVideoFields>(`${id}/collaborators`, params as Record<string, unknown>),
    },
    comments: {
      list: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: AdVideoListCommentsParams }) =>
        new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdVideoCreateCommentsParams) =>
        client.post<CommentFields>(`${id}/comments`, params as Record<string, unknown>),
    },
    crosspostSharedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/crosspost_shared_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createGamingClipCreate: (params: AdVideoCreateGamingClipCreateParams) =>
      client.post<AdVideoFields>(`${id}/gaming_clip_create`, params as Record<string, unknown>),
    likes: {
      list: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdVideoCreateLikesParams) =>
        client.post<AdVideoFields>(`${id}/likes`, params as Record<string, unknown>),
    },
    pollSettings: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/poll_settings`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    polls: {
      list: <F extends (keyof VideoPollFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<VideoPollFields, F[number]>>(client, `${id}/polls`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdVideoCreatePollsParams) =>
        client.post<VideoPollFields>(`${id}/polls`, params as Record<string, unknown>),
    },
    sponsorTags: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/sponsor_tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    tags: <F extends (keyof TaggableSubjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<TaggableSubjectFields, F[number]>>(client, `${id}/tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    thumbnails: {
      list: <F extends (keyof VideoThumbnailFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<VideoThumbnailFields, F[number]>>(client, `${id}/thumbnails`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdVideoCreateThumbnailsParams) =>
        client.post<AdVideoFields>(`${id}/thumbnails`, params as Record<string, unknown>),
    },
    videoInsights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: AdVideoListVideoInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/video_insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

