import type { ApiClient } from "../../runtime/client.ts";
import type { ApplicationFields } from "./application.ts";
import type { CurrencyAmountFields } from "./currency-amount.ts";
import type { UserFields } from "./user.ts";

export interface PaymentEnginePaymentFields {
  actions: Record<string, unknown>[];
  application: ApplicationFields;
  country: string;
  created_time: string;
  disputes: Record<string, unknown>[];
  fraud_status: string;
  fulfillment_status: string;
  id: string;
  is_from_ad: boolean;
  is_from_page_post: boolean;
  items: Record<string, unknown>[];
  payout_foreign_exchange_rate: number;
  phone_support_eligible: boolean;
  platform: string;
  refundable_amount: CurrencyAmountFields;
  request_id: string;
  tax: string;
  tax_country: string;
  test: number;
  user: UserFields;
}

export interface PaymentEnginePaymentCreateDisputeParams {
  reason: string;
  [key: string]: unknown;
}

export interface PaymentEnginePaymentCreateRefundsParams {
  amount: number;
  currency: string;
  reason?: string;
  [key: string]: unknown;
}

export function paymentEnginePaymentNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PaymentEnginePaymentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PaymentEnginePaymentFields, F[number]>>(`${id}`, opts),
    createDispute: (params: PaymentEnginePaymentCreateDisputeParams) =>
      client.post<PaymentEnginePaymentFields>(`${id}/dispute`, params as Record<string, unknown>),
    createRefund: (params: PaymentEnginePaymentCreateRefundsParams) =>
      client.post<PaymentEnginePaymentFields>(`${id}/refunds`, params as Record<string, unknown>),
  };
}

