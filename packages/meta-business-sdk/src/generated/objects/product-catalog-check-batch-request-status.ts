import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductCatalogCheckBatchRequestStatusGetFields } from "./product-catalog-check-batch-request-status-get.ts";

export interface ProductCatalogCheckBatchRequestStatusFields {
}

export interface ProductCatalogCheckBatchRequestStatusListCheckBatchRequestStatusParams {
  after?: string;
  before?: string;
  error_priority?: string;
  fields?: string;
  handle: string;
  limit?: number;
  load_ids_of_invalid_requests?: boolean;
  [key: string]: unknown;
}

export function productCatalogCheckBatchRequestStatusNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductCatalogCheckBatchRequestStatusFields,
    checkBatchRequestStatus: <F extends (keyof ProductCatalogCheckBatchRequestStatusGetFields)[]>(opts: { fields: F; params?: ProductCatalogCheckBatchRequestStatusListCheckBatchRequestStatusParams }) =>
      new Cursor<Pick<ProductCatalogCheckBatchRequestStatusGetFields, F[number]>>(client, `${id}/check_batch_request_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

