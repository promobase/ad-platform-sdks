import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface AdsReportBuilderSavedReportFields {
  action_report_time: string;
  ad_account_id: string;
  attribution_windows: string[];
  comparison_date_interval: Record<string, unknown>;
  creation_source: string;
  creation_time: string;
  currency: string;
  date_interval: Record<string, unknown>;
  date_preset: string;
  default_attribution_windows: string[];
  dimension_groups: string[][];
  dimensions: string[];
  filtering: unknown[];
  formatting: Record<string, Record<string, unknown>[]>[];
  id: string;
  last_access_by: ProfileFields;
  last_access_time: string;
  last_report_snapshot_id: string;
  last_report_snapshot_time: string;
  last_shared_report_expiration: string;
  limit: number;
  locked_dimensions: number;
  metrics: string[];
  report_name: string;
  report_snapshot_async_percent_completion: number;
  report_snapshot_async_status: string;
  schedule_frequency: string;
  scope: string;
  show_deprecate_aw_banner: boolean;
  sorting: Record<string, unknown>[];
  start_date: string;
  status: string;
  subscribers: string[];
  update_by: ProfileFields;
  update_time: string;
  user: ProfileFields;
  user_dimensions: string[];
  user_metrics: string[];
  view_type: string;
}

export function adsReportBuilderSavedReportNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsReportBuilderSavedReportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsReportBuilderSavedReportFields, F[number]>>(`${id}`, opts),
  };
}

