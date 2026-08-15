// @generated
// fingerprint: sha256:f6e6ce13e15c0aa02eff66859dfc1cb5315e6e489e7bb5e5f44a14ba50f4098f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCriteriaRequest. Do not edit by hand.
export interface MutateAdGroupCriteriaRequest {
  customerId?: string;
  operations?: AdGroupCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
