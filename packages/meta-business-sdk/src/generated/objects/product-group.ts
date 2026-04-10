import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { ProductItemFields } from "./product-item.ts";
import type { ProductVariantFields } from "./product-variant.ts";

export interface ProductGroupFields {
  id: string;
  product_catalog: ProductCatalogFields;
  retailer_id: string;
  variants: ProductVariantFields[];
}

export interface ProductGroupCreateProductsParams {
  additional_image_urls?: string[];
  additional_variant_attributes?: Record<string, unknown>;
  age_group?: string;
  android_app_name?: string;
  android_class?: string;
  android_package?: string;
  android_url?: string;
  availability?: string;
  brand?: string;
  category?: string;
  checkout_url?: string;
  color?: string;
  commerce_tax_category?: string;
  condition?: string;
  currency: string;
  custom_data?: Record<string, unknown>;
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
  custom_number_0?: number;
  custom_number_1?: number;
  custom_number_2?: number;
  custom_number_3?: number;
  custom_number_4?: number;
  description?: string;
  expiration_date?: string;
  fb_product_category?: string;
  gender?: string;
  gtin?: string;
  image_url: string;
  inventory?: number;
  ios_app_name?: string;
  ios_app_store_id?: number;
  ios_url?: string;
  ipad_app_name?: string;
  ipad_app_store_id?: number;
  ipad_url?: string;
  iphone_app_name?: string;
  iphone_app_store_id?: number;
  iphone_url?: string;
  launch_date?: string;
  live_special_price?: string;
  manufacturer_part_number?: string;
  marked_for_product_launch?: string;
  material?: string;
  mobile_link?: string;
  name: string;
  ordering_index?: number;
  pattern?: string;
  price: number;
  product_priority_0?: number;
  product_priority_1?: number;
  product_priority_2?: number;
  product_priority_3?: number;
  product_priority_4?: number;
  product_type?: string;
  quantity_to_sell_on_facebook?: number;
  retailer_id: string;
  return_policy_days?: number;
  rich_text_description?: string;
  sale_price?: number;
  sale_price_end_date?: string;
  sale_price_start_date?: string;
  short_description?: string;
  size?: string;
  start_date?: string;
  url?: string;
  visibility?: string;
  windows_phone_app_id?: string;
  windows_phone_app_name?: string;
  windows_phone_url?: string;
  [key: string]: unknown;
}

export interface ProductGroupUpdateParams {
  default_product_id?: string;
  variants?: Record<string, unknown>[];
  [key: string]: unknown;
}

export function productGroupNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ProductGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductGroupFields, F[number]>>(`${id}`, opts),
    update: (params: ProductGroupUpdateParams) =>
      client.post<ProductGroupFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    products: {
      list: <F extends (keyof ProductItemFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductItemFields, F[number]>>(client, `${id}/products`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: ProductGroupCreateProductsParams) =>
        client.post<ProductItemFields>(`${id}/products`, params as Record<string, unknown>),
    },
  };
}

