import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductFeedRulesGetFields } from "./product-feed-rules-get.ts";

export interface ProductFeedRulesFields {
}

export function productFeedRulesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedRulesFields,
    rules: <F extends (keyof ProductFeedRulesGetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductFeedRulesGetFields, F[number]>>(client, `${id}/rules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

