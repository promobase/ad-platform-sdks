// @generated
// fingerprint: sha256:4f14d84bf8a05b9e187528971caf1920c67b4e6c70ef61f11274c8e25b2b8508
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as IGUpcomingEventFields,
    get: <F extends (keyof IGUpcomingEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGUpcomingEventFields, F[number]>>(`${id}`, opts),
    update: (params: IGUpcomingEventUpdateParams) =>
      client.post<IGUpcomingEventFields>(`${id}`, params as Record<string, unknown>),
  };
}

