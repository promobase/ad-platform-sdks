// @generated
// fingerprint: sha256:3b9f424e41061e750da719a9da050273b1b2425fd734450b08c244df274918e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface FAMEKumoFields {
  id: string;
}

export function fAMEKumoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as FAMEKumoFields,
    get: <F extends (keyof FAMEKumoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FAMEKumoFields, F[number]>>(`${id}`, opts),
  };
}

