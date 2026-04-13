import type { CustomConversionGoalOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomConversionGoalsRequest. Do not edit by hand.
export interface MutateCustomConversionGoalsRequest {
  customerId?: string;
  operations?: CustomConversionGoalOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
