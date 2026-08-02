import type { ResourceLimitType } from "../index.ts";

// Generated from google.ads.googleads.v25.errors.ResourceCountDetails. Do not edit by hand.
export interface ResourceCountDetails {
  enclosingId?: string;
  enclosingResource?: string;
  limit?: number;
  limitType?: ResourceLimitType;
  existingCount?: number;
}
