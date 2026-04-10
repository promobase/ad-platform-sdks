import type { ApiClient } from "@promobase/sdk-runtime";

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

