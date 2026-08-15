// @generated
// fingerprint: sha256:2fe7b8bd86685faed7abc74b9aa4c89ab59079aefa5b107f9f8e87913c3d2287
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AddressInfo, GeoPointInfo, ProximityRadiusUnits } from "../index.ts";

// Generated from google.ads.googleads.v25.common.ProximityInfo. Do not edit by hand.
export interface ProximityInfo {
  geoPoint?: GeoPointInfo;
  radius?: number;
  radiusUnits?: ProximityRadiusUnits;
  address?: AddressInfo;
}
