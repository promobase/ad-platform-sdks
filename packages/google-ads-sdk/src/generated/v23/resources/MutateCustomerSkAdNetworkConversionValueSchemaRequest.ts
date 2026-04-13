import type { CustomerSkAdNetworkConversionValueSchemaOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerSkAdNetworkConversionValueSchemaRequest. Do not edit by hand.
export interface MutateCustomerSkAdNetworkConversionValueSchemaRequest {
  customerId?: string;
  operation?: CustomerSkAdNetworkConversionValueSchemaOperation;
  validateOnly?: boolean;
  enableWarnings?: boolean;
}
