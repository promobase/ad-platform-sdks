// @generated
// fingerprint: sha256:08f5d10764ec4a745aa280d8eb45c16c0601390259bf84ba0d6424bdecbbdb18
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CommerceOrderFields } from "./commerce-order.ts";

export interface CommerceOrderTransactionDetailFields {
  merchant_order_id: string;
  net_payment_amount: Record<string, unknown>;
  order_created: string;
  order_details: CommerceOrderFields;
  order_id: string;
  payout_reference_id: string;
  postal_code: string;
  processing_fee: Record<string, unknown>;
  state: string;
  tax_rate: string;
  transaction_date: string;
  transaction_type: string;
  transfer_id: string;
}

