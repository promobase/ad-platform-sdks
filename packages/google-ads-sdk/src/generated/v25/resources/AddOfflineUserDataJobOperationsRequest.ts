// @generated
// fingerprint: sha256:f6e4c925359596b49622b681542ac01fde46d4e70f924e5261df30197b6e4c52
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineUserDataJobOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.AddOfflineUserDataJobOperationsRequest. Do not edit by hand.
export interface AddOfflineUserDataJobOperationsRequest {
  resourceName?: string;
  enablePartialFailure?: boolean;
  enableWarnings?: boolean;
  operations?: OfflineUserDataJobOperation[];
  validateOnly?: boolean;
}
