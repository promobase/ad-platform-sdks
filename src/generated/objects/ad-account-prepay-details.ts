import type { CurrencyAmountFields } from "./currency-amount.ts";

export interface AdAccountPrepayDetailsFields {
  default_funding_amount: CurrencyAmountFields;
  max_acceptable_amount: CurrencyAmountFields;
  min_acceptable_amount: CurrencyAmountFields;
  should_collect_business_details: boolean;
}

