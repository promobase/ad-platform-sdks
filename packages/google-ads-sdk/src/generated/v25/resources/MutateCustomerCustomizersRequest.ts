// @generated
// fingerprint: sha256:bb0a27ab503f37df133a092d8ae84643be80e55d876bf28f461a1bcbae4ae896
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomerCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomerCustomizersRequest. Do not edit by hand.
export interface MutateCustomerCustomizersRequest {
  customerId?: string;
  operations?: CustomerCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
