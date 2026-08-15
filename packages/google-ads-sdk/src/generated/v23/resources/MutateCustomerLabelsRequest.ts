// @generated
// fingerprint: sha256:95d207f71945365cfa2d67b7a7ec9567e95594386959855c845ee5308d0dc5e2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomerLabelsRequest. Do not edit by hand.
export interface MutateCustomerLabelsRequest {
  customerId?: string;
  operations?: CustomerLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
