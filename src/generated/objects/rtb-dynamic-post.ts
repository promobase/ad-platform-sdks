import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { CommentFields } from "./comment.ts";
import type { DynamicPostChildAttachmentFields } from "./dynamic-post-child-attachment.ts";
import type { ProfileFields } from "./profile.ts";

export interface RTBDynamicPostFields {
  child_attachments: DynamicPostChildAttachmentFields[];
  created: string;
  description: string;
  id: string;
  image_url: string;
  link: string;
  message: string;
  owner_id: string;
  place_id: string;
  product_id: string;
  title: string;
}

export interface RTBDynamicPostListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export function rTBDynamicPostNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof RTBDynamicPostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<RTBDynamicPostFields, F[number]>>(`${id}`, opts),
    comments: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: RTBDynamicPostListCommentsParams }) =>
      new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    likes: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

