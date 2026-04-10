import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { CommentFields } from "./comment.ts";
import type { LiveVideoAdBreakConfigFields } from "./live-video-ad-break-config.ts";
import type { LiveVideoErrorFields } from "./live-video-error.ts";
import type { LiveVideoInputStreamFields } from "./live-video-input-stream.ts";
import type { LiveVideoRecommendedEncoderSettingsFields } from "./live-video-recommended-encoder-settings.ts";
import type { LiveVideoTargetingFields } from "./live-video-targeting.ts";
import type { PageFields } from "./page.ts";
import type { ProfileFields } from "./profile.ts";
import type { TargetingFields } from "./targeting.ts";
import type { UserFields } from "./user.ts";
import type { VideoCopyrightFields } from "./video-copyright.ts";
import type { VideoPollFields } from "./video-poll.ts";

export interface LiveVideoFields {
  ad_break_config: LiveVideoAdBreakConfigFields;
  ad_break_failure_reason: string;
  broadcast_start_time: string;
  copyright: VideoCopyrightFields;
  creation_time: string;
  dash_ingest_url: string;
  dash_preview_url: string;
  description: string;
  embed_html: Record<string, unknown>;
  from: Record<string, unknown>;
  id: string;
  ingest_streams: LiveVideoInputStreamFields[];
  is_manual_mode: boolean;
  is_reference_only: boolean;
  live_views: number;
  permalink_url: string;
  planned_start_time: string;
  recommended_encoder_settings: LiveVideoRecommendedEncoderSettingsFields;
  seconds_left: number;
  secure_stream_url: string;
  status: string;
  stream_url: string;
  targeting: LiveVideoTargetingFields;
  title: string;
  total_views: string;
  video: AdVideoFields;
}

export interface LiveVideoListBlockedUsersParams {
  uid?: string;
  [key: string]: unknown;
}

export interface LiveVideoListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export interface LiveVideoCreatePollsParams {
  close_after_voting?: boolean;
  correct_option?: number;
  default_open?: boolean;
  options: string[];
  question: string;
  show_gradient?: boolean;
  show_results?: boolean;
  [key: string]: unknown;
}

export interface LiveVideoListReactionsParams {
  type?: string;
  [key: string]: unknown;
}

export interface LiveVideoUpdateParams {
  allow_bm_crossposting?: boolean;
  content_tags?: string[];
  cross_share_to_group_ids?: string[];
  crossposting_actions?: Record<string, unknown>[];
  custom_labels?: string[];
  description?: string;
  direct_share_status?: number;
  embeddable?: boolean;
  end_live_video?: boolean;
  event_params?: Record<string, unknown>;
  is_audio_only?: boolean;
  is_manual_mode?: boolean;
  live_comment_moderation_setting?: string[];
  master_ingest_stream_id?: string;
  og_icon_id?: string;
  og_phrase?: string;
  persistent_stream_key_status?: string;
  place?: Record<string, unknown>;
  planned_start_time?: string;
  privacy?: string;
  published?: boolean;
  schedule_custom_profile_image?: File | Blob | ReadableStream;
  schedule_feed_background_image?: File | Blob | ReadableStream;
  sponsor_id?: string;
  sponsor_relationship?: number;
  status?: string;
  stream_type?: string;
  tags?: number[];
  targeting?: Record<string, unknown>;
  title?: string;
  [key: string]: unknown;
}

export function liveVideoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LiveVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoFields, F[number]>>(`${id}`, opts),
    update: (params: LiveVideoUpdateParams) =>
      client.post<LiveVideoFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    blockedUsers: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: LiveVideoListBlockedUsersParams }) =>
      new Cursor<Pick<UserFields, F[number]>>(client, `${id}/blocked_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    comments: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: LiveVideoListCommentsParams }) =>
      new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    crosspostSharedPages: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/crosspost_shared_pages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    crosspostedBroadcasts: <F extends (keyof LiveVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<LiveVideoFields, F[number]>>(client, `${id}/crossposted_broadcasts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    errors: <F extends (keyof LiveVideoErrorFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<LiveVideoErrorFields, F[number]>>(client, `${id}/errors`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createInputStream: (params: Record<string, unknown>) =>
      client.post<LiveVideoInputStreamFields>(`${id}/input_streams`, params as Record<string, unknown>),
    polls: {
      list: <F extends (keyof VideoPollFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<VideoPollFields, F[number]>>(client, `${id}/polls`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: LiveVideoCreatePollsParams) =>
        client.post<VideoPollFields>(`${id}/polls`, params as Record<string, unknown>),
    },
    reactions: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: LiveVideoListReactionsParams }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/reactions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

