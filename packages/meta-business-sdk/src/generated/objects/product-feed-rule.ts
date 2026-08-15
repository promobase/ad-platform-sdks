// @generated
// fingerprint: sha256:536489a59b874c19a8e8fa986cf7f1c30a2a8bfaac96d2f599d28c986ae03489
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as ProductFeedRuleFields,
    get: <F extends (keyof ProductFeedRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedRuleFields, F[number]>>(`${id}`, opts),
    update: (params: ProductFeedRuleUpdateParams) =>
      client.post<ProductFeedRuleFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

