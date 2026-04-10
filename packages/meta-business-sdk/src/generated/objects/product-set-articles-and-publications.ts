import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductSetArticlesAndPublicationsGetFields } from "./product-set-articles-and-publications-get.ts";

export interface ProductSetArticlesAndPublicationsFields {
}

export interface ProductSetArticlesAndPublicationsListArticlesAndPublicationsParams {
  after?: string;
  before?: string;
  limit?: number;
  summary?: boolean;
  [key: string]: unknown;
}

export function productSetArticlesAndPublicationsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductSetArticlesAndPublicationsFields,
    articlesAndPublications: <F extends (keyof ProductSetArticlesAndPublicationsGetFields)[]>(opts: { fields: F; params?: ProductSetArticlesAndPublicationsListArticlesAndPublicationsParams }) =>
      new Cursor<Pick<ProductSetArticlesAndPublicationsGetFields, F[number]>>(client, `${id}/articles_and_publications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

