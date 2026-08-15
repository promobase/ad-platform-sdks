// @generated
// fingerprint: sha256:33d098e77e443f93575bfd5bccdf0541427eddd659031fc1aaa0f25ec0b72032
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetsRequest. Do not edit by hand.
export interface MutateAssetsRequest {
  customerId?: string;
  operations?: AssetOperation[];
  partialFailure?: boolean;
  responseContentType?: ResponseContentType;
  validateOnly?: boolean;
}
