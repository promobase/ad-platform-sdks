import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CommentFields } from "./comment.ts";
import type { InsightsResultFields } from "./insights-result.ts";
import type { UserFields } from "./user.ts";

export interface IGMediaForIGOnlyAPIFields {
  alt_text: string;
  caption: string;
  comments_count: number;
  current_live_viewer_count: number;
  id: string;
  is_comment_enabled: boolean;
  is_shared_to_feed: boolean;
  like_count: number;
  media_product_type: string;
  media_type: string;
  media_url: string;
  owner: UserFields;
  permalink: string;
  shortcode: string;
  thumbnail_url: string;
  timestamp: string;
  username: string;
}

export interface IGMediaForIGOnlyAPICreateCommentsParams {
  message?: string;
  [key: string]: unknown;
}

export interface IGMediaForIGOnlyAPIListInsightsParams {
  breakdown?: string[];
  metric: string[];
  period?: string[];
  [key: string]: unknown;
}

export interface IGMediaForIGOnlyAPIUpdateParams {
  comment_enabled?: boolean;
  [key: string]: unknown;
}

export function iGMediaForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGMediaForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGMediaForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
    update: (params: IGMediaForIGOnlyAPIUpdateParams) =>
      client.post<IGMediaForIGOnlyAPIFields>(`${id}`, params as Record<string, unknown>),
    children: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/children`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    comments: {
      list: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGMediaForIGOnlyAPICreateCommentsParams) =>
        client.post<Record<string, unknown>>(`${id}/comments`, params as Record<string, unknown>),
    },
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: IGMediaForIGOnlyAPIListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

