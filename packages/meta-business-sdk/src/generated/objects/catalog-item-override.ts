import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProductItemLocalInfoFields } from "./product-item-local-info.ts";

export interface CatalogItemOverrideFields {
  id: string;
  local_info: ProductItemLocalInfoFields;
  override_type: string;
  override_value: string;
  upload_expected_method: string;
}

export function catalogItemOverrideNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogItemOverrideFields,
    get: <F extends (keyof CatalogItemOverrideFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogItemOverrideFields, F[number]>>(`${id}`, opts),
  };
}

