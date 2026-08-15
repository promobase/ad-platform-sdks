// @generated
// fingerprint: sha256:b6d66dbe49a046cf19d7cff8ffa794beb82b252716f8ecf20a90423c871d8c95
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LabelOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateLabelsRequest. Do not edit by hand.
export interface MutateLabelsRequest {
  customerId?: string;
  operations?: LabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
