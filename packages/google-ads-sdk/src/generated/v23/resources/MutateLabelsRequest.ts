// @generated
// fingerprint: sha256:ed75f40ed65df3726d3d7bb757ee21e008a975662231f59889722471ca33869b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LabelOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateLabelsRequest. Do not edit by hand.
export interface MutateLabelsRequest {
  customerId?: string;
  operations?: LabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
