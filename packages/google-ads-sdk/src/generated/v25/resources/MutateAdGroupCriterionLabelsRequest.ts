// @generated
// fingerprint: sha256:9ad55d2db00fde030398d16a1156434dc9649f72d31b7509b785c77b2e14d248
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupCriterionLabelsRequest. Do not edit by hand.
export interface MutateAdGroupCriterionLabelsRequest {
  customerId?: string;
  operations?: AdGroupCriterionLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
