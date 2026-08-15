// @generated
// fingerprint: sha256:cbc65de1f51c28dd29c8053034bbf25cce87caf6a6549c97e4c52abad315f960
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

