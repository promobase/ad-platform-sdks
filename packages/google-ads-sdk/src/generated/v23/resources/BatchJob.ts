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
