import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { CommentFields } from "./comment.ts";
import type { PrivacyFields } from "./privacy.ts";
import type { ProfileFields } from "./profile.ts";

export interface LinkFields {
  caption: string;
  created_time: string;
  description: string;
  from: Record<string, unknown>;
  icon: string;
  id: string;
  link: string;
  message: string;
  multi_share_optimized: boolean;
  name: string;
  privacy: PrivacyFields;
  via: Record<string, unknown>;
}

export interface LinkCreateCommentsParams {
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

export function linkNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LinkFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LinkFields, F[number]>>(`${id}`, opts),
    createComment: (params: LinkCreateCommentsParams) =>
      client.post<CommentFields>(`${id}/comments`, params as Record<string, unknown>),
    likes: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

