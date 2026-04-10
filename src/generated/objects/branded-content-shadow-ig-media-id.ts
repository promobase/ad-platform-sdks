import type { ProductItemFields } from "./product-item.ts";

export interface BrandedContentShadowIGMediaIDFields {
  eligibility_errors: string[];
  has_permission_for_partnership_ad: boolean;
  id: string;
  linked_products: ProductItemFields[];
  owner_id: string;
  permalink: string;
  product_suggestions: ProductItemFields[];
  recommended_campaign_objectives: string[];
}

