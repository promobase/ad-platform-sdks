import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
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
    articlesAndPublications: <F extends (keyof ProductSetArticlesAndPublicationsGetFields)[]>(opts: { fields: F; params?: ProductSetArticlesAndPublicationsListArticlesAndPublicationsParams }) =>
      new Cursor<Pick<ProductSetArticlesAndPublicationsGetFields, F[number]>>(client, `${id}/articles_and_publications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

