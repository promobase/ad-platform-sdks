import type { ApiClient } from "../../runtime/client.ts";
import type { UserFields } from "./user.ts";

export interface VideoCopyrightMatchFields {
  created_date: string;
  id: string;
  last_modified_user: UserFields;
  match_data: Record<string, unknown>[];
  match_status: string;
  notes: string;
  permalink: string;
  policy_eval_modify_reasons: Record<string, unknown>[];
  ugc_content_format: string;
}

export function videoCopyrightMatchNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof VideoCopyrightMatchFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoCopyrightMatchFields, F[number]>>(`${id}`, opts),
  };
}

