import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdsPixelStatsResultFields } from "./ads-pixel-stats-result.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { BusinessFields } from "./business.ts";
import type { DACheckFields } from "./da-check.ts";
import type { OfflineConversionDataSetUploadFields } from "./offline-conversion-data-set-upload.ts";
import type { OfflineConversionDataSetUsageFields } from "./offline-conversion-data-set-usage.ts";
import type { OpenBridgeConfigurationFields } from "./open-bridge-configuration.ts";
import type { UserFields } from "./user.ts";

export interface AdsPixelFields {
  automatic_matching_fields: string[];
  can_proxy: boolean;
  code: string;
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
  has_1p_pixel_event: boolean;
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
  user_access_expire_time: string;
  valid_entries: number;
}

export interface AdsPixelListAdaccountsParams {
  business: string;
  [key: string]: unknown;
}

export interface AdsPixelDeleteAgenciesParams {
  business: string;
  [key: string]: unknown;
}

export interface AdsPixelCreateAgenciesParams {
  business: string;
  permitted_tasks: string[];
  [key: string]: unknown;
}

export interface AdsPixelCreateAhpConfigsParams {
  applink_autosetup: boolean;
  [key: string]: unknown;
}

export interface AdsPixelListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface AdsPixelCreateAssignedUsersParams {
  tasks: string[];
  user: number;
  [key: string]: unknown;
}

export interface AdsPixelListDaChecksParams {
  checks?: string[];
  connection_method?: string;
  [key: string]: unknown;
}

export interface AdsPixelCreateEventsParams {
  data: string[];
  namespace_id?: string;
  partner_agent?: string;
  platforms?: Record<string, unknown>[];
  progress?: Record<string, unknown>;
  test_event_code?: string;
  trace?: number;
  upload_id?: string;
  upload_source?: string;
  upload_tag?: string;
  [key: string]: unknown;
}

export interface AdsPixelListOfflineEventUploadsParams {
  end_time?: string;
  order?: string;
  sort_by?: string;
  start_time?: string;
  upload_tag?: string;
  [key: string]: unknown;
}

export interface AdsPixelDeleteSharedAccountsParams {
  account_id: string;
  business: string;
  [key: string]: unknown;
}

export interface AdsPixelListSharedAccountsParams {
  business: string;
  [key: string]: unknown;
}

export interface AdsPixelCreateSharedAccountsParams {
  account_id: string;
  business: string;
  [key: string]: unknown;
}

export interface AdsPixelListStatsParams {
  agent?: string;
  aggregation?: string;
  end_time?: string;
  event?: string;
  event_source?: string;
  start_time?: string;
  [key: string]: unknown;
}

export interface AdsPixelUpdateParams {
  automatic_matching_fields?: string[];
  data_use_setting?: string;
  enable_automatic_matching?: boolean;
  first_party_cookie_status?: string;
  name?: string;
  server_events_business_ids?: string[];
  [key: string]: unknown;
}

export function adsPixelNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsPixelFields, F[number]>>(`${id}`, opts),
    update: (params: AdsPixelUpdateParams) =>
      client.post<AdsPixelFields>(`${id}`, params as Record<string, unknown>),
    adaccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: AdsPixelListAdaccountsParams }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    agencies: {
      list: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdsPixelCreateAgenciesParams) =>
        client.post<AdsPixelFields>(`${id}/agencies`, params as Record<string, unknown>),
      delete: (params: AdsPixelDeleteAgenciesParams) =>
        client.delete(`${id}/agencies`, params as Record<string, unknown> ?? {}),
    },
    createAhpConfig: (params: AdsPixelCreateAhpConfigsParams) =>
      client.post<Record<string, unknown>>(`${id}/ahp_configs`, params as Record<string, unknown>),
    assignedUsers: {
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: AdsPixelListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdsPixelCreateAssignedUsersParams) =>
        client.post<AdsPixelFields>(`${id}/assigned_users`, params as Record<string, unknown>),
    },
    daChecks: <F extends (keyof DACheckFields)[]>(opts: { fields: F; params?: AdsPixelListDaChecksParams }) =>
      new Cursor<Pick<DACheckFields, F[number]>>(client, `${id}/da_checks`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createEvent: (params: AdsPixelCreateEventsParams) =>
      client.post<Record<string, unknown>>(`${id}/events`, params as Record<string, unknown>),
    offlineEventUploads: <F extends (keyof OfflineConversionDataSetUploadFields)[]>(opts: { fields: F; params?: AdsPixelListOfflineEventUploadsParams }) =>
      new Cursor<Pick<OfflineConversionDataSetUploadFields, F[number]>>(client, `${id}/offline_event_uploads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    openbridgeConfigurations: <F extends (keyof OpenBridgeConfigurationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<OpenBridgeConfigurationFields, F[number]>>(client, `${id}/openbridge_configurations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createShadowtraffichelper: (params: Record<string, unknown>) =>
      client.post<Record<string, unknown>>(`${id}/shadowtraffichelper`, params as Record<string, unknown>),
    sharedAccounts: {
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: AdsPixelListSharedAccountsParams }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/shared_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdsPixelCreateSharedAccountsParams) =>
        client.post<AdsPixelFields>(`${id}/shared_accounts`, params as Record<string, unknown>),
      delete: (params: AdsPixelDeleteSharedAccountsParams) =>
        client.delete(`${id}/shared_accounts`, params as Record<string, unknown> ?? {}),
    },
    sharedAgencies: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/shared_agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    stats: <F extends (keyof AdsPixelStatsResultFields)[]>(opts: { fields: F; params?: AdsPixelListStatsParams }) =>
      new Cursor<Pick<AdsPixelStatsResultFields, F[number]>>(client, `${id}/stats`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

