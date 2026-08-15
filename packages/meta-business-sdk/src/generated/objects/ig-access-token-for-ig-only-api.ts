// @generated
// fingerprint: sha256:dce2c1c784388813654e2ce623b923f68749461824e4f945aa0975930f026dd7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface IGAccessTokenForIGOnlyAPIFields {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export function iGAccessTokenForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGAccessTokenForIGOnlyAPIFields,
    get: <F extends (keyof IGAccessTokenForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGAccessTokenForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
  };
}

