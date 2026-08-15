// @generated
// fingerprint: sha256:1c9b144b5d51ec19e6c0970b35f22ee272ca4532669a5f66b4c873f21185c19f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AREffectFields {
  creation_time: string;
  id: string;
  last_modified_time: string;
  name: string;
  status: string;
  surfaces: string[];
}

export function aREffectNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AREffectFields,
    get: <F extends (keyof AREffectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AREffectFields, F[number]>>(`${id}`, opts),
  };
}

