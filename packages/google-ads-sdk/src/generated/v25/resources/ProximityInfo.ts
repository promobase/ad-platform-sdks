import type { AddressInfo, GeoPointInfo, ProximityRadiusUnits } from "../index.ts";

// Generated from google.ads.googleads.v25.common.ProximityInfo. Do not edit by hand.
export interface ProximityInfo {
  geoPoint?: GeoPointInfo;
  radius?: number;
  radiusUnits?: ProximityRadiusUnits;
  address?: AddressInfo;
}
