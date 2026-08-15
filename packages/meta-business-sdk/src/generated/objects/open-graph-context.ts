// @generated
// fingerprint: sha256:59586d131aa100d0c0cd66a0881690557344a4a989dbb0f335349519c89bbbcd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface OpenGraphContextFields {
  id: string;
}

export function openGraphContextNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as OpenGraphContextFields,
    get: <F extends (keyof OpenGraphContextFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OpenGraphContextFields, F[number]>>(`${id}`, opts),
  };
}

