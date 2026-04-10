import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdLightAdgroupFields {
  adset_id: string;
  id: string;
}

export function adLightAdgroupNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdLightAdgroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdLightAdgroupFields, F[number]>>(`${id}`, opts),
  };
}

