import type { ProductVariantFields } from "./product-variant.ts";
import type { ShadowIGUserCatalogProductVariantFields } from "./shadow-ig-user-catalog-product-variant.ts";

export interface ShadowIGUserCatalogProductSearchFields {
  image_url: string;
  is_checkout_flow: boolean;
  merchant_id: number;
  product_id: number;
  product_name: string;
  product_variants: ShadowIGUserCatalogProductVariantFields[];
  retailer_id: string;
  review_status: string;
}

