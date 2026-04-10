import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as AdgroupFacebookFeedbackFields,
    comments: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: AdgroupFacebookFeedbackListCommentsParams }) =>
      new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

