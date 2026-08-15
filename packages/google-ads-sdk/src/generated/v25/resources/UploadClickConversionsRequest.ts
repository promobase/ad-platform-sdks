// @generated
// fingerprint: sha256:6344f10df439f9b988dc8ed162e37cb6c7363b6b6a602d7ec517d4c3ca543f83
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ClickConversion } from "../index.ts";

// Generated from google.ads.googleads.v25.services.UploadClickConversionsRequest. Do not edit by hand.
export interface UploadClickConversionsRequest {
  customerId?: string;
  conversions?: ClickConversion[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  jobId?: number;
}
