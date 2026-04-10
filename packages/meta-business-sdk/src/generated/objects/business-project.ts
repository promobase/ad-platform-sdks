import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessProjectFields {
  business: BusinessFields;
  created_time: string;
  creator: Record<string, unknown>;
  id: string;
  name: string;
}

export function businessProjectNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessProjectFields,
    get: <F extends (keyof BusinessProjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessProjectFields, F[number]>>(`${id}`, opts),
  };
}

