// @generated
// fingerprint: sha256:a9375adafd3dda5d297efeeec4e783f618ccfe81a26abc3697ed0a37c4e6b2f9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionActionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionActionsRequest. Do not edit by hand.
export interface MutateConversionActionsRequest {
  customerId?: string;
  operations?: ConversionActionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
