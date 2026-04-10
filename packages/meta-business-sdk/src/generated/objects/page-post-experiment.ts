import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { UserFields } from "./user.ts";

export interface PagePostExperimentFields {
  auto_resolve_settings: Record<string, unknown>;
  control_video_id: string;
  creation_time: string;
  creator: UserFields;
  declared_winning_time: string;
  declared_winning_video_id: string;
  description: string;
  experiment_video_ids: string[];
  id: string;
  insight_snapshots: Record<string, Record<number, Record<string, unknown>>[]>[];
  name: string;
  optimization_goal: string;
  publish_status: string;
  publish_time: string;
  scheduled_experiment_timestamp: string;
  updated_time: string;
}

export function pagePostExperimentNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PagePostExperimentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PagePostExperimentFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
    videoInsights: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/video_insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

