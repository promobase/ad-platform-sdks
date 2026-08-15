// @generated
// fingerprint: sha256:5f82c46d459791214053c960a1e88336b0d15e7874446432955d08c2b457923e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

