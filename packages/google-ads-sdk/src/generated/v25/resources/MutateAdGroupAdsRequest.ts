// @generated
// fingerprint: sha256:e39972342560b49b48e581b286b70e0624a8588a24477e4bc5978ea1095019e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupAdOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupAdsRequest. Do not edit by hand.
export interface MutateAdGroupAdsRequest {
  customerId?: string;
  operations?: AdGroupAdOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
