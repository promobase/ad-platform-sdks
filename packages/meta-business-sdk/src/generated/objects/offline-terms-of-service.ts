// @generated
// fingerprint: sha256:fb59b9900d173e42616c3f8f1dbb903582e42d9146c538f0f96031ffbccb4ef1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface OfflineTermsOfServiceFields {
  accept_time: number;
  id: string;
  signed_by_user: UserFields;
}

export function offlineTermsOfServiceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as OfflineTermsOfServiceFields,
    get: <F extends (keyof OfflineTermsOfServiceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OfflineTermsOfServiceFields, F[number]>>(`${id}`, opts),
  };
}

