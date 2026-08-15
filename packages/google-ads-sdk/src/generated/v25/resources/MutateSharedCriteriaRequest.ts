// @generated
// fingerprint: sha256:65cd68cf5ce78c15ebfc83a601e6187a17e927448ddb102b6032b344474fafda
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResponseContentType, SharedCriterionOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateSharedCriteriaRequest. Do not edit by hand.
export interface MutateSharedCriteriaRequest {
  customerId?: string;
  operations?: SharedCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
