import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { UserFields } from "./user.ts";

export interface WorkSkillFields {
  id: string;
  name: string;
}

export function workSkillNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WorkSkillFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WorkSkillFields, F[number]>>(`${id}`, opts),
    users: <F extends (keyof UserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<UserFields, F[number]>>(client, `${id}/users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

