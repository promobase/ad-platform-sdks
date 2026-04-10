import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { IGCommentFromUserFields } from "./ig-comment-from-user.ts";
import type { IGMediaFields } from "./ig-media.ts";
import type { IGUserFields } from "./ig-user.ts";
import type { UserFields } from "./user.ts";

export interface IGCommentFields {
  from: IGCommentFromUserFields;
  hidden: boolean;
  id: string;
  legacy_instagram_comment_id: string;
  like_count: number;
  media: IGMediaFields;
  parent_id: string;
  text: string;
  timestamp: string;
  user: IGUserFields;
  username: string;
}

export interface IGCommentCreateRepliesParams {
  message?: string;
  [key: string]: unknown;
}

export interface IGCommentUpdateParams {
  ad_id?: string;
  hide?: boolean;
  [key: string]: unknown;
}

export function iGCommentNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGCommentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGCommentFields, F[number]>>(`${id}`, opts),
    update: (params: IGCommentUpdateParams) =>
      client.post<IGCommentFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    replies: {
      list: <F extends (keyof IGCommentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<IGCommentFields, F[number]>>(client, `${id}/replies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: IGCommentCreateRepliesParams) =>
        client.post<IGCommentFields>(`${id}/replies`, params as Record<string, unknown>),
    },
  };
}

