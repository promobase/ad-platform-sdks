import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";

export interface AdsValueAdjustmentRuleCollectionFields {
  id: string;
  is_default_setting: boolean;
  last_attach_time: string;
  name: string;
  product_type: string;
  status: string;
}

export interface AdsValueAdjustmentRuleCollectionUpdateParams {
  is_default_setting?: boolean;
  name?: string;
  rules?: Record<string, unknown>[];
  [key: string]: unknown;
}

export function adsValueAdjustmentRuleCollectionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsValueAdjustmentRuleCollectionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsValueAdjustmentRuleCollectionFields, F[number]>>(`${id}`, opts),
    update: (params: AdsValueAdjustmentRuleCollectionUpdateParams) =>
      client.post<AdsValueAdjustmentRuleCollectionFields>(`${id}`, params as Record<string, unknown>),
    createDeleteRuleSet: (params: Record<string, unknown>) =>
      client.post<AdsValueAdjustmentRuleCollectionFields>(`${id}/delete_rule_set`, params as Record<string, unknown>),
    rules: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/rules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

