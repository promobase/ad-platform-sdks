import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AssignedUserFields } from "./assigned-user.ts";

export interface BizInboxOffsiteEmailAccountFields {
  email_address: string;
  id: string;
}

export function bizInboxOffsiteEmailAccountNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BizInboxOffsiteEmailAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BizInboxOffsiteEmailAccountFields, F[number]>>(`${id}`, opts),
    assignedUsers: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

