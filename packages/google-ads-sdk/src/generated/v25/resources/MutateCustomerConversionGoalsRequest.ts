import type { CustomerConversionGoalOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerConversionGoalsRequest. Do not edit by hand.
export interface MutateCustomerConversionGoalsRequest {
  customerId?: string;
  operations?: CustomerConversionGoalOperation[];
  validateOnly?: boolean;
}
