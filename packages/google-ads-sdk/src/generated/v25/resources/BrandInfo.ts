import type { BrandRequestRejectionReason, BrandState } from "../index.ts";

// Generated from google.ads.googleads.v25.common.BrandInfo. Do not edit by hand.
export interface BrandInfo {
  displayName?: string;
  entityId?: string;
  primaryUrl?: string;
  rejectionReason?: BrandRequestRejectionReason;
  status?: BrandState;
}
