import type { ApiClient } from "../../runtime/client.ts";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface WorkExperienceFields {
  description: string;
  employer: PageFields;
  end_date: string;
  from: UserFields;
  id: string;
  location: PageFields;
  position: PageFields;
  projects: Record<string, unknown>[];
  start_date: string;
  with: UserFields[];
}

export function workExperienceNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WorkExperienceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WorkExperienceFields, F[number]>>(`${id}`, opts),
  };
}

