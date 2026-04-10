import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as ProductFeedMediaTitlesFields,
    mediaTitles: <F extends (keyof ProductFeedMediaTitlesGetFields)[]>(opts: { fields: F; params?: ProductFeedMediaTitlesListMediaTitlesParams }) =>
      new Cursor<Pick<ProductFeedMediaTitlesGetFields, F[number]>>(client, `${id}/media_titles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

