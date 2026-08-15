// @generated
// fingerprint: sha256:9d57812cccecf9c46ddbda5b51e0b5250bd272fe917e0fcdb85bcdfffe5f12a5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupCriterionCustomizersRequest. Do not edit by hand.
export interface MutateAdGroupCriterionCustomizersRequest {
  customerId?: string;
  operations?: AdGroupCriterionCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
