// @generated
// fingerprint: sha256:d3bcea5d059588a038d462481723e75a3f253db8884d5bd64c439f5a7ebffc6a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BatchJobMetadata, BatchJobStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BatchJob. Do not edit by hand.
export interface BatchJob {
  resourceName?: string;
  id?: string;
  nextAddSequenceToken?: string;
  metadata?: BatchJobMetadata;
  status?: BatchJobStatus;
  longRunningOperation?: string;
}
