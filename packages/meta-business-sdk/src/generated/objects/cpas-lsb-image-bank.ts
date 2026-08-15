// @generated
// fingerprint: sha256:b79b70a91e779408a5a6c93a0413c65915487c5d95a7fd620645b9be507fbac7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as CPASLsbImageBankFields,
    get: <F extends (keyof CPASLsbImageBankFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASLsbImageBankFields, F[number]>>(`${id}`, opts),
    update: (params: CPASLsbImageBankUpdateParams) =>
      client.post<CPASLsbImageBankFields>(`${id}`, params as Record<string, unknown>),
    backupImages: <F extends (keyof ProductImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductImageFields, F[number]>>(client, `${id}/backup_images`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

