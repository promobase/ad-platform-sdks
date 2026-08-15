// @generated
// fingerprint: sha256:b2d7431e00429d86b3ade6bd46d21cbcb97e230bda81efa8b34284242f87250f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ItemAttribute, StoreAttribute } from "../index.ts";

// Generated from google.ads.googleads.v23.common.TransactionAttribute. Do not edit by hand.
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
