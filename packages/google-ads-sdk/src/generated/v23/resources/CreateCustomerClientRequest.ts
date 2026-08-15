// @generated
// fingerprint: sha256:ecf4376e765ff012bd04222204f0a0499ca10404857afe559f202d95eb992aaa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccessRole, Customer } from "../index.ts";

// Generated from google.ads.googleads.v23.services.CreateCustomerClientRequest. Do not edit by hand.
export interface CreateCustomerClientRequest {
  customerId?: string;
  customerClient?: Customer;
  emailAddress?: string;
  accessRole?: AccessRole;
  validateOnly?: boolean;
}
