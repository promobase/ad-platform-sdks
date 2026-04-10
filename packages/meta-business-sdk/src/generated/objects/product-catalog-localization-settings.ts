import type { ApiClient } from "@promobase/sdk-runtime";

export interface ProductCatalogLocalizationSettingsFields {
  default_country: string;
  default_language: string;
  id: string;
}

export function productCatalogLocalizationSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductCatalogLocalizationSettingsFields,
    get: <F extends (keyof ProductCatalogLocalizationSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductCatalogLocalizationSettingsFields, F[number]>>(`${id}`, opts),
  };
}

