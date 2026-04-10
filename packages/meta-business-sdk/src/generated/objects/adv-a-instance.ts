import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface AdvAInstanceFields {
  id: string;
  instance_type: string;
  name: string;
  owner_business: BusinessFields;
}

export function advAInstanceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdvAInstanceFields,
    get: <F extends (keyof AdvAInstanceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdvAInstanceFields, F[number]>>(`${id}`, opts),
  };
}

