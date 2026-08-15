// @generated
// fingerprint: sha256:3300c738d8165c2709944e36354a01df4e88104b52a9717ca58e0a8b542caac3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ProductFeedUploadErrorSampleFields {
  id: string;
  retailer_id: string;
  row_number: number;
}

export function productFeedUploadErrorSampleNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedUploadErrorSampleFields,
    get: <F extends (keyof ProductFeedUploadErrorSampleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedUploadErrorSampleFields, F[number]>>(`${id}`, opts),
  };
}

