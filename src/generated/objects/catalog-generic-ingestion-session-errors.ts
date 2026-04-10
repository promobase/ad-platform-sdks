import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { CatalogGenericIngestionSessionErrorsGetFields } from "./catalog-generic-ingestion-session-errors-get.ts";

export interface CatalogGenericIngestionSessionErrorsFields {
}

export interface CatalogGenericIngestionSessionErrorsListErrorsParams {
  error_priority?: string;
  [key: string]: unknown;
}

export function catalogGenericIngestionSessionErrorsNode(client: ApiClient, id: string) {
  return {
    errors: <F extends (keyof CatalogGenericIngestionSessionErrorsGetFields)[]>(opts: { fields: F; params?: CatalogGenericIngestionSessionErrorsListErrorsParams }) =>
      new Cursor<Pick<CatalogGenericIngestionSessionErrorsGetFields, F[number]>>(client, `${id}/errors`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

