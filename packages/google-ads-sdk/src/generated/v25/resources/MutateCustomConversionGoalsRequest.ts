// @generated
// fingerprint: sha256:482ad447cc39ded24e2add9f1d6aff57db26670dc92443dbe0b8920bf25f78ac
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomConversionGoalOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomConversionGoalsRequest. Do not edit by hand.
export interface MutateCustomConversionGoalsRequest {
  customerId?: string;
  operations?: CustomConversionGoalOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
