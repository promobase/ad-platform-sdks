import type { ApiClient } from "@promobase/sdk-runtime";
import type { ApplicationFields } from "./application.ts";

export interface AppRequestFields {
  action_type: string;
  application: ApplicationFields;
  created_time: string;
  data: string;
  from: Record<string, unknown>;
  id: string;
  message: string;
  object: Record<string, unknown>;
  to: Record<string, unknown>;
}

export function appRequestNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AppRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AppRequestFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

