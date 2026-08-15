// @generated
// fingerprint: sha256:73fb36c27e111f479cf4e919f69fd918c32feb3061cccf5dc146fdb1d134ea12
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface IGRefreshAccessTokenForIGOnlyAPIFields {
  access_token: string;
  expires_in: number;
  permissions: string;
  token_type: string;
}

export function iGRefreshAccessTokenForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGRefreshAccessTokenForIGOnlyAPIFields,
    get: <F extends (keyof IGRefreshAccessTokenForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGRefreshAccessTokenForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
  };
}

