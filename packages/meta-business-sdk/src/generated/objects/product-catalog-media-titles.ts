import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProductCatalogMediaTitlesPostFields } from "./product-catalog-media-titles-post.ts";

export interface ProductCatalogMediaTitlesFields {
}

export function productCatalogMediaTitlesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductCatalogMediaTitlesFields,
    createMediaTitle: (params: Record<string, unknown>) =>
      client.post<ProductCatalogMediaTitlesPostFields>(`${id}/media_titles`, params as Record<string, unknown>),
  };
}

