import type { ApiClient } from "@promobase/sdk-runtime";

export interface ProductFeedRuleFields {
  attribute: string;
  id: string;
  params: Record<string, string>[];
  rule_type: string;
}

export interface ProductFeedRuleUpdateParams {
  params?: Record<string, unknown>;
  [key: string]: unknown;
}

export function productFeedRuleNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ProductFeedRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedRuleFields, F[number]>>(`${id}`, opts),
    update: (params: ProductFeedRuleUpdateParams) =>
      client.post<ProductFeedRuleFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

