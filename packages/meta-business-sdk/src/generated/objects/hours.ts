import type { ApiClient } from "@promobase/sdk-runtime";

export interface HoursFields {
  id: string;
  permanent_status: string;
}

export function hoursNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as HoursFields,
    get: <F extends (keyof HoursFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HoursFields, F[number]>>(`${id}`, opts),
  };
}

