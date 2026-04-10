import type { ApiClient } from "../../runtime/client.ts";

export interface IGUpcomingEventFields {
  end_time: string;
  id: string;
  notification_subtypes: string[];
  notification_target_time: string;
  start_time: string;
  title: string;
}

export interface IGUpcomingEventUpdateParams {
  end_time?: string;
  notification_subtypes?: string[];
  notification_target_time?: string;
  start_time?: string;
  title?: string;
  [key: string]: unknown;
}

export function iGUpcomingEventNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGUpcomingEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGUpcomingEventFields, F[number]>>(`${id}`, opts),
    update: (params: IGUpcomingEventUpdateParams) =>
      client.post<IGUpcomingEventFields>(`${id}`, params as Record<string, unknown>),
  };
}

