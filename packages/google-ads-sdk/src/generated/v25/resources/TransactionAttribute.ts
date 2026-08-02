import type { ItemAttribute, StoreAttribute } from "../index.ts";

// Generated from google.ads.googleads.v25.common.TransactionAttribute. Do not edit by hand.
export interface TransactionAttribute {
  transactionDateTime?: string;
  transactionAmountMicros?: number;
  currencyCode?: string;
  conversionAction?: string;
  orderId?: string;
  storeAttribute?: StoreAttribute;
  customValue?: string;
  itemAttribute?: ItemAttribute;
}
