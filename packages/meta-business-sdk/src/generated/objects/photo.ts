import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AlbumFields } from "./album.ts";
import type { CommentFields } from "./comment.ts";
import type { EntityAtTextRangeFields } from "./entity-at-text-range.ts";
import type { EventFields } from "./event.ts";
import type { InsightsResultFields } from "./insights-result.ts";
import type { PageFields } from "./page.ts";
import type { PlaceFields } from "./place.ts";
import type { PlatformImageSourceFields } from "./platform-image-source.ts";
import type { ProfileFields } from "./profile.ts";

export interface PhotoFields {
  album: AlbumFields;
  alt_text: string;
  alt_text_custom: string;
  backdated_time: string;
  backdated_time_granularity: string;
  can_backdate: boolean;
  can_delete: boolean;
  can_tag: boolean;
  created_time: string;
  event: EventFields;
  from: Record<string, unknown>;
  height: number;
  icon: string;
  id: string;
  images: PlatformImageSourceFields[];
  link: string;
  name: string;
  name_tags: EntityAtTextRangeFields[];
  page_story_id: string;
  picture: string;
  place: PlaceFields;
  position: number;
  source: string;
  target: ProfileFields;
  updated_time: string;
  webp_images: PlatformImageSourceFields[];
  width: number;
}

export interface PhotoListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export interface PhotoCreateCommentsParams {
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

export interface PhotoListInsightsParams {
  date_preset?: string;
  metric?: Record<string, unknown>[];
  period?: string;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface PhotoCreateLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  notify?: boolean;
  tracking?: string;
  [key: string]: unknown;
}

export function photoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PhotoFields,
    get: <F extends (keyof PhotoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PhotoFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
    comments: {
      __path: `${id}/comments`,
      __brand: undefined as unknown as CommentFields,
      list: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: PhotoListCommentsParams }) =>
        new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: PhotoCreateCommentsParams) =>
        client.post<CommentFields>(`${id}/comments`, params as Record<string, unknown>),
    },
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: PhotoListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    likes: {
      __path: `${id}/likes`,
      __brand: undefined as unknown as ProfileFields,
      list: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: PhotoCreateLikesParams) =>
        client.post<PhotoFields>(`${id}/likes`, params as Record<string, unknown>),
    },
    sponsorTags: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/sponsor_tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

