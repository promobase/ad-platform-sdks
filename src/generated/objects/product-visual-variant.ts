import type { ProductItemFields } from "./product-item.ts";

export interface ProductVisualVariantFields {
  items: ProductItemFields[];
  unique_key: string;
}

