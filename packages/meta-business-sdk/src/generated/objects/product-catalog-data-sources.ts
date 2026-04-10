import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductCatalogDataSourcesGetFields } from "./product-catalog-data-sources-get.ts";

export interface ProductCatalogDataSourcesFields {
}

export interface ProductCatalogDataSourcesListDataSourcesParams {
  after?: string;
  before?: string;
  fields?: string;
  ingestion_source_type?: string;
  limit?: number;
  [key: string]: unknown;
}

export function productCatalogDataSourcesNode(client: ApiClient, id: string) {
  return {
    dataSources: <F extends (keyof ProductCatalogDataSourcesGetFields)[]>(opts: { fields: F; params?: ProductCatalogDataSourcesListDataSourcesParams }) =>
      new Cursor<Pick<ProductCatalogDataSourcesGetFields, F[number]>>(client, `${id}/data_sources`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

