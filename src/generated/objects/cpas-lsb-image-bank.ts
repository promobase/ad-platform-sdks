import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ProductImageFields } from "./product-image.ts";

export interface CPASLsbImageBankFields {
  ad_group_id: string;
  catalog_segment_proxy_id: string;
  id: string;
}

export interface CPASLsbImageBankUpdateParams {
  backup_image_urls?: string[];
  [key: string]: unknown;
}

export function cPASLsbImageBankNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CPASLsbImageBankFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASLsbImageBankFields, F[number]>>(`${id}`, opts),
    update: (params: CPASLsbImageBankUpdateParams) =>
      client.post<CPASLsbImageBankFields>(`${id}`, params as Record<string, unknown>),
    backupImages: <F extends (keyof ProductImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductImageFields, F[number]>>(client, `${id}/backup_images`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

