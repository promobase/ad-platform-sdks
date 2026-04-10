import type { ApiClient } from "../../runtime/client.ts";
import type { ProductCatalogMediaTitlesPostFields } from "./product-catalog-media-titles-post.ts";

export interface ProductCatalogMediaTitlesFields {
}

export function productCatalogMediaTitlesNode(client: ApiClient, id: string) {
  return {
    createMediaTitle: (params: Record<string, unknown>) =>
      client.post<ProductCatalogMediaTitlesPostFields>(`${id}/media_titles`, params as Record<string, unknown>),
  };
}

