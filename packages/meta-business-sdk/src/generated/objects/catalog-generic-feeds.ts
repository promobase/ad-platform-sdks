import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CatalogGenericFeedsGetFields } from "./catalog-generic-feeds-get.ts";

export interface CatalogGenericFeedsFields {
}

export function catalogGenericFeedsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogGenericFeedsFields,
    uploads: <F extends (keyof CatalogGenericFeedsGetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogGenericFeedsGetFields, F[number]>>(client, `${id}/uploads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

