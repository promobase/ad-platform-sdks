import type { ApiClient } from "../../runtime/client.ts";

export interface ProductFeedUploadErrorSampleFields {
  id: string;
  retailer_id: string;
  row_number: number;
}

export function productFeedUploadErrorSampleNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ProductFeedUploadErrorSampleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedUploadErrorSampleFields, F[number]>>(`${id}`, opts),
  };
}

