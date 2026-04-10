import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { CommentFields } from "./comment.ts";

export interface AdgroupFacebookFeedbackFields {
  id: string;
  preview: string;
}

export interface AdgroupFacebookFeedbackListCommentsParams {
  order?: string;
  [key: string]: unknown;
}

export function adgroupFacebookFeedbackNode(client: ApiClient, id: string) {
  return {
    comments: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: AdgroupFacebookFeedbackListCommentsParams }) =>
      new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

