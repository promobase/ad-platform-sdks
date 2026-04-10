import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";

export interface CatalogSmartPixelSettingsFields {
  allowed_domains: string[];
  available_property_filters: string[];
  catalog: ProductCatalogFields;
  cbb_custom_override_filters: Record<string, unknown>[];
  cbb_default_filter: Record<string, string[]>[];
  defaults: Record<string, string>[];
  filters: Record<string, string[]>[];
  id: string;
  is_cbb_enabled: boolean;
  is_create_enabled: boolean;
  is_delete_enabled: boolean;
  is_update_enabled: boolean;
  microdata_format_precedence: string[];
  pixel: AdsPixelFields;
  property_filter: string[];
  trusted_domains: string[];
}

export function catalogSmartPixelSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CatalogSmartPixelSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogSmartPixelSettingsFields, F[number]>>(`${id}`, opts),
  };
}

