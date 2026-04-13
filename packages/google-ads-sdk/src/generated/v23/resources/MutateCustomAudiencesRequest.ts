import type { CustomAudienceOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomAudiencesRequest. Do not edit by hand.
export interface MutateCustomAudiencesRequest {
  customerId?: string;
  operations?: CustomAudienceOperation[];
  validateOnly?: boolean;
}
