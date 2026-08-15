// @generated
// fingerprint: sha256:2da344805c01bbc21e10e6bd1b744a7f568bbd4e97f6c77688cbcc3710b1238e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface IGBCAdsPermissionFields {
  id: string;
  permission_type: string;
  status: string;
}

export function iGBCAdsPermissionNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGBCAdsPermissionFields,
    get: <F extends (keyof IGBCAdsPermissionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGBCAdsPermissionFields, F[number]>>(`${id}`, opts),
  };
}

