import type { ApiClient } from "../../runtime/client.ts";

export interface HoursFields {
  id: string;
  permanent_status: string;
}

export function hoursNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof HoursFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HoursFields, F[number]>>(`${id}`, opts),
  };
}

