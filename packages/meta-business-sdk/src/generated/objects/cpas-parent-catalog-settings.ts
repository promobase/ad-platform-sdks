import type { ApiClient } from "@promobase/sdk-runtime";

export interface CPASParentCatalogSettingsFields {
  attribution_windows: string[];
  default_currency: string;
  disable_use_as_parent_catalog: boolean;
  id: string;
}

export function cPASParentCatalogSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASParentCatalogSettingsFields,
    get: <F extends (keyof CPASParentCatalogSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASParentCatalogSettingsFields, F[number]>>(`${id}`, opts),
  };
}

