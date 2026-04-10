import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { BusinessFields } from "./business.ts";
import type { CustomConversionStatsResultFields } from "./custom-conversion-stats-result.ts";
import type { ExternalEventSourceFields } from "./external-event-source.ts";
import type { OfflineConversionDataSetFields } from "./offline-conversion-data-set.ts";

export interface CustomConversionFields {
  account_id: string;
  aggregation_rule: string;
  business: BusinessFields;
  creation_time: string;
  custom_event_type: string;
  data_sources: ExternalEventSourceFields[];
  default_conversion_value: number;
  description: string;
  event_source_type: string;
  first_fired_time: string;
  id: string;
  is_archived: boolean;
  is_unavailable: boolean;
  last_fired_time: string;
  name: string;
  offline_conversion_data_set: OfflineConversionDataSetFields;
  pixel: AdsPixelFields;
  retention_days: number;
  rule: string;
}

export interface CustomConversionListStatsParams {
  aggregation?: string;
  end_time?: string;
  start_time?: string;
  [key: string]: unknown;
}

export interface CustomConversionUpdateParams {
  default_conversion_value?: number;
  description?: string;
  name?: string;
  [key: string]: unknown;
}

export function customConversionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CustomConversionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CustomConversionFields, F[number]>>(`${id}`, opts),
    update: (params: CustomConversionUpdateParams) =>
      client.post<CustomConversionFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    stats: <F extends (keyof CustomConversionStatsResultFields)[]>(opts: { fields: F; params?: CustomConversionListStatsParams }) =>
      new Cursor<Pick<CustomConversionStatsResultFields, F[number]>>(client, `${id}/stats`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

