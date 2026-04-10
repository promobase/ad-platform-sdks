import type { ApiClient } from "@promobase/sdk-runtime";

export interface ProductImageFields {
  height: number;
  id: string;
  image_url: string;
  width: number;
}

export function productImageNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductImageFields,
    get: <F extends (keyof ProductImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductImageFields, F[number]>>(`${id}`, opts),
  };
}

