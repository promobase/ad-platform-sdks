import type { CurrencyAmountFields } from "./currency-amount.ts";

export interface AdAccountPaymentDetailsFields {
  amount: CurrencyAmountFields;
  create_date: number;
  id: string;
  last_action_status: string;
  metadata: Record<string, unknown>;
  payment_details_id: string;
}

