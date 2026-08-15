// @generated
// fingerprint: sha256:2b189aa45f5d60d366873898eac9a121a4e3d4d82e6b1cb014bb2af4e43cc6e1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CatalogContentVersionConfigFields {
  id: string;
  name: string;
  version: string;
}

export function catalogContentVersionConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogContentVersionConfigFields,
    get: <F extends (keyof CatalogContentVersionConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogContentVersionConfigFields, F[number]>>(`${id}`, opts),
  };
}

