import type { ApiClient } from "@promobase/sdk-runtime";

export interface IGBoostMediaAdFields {
  ad_id: string;
  ad_status: string;
}

export function iGBoostMediaAdNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGBoostMediaAdFields,
    get: <F extends (keyof IGBoostMediaAdFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGBoostMediaAdFields, F[number]>>(`${id}`, opts),
  };
}

