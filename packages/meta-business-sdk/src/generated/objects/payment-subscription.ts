import type { ApiClient } from "@promobase/sdk-runtime";
import type { ApplicationFields } from "./application.ts";
import type { PaymentEnginePaymentFields } from "./payment-engine-payment.ts";
import type { UserFields } from "./user.ts";

export interface PaymentSubscriptionFields {
  amount: string;
  app_param_data: string;
  application: ApplicationFields;
  billing_period: string;
  canceled_reason: string;
  created_time: string;
  currency: string;
  id: string;
  last_payment: PaymentEnginePaymentFields;
  next_bill_time: string;
  next_period_amount: string;
  next_period_currency: string;
  next_period_product: string;
  payment_status: string;
  pending_cancel: boolean;
  period_start_time: string;
  product: string;
  status: string;
  test: number;
  trial_amount: string;
  trial_currency: string;
  trial_expiry_time: string;
  updated_time: string;
  user: UserFields;
}

export function paymentSubscriptionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PaymentSubscriptionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PaymentSubscriptionFields, F[number]>>(`${id}`, opts),
  };
}

