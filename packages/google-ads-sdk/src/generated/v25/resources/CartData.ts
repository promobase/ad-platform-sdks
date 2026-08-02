import type { Item } from "../index.ts";

// Generated from google.ads.googleads.v25.services.CartData. Do not edit by hand.
export interface CartData {
  merchantId?: string;
  feedCountryCode?: string;
  feedLanguageCode?: string;
  localTransactionCost?: number;
  items?: Item[];
}
