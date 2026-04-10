import type { TargetingProductAudienceSubSpecFields } from "./targeting-product-audience-sub-spec.ts";

export interface TargetingProductAudienceSpecFields {
  exclusions: TargetingProductAudienceSubSpecFields[];
  inclusions: TargetingProductAudienceSubSpecFields[];
  product_set_id: string;
}

