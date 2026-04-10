import type { ApiClient } from "@promobase/sdk-runtime";

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

