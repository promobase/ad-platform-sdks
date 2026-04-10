import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProductCatalogAppsAndSoftwarePostFields } from "./product-catalog-apps-and-software-post.ts";

export interface ProductCatalogAppsAndSoftwareFields {
}

export function productCatalogAppsAndSoftwareNode(client: ApiClient, id: string) {
  return {
    createAppsAndSoftware: (params: Record<string, unknown>) =>
      client.post<ProductCatalogAppsAndSoftwarePostFields>(`${id}/apps_and_software`, params as Record<string, unknown>),
  };
}

