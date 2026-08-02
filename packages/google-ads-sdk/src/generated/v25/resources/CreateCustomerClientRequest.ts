import type { AccessRole, Customer } from "../index.ts";

// Generated from google.ads.googleads.v25.services.CreateCustomerClientRequest. Do not edit by hand.
export interface CreateCustomerClientRequest {
  customerId?: string;
  customerClient?: Customer;
  emailAddress?: string;
  accessRole?: AccessRole;
  validateOnly?: boolean;
}
