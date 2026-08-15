// @generated
// fingerprint: sha256:d070b11d1270a0841df6515dd069e0831f99894369127aff1e735adc63939daf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AdNetworkAnalyticsAsyncQueryResultFields } from "./ad-network-analytics-async-query-result.ts";
import type { AdNetworkAnalyticsSyncQueryResultFields } from "./ad-network-analytics-sync-query-result.ts";
import type { BusinessFields } from "./business.ts";

export interface AdMonetizationPropertyFields {
  owner_business: BusinessFields;
}

export interface AdMonetizationPropertyListAdnetworkanalyticsParams {
  aggregation_period?: string;
  breakdowns?: string[];
  filters?: Record<string, unknown>[];
  limit?: number;
  metrics: string[];
  ordering_column?: string;
  ordering_type?: string;
  should_include_until?: boolean;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface AdMonetizationPropertyCreateAdnetworkanalyticsParams {
  aggregation_period?: string;
  breakdowns?: string[];
  filters?: Record<string, unknown>[];
  limit?: number;
  metrics: string[];
  ordering_column?: string;
  ordering_type?: string;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface AdMonetizationPropertyListAdnetworkanalyticsResultsParams {
  query_ids?: string[];
  [key: string]: unknown;
}

export function adMonetizationPropertyNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdMonetizationPropertyFields,
    get: <F extends (keyof AdMonetizationPropertyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdMonetizationPropertyFields, F[number]>>(`${id}`, opts),
    adnetworkanalytics: {
      __path: `${id}/adnetworkanalytics`,
      __brand: undefined as unknown as AdNetworkAnalyticsSyncQueryResultFields,
      list: <F extends (keyof AdNetworkAnalyticsSyncQueryResultFields)[]>(opts: { fields: F; params?: AdMonetizationPropertyListAdnetworkanalyticsParams }) =>
        new Cursor<Pick<AdNetworkAnalyticsSyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
      create: (params: AdMonetizationPropertyCreateAdnetworkanalyticsParams) =>
        client.post<AdMonetizationPropertyFields>(`${id}/adnetworkanalytics`, params as Record<string, unknown>),
    },
    adnetworkanalyticsResults: <F extends (keyof AdNetworkAnalyticsAsyncQueryResultFields)[]>(opts: { fields: F; params?: AdMonetizationPropertyListAdnetworkanalyticsResultsParams }) =>
      new Cursor<Pick<AdNetworkAnalyticsAsyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics_results`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

