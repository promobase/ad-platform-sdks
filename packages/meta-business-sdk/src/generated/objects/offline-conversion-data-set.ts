import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";
import type { CustomAudienceFields } from "./custom-audience.ts";
import type { CustomConversionFields } from "./custom-conversion.ts";
import type { OfflineConversionDataSetUploadFields } from "./offline-conversion-data-set-upload.ts";
import type { OfflineConversionDataSetUsageFields } from "./offline-conversion-data-set-usage.ts";
import type { UserFields } from "./user.ts";

export interface OfflineConversionDataSetFields {
  automatic_matching_fields: string[];
  business: BusinessFields;
  can_proxy: boolean;
  config: string;
  creation_time: string;
  creator: UserFields;
  data_use_setting: string;
  description: string;
  duplicate_entries: number;
  enable_auto_assign_to_accounts: boolean;
  enable_automatic_matching: boolean;
  event_stats: string;
  event_time_max: number;
  event_time_min: number;
  first_party_cookie_status: string;
  id: string;
  is_consolidated_container: boolean;
  is_created_by_business: boolean;
  is_crm: boolean;
  is_mta_use: boolean;
  is_restricted_use: boolean;
  is_unavailable: boolean;
  last_fired_time: string;
  last_upload_app: string;
  last_upload_app_changed_time: number;
  match_rate_approx: number;
  matched_entries: number;
  name: string;
  owner_ad_account: AdAccountFields;
  owner_business: BusinessFields;
  usage: OfflineConversionDataSetUsageFields;
  valid_entries: number;
}

export interface OfflineConversionDataSetListAdaccountsParams {
  business: string;
  [key: string]: unknown;
}

export interface OfflineConversionDataSetListAudiencesParams {
  action_source?: string;
  ad_account?: string;
  [key: string]: unknown;
}

export interface OfflineConversionDataSetListCustomconversionsParams {
  ad_account?: string;
  [key: string]: unknown;
}

export interface OfflineConversionDataSetListSharedAccountsParams {
  action_source: string;
  business: string;
  [key: string]: unknown;
}

export interface OfflineConversionDataSetListSharedAgenciesParams {
  action_source: string;
  [key: string]: unknown;
}

export interface OfflineConversionDataSetListStatsParams {
  aggr_time?: string;
  end?: number;
  granularity?: string;
  skip_empty_values?: boolean;
  start?: number;
  user_timezone_id?: number;
  [key: string]: unknown;
}

export interface OfflineConversionDataSetListUploadsParams {
  end_time?: string;
  order?: string;
  sort_by?: string;
  start_time?: string;
  upload_tag?: string;
  [key: string]: unknown;
}

export function offlineConversionDataSetNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OfflineConversionDataSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OfflineConversionDataSetFields, F[number]>>(`${id}`, opts),
    adaccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: OfflineConversionDataSetListAdaccountsParams }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    agencies: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    audiences: <F extends (keyof CustomAudienceFields)[]>(opts: { fields: F; params?: OfflineConversionDataSetListAudiencesParams }) =>
      new Cursor<Pick<CustomAudienceFields, F[number]>>(client, `${id}/audiences`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    customconversions: <F extends (keyof CustomConversionFields)[]>(opts: { fields: F; params?: OfflineConversionDataSetListCustomconversionsParams }) =>
      new Cursor<Pick<CustomConversionFields, F[number]>>(client, `${id}/customconversions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    serverEventsPermittedBusiness: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/server_events_permitted_business`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sharedAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: OfflineConversionDataSetListSharedAccountsParams }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/shared_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sharedAgencies: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: OfflineConversionDataSetListSharedAgenciesParams }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/shared_agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    stats: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: OfflineConversionDataSetListStatsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/stats`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    uploads: <F extends (keyof OfflineConversionDataSetUploadFields)[]>(opts: { fields: F; params?: OfflineConversionDataSetListUploadsParams }) =>
      new Cursor<Pick<OfflineConversionDataSetUploadFields, F[number]>>(client, `${id}/uploads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

