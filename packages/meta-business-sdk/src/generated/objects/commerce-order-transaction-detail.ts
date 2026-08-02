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

