// @generated
// fingerprint: sha256:fc3b296f408bb47727b89e0d8a07efbe81dbca19f70bed3c3dc7fcfa93c0c942
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

