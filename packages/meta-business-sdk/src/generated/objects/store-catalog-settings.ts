import type { ApiClient } from "@promobase/sdk-runtime";
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

