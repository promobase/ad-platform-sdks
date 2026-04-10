import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { CatalogGenericFeedsGetFields } from "./catalog-generic-feeds-get.ts";

export interface CatalogGenericFeedsFields {
}

export function catalogGenericFeedsNode(client: ApiClient, id: string) {
  return {
    uploads: <F extends (keyof CatalogGenericFeedsGetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CatalogGenericFeedsGetFields, F[number]>>(client, `${id}/uploads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

