// @generated
// fingerprint: sha256:190ca8c741a7cb4340fd8ed63171f4b7a4741f7289e3d86f4c35ef4ed372e09e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as RTBDynamicPostFields,
    get: <F extends (keyof RTBDynamicPostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<RTBDynamicPostFields, F[number]>>(`${id}`, opts),
    comments: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: RTBDynamicPostListCommentsParams }) =>
      new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    likes: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

