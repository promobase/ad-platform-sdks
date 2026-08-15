// @generated
// fingerprint: sha256:17c02dd70abfded8d7251ad22d396116eb99bffccccd092ce8e6f22381c9ccee
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupBidModifierOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdGroupBidModifiersRequest. Do not edit by hand.
export interface MutateAdGroupBidModifiersRequest {
  customerId?: string;
  operations?: AdGroupBidModifierOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
