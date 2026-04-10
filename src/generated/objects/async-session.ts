import type { ApiClient } from "../../runtime/client.ts";
import type { ApplicationFields } from "./application.ts";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface AsyncSessionFields {
  app: ApplicationFields;
  complete_time: string;
  error_code: number;
  exception: string;
  id: string;
  method: string;
  name: string;
  page: PageFields;
  percent_completed: number;
  platform_version: string;
  result: string;
  start_time: string;
  status: string;
  uri: string;
  user: UserFields;
}

export function asyncSessionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AsyncSessionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AsyncSessionFields, F[number]>>(`${id}`, opts),
  };
}

