// @generated
// fingerprint: sha256:59b86363e30b47673475242d666ed5063303c50a540a958363ef6bae506da922
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";

export interface AdsConversionGoalFields {
  ad_account_id: string;
  conversion_event_value_source: string;
  description: string;
  goal_creation_method: string;
  id: string;
  name: string;
  performance_goal: string;
  update_status: string;
}

export function adsConversionGoalNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsConversionGoalFields,
    get: <F extends (keyof AdsConversionGoalFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsConversionGoalFields, F[number]>>(`${id}`, opts),
    conversionEvents: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/conversion_events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

