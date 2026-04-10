import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
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
    get: <F extends (keyof AdMonetizationPropertyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdMonetizationPropertyFields, F[number]>>(`${id}`, opts),
    adnetworkanalytics: {
      list: <F extends (keyof AdNetworkAnalyticsSyncQueryResultFields)[]>(opts: { fields: F; params?: AdMonetizationPropertyListAdnetworkanalyticsParams }) =>
        new Cursor<Pick<AdNetworkAnalyticsSyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: AdMonetizationPropertyCreateAdnetworkanalyticsParams) =>
        client.post<AdMonetizationPropertyFields>(`${id}/adnetworkanalytics`, params as Record<string, unknown>),
    },
    adnetworkanalyticsResults: <F extends (keyof AdNetworkAnalyticsAsyncQueryResultFields)[]>(opts: { fields: F; params?: AdMonetizationPropertyListAdnetworkanalyticsResultsParams }) =>
      new Cursor<Pick<AdNetworkAnalyticsAsyncQueryResultFields, F[number]>>(client, `${id}/adnetworkanalytics_results`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

