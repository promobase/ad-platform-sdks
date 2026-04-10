import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProductSetFields } from "./product-set.ts";

export interface DynamicItemDisplayBundleFolderFields {
  categorization_criteria: string;
  id: string;
  name: string;
  product_catalog: ProductCatalogFields;
  product_set: ProductSetFields;
  valid_labels: Record<string, string[]>[];
}

export function dynamicItemDisplayBundleFolderNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as DynamicItemDisplayBundleFolderFields,
    get: <F extends (keyof DynamicItemDisplayBundleFolderFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicItemDisplayBundleFolderFields, F[number]>>(`${id}`, opts),
  };
}

