import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ProductFeedMediaTitlesGetFields } from "./product-feed-media-titles-get.ts";

export interface ProductFeedMediaTitlesFields {
}

export interface ProductFeedMediaTitlesListMediaTitlesParams {
  after?: string;
  before?: string;
  display_format?: string;
  limit?: number;
  summary?: boolean;
  [key: string]: unknown;
}

export function productFeedMediaTitlesNode(client: ApiClient, id: string) {
  return {
    mediaTitles: <F extends (keyof ProductFeedMediaTitlesGetFields)[]>(opts: { fields: F; params?: ProductFeedMediaTitlesListMediaTitlesParams }) =>
      new Cursor<Pick<ProductFeedMediaTitlesGetFields, F[number]>>(client, `${id}/media_titles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

