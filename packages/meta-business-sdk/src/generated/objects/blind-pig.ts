// @generated
// fingerprint: sha256:1afb125a33141477a0343ce6d3e07a86adcbc9dac812d55f57b7bc55f50b08f9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface BlindPigFields {
  id: string;
  name: string;
}

export function blindPigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BlindPigFields,
    get: <F extends (keyof BlindPigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BlindPigFields, F[number]>>(`${id}`, opts),
  };
}

