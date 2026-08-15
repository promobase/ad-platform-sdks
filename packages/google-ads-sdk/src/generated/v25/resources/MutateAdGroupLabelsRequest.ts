// @generated
// fingerprint: sha256:f6789663cc1cd88c2a78c4ba5883fcff01aa166f4576e544d790835908cd8e99
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupLabelsRequest. Do not edit by hand.
export interface MutateAdGroupLabelsRequest {
  customerId?: string;
  operations?: AdGroupLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
