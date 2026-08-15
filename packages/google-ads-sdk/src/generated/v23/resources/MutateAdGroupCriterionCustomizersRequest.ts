// @generated
// fingerprint: sha256:4cde717df1d9d2b3aa22c78b906239a0b0724d7a6c62235a53880f8de2b67b13
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCriterionCustomizersRequest. Do not edit by hand.
export interface MutateAdGroupCriterionCustomizersRequest {
  customerId?: string;
  operations?: AdGroupCriterionCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
