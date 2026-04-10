import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
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

export function commerceOrderTransactionDetailNode(client: ApiClient, id: string) {
  return {
    items: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/items`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    taxDetails: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/tax_details`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

