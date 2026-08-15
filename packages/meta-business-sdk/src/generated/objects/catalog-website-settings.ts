// @generated
// fingerprint: sha256:2b84d3e82631d4142a72dcbd55c73b4f38272e1c691973de29d50295f9bbf25e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CatalogWebsiteSettingsFields {
  id: string;
  is_allowed_to_crawl: boolean;
}

export function catalogWebsiteSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogWebsiteSettingsFields,
    get: <F extends (keyof CatalogWebsiteSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogWebsiteSettingsFields, F[number]>>(`${id}`, opts),
  };
}

