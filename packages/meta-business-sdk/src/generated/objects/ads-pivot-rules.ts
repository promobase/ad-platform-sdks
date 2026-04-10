import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface AdsPivotRulesFields {
  creation_time: string;
  creator: ProfileFields;
  description: string;
  id: string;
  name: string;
  permission: string;
  rules: Record<string, unknown>[];
  scope: string;
  update_by: ProfileFields;
  update_time: string;
}

export function adsPivotRulesNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsPivotRulesFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsPivotRulesFields, F[number]>>(`${id}`, opts),
  };
}

