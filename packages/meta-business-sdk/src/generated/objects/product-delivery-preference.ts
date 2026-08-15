// @generated
// fingerprint: sha256:efb81d0afbfd8bfe1e8f4ed06152187fe02c016e3ac652221d15b38d43e27d4e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ProductDeliveryPreferenceFields {
  ad_object_id: string;
  id: string;
  product_priority: string;
  product_priority_category: string[];
}

export function productDeliveryPreferenceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductDeliveryPreferenceFields,
    get: <F extends (keyof ProductDeliveryPreferenceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductDeliveryPreferenceFields, F[number]>>(`${id}`, opts),
  };
}

