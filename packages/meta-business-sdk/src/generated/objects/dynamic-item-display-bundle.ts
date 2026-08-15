// @generated
// fingerprint: sha256:cce7ccf97f0ca9dd53cc0683ffad88c09f1d5dec8d937025eae2ac9a3798655c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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
    __path: id,
    __brand: undefined as unknown as DynamicItemDisplayBundleFields,
    get: <F extends (keyof DynamicItemDisplayBundleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicItemDisplayBundleFields, F[number]>>(`${id}`, opts),
  };
}

