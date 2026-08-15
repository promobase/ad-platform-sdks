// @generated
// fingerprint: sha256:465800f8141e07b56cd2b77dbfedf347a45ad49a874d7431818260412f9af0b3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface StoreCatalogSettingsFields {
  id: string;
  page: PageFields;
}

export function storeCatalogSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as StoreCatalogSettingsFields,
    get: <F extends (keyof StoreCatalogSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StoreCatalogSettingsFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

