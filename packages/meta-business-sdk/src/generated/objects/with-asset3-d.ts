// @generated
// fingerprint: sha256:0257463278c57e61f1dad01d6556ff071129bc5c484ff3bbca2e9d23fd36dd64
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface WithAsset3DFields {
  id: string;
}

export function withAsset3DNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WithAsset3DFields,
    get: <F extends (keyof WithAsset3DFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WithAsset3DFields, F[number]>>(`${id}`, opts),
  };
}

