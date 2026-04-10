import type { ApiClient } from "../../runtime/client.ts";
import type { ProductSetFields } from "./product-set.ts";

export interface DynamicItemDisplayBundleFields {
  additional_urls: Record<string, string>[];
  description: string;
  id: string;
  name: string;
  product_set: ProductSetFields;
  text_tokens: Record<string, string>[];
  url: string;
}

export function dynamicItemDisplayBundleNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof DynamicItemDisplayBundleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicItemDisplayBundleFields, F[number]>>(`${id}`, opts),
  };
}

