import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdsInsightsFields } from "./ads-insights.ts";

export interface AdReportRunFields {
  account_id: string;
  async_percent_completion: number;
  async_report_url: string;
  async_status: string;
  date_start: string;
  date_stop: string;
  emails: string[];
  error_code: number;
  error_message: string;
  error_subcode: number;
  error_user_msg: string;
  error_user_title: string;
  friendly_name: string;
  id: string;
  is_async_export: number;
  is_bookmarked: boolean;
  is_running: boolean;
  schedule_id: string;
  time_completed: number;
  time_ref: number;
}

export function adReportRunNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdReportRunFields,
    get: <F extends (keyof AdReportRunFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdReportRunFields, F[number]>>(`${id}`, opts),
    insights: <F extends (keyof AdsInsightsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsInsightsFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

