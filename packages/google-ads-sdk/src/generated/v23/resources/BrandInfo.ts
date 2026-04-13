import type { BrandRequestRejectionReason, BrandState } from "../index.ts";

// Generated from google.ads.googleads.v23.common.BrandInfo. Do not edit by hand.
export interface BrandInfo {
  displayName?: string;
  entityId?: string;
  primaryUrl?: string;
  rejectionReason?: BrandRequestRejectionReason;
  status?: BrandState;
}
