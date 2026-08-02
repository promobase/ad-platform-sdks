import type { ProductBrand, ProductCategory, ProductChannel, ProductCondition, ProductCustomAttribute, ProductItemId, ProductType, RetailFilterBundle, Webpage } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ListingGroupFilterDimension. Do not edit by hand.
export interface ListingGroupFilterDimension {
  productCategory?: ProductCategory;
  productBrand?: ProductBrand;
  productChannel?: ProductChannel;
  productCondition?: ProductCondition;
  productCustomAttribute?: ProductCustomAttribute;
  productItemId?: ProductItemId;
  productType?: ProductType;
  webpage?: Webpage;
  retailFilterBundle?: RetailFilterBundle;
}
