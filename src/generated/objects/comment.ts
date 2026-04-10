import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ApplicationFields } from "./application.ts";
import type { EntityAtTextRangeFields } from "./entity-at-text-range.ts";
import type { ProfileFields } from "./profile.ts";
import type { UserFields } from "./user.ts";

export interface CommentFields {
  admin_creator: UserFields;
  application: ApplicationFields;
  attachment: Record<string, unknown>;
  can_comment: boolean;
  can_hide: boolean;
  can_like: boolean;
  can_remove: boolean;
  can_reply_privately: boolean;
  comment_count: number;
  created_time: string;
  from: Record<string, unknown>;
  id: string;
  is_hidden: boolean;
  is_private: boolean;
  like_count: number;
  live_broadcast_timestamp: number;
  message: string;
  message_tags: EntityAtTextRangeFields[];
  object: Record<string, unknown>;
  parent: CommentFields;
  permalink_url: string;
  private_reply_conversation: Record<string, unknown>;
  user_likes: boolean;
}

export interface CommentListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export interface CommentCreateCommentsParams {
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

export interface CommentDeleteLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  tracking?: string;
  [key: string]: unknown;
}

export interface CommentCreateLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  tracking?: string;
  [key: string]: unknown;
}

export interface CommentListReactionsParams {
  type?: string;
  [key: string]: unknown;
}

export interface CommentUpdateParams {
  attachment_id?: string;
  attachment_share_url?: string;
  attachment_url?: string;
  is_hidden?: boolean;
  message?: string;
  [key: string]: unknown;
}

export function commentNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CommentFields, F[number]>>(`${id}`, opts),
    update: (params: CommentUpdateParams) =>
      client.post<CommentFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    comments: {
      list: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: CommentListCommentsParams }) =>
        new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: CommentCreateCommentsParams) =>
        client.post<CommentFields>(`${id}/comments`, params as Record<string, unknown>),
    },
    likes: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: CommentCreateLikesParams) =>
        client.post<Record<string, unknown>>(`${id}/likes`, params as Record<string, unknown>),
      delete: (params: CommentDeleteLikesParams) =>
        client.delete(`${id}/likes`, params as Record<string, unknown> ?? {}),
    },
    reactions: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: CommentListReactionsParams }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/reactions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

