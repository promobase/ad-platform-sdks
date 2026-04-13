import type { CustomerConversionGoalOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerConversionGoalsRequest. Do not edit by hand.
export interface MutateCustomerConversionGoalsRequest {
  customerId?: string;
  operations?: CustomerConversionGoalOperation[];
  validateOnly?: boolean;
}
