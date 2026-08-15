// @generated
// fingerprint: sha256:97cbca5e24019e63b74b4c27d52c5b56b8ec75658d68fedcd3fe545be8cc3d81
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAdLabelOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupAdLabelsRequest. Do not edit by hand.
export interface MutateAdGroupAdLabelsRequest {
  customerId?: string;
  operations?: AdGroupAdLabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
