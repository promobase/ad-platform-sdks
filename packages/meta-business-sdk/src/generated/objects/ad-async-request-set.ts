import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAsyncRequestFields } from "./ad-async-request.ts";
import type { AdAsyncRequestSetNotificationResultFields } from "./ad-async-request-set-notification-result.ts";

export interface AdAsyncRequestSetFields {
  canceled_count: number;
  created_time: string;
  error_count: number;
  id: string;
  in_progress_count: number;
  initial_count: number;
  is_completed: boolean;
  name: string;
  notification_mode: string;
  notification_result: AdAsyncRequestSetNotificationResultFields;
  notification_status: string;
  notification_uri: string;
  owner_id: string;
  success_count: number;
  total_count: number;
  updated_time: string;
}

export interface AdAsyncRequestSetListRequestsParams {
  statuses?: string[];
  [key: string]: unknown;
}

export interface AdAsyncRequestSetUpdateParams {
  name?: string;
  notification_mode?: string;
  notification_uri?: string;
  [key: string]: unknown;
}

export function adAsyncRequestSetNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdAsyncRequestSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdAsyncRequestSetFields, F[number]>>(`${id}`, opts),
    update: (params: AdAsyncRequestSetUpdateParams) =>
      client.post<AdAsyncRequestSetFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    requests: <F extends (keyof AdAsyncRequestFields)[]>(opts: { fields: F; params?: AdAsyncRequestSetListRequestsParams }) =>
      new Cursor<Pick<AdAsyncRequestFields, F[number]>>(client, `${id}/requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

