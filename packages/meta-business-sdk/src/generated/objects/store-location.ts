import type { ApiClient } from "@promobase/sdk-runtime";

export interface StoreLocationFields {
  full_address: string;
  hours: Record<string, unknown>;
  id: string;
  phone_number: string;
  pickup_options: string[];
  price_range: string;
  store_code: string;
  zip_code: string;
}

export function storeLocationNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof StoreLocationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StoreLocationFields, F[number]>>(`${id}`, opts),
  };
}

