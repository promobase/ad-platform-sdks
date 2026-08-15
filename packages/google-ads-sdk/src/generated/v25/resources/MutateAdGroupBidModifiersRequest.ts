// @generated
// fingerprint: sha256:9d21ad62f62d77f42ae252a4a3463eea0a43c83ed83cac230b2edc204290d114
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupBidModifierOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupBidModifiersRequest. Do not edit by hand.
export interface MutateAdGroupBidModifiersRequest {
  customerId?: string;
  operations?: AdGroupBidModifierOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
