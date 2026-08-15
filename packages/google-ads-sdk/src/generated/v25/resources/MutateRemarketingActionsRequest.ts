// @generated
// fingerprint: sha256:f5ce641dc6609df1df88fa9b225b3f107bdd380750afb4259b08478ae98d4162
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RemarketingActionOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateRemarketingActionsRequest. Do not edit by hand.
export interface MutateRemarketingActionsRequest {
  customerId?: string;
  operations?: RemarketingActionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
