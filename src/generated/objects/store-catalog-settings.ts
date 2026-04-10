import type { ApiClient } from "../../runtime/client.ts";
import type { PageFields } from "./page.ts";

export interface StoreCatalogSettingsFields {
  id: string;
  page: PageFields;
}

export function storeCatalogSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof StoreCatalogSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StoreCatalogSettingsFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

