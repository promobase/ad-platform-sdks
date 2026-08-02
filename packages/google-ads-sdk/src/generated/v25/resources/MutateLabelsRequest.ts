import type { LabelOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateLabelsRequest. Do not edit by hand.
export interface MutateLabelsRequest {
  customerId?: string;
  operations?: LabelOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
