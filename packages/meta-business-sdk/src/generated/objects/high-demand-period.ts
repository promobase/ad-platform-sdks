import type { ApiClient } from "@promobase/sdk-runtime";
import type { HighDemandPeriodTimeSuggestionWeeklySegmentFields } from "./high-demand-period-time-suggestion-weekly-segment.ts";

export interface HighDemandPeriodFields {
  ad_object_id: string;
  budget_value: number;
  budget_value_type: string;
  id: string;
  recurrence_type: string;
  time_end: string;
  time_start: string;
  weekly_schedule: HighDemandPeriodTimeSuggestionWeeklySegmentFields[];
}

export interface HighDemandPeriodUpdateParams {
  budget_value?: number;
  budget_value_type?: string;
  time_end?: number;
  time_start?: number;
  [key: string]: unknown;
}

export function highDemandPeriodNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as HighDemandPeriodFields,
    get: <F extends (keyof HighDemandPeriodFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HighDemandPeriodFields, F[number]>>(`${id}`, opts),
    update: (params: HighDemandPeriodUpdateParams) =>
      client.post<HighDemandPeriodFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

