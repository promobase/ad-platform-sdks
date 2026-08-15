// @generated
// fingerprint: sha256:9cd014b7510379ada48c5498b578cb1b0a0373f5501487ab0f21b9aaad01f22f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccessRole, Customer } from "../index.ts";

// Generated from google.ads.googleads.v25.services.CreateCustomerClientRequest. Do not edit by hand.
export interface CreateCustomerClientRequest {
  customerId?: string;
  customerClient?: Customer;
  emailAddress?: string;
  accessRole?: AccessRole;
  validateOnly?: boolean;
}
