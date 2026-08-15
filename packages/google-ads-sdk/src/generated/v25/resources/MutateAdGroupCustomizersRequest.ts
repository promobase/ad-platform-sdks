// @generated
// fingerprint: sha256:ac323da1172c2fd6363fa0001377f1b9407acc6c72f5c61abc0e7cf99efef2fb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupCustomizersRequest. Do not edit by hand.
export interface MutateAdGroupCustomizersRequest {
  customerId?: string;
  operations?: AdGroupCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
