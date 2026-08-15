// @generated
// fingerprint: sha256:6dc835fc6943698b603853fdbe309dc0a5809a22c1f5c802e1016c5a0bc76e37
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as StoreLocationFields,
    get: <F extends (keyof StoreLocationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StoreLocationFields, F[number]>>(`${id}`, opts),
  };
}

