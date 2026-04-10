import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ProductFeedRulesGetFields } from "./product-feed-rules-get.ts";

export interface ProductFeedRulesFields {
}

export interface ProductFeedRulesListRulesParams {
  after?: string;
  before?: string;
  limit?: number;
  [key: string]: unknown;
}

export function productFeedRulesNode(client: ApiClient, id: string) {
  return {
    rules: <F extends (keyof ProductFeedRulesGetFields)[]>(opts: { fields: F; params?: ProductFeedRulesListRulesParams }) =>
      new Cursor<Pick<ProductFeedRulesGetFields, F[number]>>(client, `${id}/rules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

