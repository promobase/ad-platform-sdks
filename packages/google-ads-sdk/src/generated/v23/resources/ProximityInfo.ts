// @generated
// fingerprint: sha256:b32d2bd272462d4cf0d1edccb505f32efb3cb506db218f2c3328e7b8ccf98834
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AddressInfo, GeoPointInfo, ProximityRadiusUnits } from "../index.ts";

// Generated from google.ads.googleads.v23.common.ProximityInfo. Do not edit by hand.
export interface ProximityInfo {
  geoPoint?: GeoPointInfo;
  radius?: number;
  radiusUnits?: ProximityRadiusUnits;
  address?: AddressInfo;
}
