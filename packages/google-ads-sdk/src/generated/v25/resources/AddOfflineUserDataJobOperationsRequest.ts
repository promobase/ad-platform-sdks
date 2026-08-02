import type { OfflineUserDataJobOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.AddOfflineUserDataJobOperationsRequest. Do not edit by hand.
export interface AddOfflineUserDataJobOperationsRequest {
  resourceName?: string;
  enablePartialFailure?: boolean;
  enableWarnings?: boolean;
  operations?: OfflineUserDataJobOperation[];
  validateOnly?: boolean;
}
