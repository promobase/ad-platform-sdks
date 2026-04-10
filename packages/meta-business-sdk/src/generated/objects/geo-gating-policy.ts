import type { ApiClient } from "@promobase/sdk-runtime";

export interface GeoGatingPolicyFields {
  after_schedule: string;
  exclude_country: string[];
  id: string;
  include_country: string[];
  name: string;
  valid_from: string;
  valid_until: string;
}

export function geoGatingPolicyNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as GeoGatingPolicyFields,
    get: <F extends (keyof GeoGatingPolicyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<GeoGatingPolicyFields, F[number]>>(`${id}`, opts),
  };
}

