// @generated
// fingerprint: sha256:2aa61feb16045c4e02e279288734d70dd827d35067f9ddc7418ff6a09d5bac68
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCustomizersRequest. Do not edit by hand.
export interface MutateAdGroupCustomizersRequest {
  customerId?: string;
  operations?: AdGroupCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
