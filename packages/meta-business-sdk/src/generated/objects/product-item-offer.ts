import type { ApiClient } from "@promobase/sdk-runtime";

export interface ProductItemOfferFields {
  availability_area: Record<string, unknown>[];
  availability_radius: number;
  id: string;
}

export function productItemOfferNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductItemOfferFields,
    get: <F extends (keyof ProductItemOfferFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductItemOfferFields, F[number]>>(`${id}`, opts),
  };
}

