// @generated
// fingerprint: sha256:da2ab846b220ebf1af011151002f3034202a56dbb90a87d131fb296aa89ec43c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
      new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

