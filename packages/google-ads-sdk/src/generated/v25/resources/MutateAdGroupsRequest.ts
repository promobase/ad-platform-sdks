// @generated
// fingerprint: sha256:8ffbd49abfcdb0825f9bb26bbc49ec436f10259f57501e6fc5da10a7c6589ccb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAdGroupsRequest. Do not edit by hand.
export interface MutateAdGroupsRequest {
  customerId?: string;
  operations?: AdGroupOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
