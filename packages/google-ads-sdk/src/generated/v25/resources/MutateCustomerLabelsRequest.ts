// @generated
// fingerprint: sha256:d25becaef763a9564bc9b570fe51df81fa309c7b81ff2eab8c2d63ca9454d385
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerLabelsRequest. Do not edit by hand.
export interface MutateCustomerLabelsRequest {
  customerId?: string;
  operations?: CustomerLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
