import type { CurrencyAmountFields } from "./currency-amount.ts";
import type { ExtendedCreditAllocationConfigFields } from "./extended-credit-allocation-config.ts";

export interface ManagedPartnerExtendedCreditFields {
  id: string;
  max_balance: CurrencyAmountFields;
  receiving_credit_allocation_config: ExtendedCreditAllocationConfigFields;
}

