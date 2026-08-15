// @generated
// fingerprint: sha256:a1f5dcfb113d15e3bd1048096e931cd866167b1181bc57593f7912439e894b6f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionActionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateConversionActionsRequest. Do not edit by hand.
export interface MutateConversionActionsRequest {
  customerId?: string;
  operations?: ConversionActionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
