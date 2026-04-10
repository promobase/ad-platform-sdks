import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
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
    publications: <F extends (keyof ProductFeedArticlesAndPublicationsGetFields)[]>(opts: { fields: F; params?: ProductFeedArticlesAndPublicationsListPublicationsParams }) =>
      new Cursor<Pick<ProductFeedArticlesAndPublicationsGetFields, F[number]>>(client, `${id}/publications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

