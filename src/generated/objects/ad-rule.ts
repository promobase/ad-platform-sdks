import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdRuleEvaluationSpecFields } from "./ad-rule-evaluation-spec.ts";
import type { AdRuleExecutionSpecFields } from "./ad-rule-execution-spec.ts";
import type { AdRuleHistoryFields } from "./ad-rule-history.ts";
import type { AdRuleScheduleSpecFields } from "./ad-rule-schedule-spec.ts";
import type { UserFields } from "./user.ts";

export interface AdRuleFields {
  account_id: string;
  created_by: UserFields;
  created_time: string;
  disable_error_code: number;
  evaluation_spec: AdRuleEvaluationSpecFields;
  execution_spec: AdRuleExecutionSpecFields;
  id: string;
  name: string;
  schedule_spec: AdRuleScheduleSpecFields;
  status: string;
  updated_time: string;
}

export interface AdRuleListHistoryParams {
  action?: string;
  hide_no_changes?: boolean;
  object_id?: string;
  [key: string]: unknown;
}

export interface AdRuleUpdateParams {
  evaluation_spec?: Record<string, unknown>;
  execution_spec?: Record<string, unknown>;
  name?: string;
  schedule_spec?: Record<string, unknown>;
  status?: string;
  [key: string]: unknown;
}

export function adRuleNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdRuleFields, F[number]>>(`${id}`, opts),
    update: (params: AdRuleUpdateParams) =>
      client.post<AdRuleFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    createExecute: (params: Record<string, unknown>) =>
      client.post<Record<string, unknown>>(`${id}/execute`, params as Record<string, unknown>),
    history: <F extends (keyof AdRuleHistoryFields)[]>(opts: { fields: F; params?: AdRuleListHistoryParams }) =>
      new Cursor<Pick<AdRuleHistoryFields, F[number]>>(client, `${id}/history`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    createPreview: (params: Record<string, unknown>) =>
      client.post<AdRuleFields>(`${id}/preview`, params as Record<string, unknown>),
  };
}

