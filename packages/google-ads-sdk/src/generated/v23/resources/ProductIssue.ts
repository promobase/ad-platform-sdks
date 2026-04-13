import type { ProductIssueSeverity } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ShoppingProduct.ProductIssue. Do not edit by hand.
export interface ProductIssue {
  errorCode?: string;
  adsSeverity?: ProductIssueSeverity;
  attributeName?: string;
  description?: string;
  detail?: string;
  documentation?: string;
  affectedRegions?: string[];
}
