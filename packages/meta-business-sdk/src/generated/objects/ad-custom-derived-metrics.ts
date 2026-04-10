import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";
import type { ProfileFields } from "./profile.ts";

export interface AdCustomDerivedMetricsFields {
  ad_account_id: string;
  business: BusinessFields;
  creation_time: string;
  creator: ProfileFields;
  custom_derived_metric_type: string;
  deletion_time: string;
  deletor: ProfileFields;
  description: string;
  format_type: string;
  formula: string;
  has_attribution_windows: boolean;
  has_inline_attribution_window: boolean;
  id: string;
  name: string;
  permission: string;
  saved_report_id: string;
  scope: string;
}

export function adCustomDerivedMetricsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdCustomDerivedMetricsFields,
    get: <F extends (keyof AdCustomDerivedMetricsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdCustomDerivedMetricsFields, F[number]>>(`${id}`, opts),
  };
}

