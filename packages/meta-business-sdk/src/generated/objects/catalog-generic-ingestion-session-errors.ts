import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CatalogGenericIngestionSessionErrorsGetFields } from "./catalog-generic-ingestion-session-errors-get.ts";

export interface CatalogGenericIngestionSessionErrorsFields {
}

export interface CatalogGenericIngestionSessionErrorsListErrorsParams {
  error_priority?: string;
  [key: string]: unknown;
}

export function catalogGenericIngestionSessionErrorsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogGenericIngestionSessionErrorsFields,
    errors: <F extends (keyof CatalogGenericIngestionSessionErrorsGetFields)[]>(opts: { fields: F; params?: CatalogGenericIngestionSessionErrorsListErrorsParams }) =>
      new Cursor<Pick<CatalogGenericIngestionSessionErrorsGetFields, F[number]>>(client, `${id}/errors`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

