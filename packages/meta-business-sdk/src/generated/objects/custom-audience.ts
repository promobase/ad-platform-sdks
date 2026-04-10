import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdFields } from "./ad.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { AudiencePermissionForActionsFields } from "./audience-permission-for-actions.ts";
import type { BusinessFields } from "./business.ts";
import type { CustomAudienceDataSourceFields } from "./custom-audience-data-source.ts";
import type { CustomAudienceHealthFields } from "./custom-audience-health.ts";
import type { CustomAudienceSaltsFields } from "./custom-audience-salts.ts";
import type { CustomAudienceSessionFields } from "./custom-audience-session.ts";
import type { CustomAudienceSharingStatusFields } from "./custom-audience-sharing-status.ts";
import type { CustomAudienceStatusFields } from "./custom-audience-status.ts";
import type { CustomAudiencesharedAccountInfoFields } from "./custom-audienceshared-account-info.ts";
import type { LookalikeSpecFields } from "./lookalike-spec.ts";
import type { PageFields } from "./page.ts";
import type { StatusFields } from "./status.ts";

export interface CustomAudienceFields {
  account_id: string;
  approximate_count_lower_bound: number;
  approximate_count_upper_bound: number;
  customer_file_source: string;
  data_source: CustomAudienceDataSourceFields;
  data_source_types: string;
  datafile_custom_audience_uploading_status: string;
  delete_time: number;
  delivery_status: CustomAudienceStatusFields;
  description: string;
  excluded_custom_audiences: CustomAudienceFields[];
  external_event_source: AdsPixelFields;
  fields_violating_integrity_policy: string[];
  household_audience: number;
  id: string;
  included_custom_audiences: CustomAudienceFields[];
  is_eligible_for_sac_campaigns: boolean;
  is_household: boolean;
  is_snapshot: boolean;
  is_value_based: boolean;
  lookalike_audience_ids: string[];
  lookalike_spec: LookalikeSpecFields;
  messenger_marketing_messages_page: PageFields;
  name: string;
  operation_status: CustomAudienceStatusFields;
  opt_out_link: string;
  owner_business: BusinessFields;
  page_deletion_marked_delete_time: number;
  permission_for_actions: AudiencePermissionForActionsFields;
  pixel_id: string;
  regulated_audience_spec: LookalikeSpecFields;
  retention_days: number;
  rev_share_policy_id: number;
  rule: string;
  rule_aggregation: string;
  rule_v2: string;
  seed_audience: number;
  sharing_status: CustomAudienceSharingStatusFields;
  subtype: string;
  time_content_updated: number;
  time_created: number;
  time_updated: number;
}

export interface CustomAudienceDeleteAdaccountsParams {
  adaccounts?: string[];
  [key: string]: unknown;
}

export interface CustomAudienceListAdaccountsParams {
  permissions?: string;
  [key: string]: unknown;
}

export interface CustomAudienceCreateAdaccountsParams {
  adaccounts?: string[];
  permissions?: string;
  relationship_type?: string[];
  replace?: boolean;
  [key: string]: unknown;
}

export interface CustomAudienceListAdsParams {
  effective_status?: string[];
  status?: string[];
  [key: string]: unknown;
}

export interface CustomAudienceListHealthParams {
  calculated_date?: string;
  processed_date?: string;
  value_aggregation_duration?: number;
  value_country?: string;
  value_currency?: string;
  value_version?: number;
  [key: string]: unknown;
}

export interface CustomAudienceListSaltsParams {
  params?: string[];
  [key: string]: unknown;
}

export interface CustomAudienceCreateSaltsParams {
  salt: string;
  valid_from: string;
  valid_to: string;
  [key: string]: unknown;
}

export interface CustomAudienceListSessionsParams {
  session_id?: number;
  [key: string]: unknown;
}

export interface CustomAudienceDeleteUsersParams {
  namespace?: string;
  payload?: Record<string, unknown>;
  session?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CustomAudienceCreateUsersParams {
  namespace?: string;
  payload?: Record<string, unknown>;
  session?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CustomAudienceCreateUsersreplaceParams {
  namespace?: string;
  payload: Record<string, unknown>;
  session: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CustomAudienceUpdateParams {
  allowed_domains?: string[];
  claim_objective?: string;
  content_type?: string;
  countries?: string;
  customer_file_source?: string;
  description?: string;
  enable_fetch_or_create?: boolean;
  event_source_group?: string;
  event_sources?: Record<string, unknown>[];
  exclusions?: Record<string, unknown>[];
  inclusionOperator?: string;
  inclusions?: Record<string, unknown>[];
  lookalike_spec?: string;
  name?: string;
  opt_out_link?: string;
  parent_audience_id?: number;
  product_set_id?: string;
  retention_days?: number;
  rev_share_policy_id?: number;
  rule?: string;
  rule_aggregation?: string;
  tags?: string[];
  use_for_products?: string[];
  use_in_campaigns?: boolean;
  [key: string]: unknown;
}

export function customAudienceNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CustomAudienceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CustomAudienceFields, F[number]>>(`${id}`, opts),
    update: (params: CustomAudienceUpdateParams) =>
      client.post<CustomAudienceFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    adaccounts: {
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: CustomAudienceListAdaccountsParams }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: CustomAudienceCreateAdaccountsParams) =>
        client.post<CustomAudienceFields>(`${id}/adaccounts`, params as Record<string, unknown>),
      delete: (params: CustomAudienceDeleteAdaccountsParams) =>
        client.delete(`${id}/adaccounts`, params as Record<string, unknown> ?? {}),
    },
    ads: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: CustomAudienceListAdsParams }) =>
      new Cursor<Pick<AdFields, F[number]>>(client, `${id}/ads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    health: <F extends (keyof CustomAudienceHealthFields)[]>(opts: { fields: F; params?: CustomAudienceListHealthParams }) =>
      new Cursor<Pick<CustomAudienceHealthFields, F[number]>>(client, `${id}/health`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    salts: {
      list: <F extends (keyof CustomAudienceSaltsFields)[]>(opts: { fields: F; params?: CustomAudienceListSaltsParams }) =>
        new Cursor<Pick<CustomAudienceSaltsFields, F[number]>>(client, `${id}/salts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: CustomAudienceCreateSaltsParams) =>
        client.post<CustomAudienceFields>(`${id}/salts`, params as Record<string, unknown>),
    },
    sessions: <F extends (keyof CustomAudienceSessionFields)[]>(opts: { fields: F; params?: CustomAudienceListSessionsParams }) =>
      new Cursor<Pick<CustomAudienceSessionFields, F[number]>>(client, `${id}/sessions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sharedAccountInfo: <F extends (keyof CustomAudiencesharedAccountInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CustomAudiencesharedAccountInfoFields, F[number]>>(client, `${id}/shared_account_info`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    users: {
      create: (params: CustomAudienceCreateUsersParams) =>
        client.post<CustomAudienceFields>(`${id}/users`, params as Record<string, unknown>),
      delete: (params: CustomAudienceDeleteUsersParams) =>
        client.delete(`${id}/users`, params as Record<string, unknown> ?? {}),
    },
    createUsersreplace: (params: CustomAudienceCreateUsersreplaceParams) =>
      client.post<CustomAudienceFields>(`${id}/usersreplace`, params as Record<string, unknown>),
  };
}

