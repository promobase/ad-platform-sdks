import type { SharedSetStatus, SharedSetType, VerticalAdsItemVerticalType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.SharedSet. Do not edit by hand.
export interface SharedSet {
  resourceName?: string;
  id?: string;
  type?: SharedSetType;
  name?: string;
  status?: SharedSetStatus;
  memberCount?: string;
  referenceCount?: string;
  verticalAdsItemVerticalType?: VerticalAdsItemVerticalType;
}
