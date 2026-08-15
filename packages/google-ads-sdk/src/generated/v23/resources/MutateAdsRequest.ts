// @generated
// fingerprint: sha256:e9870d6966777fadd0e239a4b1542d973f65cf8f32fb31820ede04dcdade2590
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAdsRequest. Do not edit by hand.
export interface MutateAdsRequest {
  customerId?: string;
  operations?: AdOperation[];
  partialFailure?: boolean;
  responseContentType?: ResponseContentType;
  validateOnly?: boolean;
}
