import type { ApiClient } from "../../runtime/client.ts";

export interface IGBoostMediaAdFields {
  ad_id: string;
  ad_status: string;
}

export function iGBoostMediaAdNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGBoostMediaAdFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGBoostMediaAdFields, F[number]>>(`${id}`, opts),
  };
}

