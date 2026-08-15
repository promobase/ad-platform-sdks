// @generated
// fingerprint: sha256:d0facde3fe81780435e676e71fe715e777e81a828675524612ac99cfafac8226
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterionLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupCriterionLabelsRequest. Do not edit by hand.
export interface MutateAdGroupCriterionLabelsRequest {
  customerId?: string;
  operations?: AdGroupCriterionLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
