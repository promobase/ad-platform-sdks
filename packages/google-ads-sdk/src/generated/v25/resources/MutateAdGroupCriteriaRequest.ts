// @generated
// fingerprint: sha256:d7c1ae1985605e87eb201f50cd3c378ed5d6309abd6290b21e6ba2f752e1825d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupCriteriaRequest. Do not edit by hand.
export interface MutateAdGroupCriteriaRequest {
  customerId?: string;
  operations?: AdGroupCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
