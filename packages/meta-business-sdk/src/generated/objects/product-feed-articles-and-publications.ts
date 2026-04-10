import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductFeedArticlesAndPublicationsGetFields } from "./product-feed-articles-and-publications-get.ts";

export interface ProductFeedArticlesAndPublicationsFields {
}

export interface ProductFeedArticlesAndPublicationsListPublicationsParams {
  after?: string;
  before?: string;
  limit?: number;
  summary?: boolean;
  [key: string]: unknown;
}

export function productFeedArticlesAndPublicationsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedArticlesAndPublicationsFields,
    publications: <F extends (keyof ProductFeedArticlesAndPublicationsGetFields)[]>(opts: { fields: F; params?: ProductFeedArticlesAndPublicationsListPublicationsParams }) =>
      new Cursor<Pick<ProductFeedArticlesAndPublicationsGetFields, F[number]>>(client, `${id}/publications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

