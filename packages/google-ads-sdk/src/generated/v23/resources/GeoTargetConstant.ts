import type { GeoTargetConstantStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.GeoTargetConstant. Do not edit by hand.
export interface GeoTargetConstant {
  resourceName?: string;
  id?: string;
  name?: string;
  countryCode?: string;
  targetType?: string;
  status?: GeoTargetConstantStatus;
  canonicalName?: string;
  parentGeoTarget?: string;
}
