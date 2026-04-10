import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdStudyCellFields } from "./ad-study-cell.ts";
import type { AdStudyObjectiveFields } from "./ad-study-objective.ts";
import type { BusinessFields } from "./business.ts";
import type { PrivateLiftStudyInstanceFields } from "./private-lift-study-instance.ts";
import type { UserFields } from "./user.ts";

export interface AdStudyFields {
  business: BusinessFields;
  canceled_time: string;
  client_business: BusinessFields;
  cooldown_start_time: string;
  created_by: UserFields;
  created_time: string;
  description: string;
  end_time: string;
  id: string;
  measurement_contact: UserFields;
  name: string;
  observation_end_time: string;
  results_first_available_date: string;
  sales_contact: UserFields;
  start_time: string;
  type: string;
  updated_by: UserFields;
  updated_time: string;
}

export interface AdStudyCreateCheckpointParams {
  checkpoint_data: string;
  checkpoint_name: string;
  component: string;
  instance_id?: string;
  run_id?: string;
  [key: string]: unknown;
}

export interface AdStudyCreateInstancesParams {
  breakdown_key: Record<string, unknown>;
  run_id?: string;
  [key: string]: unknown;
}

export interface AdStudyUpdateParams {
  cells?: Record<string, unknown>[];
  client_business?: string;
  confidence_level?: number;
  cooldown_start_time?: number;
  description?: string;
  end_time?: number;
  name?: string;
  objectives?: Record<string, unknown>[];
  observation_end_time?: number;
  start_time?: number;
  type?: string;
  viewers?: number[];
  [key: string]: unknown;
}

export function adStudyNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdStudyFields, F[number]>>(`${id}`, opts),
    update: (params: AdStudyUpdateParams) =>
      client.post<AdStudyFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    cells: <F extends (keyof AdStudyCellFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdStudyCellFields, F[number]>>(client, `${id}/cells`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createCheckpoint: (params: AdStudyCreateCheckpointParams) =>
      client.post<AdStudyFields>(`${id}/checkpoint`, params as Record<string, unknown>),
    instances: {
      list: <F extends (keyof PrivateLiftStudyInstanceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<PrivateLiftStudyInstanceFields, F[number]>>(client, `${id}/instances`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: AdStudyCreateInstancesParams) =>
        client.post<PrivateLiftStudyInstanceFields>(`${id}/instances`, params as Record<string, unknown>),
    },
    objectives: <F extends (keyof AdStudyObjectiveFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdStudyObjectiveFields, F[number]>>(client, `${id}/objectives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

