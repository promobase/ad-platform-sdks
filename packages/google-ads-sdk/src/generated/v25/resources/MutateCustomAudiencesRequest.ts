import type { CustomAudienceOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCustomAudiencesRequest. Do not edit by hand.
export interface MutateCustomAudiencesRequest {
  customerId?: string;
  operations?: CustomAudienceOperation[];
  validateOnly?: boolean;
}
