import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";

export interface OfflineConversionDataSetUploadFields {
  api_calls: number;
  creation_time: number;
  duplicate_entries: number;
  event_stats: string;
  event_time_max: number;
  event_time_min: number;
  first_upload_time: number;
  id: string;
  is_excluded_for_lift: boolean;
  last_upload_time: number;
  match_rate_approx: number;
  matched_entries: number;
  upload_tag: string;
  valid_entries: number;
}

export function offlineConversionDataSetUploadNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OfflineConversionDataSetUploadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OfflineConversionDataSetUploadFields, F[number]>>(`${id}`, opts),
    progress: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/progress`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pullSessions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/pull_sessions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

