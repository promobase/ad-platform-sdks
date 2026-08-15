// @generated
// fingerprint: sha256:258a89dc6b8f2865d9c56eeb0fb5cbb3b408e3f43acb76773cd3e930524e8285
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as ProductCatalogDataSourcesFields,
    dataSources: <F extends (keyof ProductCatalogDataSourcesGetFields)[]>(opts: { fields: F; params?: ProductCatalogDataSourcesListDataSourcesParams }) =>
      new Cursor<Pick<ProductCatalogDataSourcesGetFields, F[number]>>(client, `${id}/data_sources`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

