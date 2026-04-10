import type { AdAccountFields } from "./ad-account.ts";

export interface AdAccountBillingDatePreferenceFields {
  ad_account: AdAccountFields;
  day_of_month: number;
  id: string;
  next_bill_date: string;
  time_created: string;
  time_effective: string;
}

