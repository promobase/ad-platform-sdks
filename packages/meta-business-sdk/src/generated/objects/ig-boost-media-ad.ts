// @generated
// fingerprint: sha256:288b5c8c3d08e20e8ea2f451d8476ed5f40cf8cedbce9a28e24304744ebb198a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

