// @generated
// fingerprint: sha256:0a7baaf9f3967a3763a44681a5ebd392447de1b5d5558e22654ce7085a2c3bd6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineUserDataJobOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.AddOfflineUserDataJobOperationsRequest. Do not edit by hand.
export interface AddOfflineUserDataJobOperationsRequest {
  resourceName?: string;
  enablePartialFailure?: boolean;
  enableWarnings?: boolean;
  operations?: OfflineUserDataJobOperation[];
  validateOnly?: boolean;
}
