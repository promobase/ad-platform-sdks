import type { ApiClient } from "../../runtime/client.ts";

export interface ProductItemOfferFields {
  availability_area: Record<string, unknown>[];
  availability_radius: number;
  id: string;
}

export function productItemOfferNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ProductItemOfferFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductItemOfferFields, F[number]>>(`${id}`, opts),
  };
}

