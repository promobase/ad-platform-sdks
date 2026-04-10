import type { ApiClient } from "@promobase/sdk-runtime";
import type { GroupFields } from "./group.ts";
import type { UserFields } from "./user.ts";
import type { VideoCopyrightConditionGroupFields } from "./video-copyright-condition-group.ts";

export interface VideoCopyrightRuleFields {
  condition_groups: VideoCopyrightConditionGroupFields[];
  copyrights: string[];
  created_date: string;
  creator: UserFields;
  id: string;
  is_in_migration: boolean;
  name: string;
}

export function videoCopyrightRuleNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as VideoCopyrightRuleFields,
    get: <F extends (keyof VideoCopyrightRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoCopyrightRuleFields, F[number]>>(`${id}`, opts),
  };
}

