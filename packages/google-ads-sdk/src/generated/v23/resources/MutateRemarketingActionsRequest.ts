// @generated
// fingerprint: sha256:2fd7b55b0163a5ed0e1bbba0f69c45ce97b7a669748468d6940f83d4493cbf72
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RemarketingActionOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateRemarketingActionsRequest. Do not edit by hand.
export interface MutateRemarketingActionsRequest {
  customerId?: string;
  operations?: RemarketingActionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
