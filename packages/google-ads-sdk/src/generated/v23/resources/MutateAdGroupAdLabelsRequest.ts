// @generated
// fingerprint: sha256:2f75eced33ea694842fe8f7daf6e3138bbf5279706cf5ae6bc44076f42aab94d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAdLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupAdLabelsRequest. Do not edit by hand.
export interface MutateAdGroupAdLabelsRequest {
  customerId?: string;
  operations?: AdGroupAdLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
