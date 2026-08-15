// @generated
// fingerprint: sha256:13b9058bbc2b8ca149734e17a0feceeb0842d47f9dd41abacef1a4f0ef5429ed
// DO NOT EDIT: generated file; changes will be overwritten.
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
