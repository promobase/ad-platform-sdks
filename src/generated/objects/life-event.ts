import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { PageFields } from "./page.ts";
import type { ProfileFields } from "./profile.ts";

export interface LifeEventFields {
  description: string;
  end_time: string;
  from: PageFields;
  id: string;
  is_hidden: boolean;
  start_time: string;
  title: string;
  updated_time: string;
}

export function lifeEventNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LifeEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LifeEventFields, F[number]>>(`${id}`, opts),
    likes: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/likes`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

