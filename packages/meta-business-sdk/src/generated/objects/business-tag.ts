// @generated
// fingerprint: sha256:b4ab2459dd5f779615a7f44a69082aa50bec8d30c01313dfc2b883d695efc296
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface BusinessTagFields {
  id: string;
  name: string;
}

export function businessTagNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessTagFields,
    get: <F extends (keyof BusinessTagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessTagFields, F[number]>>(`${id}`, opts),
  };
}

