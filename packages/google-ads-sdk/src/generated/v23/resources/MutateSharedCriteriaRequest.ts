// @generated
// fingerprint: sha256:6fabded1230dae9d5d2c1b6bf764526f64fdb7dbfe227e6a8b7eeba522a0c775
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResponseContentType, SharedCriterionOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateSharedCriteriaRequest. Do not edit by hand.
export interface MutateSharedCriteriaRequest {
  customerId?: string;
  operations?: SharedCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
