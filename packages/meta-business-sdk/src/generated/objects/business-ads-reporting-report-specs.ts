import type { BusinessFields } from "./business.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { GroupFields } from "./group.ts";
import type { ProfileFields } from "./profile.ts";

export interface BusinessAdsReportingReportSpecsFields {
  action_report_time: string;
  ad_account_id: string;
  ad_account_ids: string[];
  ad_accounts: Record<string, unknown>[];
  attribution_windows: string[];
  business: BusinessFields;
  business_asset_group: BusinessAssetGroupFields;
  comparison_date_interval: Record<string, unknown>;
  creation_source: string;
  creation_time: string;
  currency: string;
  date_preset: string;
  default_attribution_windows: string[];
  filtering: Record<string, unknown>[];
  formatting: Record<string, Record<string, unknown>[]>[];
  id: string;
  last_access_by: ProfileFields;
  last_access_time: string;
  last_report_snapshot_id: string;
  last_report_snapshot_time: string;
  last_shared_report_expiration: string;
  limit: number;
  locked_dimensions: number;
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

