// @generated
// fingerprint: sha256:77528405b23b7c34df1352ac0e0f22e368cb3c6e49a794a3c9c0968e3e8b7b50
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

