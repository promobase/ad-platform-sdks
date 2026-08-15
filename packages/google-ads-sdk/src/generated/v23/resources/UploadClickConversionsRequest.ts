// @generated
// fingerprint: sha256:faa30273db01df9b678b5e82f29c04cc1fc5d20cc0deed747dfd3fae6f436663
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ClickConversion } from "../index.ts";

// Generated from google.ads.googleads.v23.services.UploadClickConversionsRequest. Do not edit by hand.
export interface UploadClickConversionsRequest {
  customerId?: string;
  conversions?: ClickConversion[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  jobId?: number;
}
