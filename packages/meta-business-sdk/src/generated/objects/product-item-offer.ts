// @generated
// fingerprint: sha256:7aa55fe43a5c5420a6e7921533f899cc51c14a851d7b3155dc190eb7e8f12ce0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

