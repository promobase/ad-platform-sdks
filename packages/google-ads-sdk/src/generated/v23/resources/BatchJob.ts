// @generated
// fingerprint: sha256:51f6dd17642aad06a37ac0093cfd67dd6722d73ac8624a6c237f35be8d282603
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BatchJobMetadata, BatchJobStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BatchJob. Do not edit by hand.
export interface BatchJob {
  resourceName?: string;
  id?: string;
  nextAddSequenceToken?: string;
  metadata?: BatchJobMetadata;
  status?: BatchJobStatus;
  longRunningOperation?: string;
}
