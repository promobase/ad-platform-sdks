import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";

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
    get: <F extends (keyof AdsConversionGoalFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsConversionGoalFields, F[number]>>(`${id}`, opts),
    conversionEvents: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/conversion_events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

