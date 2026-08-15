// @generated
// fingerprint: sha256:b460bbf8cce6968a97a357d2706c4f53da0f41a4617a057fdc8665f5dbdea3fd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupLabelsRequest. Do not edit by hand.
export interface MutateAdGroupLabelsRequest {
  customerId?: string;
  operations?: AdGroupLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
