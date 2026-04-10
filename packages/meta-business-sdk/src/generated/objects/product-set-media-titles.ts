import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductSetMediaTitlesGetFields } from "./product-set-media-titles-get.ts";

export interface ProductSetMediaTitlesFields {
}

export interface ProductSetMediaTitlesListMediaTitlesParams {
  after?: string;
  before?: string;
  display_format?: string;
  limit?: number;
  summary?: boolean;
  [key: string]: unknown;
}

export function productSetMediaTitlesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductSetMediaTitlesFields,
    mediaTitles: <F extends (keyof ProductSetMediaTitlesGetFields)[]>(opts: { fields: F; params?: ProductSetMediaTitlesListMediaTitlesParams }) =>
      new Cursor<Pick<ProductSetMediaTitlesGetFields, F[number]>>(client, `${id}/media_titles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

