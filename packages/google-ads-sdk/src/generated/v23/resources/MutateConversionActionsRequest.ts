import type { ConversionActionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionActionsRequest. Do not edit by hand.
export interface MutateConversionActionsRequest {
  customerId?: string;
  operations?: ConversionActionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
